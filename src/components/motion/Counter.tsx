"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  threshold?: string;
}

/**
 * Counter Component: Counts up when entering the viewport.
 * If the value is a placeholder (e.g. {{MARKETPLACE_COUNT}}), renders the raw token safely.
 * Respects prefers-reduced-motion by snapping directly to the final value with a simple fade.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
  threshold = "top 85%",
}: CounterProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Check if value is a placeholder string (e.g., {{MARKETPLACE_COUNT}}) or numeric
  const isPlaceholder = typeof value === "string" && value.includes("{{");
  const numericTarget = typeof value === "number" ? value : parseFloat(value as string);
  const isNumeric = !isPlaceholder && !isNaN(numericTarget);

  const [countState, setCountState] = useState<number>(0);

  useEffect(() => {
    registerGsapPlugins();

    if (!containerRef.current || !isNumeric || prefersReducedMotion) return;

    const state = { count: 0 };
    const el = containerRef.current;

    const ctx = gsap.context(() => {
      gsap.to(state, {
        count: numericTarget,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: threshold,
          once: true,
        },
        onUpdate: () => {
          setCountState(state.count);
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [numericTarget, duration, threshold, isNumeric, prefersReducedMotion]);

  if (isPlaceholder) {
    return (
      <span
        ref={containerRef}
        className={cn(
          "inline-flex items-center font-mono font-bold tracking-tight text-[#2563EB]",
          className
        )}
      >
        <span className="rounded bg-[#EFF6FF] px-2 py-0.5 border border-[#BFDBFE]">
          {value}
        </span>
      </span>
    );
  }

  const formattedValue = prefersReducedMotion
    ? decimals > 0
      ? numericTarget.toFixed(decimals)
      : Math.round(numericTarget).toLocaleString("en-IN")
    : decimals > 0
      ? countState.toFixed(decimals)
      : Math.round(countState).toLocaleString("en-IN");

  return (
    <span
      ref={containerRef}
      className={cn("inline-flex items-baseline font-mono font-bold tracking-tight", className)}
    >
      {prefix && <span className="opacity-80 mr-0.5">{prefix}</span>}
      <span ref={numberRef}>{formattedValue}</span>
      {suffix && <span className="opacity-80 ml-0.5">{suffix}</span>}
    </span>
  );
}
