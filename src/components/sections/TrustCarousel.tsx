"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { TESTIMONIALS_DATA } from "@/content";
import { cn } from "@/lib/utils";

export function TrustCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // References for drag calculations
  const startXRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Calculate max drag boundaries
  const getMaxScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;
    return Math.max(0, trackWidth - containerWidth + 40);
  }, []);

  // Inertia momentum decay loop
  const applyInertia = useCallback(() => {
    function step() {
      const maxScroll = getMaxScroll();
      velocityRef.current *= 0.94; // Momentum friction decay

      currentTranslateRef.current += velocityRef.current;

      // Bounds checking with elastic resistance
      if (currentTranslateRef.current > 0) {
        currentTranslateRef.current = 0;
        velocityRef.current = 0;
      } else if (currentTranslateRef.current < -maxScroll) {
        currentTranslateRef.current = -maxScroll;
        velocityRef.current = 0;
      }

      setTranslateX(currentTranslateRef.current);

      // Update active index based on position
      const cardWidth = 420;
      const idx = Math.min(
        TESTIMONIALS_DATA.length - 1,
        Math.max(0, Math.round(-currentTranslateRef.current / cardWidth))
      );
      setActiveIndex(idx);

      if (Math.abs(velocityRef.current) > 0.4) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    }

    animationFrameRef.current = requestAnimationFrame(step);
  }, [getMaxScroll]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsDragging(true);
    startXRef.current = e.clientX;
    prevTranslateRef.current = currentTranslateRef.current;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const now = performance.now();
    const dt = now - lastTimeRef.current || 16;
    const dx = e.clientX - startXRef.current;

    // Calculate instantaneous velocity
    velocityRef.current = (dx / dt) * 16;
    lastTimeRef.current = now;
    startXRef.current = e.clientX;

    const maxScroll = getMaxScroll();
    currentTranslateRef.current += dx;

    // Dampen drag past bounds
    if (currentTranslateRef.current > 40) {
      currentTranslateRef.current = 40;
    } else if (currentTranslateRef.current < -maxScroll - 40) {
      currentTranslateRef.current = -maxScroll - 40;
    }

    setTranslateX(currentTranslateRef.current);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if pointer capture was already released
    }

    // Launch momentum loop
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };

  const scrollToIndex = (idx: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    const cardWidth = 420;
    const maxScroll = getMaxScroll();
    const target = Math.max(-maxScroll, Math.min(0, -idx * cardWidth));
    currentTranslateRef.current = target;
    setTranslateX(target);
    setActiveIndex(idx);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-[#101828] py-20 sm:py-28 border-b border-[#E4E7EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-tight">
              Built on ground-truth results.
            </h2>
          </div>

          {/* Navigation Controls & Drag Hint */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#667085] mr-2 hidden sm:inline">
              Drag with inertia ↔
            </span>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] text-[#101828] transition-all hover:bg-white hover:border-[#D0D5DD] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() =>
                scrollToIndex(Math.min(TESTIMONIALS_DATA.length - 1, activeIndex + 1))
              }
              disabled={activeIndex === TESTIMONIALS_DATA.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] text-[#101828] transition-all hover:bg-white hover:border-[#D0D5DD] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Draggable Carousel Viewport with Inertia */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={cn(
          "w-full cursor-grab overflow-hidden active:cursor-grabbing select-none px-4 sm:px-6 lg:px-8",
          isDragging && "pointer-events-none"
        )}
      >
        <div
          ref={trackRef}
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            transition: isDragging ? "none" : "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="flex gap-6 sm:gap-8 w-max will-change-transform py-4"
        >
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col justify-between w-[310px] sm:w-[400px] shrink-0 rounded-3xl border border-[#E4E7EC] bg-[#F5F7FA] p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#D0D5DD] hover:shadow-md hover:bg-white"
            >
              <div>
                {/* Result Metric Pill */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1 font-mono text-xs font-bold text-[#2563EB]">
                    <span>↑</span>
                    <span>{item.metric}</span>
                  </span>
                  <span className="text-xs font-mono text-[#667085]">0{idx + 1}</span>
                </div>

                {/* Quote Text */}
                <p className="mt-5 text-sm sm:text-base text-[#344054] leading-relaxed font-sans">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Active Channels */}
              <div className="mt-8 pt-5 border-t border-[#E4E7EC]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#101828]">{item.author}</h4>
                    <p className="text-xs text-[#667085]">
                      {item.role} • <span className="text-[#101828] font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.channels.map((ch) => (
                    <span
                      key={ch}
                      className="rounded-md bg-white border border-[#E4E7EC] px-2 py-0.5 font-mono text-[10px] text-[#667085]"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
