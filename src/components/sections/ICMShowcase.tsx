"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { PLACEHOLDERS, ICM_CATEGORIES_DATA } from "@/content";
import { cn } from "@/lib/utils";

export function ICMShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsapPlugins();

    if (!sectionRef.current || !trackRef.current || prefersReducedMotion) return;

    const track = trackRef.current;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 100);

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 500}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-[#101828] py-20 lg:py-28 border-b border-[#E4E7EC]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 lg:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828]">
              ICM Retails Category Showcase
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#667085] leading-relaxed">
            Scroll vertically to slide through our active product categories holding direct inventory
            and driving high-velocity orders on India&apos;s leading channels.
          </p>
        </div>
      </div>

      {/* Horizontal Rail of Category Cards */}
      <div className="relative w-full">
        <div
          ref={trackRef}
          className={cn(
            "flex gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 will-change-transform",
            prefersReducedMotion ? "overflow-x-auto pb-6" : "w-max"
          )}
        >
          {ICM_CATEGORIES_DATA.map((cat, idx) => (
            <div
              key={cat.id}
              className="group relative flex flex-col justify-between w-[300px] sm:w-[360px] lg:w-[390px] shrink-0 rounded-3xl border border-[#E4E7EC] bg-[#F5F7FA] p-6 sm:p-7 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D0D5DD]"
            >
              {/* Top Row: Category Index & Highlight Badge */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#667085]">
                    CAT / 0{idx + 1}
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#101828] border border-[#E4E7EC]">
                    {cat.highlightBadge}
                  </span>
                </div>

                {/* Category Title & Tagline */}
                <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-[#101828]">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {cat.tagline}
                </p>

                {/* SKU Velocity Counter */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 border border-[#E4E7EC] text-xs font-mono font-semibold text-[#101828] shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                  <span>{cat.skuCount}</span>
                </div>
              </div>

              {/* Bottom: 'Live on' Row */}
              <div className="mt-8 pt-5 border-t border-[#E4E7EC]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-mono font-medium text-[#667085]">
                    Live on:
                  </span>
                  <span className="text-[10px] font-mono text-[#2563EB] font-semibold">
                    {PLACEHOLDERS.ICM_MARKETPLACES}
                  </span>
                </div>

                {/* Marketplace Badges Row */}
                <div className="flex flex-wrap items-center gap-2">
                  {cat.marketplaces.map((mp) => (
                    <span
                      key={mp.name}
                      className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold border shadow-xs"
                      style={{
                        color: mp.badgeColor,
                        backgroundColor: mp.badgeBg,
                        borderColor: `${mp.badgeColor}33`,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: mp.badgeColor }}
                      />
                      <span>{mp.name}</span>
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
