const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');

// Function to convert a compiled call expression (p.jsx or p.jsxs) to a JSX element
function convertToJSX(path) {
  const node = path.node;
  if (!t.isCallExpression(node)) return;

  const callee = node.callee;
  // Check if it is p.jsx or p.jsxs or jsx or jsxs
  const isJSXCall = 
    (t.isMemberExpression(callee) && 
     t.isIdentifier(callee.object, { name: 'p' }) && 
     (t.isIdentifier(callee.property, { name: 'jsx' }) || t.isIdentifier(callee.property, { name: 'jsxs' }))) ||
    (t.isIdentifier(callee, { name: 'jsx' }) || t.isIdentifier(callee, { name: 'jsxs' }));

  if (!isJSXCall) return;

  const args = node.arguments;
  if (args.length < 1) return;

  // Tag name
  let tagNameNode;
  const tagArg = args[0];
  if (t.isStringLiteral(tagArg)) {
    tagNameNode = t.jsxIdentifier(tagArg.value);
  } else if (t.isIdentifier(tagArg)) {
    tagNameNode = t.jsxIdentifier(tagArg.name);
  } else if (t.isMemberExpression(tagArg)) {
    // e.g. motion.div
    const objName = tagArg.object.name;
    const propName = tagArg.property.name;
    tagNameNode = t.jsxMemberExpression(t.jsxIdentifier(objName), t.jsxIdentifier(propName));
  } else {
    // Fallback if it's something dynamic
    tagNameNode = t.jsxIdentifier('DynamicComponent');
  }

  // Props
  const propsArg = args[1];
  const attributes = [];
  let childrenNode = null;

  if (t.isObjectExpression(propsArg)) {
    propsArg.properties.forEach(prop => {
      if (t.isObjectProperty(prop)) {
        const key = prop.key;
        const value = prop.value;
        const name = t.isIdentifier(key) ? key.name : key.value;

        if (name === 'children') {
          childrenNode = value;
        } else {
          // Convert to JSX Attribute
          let jsxValue;
          if (t.isStringLiteral(value)) {
            jsxValue = value;
          } else {
            jsxValue = t.jsxExpressionContainer(value);
          }
          attributes.push(t.jsxAttribute(t.jsxIdentifier(name), jsxValue));
        }
      } else if (t.isSpreadElement(prop)) {
        attributes.push(t.jsxSpreadAttribute(prop.argument));
      }
    });
  }

  // Children
  const childrenList = [];
  if (childrenNode) {
    if (t.isArrayExpression(childrenNode)) {
      childrenNode.elements.forEach(child => {
        if (child) {
          childrenList.push(convertToJSXNode(child));
        }
      });
    } else {
      childrenList.push(convertToJSXNode(childrenNode));
    }
  }

  const selfClosing = childrenList.length === 0;
  const openingElement = t.jsxOpeningElement(tagNameNode, attributes, selfClosing);
  const closingElement = selfClosing ? null : t.jsxClosingElement(tagNameNode);

  const jsxElement = t.jsxElement(openingElement, closingElement, childrenList, selfClosing);
  path.replaceWith(jsxElement);
}

// Convert any AST node into a valid child node of a JSX element
function convertToJSXNode(node) {
  if (t.isJSXElement(node) || t.isJSXFragment(node) || t.isJSXText(node)) {
    return node;
  }
  if (t.isStringLiteral(node)) {
    return t.jsxText(node.value);
  }
  // Check if it is a call expression that has been converted to JSX
  if (t.isCallExpression(node)) {
    // If it's a p.jsx call, we can parse it recursively
    // For now we wrap in expression container if it's not converted yet
    return t.jsxExpressionContainer(node);
  }
  return t.jsxExpressionContainer(node);
}

function processFile(filePath, outputPath) {
  const code = fs.readFileSync(filePath, 'utf8');
  let ast;
  try {
    ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx']
    });
  } catch (err) {
    console.error(`Error parsing ${filePath}:`, err.message);
    return;
  }

  traverse(ast, {
    CallExpression(path) {
      convertToJSX(path);
    }
  });

  const output = generator(ast, { retainLines: true });
  fs.writeFileSync(outputPath, output.code, 'utf8');
  console.log(`Successfully converted and wrote JSX to ${outputPath}`);
}

const inputDir = '/Users/samriddhigururani/.gemini/antigravity/brain/1103cbf8-6386-458f-90f0-134f28ade108/scratch/extracted';
const outputDir = '/Users/samriddhigururani/.gemini/antigravity/brain/1103cbf8-6386-458f-90f0-134f28ade108/scratch/jsx';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.js'));
files.forEach(file => {
  const inPath = path.join(inputDir, file);
  const outPath = path.join(outputDir, file.replace(/\.js$/, '.jsx'));
  processFile(inPath, outPath);
});
