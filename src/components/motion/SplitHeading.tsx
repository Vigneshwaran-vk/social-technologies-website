"use client";

import { useRef, useEffect, ElementType } from "react";
import { gsap, SplitText, registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface SplitHeadingProps {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  threshold?: string;
}

/**
 * SplitHeading Component: Reveals headings word by word using GSAP SplitText.
 * Animate only transform and opacity.
 * Respects prefers-reduced-motion by falling back to a pure fade with zero displacement.
 */
export function SplitHeading({
  children,
  as: Component = "h2",
  className,
  delay = 0,
  stagger = 0.05,
  duration = 0.75,
  threshold = "top 85%",
}: SplitHeadingProps) {
  const headingRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    registerGsapPlugins();

    if (!headingRef.current) return;

    let split: SplitText | null = null;

    const ctx = gsap.context(() => {
      const el = headingRef.current;
      if (!el) return;

      if (prefersReducedMotion) {
        // Plain opacity fade without word splitting or displacement
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: threshold,
              once: true,
            },
          }
        );
        return;
      }

      // Initialize SplitText for words
      split = new SplitText(el, {
        type: "words",
        wordsClass: "inline-block will-change-[transform,opacity]",
      });

      gsap.fromTo(
        split.words,
        {
          opacity: 0,
          yPercent: 60,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: threshold,
            once: true,
          },
        }
      );
    }, headingRef);

    return () => {
      if (split) {
        split.revert();
      }
      ctx.revert();
    };
  }, [children, delay, stagger, duration, threshold, prefersReducedMotion]);

  return (
    <Component
      ref={headingRef}
      className={cn("font-bold tracking-tight text-[#101828]", className)}
    >
      {children}
    </Component>
  );
}
