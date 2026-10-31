import { Metadata } from "next";
import Link from "next/link";
import { SplitHeading, Reveal, Magnetic } from "@/components/motion";
import { HowItWorks, FinalCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services | Marketplace Growth, Advertising & Operations",
  description:
    "End-to-end marketplace management for Indian brands: catalog syndication, sponsored advertising, account health defense, and automated settlement audit.",
  openGraph: {
    title: "Marketplace Growth Services | Social Technologies",
    description:
      "Four specialized execution blocks powering Indian brands across Amazon, Flipkart, Meesho, and Myntra.",
    url: "https://socialtechnologies.in/services",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Technologies Marketplace Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const SERVICE_BLOCKS = [
  {
    id: "cataloging",
    number: "01",
    title: "Master Cataloging & A+ Enrichment",
    tagline: "High-conversion listings indexed for marketplace search algorithms",
    description:
      "Transform flat product sheets into fully enriched, search-optimized master catalogs syndicating across Amazon, Flipkart, Meesho, and Myntra with zero attribute errors.",
    deliverables: [
      "Marketplace-compliant title & bullet architecture",
      "A+ Brand Story and interactive module layouts",
      "Automated category mapping and attribute validation",
      "High-resolution lifestyle and infographic render optimization",
    ],
    metric: "10x",
    metricLabel: "Listing Syndication Velocity",
    steps: [
      { step: "1", title: "Catalog Audit", desc: "Scan current SKUs for missing attributes and rejection flags." },
      { step: "2", title: "Keyword Indexing", desc: "Harvest high-volume, high-intent marketplace search queries." },
      { step: "3", title: "A+ Media Assembly", desc: "Create conversion-focused graphical modules and comparison tables." },
      { step: "4", title: "API Syndication", desc: "Direct upload via marketplace APIs with automated schema locks." },
    ],
  },
  {
    id: "advertising",
    number: "02",
    title: "Performance Ads & ROAS Optimization",
    tagline: "Algorithmic bidding across Amazon Ads, Flipkart PLA & PCA",
    description:
      "Stop wasting budget on uncoordinated ad campaigns. Our unified bidding models maximize high-intent keyword capture while dynamically pruning low-converting search terms.",
    deliverables: [
      "Amazon Sponsored Products, Brands, and Display management",
      "Flipkart Product Listing Ads (PLA) and Brand Campaigns (PCA)",
      "Automated hourly dayparting to match peak shopper conversion windows",
      "Negative keyword harvesting preventing ad spend cannibalization",
    ],
    metric: "4.8x",
    metricLabel: "Blended Marketplace ROAS",
    steps: [
      { step: "1", title: "Margin Modeling", desc: "Calculate unit economics and maximum allowable TACoS per SKU." },
      { step: "2", title: "Structure Build", desc: "Segment campaigns into exact brand, category, and competitor targets." },
      { step: "3", title: "Algorithmic Dayparting", desc: "Automate bid modifiers for peak Indian purchasing hours." },
      { step: "4", title: "Negative Pruning", desc: "Eliminate irrelevant queries daily to preserve ad efficiency." },
    ],
  },
  {
    id: "operations",
    number: "03",
    title: "Account Health & Deductions Audit",
    tagline: "Proactive SLA defense and automated disputed claims recovery",
    description:
      "Marketplaces often deduct unjustified weight discrepancy penalties and return charges. Our continuous audit engine cross-checks every order to recover lost cash flow.",
    deliverables: [
      "Sub-second alert monitoring for Late Dispatch Rate (LDR) and Order Defect Rate (ODR)",
      "Automated weight dispute filings with volumetric proof dossiers",
      "Disputed customer return inspection and Safe-T claims management",
      "Real-time Buy Box hijacking defense with 60-second repricing alerts",
    ],
    metric: "99.4%",
    metricLabel: "On-Time Dispatch SLA Maintained",
    steps: [
      { step: "1", title: "Health Baseline", desc: "Audit account risk metrics and past unrecovered platform deductions." },
      { step: "2", title: "Real-Time Watchdogs", desc: "Configure sub-second alerts for low stock, pricing lags, and warnings." },
      { step: "3", title: "Claims Filing", desc: "Compile automated proof bundles for disputed weights and damaged returns." },
      { step: "4", title: "Escalation Desk", desc: "Direct resolution through dedicated marketplace category manager channels." },
    ],
  },
  {
    id: "fulfillment",
    number: "04",
    title: "Omnichannel Fulfillment & Quick Commerce",
    tagline: "Sub-second buffer sync across warehouses and dark store networks",
    description:
      "Connect your warehouse ERP with our central terminal to eliminate overselling cancellations. Feed national marketplace nodes and 10-minute dark stores from a single pool.",
    deliverables: [
      "Sub-second (<800ms) two-way stock synchronization across all portals",
      "Real-time buffer locking protecting against flash-sale ghost inventory",
      "Direct integration with Blinkit, Zepto, and Instamart micro-fulfillment feeds",
      "Multi-courier line-haul routing via Delhivery, ATS, and Ekart hubs",
    ],
    metric: "<800ms",
    metricLabel: "Cross-Channel Buffer Lock Latency",
    steps: [
      { step: "1", title: "WMS/ERP Handshake", desc: "Connect warehouse inventory feeds via REST API or webhook." },
      { step: "2", title: "Safety Buffer Lock", desc: "Establish dynamic reservation buffers for simultaneous sales." },
      { step: "3", title: "Micro-Hub Routing", desc: "Split inventory into high-demand metro quick commerce clusters." },
      { step: "4", title: "Dispatch Execution", desc: "Automate shipping label generation and same-day pickup handover." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <SplitHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.12]">
              End-to-end operational mastery across every channel.
            </SplitHeading>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                We manage the entire marketplace lifecycle for brands that demand serious scale. From
                algorithm-optimized cataloging and high-ROAS ad campaigns to sub-second stock sync
                and automated deductions audit.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.2}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#101828] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-black hover:shadow-md"
                  >
                    Schedule an Account Audit
                  </Link>
                </Magnetic>

                <a
                  href="#cataloging"
                  className="inline-flex items-center justify-center rounded-xl border border-[#E4E7EC] bg-white px-6 py-3.5 text-sm font-semibold text-[#101828] transition-all hover:bg-[#F5F7FA]"
                >
                  Explore the 4 Service Blocks ↓
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Four Service Blocks Section */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICE_BLOCKS.map((block) => (
            <div
              key={block.id}
              id={block.id}
              className="relative rounded-3xl border border-[#E4E7EC] bg-white p-8 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 rounded">
                      Service Block {block.number}
                    </span>
                    <span className="font-mono text-xs text-[#667085]">{block.tagline}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101828] mb-4">
                    {block.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
                    {block.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#2563EB] mb-3">
                      Key Deliverables &amp; Artifacts
                    </h3>
                    <ul className="space-y-2.5">
                      {block.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#667085]">
                          <span className="text-[#2563EB] mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="inline-flex items-baseline gap-3 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] px-5 py-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#2563EB]">
                      {block.metric}
                    </span>
                    <span className="text-xs text-[#667085]">{block.metricLabel}</span>
                  </div>
                </div>

                {/* Right Process Steps */}
                <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#E4E7EC] pt-8 lg:pt-0 lg:pl-10">
                  <div className="font-mono text-xs font-medium text-[#101828] uppercase tracking-wider mb-6 flex items-center justify-between">
                    <span>Execution Methodology</span>
                    <span className="text-[#2563EB]">4-Stage Framework</span>
                  </div>

                  <div className="space-y-4">
                    {block.steps.map((st) => (
                      <div
                        key={st.title}
                        className="rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] p-4 flex items-start gap-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E4E7EC] font-mono text-xs font-bold text-[#2563EB]">
                          0{st.step}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#101828] mb-1">
                            {st.title}
                          </div>
                          <div className="text-xs text-[#667085] leading-relaxed">{st.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E4E7EC] flex items-center justify-between">
                    <span className="text-xs text-[#667085]">Ready to deploy this capability?</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-xs font-mono font-medium text-[#2563EB] hover:underline"
                    >
                      <span>Consult with Specialist</span>
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works 5-Step Section */}
      <HowItWorks />

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
