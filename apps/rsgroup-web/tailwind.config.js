/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f25b23',
        secondary: '#6f6357',
        terracotta: '#f25b23',
        cream: '#f4ede1',
        paper: '#efe5d5',
        ink: '#2b241d',
        'ink-secondary': '#6f6357',
        hairline: 'rgba(43, 36, 29, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
