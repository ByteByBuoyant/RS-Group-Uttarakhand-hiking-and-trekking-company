import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function MagneticButton({ children, className = '', as = 'a', ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15 });
  const sy = useSpring(y, { stiffness: 220, damping: 15 });
  const Comp = motion[as] || motion.a;

  function move(e) {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }
  function leave() {
    x.set(0);
    y.set(0);
  }
  return (
    <Comp
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ children, className = '', disabled = false }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const trx = useTransform(srx, (v) => `${v}deg`);
  const trycss = useTransform(sry, (v) => `${v}deg`);
  const [hover, setHover] = useState(false);

  function move(e) {
    if (disabled) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 12);
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
        setHover(false);
      }}
      style={disabled ? {} : { rotateX: trx, rotateY: trycss, transformPerspective: 900 }}
      animate={{ scale: hover && !disabled ? 1.02 : 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
