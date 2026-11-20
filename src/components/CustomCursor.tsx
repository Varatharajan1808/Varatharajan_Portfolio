import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e: MouseEvent) => {
      setVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

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

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-[99999] will-change-transform transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      {/* Precision Center Dot - perfectly locked at (0, 0) */}
      <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.95)]" />

      {/* 3D CAD Reticle Ring — nested in the exact same container, 100% concentric with the dot at all times */}
      <div
        className={`absolute -top-4 -left-4 w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-150 ease-out ${
          clicking
            ? 'scale-75 border-cyan-300 bg-cyan-400/25'
            : hovered
            ? 'scale-150 border-cyan-400 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
            : 'scale-100 border-cyan-500/40'
        }`}
      >
        {/* Precision 3D CAD crosshair ticks */}
        <div className="absolute -top-1 w-[2px] h-1 bg-cyan-400/70" />
        <div className="absolute -bottom-1 w-[2px] h-1 bg-cyan-400/70" />
        <div className="absolute -left-1 w-1 h-[2px] bg-cyan-400/70" />
        <div className="absolute -right-1 w-1 h-[2px] bg-cyan-400/70" />
      </div>
    </div>
  );
};
