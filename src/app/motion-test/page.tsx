"use client";

import Link from "next/link";
import {
  Reveal,
  SplitHeading,
  Counter,
  Magnetic,
  useReducedMotion,
  useLenis,
} from "@/components/motion";
import { PLACEHOLDERS } from "@/content";

export default function MotionTestPage() {
  const isReducedMotion = useReducedMotion();
  const lenis = useLenis();

  return (
    <div className="min-h-screen bg-white text-[#101828] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-20">
        {/* Test Header */}
        <div className="border-b border-[#E4E7EC] pb-10 text-center">

          <SplitHeading
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101828]"
          >
            Engineered Motion Layer for Social Technologies
          </SplitHeading>

          <Reveal delay={0.2} y={16}>
            <p className="mt-4 text-[#667085] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Testing GSAP ScrollTrigger, SplitText, Lenis Smooth Scroll, Magnetic cursor pull, and
              reduced-motion compliance.
            </p>
          </Reveal>

          {/* Reduced Motion Status Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#E4E7EC] bg-[#F5F7FA] px-3 py-1.5 text-xs font-mono">
            <span className="text-[#667085]">prefers-reduced-motion:</span>
            <span
              className={isReducedMotion ? "text-amber-600 font-bold" : "text-[#2563EB] font-bold"}
            >
              {isReducedMotion ? "ACTIVE (Plain Fades)" : "FALSE (Full Motion)"}
            </span>
          </div>
        </div>

        {/* 1. SplitHeading Demo */}
        <section className="space-y-6 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-8">
          <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3">
            <h2 className="font-mono text-xs text-[#2563EB] uppercase tracking-wider font-semibold">
              01 // SplitHeading (Word-by-word reveal via SplitText)
            </h2>
            <span className="font-mono text-[11px] text-[#667085]">SplitText plugin</span>
          </div>

          <div className="space-y-4">
            <SplitHeading as="h2" className="text-2xl sm:text-3xl text-[#101828] font-semibold">
              We power first-party marketplace selling across India
            </SplitHeading>
            <SplitHeading
              as="h3"
              delay={0.15}
              className="text-lg sm:text-xl text-[#2563EB] font-medium"
            >
              Hyperlocal discovery connects directly to pan-India e-commerce scale
            </SplitHeading>
          </div>
        </section>

        {/* 2. Reveal Demo (Fade & Rise with Stagger) */}
        <section className="space-y-6 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-8">
          <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3">
            <h2 className="font-mono text-xs text-[#2563EB] uppercase tracking-wider font-semibold">
              02 // Reveal Component (Fade and Rise with Stagger)
            </h2>
            <span className="font-mono text-[11px] text-[#667085]">
              Transform &amp; Opacity only
            </span>
          </div>

          <Reveal stagger={0.12} y={24} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-sm">
              <span className="font-mono text-xs text-[#2563EB] font-semibold">Card 01</span>
              <h4 className="mt-2 font-semibold text-[#101828]">LGM Leader</h4>
              <p className="mt-2 text-xs text-[#667085] leading-relaxed">
                Staggered entrance item 1: Local business discovery and lead generation.
              </p>
            </div>
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-sm">
              <span className="font-mono text-xs text-[#2563EB] font-semibold">Card 02</span>
              <h4 className="mt-2 font-semibold text-[#101828]">ICM Retails</h4>
              <p className="mt-2 text-xs text-[#667085] leading-relaxed">
                Staggered entrance item 2: 1P Seller presence on Amazon, Flipkart, Meesho.
              </p>
            </div>
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-sm">
              <span className="font-mono text-xs text-[#2563EB] font-semibold">Card 03</span>
              <h4 className="mt-2 font-semibold text-[#101828]">Partner Program</h4>
              <p className="mt-2 text-xs text-[#667085] leading-relaxed">
                Staggered entrance item 3: Connecting suppliers, brands, and integrators.
              </p>
            </div>
          </Reveal>
        </section>

        {/* 3. Counter Component Demo */}
        <section className="space-y-6 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-8">
          <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3">
            <h2 className="font-mono text-xs text-[#2563EB] uppercase tracking-wider font-semibold">
              03 // Counter Component (ScrollTrigger Count-Up & Placeholder Safety)
            </h2>
            <span className="font-mono text-[11px] text-[#667085]">Never invent statistics</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {/* Live Count Up with Suffix */}
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-sm">
              <p className="text-3xl font-mono font-bold text-[#2563EB]">
                <Counter value={100} suffix="+" duration={1.5} />
              </p>
              <p className="mt-1 text-xs text-[#667085]">Brand Catalogs Managed</p>
            </div>

            {/* Live Count Up with Decimals and Percent */}
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-sm">
              <p className="text-3xl font-mono font-bold text-[#2563EB]">
                <Counter value={99.8} decimals={1} suffix="%" duration={1.8} />
              </p>
              <p className="mt-1 text-xs text-[#667085]">Fulfillment SLA</p>
            </div>

            {/* Placeholder Token Safe Display 1 */}
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-sm">
              <p className="text-3xl font-mono font-bold text-[#101828]">
                <Counter value={PLACEHOLDERS.MARKETPLACE_COUNT} />
              </p>
              <p className="mt-1 text-xs text-[#667085]">Marketplaces Live</p>
            </div>

            {/* Placeholder Token Safe Display 2 */}
            <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-sm">
              <p className="text-3xl font-mono font-bold text-[#101828]">
                <Counter value={PLACEHOLDERS.ACTIVE_SELLERS} />
              </p>
              <p className="mt-1 text-xs text-[#667085]">Verified Sellers</p>
            </div>
          </div>
        </section>

        {/* 4. Magnetic Wrapper Demo */}
        <section className="space-y-6 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-8">
          <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3">
            <h2 className="font-mono text-xs text-[#2563EB] uppercase tracking-wider font-semibold">
              04 // Magnetic Component (Cursor pull with elastic return)
            </h2>
            <span className="font-mono text-[11px] text-[#667085]">
              Hover &amp; move cursor near buttons
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 py-4 justify-center sm:justify-start">
            <Magnetic strength={0.4} maxOffset={20}>
              <button
                type="button"
                className="rounded-xl bg-[#101828] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-black"
              >
                Magnetic Primary Button
              </button>
            </Magnetic>

            <Magnetic strength={0.35} maxOffset={16}>
              <button
                type="button"
                className="rounded-xl border border-[#E4E7EC] bg-white px-6 py-3 text-sm font-semibold text-[#101828] hover:bg-[#F5F7FA] shadow-sm transition-all"
              >
                Magnetic Secondary Button
              </button>
            </Magnetic>

            <Magnetic strength={0.5} maxOffset={24}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-xs font-mono font-bold text-[#2563EB] cursor-pointer hover:border-[#2563EB] shadow-sm">
                Pull Me
              </div>
            </Magnetic>
          </div>
        </section>

        {/* 5. Lenis Smooth Scroll Controls */}
        <section className="space-y-6 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-8 text-center">
          <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3">
            <h2 className="font-mono text-xs text-[#2563EB] uppercase tracking-wider font-semibold">
              05 // Lenis + GSAP ScrollTrigger Integration
            </h2>
            <span className="font-mono text-[11px] text-[#667085]">RAF &amp; Ticker Synced</span>
          </div>

          <p className="text-sm text-[#667085] max-w-lg mx-auto">
            Smooth scrolling inertia is active and synced with GSAP ScrollTrigger updates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => {
                if (lenis) {
                  lenis.scrollTo(0, { duration: 1.2 });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="rounded-xl border border-[#E4E7EC] bg-white px-5 py-2.5 text-xs font-semibold text-[#101828] hover:bg-[#F5F7FA] transition-colors shadow-sm"
            >
              ↑ Smooth Scroll To Top
            </button>
            <Link
              href="/"
              className="rounded-xl bg-[#101828] px-5 py-2.5 text-xs font-semibold text-white hover:bg-black transition-colors shadow-sm"
            >
              Return to Homepage
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
