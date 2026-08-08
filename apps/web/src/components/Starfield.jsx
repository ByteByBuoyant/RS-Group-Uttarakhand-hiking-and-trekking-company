import React, { useEffect, useRef } from 'react';

// Animated multi-depth starfield with parallax, twinkle, nebula, cursor reaction
// and occasional shooting stars. Canvas-based for performance.
export default function Starfield({ density = 1 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars = [];
    let shooting = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((w * h) / 4200 * density);
      stars = Array.from({ length: count }).map(() => {
        const depth = Math.random(); // 0 far, 1 near
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z: depth,
          r: depth * 1.4 + 0.3,
          tw: Math.random() * Math.PI * 2,
          tws: Math.random() * 0.02 + 0.006,
          hue: Math.random() < 0.15 ? 268 : 190,
        };
      });
    };
    resize();

    const onMove = (e) => {
      mouse.current.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('resize', resize);

    const spawnShoot = () => {
      const fromLeft = Math.random() < 0.5;
      shooting.push({
        x: fromLeft ? -50 : w + 50,
        y: Math.random() * h * 0.5,
        vx: (fromLeft ? 1 : -1) * (Math.random() * 6 + 8),
        vy: Math.random() * 3 + 2,
        life: 0,
        max: 60,
      });
    };
    let shootTimer = 0;

    const draw = () => {
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.05;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.tw += s.tws;
        const twinkle = 0.5 + Math.sin(s.tw) * 0.5;
        const px = s.x + mouse.current.x * s.z * 26;
        const py = s.y + mouse.current.y * s.z * 26;
        const alpha = (0.25 + s.z * 0.6) * (0.4 + twinkle * 0.6);
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.hue === 268
          ? `hsla(268,80%,72%,${alpha})`
          : `hsla(190,95%,70%,${alpha})`;
        ctx.shadowBlur = s.z * 6;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduce) {
        shootTimer += 1;
        if (shootTimer > 220 && Math.random() < 0.02) {
          spawnShoot();
          shootTimer = 0;
        }
        shooting = shooting.filter((sh) => sh.life < sh.max);
        for (const sh of shooting) {
          sh.life += 1;
          sh.x += sh.vx;
          sh.y += sh.vy;
          const fade = 1 - sh.life / sh.max;
          const tailX = sh.x - sh.vx * 6;
          const tailY = sh.y - sh.vy * 6;
          const grad = ctx.createLinearGradient(tailX, tailY, sh.x, sh.y);
          grad.addColorStop(0, 'hsla(190,95%,70%,0)');
          grad.addColorStop(1, `hsla(190,95%,80%,${fade})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(sh.x, sh.y);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [density]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* nebula clouds */}
      <div className="absolute -left-20 top-10 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[34rem] w-[34rem] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-primary/[0.07] blur-[110px]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
