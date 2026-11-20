import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      setVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, [role="button"], .cursor-pointer, [data-interactive]')
        );
        setHovered(isInteractive);
      }
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // High performance RAF loop for smooth lerping
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Immediate inner dot tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth lerp for trailing 3D CAD ring
      const lerpFactor = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.95)] pointer-events-none will-change-transform"
      />

      {/* Trailing 3D CAD Precision Reticle Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border transition-all duration-200 ease-out flex items-center justify-center pointer-events-none will-change-transform ${
          clicking
            ? 'scale-75 border-cyan-300 bg-cyan-400/20'
            : hovered
            ? 'scale-150 border-cyan-400 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
            : 'scale-100 border-cyan-500/40'
        }`}
      >
        {/* Subtle 3D CAD crosshair ticks */}
        <div className="absolute -top-1 w-[2px] h-1 bg-cyan-400/50" />
        <div className="absolute -bottom-1 w-[2px] h-1 bg-cyan-400/50" />
        <div className="absolute -left-1 w-1 h-[2px] bg-cyan-400/50" />
        <div className="absolute -right-1 w-1 h-[2px] bg-cyan-400/50" />
      </div>
    </div>
  );
};
