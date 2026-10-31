"use client";

import Link from "next/link";
import { Magnetic } from "@/components/motion";

const PARTNER_BENEFITS = [
  {
    id: "logistics",
    step: "01",
    title: "Consolidated 3PL Rates & Carrier Routing",
    description:
      "Access aggregated enterprise shipping rate cards with Delhivery, Ekart, and ATS. Lower your cost-per-parcel and dramatically reduce RTO overhead across Indian pin codes.",
    highlight: "Up to 24% Lower Freight Cost",
    color: "#2563EB",
  },
  {
    id: "catalog",
    step: "02",
    title: "Instant Multi-Channel Catalog Syndication",
    description:
      "Direct API pipelines connect your products across Amazon, Flipkart, Meesho, Myntra, and quick commerce nodes with pre-cleared category approvals.",
    highlight: "12+ Marketplaces Live",
    color: "#2563EB",
  },
  {
    id: "balance-sheet",
    step: "03",
    title: "1P Working Capital & Balance Sheet Support",
    description:
      "Through ICM Retails, we buy wholesale stock directly from brand manufacturers, absorbing 45-day marketplace remittance delays and providing instant liquidity.",
    highlight: "Immediate Inventory Liquidity",
    color: "#2563EB",
  },
];

export function PartnerPitch() {
  return (
    <section className="relative bg-[#F5F7FA] text-[#101828] py-20 sm:py-28 border-b border-[#E4E7EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-tight">
              Scale with our partner ecosystem.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#667085] leading-relaxed">
              We partner with brand manufacturers, regional distributor networks, and logistics
              enablers to build a frictionless, multi-channel commerce pipeline.
            </p>
          </div>

          <div>
            <Magnetic strength={0.25}>
              <Link
                href="/partners"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#101828] px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E293B] shadow-sm active:scale-[0.98]"
              >
                <span>Become a partner</span>
                <span>→</span>
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PARTNER_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col justify-between rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#D0D5DD] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#667085]">
                    BENEFIT / {benefit.step}
                  </span>
                  <span className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold border bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]">
                    {benefit.highlight}
                  </span>
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#101828] leading-snug">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E4E7EC] flex items-center text-xs font-mono text-[#2563EB] font-semibold">
                <span>Integrated via Partner Portal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
