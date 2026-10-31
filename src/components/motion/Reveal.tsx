"use client";

import { useRef, useEffect, ElementType, ReactNode } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  as?: ElementType;
  threshold?: string;
  once?: boolean;
}

/**
 * Reveal Component: Fades and rises on viewport enter.
 * Only animates transform and opacity.
 * Respects prefers-reduced-motion by falling back to a pure fade with zero translation.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.75,
  y = 24,
  stagger,
  as: Component = "div",
  threshold = "top 88%",
  once = true,
}: RevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    registerGsapPlugins();

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const targets = stagger && el.children.length > 0 ? el.children : el;
      const yOffset = prefersReducedMotion ? 0 : y;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.35 : duration,
          delay,
          stagger: stagger || 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: threshold,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
            once,
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [delay, duration, y, stagger, threshold, once, prefersReducedMotion]);

  return (
    <Component ref={containerRef} className={cn("will-change-[transform,opacity]", className)}>
      {children}
    </Component>
  );
}
