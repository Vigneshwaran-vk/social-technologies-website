"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  strength?: number; // Factor to scale movement (default: 0.35)
  maxOffset?: number; // Max displacement in pixels (default: 18)
  className?: string;
}

/**
 * Magnetic Wrapper: Pulls buttons and interactive elements toward the cursor on hover.
 * Animate only transform.
 * Respects prefers-reduced-motion by disabling cursor-pull displacement.
 */
export function Magnetic({ children, strength = 0.35, maxOffset = 18, className }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    // Clamp offset within max bounding box
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));

    gsap.to(containerRef.current, {
      x: clampedX,
      y: clampedY,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: 0.65,
      ease: "elastic.out(1, 0.45)",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </div>
  );
}
