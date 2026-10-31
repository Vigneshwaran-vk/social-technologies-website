"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Hook to detect and listen for user's prefers-reduced-motion OS preference.
 * Uses React 19 useSyncExternalStore for tear-free external subscription without cascading renders.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
