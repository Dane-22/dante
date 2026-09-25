'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  magneticStrength?: number; // 0.15 - 0.4
  target?: string;
  rel?: string;
  download?: boolean | string;
  id?: string;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  magneticStrength = 0.28,
  target,
  rel,
  download,
  id,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const setX = gsap.quickTo(content, 'x', { duration: 0.35, ease: 'power2.out' });
    const setY = gsap.quickTo(content, 'y', { duration: 0.35, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * magneticStrength;
      const deltaY = (e.clientY - centerY) * magneticStrength;

      setX(deltaX);
      setY(deltaY);
    };

    const handleMouseLeave = () => {
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1.1, 0.4)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticStrength]);

  const innerContent = (
    <div ref={contentRef} className="will-change-transform flex items-center justify-center gap-2">
      {children}
    </div>
  );

  if (href) {
    return (
      <div ref={containerRef} className="inline-block">
        <a
          id={id}
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={className}
          onClick={onClick}
        >
          {innerContent}
        </a>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="inline-block">
      <button id={id} type="button" onClick={onClick} className={className}>
        {innerContent}
      </button>
    </div>
  );
}
