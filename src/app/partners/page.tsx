import { Metadata } from "next";
import { SplitHeading, Reveal } from "@/components/motion";
import { PartnerApplicationForm } from "@/components/partners/PartnerApplicationForm";
import { PartnerPitch, FinalCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Partner Program | Social Technologies Ecosystem",
  description:
    "Join the Social Technologies ecosystem: Brand 1P wholesale distribution, 3PL logistics networks, tech integrations, and agency partnerships across India.",
  openGraph: {
    title: "Partner Program | Social Technologies Ecosystem",
    description:
      "Collaborative growth tiers uniting brand manufacturers, logistics nodes, and tech integrators.",
    url: "https://socialtechnologies.in/partners",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Technologies Partner Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const PROGRAM_TIERS = [
  {
    id: "brand-1p",
    name: "Brand Manufacturing Tier",
    badge: "1P Wholesale",
    target: "Direct-to-Consumer & FMCG Brands",
    desc: "Wholesale buyout model where ICM Retails handles prime multi-channel inventory holding, Buy Box defense, and 100% on-time dispatch SLAs.",
    perks: [
      "Direct bulk inventory buyout & upfront working capital",
      "Prime & Flipkart Assured badges day one",
      "Protection from 45-day payment settlement holding periods",
      "Full coverage against buyer return fraud and weight leaks",
    ],
  },
  {
    id: "logistics-3pl",
    name: "3PL & Dark Store Node Tier",
    badge: "Fulfillment Infrastructure",
    target: "Warehouse Operators & Micro-Hub Providers",
    desc: "Connect regional fulfillment nodes directly into our sub-second order dispatch router to fulfill instant quick commerce and next-day deliveries.",
    perks: [
      "Consistent daily pallet and parcel intake volumes",
      "Direct API handshake with Blinkit, Zepto, and Instamart feeds",
      "Automated dispatch manifesting and barcode compliance",
      "Zero-latency inventory buffer synchronization",
    ],
  },
  {
    id: "tech-erp",
    name: "Technology & ERP Tier",
    badge: "API Integrators",
    target: "SaaS Platforms, WMS & Accounting Ledgers",
    desc: "Certified integration partners sharing bidirectional order, catalog, and inventory webhooks with our unified orchestration engine.",
    perks: [
      "Sub-800ms 2-way REST & Webhook documentation",
      "Dedicated developer sandbox and staging credentials",
      "Co-marketing to 40+ high-growth Indian brand partners",
      "Native GST reconciliation & e-invoicing endpoints",
    ],
  },
  {
    id: "growth-agency",
    name: "Agency & Advisory Tier",
    badge: "Growth Network",
    target: "E-Commerce Consultants & Performance Agencies",
    desc: "Help your clients scale beyond 3P agency limits by plugging them into ICM Retails 1P distribution or our managed growth suite.",
    perks: [
      "Recurring monthly GMV revenue share incentives",
      "Access to internal algorithm audit tools and benchmarks",
      "Direct escalation line to marketplace category managers",
      "White-labeled reporting modules for client presentations",
    ],
  },
];

export default function PartnersPage() {
  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <SplitHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.12]">
              Unite with India&apos;s fastest-growing commerce network.
            </SplitHeading>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                We believe Indian e-commerce is not a zero-sum contest. By connecting brand
                manufacturers, regional warehouse hubs, software developers, and performance
                advisors, we compound efficiency and eliminate fragmented middleman margins.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-[#667085]">
                <div className="flex items-center gap-2">
                  <span className="text-[#2563EB] text-base font-bold">✓</span>
                  <span>4 Specialized Tiers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563EB] text-base font-bold">✓</span>
                  <span>24-Hour Review Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563EB] text-base font-bold">✓</span>
                  <span>Aligned Commercial Terms</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Program Tiers Grid */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-white px-3 py-1 font-mono text-xs font-medium text-[#2563EB]">
              Program Architecture
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101828]">
              Four Collaboration Tiers
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">
              Choose the tier aligned with your infrastructure, scale, and strategic objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAM_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="relative rounded-2xl border border-[#E4E7EC] bg-white p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#2563EB]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-medium px-3 py-1 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB]">
                      {tier.badge}
                    </span>
                    <span className="font-mono text-xs text-[#667085]">{tier.target}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101828] mb-2">{tier.name}</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-mono text-[#667085] uppercase tracking-wider">
                      Tier Benefits &amp; Resources:
                    </div>
                    {tier.perks.map((perk) => (
                      <div key={perk} className="flex items-start gap-2.5 text-xs text-[#667085]">
                        <span className="text-[#2563EB] mt-0.5 font-bold">
                          ✓
                        </span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E4E7EC] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#667085]">Onboarding Time:</span>
                  <span className="text-[#2563EB] font-semibold">3 - 5 Business Days</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Pitch Component */}
      <PartnerPitch />

      {/* Interactive Application Form Section */}
      <section id="apply" className="bg-white py-20 md:py-28 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <PartnerApplicationForm />
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
