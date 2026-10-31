"use client";

import { useEffect, useSyncExternalStore } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

let activeLenis: Lenis | null = null;
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot() {
  return activeLenis;
}

function getServerSnapshot() {
  return null;
}

/**
 * Access the active Lenis instance from any component.
 */
export function useLenis(): Lenis | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Lenis smooth-scroll provider synchronized with GSAP ScrollTrigger and GSAP Ticker.
 * Respects prefers-reduced-motion by disabling smooth scroll inertia.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    registerGsapPlugins();

    // If reduced motion is requested, do not initialize smooth scrolling inertia
    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    activeLenis = lenis;
    listeners.forEach((l) => l());

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP ticker to drive Lenis RAF
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      activeLenis = null;
      listeners.forEach((l) => l());
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
