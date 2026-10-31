import { Metadata } from "next";
import Link from "next/link";
import { SplitHeading, Reveal, Magnetic } from "@/components/motion";
import { ICMShowcase, FinalCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "ICM Retails | 1P Marketplace Selling Entity & Wholesale Partner",
  description:
    "ICM Retails is Social Technologies' first-party seller presence across Amazon, Flipkart, Meesho, Myntra, and top Indian marketplaces. Prime & Assured badges guaranteed.",
  openGraph: {
    title: "ICM Retails | 1P Marketplace Selling & Distribution",
    description:
      "Direct wholesale distribution, zero-lag multi-channel inventory holding, and 99.4% SLA fulfillment.",
    url: "https://socialtechnologies.in/icm-retails",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ICM Retails 1P Marketplace",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const SELLER_PROMISES = [
  {
    title: "100% On-Time SLA Guarantee",
    desc: "We maintain a 99.4% dispatch rate across Delhivery, ATS, and Ekart line-hauls, keeping Prime and Assured status locked year-round.",
    metric: "99.4% SLA",
    tag: "Dispatch Speed",
    icon: "⚡",
  },
  {
    title: "Sub-Second Buffer Locking",
    desc: "When a unit sells on Meesho, stock decrements across Amazon, Flipkart, and Myntra in under 800ms. Zero overselling, zero account strikes.",
    metric: "<800ms",
    tag: "Sync Engine",
    icon: "🔒",
  },
  {
    title: "Instant Wholesale Liquidity",
    desc: "In our 1P model, we buy your inventory in bulk upfront. You bypass 45-day marketplace remittance delays and recover working capital instantly.",
    metric: "Immediate",
    tag: "Cash Flow",
    icon: "💰",
  },
  {
    title: "24/7 Algorithmic Buy Box Defense",
    desc: "Our automated repricing bots monitor competitor pricing 24 hours a day, preserving your Buy Box share above 95% while safeguarding contribution margins.",
    metric: "95%+ Retention",
    tag: "Revenue Defense",
    icon: "🛡️",
  },
  {
    title: "Zero Return Deduction Leakage",
    desc: "We run algorithmic audits against every return parcel and settlement statement, automatically filing claims for weight fraud and wrong returns.",
    metric: "100% Audited",
    tag: "Reconciliation",
    icon: "⚖️",
  },
  {
    title: "Multi-Node Dark Store Feeds",
    desc: "Inventory placed with ICM Retails feeds both standard next-day marketplace nodes and 10-minute quick commerce dark stores across top metro corridors.",
    metric: "19,400+ Pincodes",
    tag: "Fulfillment",
    icon: "📦",
  },
];

const MARKETPLACE_BADGES = [
  { name: "Amazon Prime", badge: "Prime Verified" },
  { name: "Flipkart Assured", badge: "F-Assured" },
  { name: "Meesho", badge: "Gold Seller" },
  { name: "Myntra Forward", badge: "Direct Tier" },
  { name: "Nykaa", badge: "Verified Brand" },
  { name: "Blinkit", badge: "Dark Store Live" },
  { name: "JioMart", badge: "National Vendor" },
  { name: "Tata CLiQ", badge: "Luxury & Tech" },
];

export default function ICMRetailsPage() {
  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <SplitHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.12]">
              Your direct highway to India&apos;s top marketplace Buy Boxes.
            </SplitHeading>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                ICM Retails is Social Technologies&apos; proprietary first-party seller presence. We
                purchase your finished inventory in wholesale, hold stock across prime fulfillment
                nodes, and dispatch under our verified Prime and Flipkart Assured seller badges.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.2}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#101828] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-black hover:shadow-md"
                  >
                    Distribute via ICM Retails
                  </Link>
                </Magnetic>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-[#E4E7EC] bg-white px-6 py-3.5 text-sm font-semibold text-[#101828] transition-all hover:bg-[#F5F7FA]"
                >
                  Explore 3P Services
                </Link>
              </div>

              {/* Verified Badges Strip */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                {MARKETPLACE_BADGES.map((b) => (
                  <span
                    key={b.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-[#F5F7FA] px-3 py-1 text-xs font-mono font-medium text-[#101828]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    {b.name} ({b.badge})
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Seller Promise Grid */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-white px-3 py-1 font-mono text-xs font-medium text-[#2563EB]">
              The 1P Seller Promise
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101828]">
              Why Manufacturing Brands Choose 1P Distribution
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">
              Leave marketplace algorithms, logistics SLAs, and customer return disputes to us while
              you focus entirely on product formulation and production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELLER_PROMISES.map((promise) => (
              <div
                key={promise.title}
                className="group relative rounded-2xl border border-[#E4E7EC] bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{promise.icon}</span>
                  <span className="font-mono text-[10px] text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded">
                    {promise.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#101828] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {promise.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                  {promise.desc}
                </p>
                <div className="pt-3 border-t border-[#E4E7EC] flex items-center justify-between font-mono text-xs text-[#2563EB] font-semibold">
                  <span className="text-[#667085]">Benchmark</span>
                  <span>{promise.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Showcase (reusing ICMShowcase motion component) */}
      <ICMShowcase />

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
