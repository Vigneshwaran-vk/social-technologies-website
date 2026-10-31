"use client";

import { useState } from "react";
import Link from "next/link";
import { Counter, useReducedMotion } from "@/components/motion";
import { cn } from "@/lib/utils";

interface PillarItem {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  line1: string;
  line2: string;
  learnMoreHref: string;
  learnMoreText: string;
  renderMiniInterface: () => React.ReactNode;
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: "lgm-leader",
    stepNumber: "01",
    title: "LGM Leader",
    subtitle: "Local Discovery & Merchant Lead Acquisition",
    line1:
      "Proprietary local business discovery engine indexing regional consumer queries across tier-1, tier-2, and tier-3 Indian pin codes.",
    line2:
      "Captures high-intent local demand and channels verified leads directly to merchant counters and retail storefronts.",
    learnMoreHref: "https://lgm.socialtechnologies.in",
    learnMoreText: "Explore LGM Leader portal ↗",
    renderMiniInterface: () => (
      <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 shadow-sm">
        {/* Radar & Lead Counter */}
        <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
            <span className="font-mono text-xs font-semibold text-[#101828]">
              LGM Local Discovery Engine
            </span>
          </div>
          <span className="rounded-md bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#2563EB]">
            Active Live Feed
          </span>
        </div>

        {/* Lead Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-3 shadow-xs">
            <span className="text-[11px] font-mono text-[#667085]">Verified Merchant Queries</span>
            <div className="mt-1 text-2xl font-bold font-mono text-[#101828]">
              <Counter value={18450} duration={1.6} />
            </div>
            <span className="mt-0.5 inline-block text-[10px] font-mono text-[#2563EB] font-medium">
              ↑ 32% this month
            </span>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-3 shadow-xs">
            <span className="text-[11px] font-mono text-[#667085]">Coverage Radius</span>
            <div className="mt-1 text-2xl font-bold font-mono text-[#101828]">
              <Counter value={420} suffix=" Cities" duration={1.6} />
            </div>
            <span className="mt-0.5 inline-block text-[10px] font-mono text-[#667085]">
              Pan-India Tier 1-3
            </span>
          </div>
        </div>

        {/* Live Ticker */}
        <div className="mt-3.5 rounded-lg border border-[#E4E7EC] bg-white px-3 py-2 text-[11px] font-mono flex items-center justify-between text-[#344054]">
          <span className="truncate flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            <strong className="text-[#101828]">Lead Dispatched:</strong> Electronics Retailer •
            Bandra, Mumbai
          </span>
          <span className="text-[10px] text-[#667085] shrink-0 ml-2">4s ago</span>
        </div>
      </div>
    ),
  },
  {
    id: "icm-retails",
    stepNumber: "02",
    title: "ICM Retails",
    subtitle: "Proprietary First-Party (1P) Marketplace Commerce",
    line1:
      "Our own dedicated seller entity actively holding inventory and fulfilling customer orders directly across Amazon, Flipkart, Meesho, and Myntra.",
    line2:
      "We test algorithmic repricing, multi-channel buffer locks, and 3PL routing with our own balance sheet before deploying for partner brands.",
    learnMoreHref: "/products/icm-retails",
    learnMoreText: "View ICM Retails operations →",
    renderMiniInterface: () => (
      <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
            <span className="font-mono text-xs font-semibold text-[#101828]">
              1P Marketplace Multi-Channel Store
            </span>
          </div>
          <span className="rounded-md bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#2563EB]">
            96.8% Buy Box Win Rate
          </span>
        </div>

        {/* Live Marketplace Badges with Status */}
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="flex items-center justify-between rounded-xl border border-[#E4E7EC] bg-white p-2.5 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C25E00]" />
              <span className="text-xs font-semibold text-[#101828]">Amazon Prime</span>
            </div>
            <span className="text-[11px] font-mono text-[#2563EB] font-semibold">In Stock</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#E4E7EC] bg-white p-2.5 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
              <span className="text-xs font-semibold text-[#101828]">Flipkart Assured</span>
            </div>
            <span className="text-[11px] font-mono text-[#2563EB] font-semibold">In Stock</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#E4E7EC] bg-white p-2.5 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9D174D]" />
              <span className="text-xs font-semibold text-[#101828]">Meesho Direct</span>
            </div>
            <span className="text-[11px] font-mono text-[#2563EB] font-semibold">Live Feed</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#E4E7EC] bg-white p-2.5 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#BE123C]" />
              <span className="text-xs font-semibold text-[#101828]">Myntra Forward</span>
            </div>
            <span className="text-[11px] font-mono text-[#2563EB] font-semibold">Synced</span>
          </div>
        </div>

        {/* Sub-bar */}
        <div className="mt-3 rounded-lg border border-[#E4E7EC] bg-white px-3 py-2 text-[11px] font-mono flex items-center justify-between text-[#667085]">
          <span>Single-Source Inventory Buffer: Active</span>
          <span className="text-[#2563EB] font-semibold">0 Overselling Discrepancies</span>
        </div>
      </div>
    ),
  },
  {
    id: "services",
    stepNumber: "03",
    title: "Marketplace Growth Services",
    subtitle: "Cataloging, Algorithmic Advertising & Operational Scale",
    line1:
      "End-to-end account orchestration for brands seeking marketplace dominance without building massive in-house operations teams.",
    line2:
      "Covers enriched A+ cataloging, sponsored ad bidding algorithms, compliance governance, and automated return claims reconciliation.",
    learnMoreHref: "/services",
    learnMoreText: "Explore Growth Services →",
    renderMiniInterface: () => (
      <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
            <span className="font-mono text-xs font-semibold text-[#101828]">
              Campaign &amp; Catalog Command Console
            </span>
          </div>
          <span className="rounded-md bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#2563EB]">
            4.82x Blended ROAS
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-3 shadow-xs">
            <span className="text-[11px] font-mono text-[#667085]">Catalog Health Score</span>
            <div className="mt-1 text-2xl font-bold font-mono text-[#101828]">
              <Counter value={99.1} decimals={1} suffix="%" duration={1.6} />
            </div>
            <span className="text-[10px] font-mono text-[#2563EB] font-medium">Zero compliance flags</span>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-3 shadow-xs">
            <span className="text-[11px] font-mono text-[#667085]">Automated Bid Tuning</span>
            <div className="mt-1 text-2xl font-bold font-mono text-[#101828]">
              <Counter value={2840} suffix=" / day" duration={1.6} />
            </div>
            <span className="text-[10px] font-mono text-[#2563EB] font-medium">Algorithmic Dayparting</span>
          </div>
        </div>

        {/* Ticker */}
        <div className="mt-3 rounded-lg border border-[#E4E7EC] bg-white px-3 py-2 text-[11px] font-mono flex items-center justify-between text-[#667085]">
          <span>Settlement Audit Engine</span>
          <span className="text-[#2563EB] font-semibold">100% Remittance Matched</span>
        </div>
      </div>
    ),
  },
  {
    id: "partners",
    stepNumber: "04",
    title: "Partner Program",
    subtitle: "Collaborative Growth Network for Brands & Enablers",
    line1:
      "A synergistic ecosystem uniting brand manufacturers, supplier hubs, regional 3PL networks, and technology integrators into one shared pipeline.",
    line2:
      "Unlocks collective scale, consolidated logistics rate cards, and instant cross-channel distribution without individual platform friction.",
    learnMoreHref: "/partners",
    learnMoreText: "Join the Partner Network →",
    renderMiniInterface: () => (
      <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
            <span className="font-mono text-xs font-semibold text-[#101828]">
              Partner Synergy Network
            </span>
          </div>
          <span className="rounded-md bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#2563EB]">
            Tier-1 Connected Hubs
          </span>
        </div>

        {/* Nodes Grid */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono">
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-2.5 shadow-xs">
            <p className="text-[10px] text-[#667085]">Brand Partners</p>
            <p className="mt-1 text-xl font-bold text-[#101828]">
              <Counter value={48} suffix="+" duration={1.6} />
            </p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-2.5 shadow-xs">
            <p className="text-[10px] text-[#667085]">3PL Nodes</p>
            <p className="mt-1 text-xl font-bold text-[#2563EB]">
              <Counter value={16} suffix=" Hubs" duration={1.6} />
            </p>
          </div>
          <div className="rounded-xl border border-[#E4E7EC] bg-white p-2.5 shadow-xs">
            <p className="text-[10px] text-[#667085]">Avg Dispatch</p>
            <p className="mt-1 text-xl font-bold text-[#2563EB]">
              <Counter value={4.2} decimals={1} suffix="h" duration={1.6} />
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 rounded-lg border border-[#E4E7EC] bg-white px-3 py-2 text-[11px] font-mono flex items-center justify-between text-[#667085]">
          <span>Integrated 3PLs: Delhivery, Ekart, ATS</span>
          <span className="text-[#2563EB] font-semibold">99.4% SLA</span>
        </div>
      </div>
    ),
  },
];

function StackingCard({ pillar, index }: { pillar: PillarItem; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 3.5;
    const rotateY = ((x - centerX) / centerX) * 3.5;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      id={pillar.id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: prefersReducedMotion
          ? "none"
          : `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.25s ease",
        top: `calc(6rem + ${index * 1.5}rem)`,
      }}
      className={cn(
        "sticky rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-8 lg:p-10",
        "shadow-[0_12px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]",
        "mb-12 sm:mb-16 scroll-mt-28 transition-all duration-300 hover:shadow-[0_20px_48px_rgba(0,0,0,0.09)]"
      )}
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left: Content */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5F7FA] font-mono text-xs font-bold text-[#101828] border border-[#E4E7EC]">
              {pillar.stepNumber}
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#667085]">
              Pillar Architecture
            </span>
          </div>

          <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
            {pillar.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm font-semibold font-mono text-[#667085]">
            {pillar.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#344054] leading-relaxed">
            {pillar.line1}
          </p>

          <p className="mt-2 text-sm sm:text-base text-[#344054] leading-relaxed">
            {pillar.line2}
          </p>

          <div className="mt-6">
            <Link
              href={pillar.learnMoreHref}
              className="inline-flex items-center gap-2 rounded-xl bg-[#101828] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E293B] shadow-sm active:scale-[0.98]"
            >
              <span>{pillar.learnMoreText}</span>
            </Link>
          </div>
        </div>

        {/* Right: Small Mini-Interface */}
        <div className="lg:col-span-6">{pillar.renderMiniInterface()}</div>
      </div>
    </div>
  );
}

export function FourPillars() {
  return (
    <section id="features" className="relative bg-[#F5F7FA] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 border-b border-[#E4E7EC] scroll-mt-16">
      <div id="pillars" className="absolute -top-20" />
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828]">
            Four things we do
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667085] max-w-xl mx-auto leading-relaxed">
            We eliminate the gap between software providers and actual merchants by operating
            seamlessly across all four pillars of the Indian e-commerce landscape.
          </p>
        </div>

        {/* Stacking Sticky Cards Container */}
        <div className="relative">
          {PILLARS_DATA.map((pillar, index) => (
            <StackingCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
