import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
};

export function CursorMagic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      const now = performance.now();
      if (now - lastSpawnRef.current < 16) return;
      lastSpawnRef.current = now;

      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8 - 0.4,
          life: 0,
          maxLife: 40 + Math.random() * 30,
          size: 1.5 + Math.random() * 2.5,
          hue: Math.random() > 0.45 ? 75 : 215,
        });
      }
      if (particlesRef.current.length > 120) {
        particlesRef.current.splice(0, particlesRef.current.length - 120);
      }
    };

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      if (mx > 0) {
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 90);
        glow.addColorStop(0, "hsla(75, 48%, 55%, 0.18)");
        glow.addColorStop(0.4, "hsla(215, 55%, 40%, 0.08)");
        glow.addColorStop(1, "hsla(215, 55%, 40%, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mx, my, 90, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mx, my, 3, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(75, 55%, 58%, 0.7)";
        ctx.fill();
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        const t = p.life / p.maxLife;
        if (t >= 1) return false;

        const alpha = (1 - t) * 0.75;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - t * 0.5), 0, Math.PI * 2);
        ctx.fillStyle =
          p.hue === 75
            ? `hsla(75, 55%, 58%, ${alpha})`
            : `hsla(215, 55%, 55%, ${alpha})`;
        ctx.fill();

        if (t < 0.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle =
            p.hue === 75
              ? `hsla(75, 55%, 58%, ${alpha * 0.25})`
              : `hsla(215, 55%, 55%, ${alpha * 0.2})`;
          ctx.fill();
        }
        return true;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      aria-hidden
    />
  );
}
