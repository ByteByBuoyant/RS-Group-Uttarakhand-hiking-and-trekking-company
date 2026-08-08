import React, { useMemo } from 'react';

export default function Particles({ count = 60, hidden = false }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2 + 0.5,
        d: Math.random() * 6 + 4,
        delay: Math.random() * 6,
        o: Math.random() * 0.6 + 0.2,
      })),
    [count]
  );
  if (hidden) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary animate-float-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            opacity: p.o,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: '0 0 6px currentColor',
          }}
        />
      ))}
    </div>
  );
}
