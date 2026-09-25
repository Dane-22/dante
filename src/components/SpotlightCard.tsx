'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  size?: number;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(79, 70, 229, 0.09)', // Soft indigo glow
  size = 400,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    // Gracefully disable for touch / coarse pointers to save CPU and battery
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    // Use gsap.quickTo for ultra-smooth 60-120fps positioning
    const setX = gsap.quickTo(glow, 'x', { duration: 0.35, ease: 'power2.out' });
    const setY = gsap.quickTo(glow, 'y', { duration: 0.35, ease: 'power2.out' });
    const setOpacity = gsap.quickTo(glow, 'opacity', { duration: 0.25, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      setX(x);
      setY(y);
    };

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [size]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300/80 ${className}`}
      {...props}
    >
      {/* Spotlight Cursor Glow Element */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 opacity-0 transition-opacity will-change-transform z-0"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle closest-side, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {/* Content wrapper with relative positioning so it sits above the spotlight */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
