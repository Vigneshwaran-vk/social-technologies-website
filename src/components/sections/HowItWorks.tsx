"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { STEPS_DATA } from "@/content";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinContainerRef = useRef<HTMLDivElement | null>(null);
  const lineProgressRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeStepIdx, setActiveStepIdx] = useState(0);

  useEffect(() => {
    registerGsapPlugins();

    if (!sectionRef.current || !pinContainerRef.current || prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // Desktop: Pinned section with scrubbed vertical line and step activations
    mm.add("(min-width: 1024px)", () => {
      const lineEl = lineProgressRef.current;
      const sectionEl = sectionRef.current;
      const pinEl = pinContainerRef.current;
      if (!lineEl || !sectionEl || !pinEl) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: "+=2400",
          pin: pinEl,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentStep = Math.min(
              STEPS_DATA.length - 1,
              Math.floor(progress * STEPS_DATA.length)
            );
            setActiveStepIdx(currentStep);
          },
        },
      });

      // Animate vertical line progress from 0% to 100%
      tl.fromTo(
        lineEl,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          duration: 1,
        }
      );

      // Stagger activation styling as line touches steps
      STEPS_DATA.forEach((_, idx) => {
        const stepEl = stepRefs.current[idx];
        if (!stepEl) return;

        tl.to(
          stepEl,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          idx / STEPS_DATA.length
        );
      });
    });

    // Mobile: Simple entry reveal without pinning
    mm.add("(max-width: 1023px)", () => {
      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: idx * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F7FA] text-[#101828] py-16 lg:py-0 border-b border-[#E4E7EC]"
    >
      <div
        ref={pinContainerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-[1.15]">
              How it works: <br />
              <span className="text-[#2563EB]">
                From kickoff to scale.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#667085] leading-relaxed">
              Our 5-stage activation framework takes brands from disparate seller portals into a
              unified, algorithmically governed multi-channel commerce machine.
            </p>

            {/* Quick Step Indicators */}
            <div className="mt-8 hidden lg:flex flex-wrap gap-2">
              {STEPS_DATA.map((step, idx) => {
                const isReached = prefersReducedMotion || idx <= activeStepIdx;
                return (
                  <span
                    key={step.id}
                    className={cn(
                      "rounded-lg px-2.5 py-1 text-xs font-mono font-semibold transition-all duration-300 border",
                      isReached
                        ? "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]"
                        : "bg-white text-[#667085] border-[#E4E7EC]"
                    )}
                  >
                    0{idx + 1} {step.shortName}
                  </span>
                );
              })}
            </div>

            <div className="mt-8 hidden lg:flex items-center gap-2 text-xs font-mono text-[#667085]">
              <span className="animate-bounce">↓</span>
              <span>Scroll to draw the line and advance steps</span>
            </div>
          </div>

          {/* Right Column: Vertical Timeline Track */}
          <div className="lg:col-span-7 relative">
            {/* Background Line Track */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#E4E7EC] hidden sm:block"
            />

            {/* Drawing Line */}
            <div
              ref={lineProgressRef}
              aria-hidden="true"
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#2563EB] origin-top hidden sm:block"
              style={{
                transform: prefersReducedMotion ? "scaleY(1)" : undefined,
              }}
            />

            {/* Steps List */}
            <div className="space-y-6 sm:space-y-8">
              {STEPS_DATA.map((step, idx) => {
                const isReached = prefersReducedMotion || idx <= activeStepIdx;

                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className={cn(
                      "relative flex items-start gap-4 sm:gap-6 rounded-3xl border p-5 sm:p-6 transition-all duration-300 bg-white",
                      isReached
                        ? "border-[#BFDBFE] shadow-md"
                        : "border-[#E4E7EC] opacity-60 shadow-xs"
                    )}
                  >
                    {/* Step Icon / Circle */}
                    <div
                      className={cn(
                        "relative z-10 flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border font-mono text-sm font-bold transition-all duration-300",
                        isReached
                          ? "border-[#2563EB] bg-[#2563EB] text-white shadow-sm"
                          : "border-[#E4E7EC] bg-[#F5F7FA] text-[#667085]"
                      )}
                    >
                      {step.stepNumber}
                    </div>

                    {/* Step Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={cn(
                            "rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wider uppercase border transition-colors",
                            isReached
                              ? "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]"
                              : "bg-[#F5F7FA] text-[#667085] border-[#E4E7EC]"
                          )}
                        >
                          Step {step.stepNumber} • {step.shortName}
                        </span>
                        <span className="text-[11px] font-mono text-[#667085] hidden sm:inline">
                          Deliverable: {step.deliverable}
                        </span>
                      </div>

                      <h3
                        className={cn(
                          "mt-2 text-lg sm:text-xl font-bold tracking-tight transition-colors",
                          isReached ? "text-[#101828]" : "text-[#667085]"
                        )}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
