"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Magnetic, useReducedMotion } from "@/components/motion";
import { Navbar } from "@/components/layout/Navbar";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// Headline word tokens for staggered reveal
const HEADLINE_WORDS = [
  { text: "Every", isAccent: false },
  { text: "marketplace.", isAccent: false },
  { text: "One", isAccent: true },
  { text: "team.", isAccent: true },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineWordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Word-by-word reveal for the headline
  useEffect(() => {
    registerGsapPlugins();

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const validElements = headlineWordsRef.current.filter(Boolean);
      if (validElements.length === 0) return;

      gsap.fromTo(
        validElements,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-white px-2 pt-2 pb-6 sm:px-4 sm:pt-3 sm:pb-8 lg:px-6 border-b border-[#E4E7EC]"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* ========================================================
            HERO PANORAMIC BANNER CONTAINER (Clean Sapphire Studio)
            ======================================================== */}
        <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.25rem] border border-[#CBD5E1]/30 bg-[#13233c] shadow-[0_20px_50px_rgba(15,31,61,0.22)] flex flex-col justify-between p-3 sm:p-5 lg:p-6">
          {/* Panoramic E-commerce 3D Background Image */}
          <Image
            src="/images/hero-banner-v2.jpg"
            alt="Social Technologies - Every Marketplace. One Team."
            fill
            priority
            className="object-cover object-center pointer-events-none select-none"
          />

          {/* Soft contrast gradient overlay to ensure perfect legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-[#0F172A]/30 pointer-events-none" />

          {/* TOP: Inset White Navbar Bar */}
          <Navbar variant="embedded" />

          {/* CENTER: Content Overlaid Inside Picture */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center my-auto py-6 sm:py-10">
            {/* Headline: Revealed word-by-word */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] leading-[1.12]">
              {HEADLINE_WORDS.map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block overflow-hidden pb-1 mr-[0.24em] last:mr-0 align-top"
                >
                  <span
                    ref={(el) => {
                      headlineWordsRef.current[idx] = el;
                    }}
                    className={cn(
                      "inline-block will-change-transform",
                      word.isAccent ? "text-[#93C5FD]" : "text-white"
                    )}
                  >
                    {word.text}
                  </span>
                </span>
              ))}
            </h1>

            {/* 3. Supporting Value Statement */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] mx-auto">
              We build proprietary commerce software, run full-funnel catalog and advertising
              operations, and sell directly as a verified first-party merchant across India.
            </p>

            {/* 4. Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6">

              <Magnetic strength={0.25}>
                <a
                  href="#ecosystem"
                  className="hero-btn-organic"
                >
                  <span>Explore the Ecosystem</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
