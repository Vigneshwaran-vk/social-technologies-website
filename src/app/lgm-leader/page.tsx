import { Metadata } from "next";
import Link from "next/link";
import { SplitHeading, Reveal, Counter, Magnetic } from "@/components/motion";
import { FinalCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "LGM Leader | Local Business Discovery & Lead Generation Platform",
  description:
    "LGM Leader empowers Indian merchants with automated local search visibility, ONDC indexing, and high-intent customer lead routing. Access lgm.socialtechnologies.in.",
  openGraph: {
    title: "LGM Leader | Local Business Discovery & Leads",
    description:
      "Capturing high-intent local commerce demand across tier-1, tier-2, and tier-3 Indian cities.",
    url: "https://socialtechnologies.in/lgm-leader",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LGM Leader Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const LGM_FEATURES = [
  {
    title: "Hyperlocal Search Capture",
    description:
      "Indexes merchant product catalogs against geo-targeted high-intent local queries across Google Search, Maps, and ONDC channels.",
    icon: "🎯",
    tag: "Geo-Indexed",
  },
  {
    title: "Sub-Minute WhatsApp Lead Dispatch",
    description:
      "When a nearby buyer searches for specific inventory, verified leads trigger directly to the merchant's WhatsApp with full product context.",
    icon: "⚡",
    tag: "Instant Alerts",
  },
  {
    title: "Zero-Commission Direct Footfall",
    description:
      "Unlike delivery aggregator duopolies, LGM Leader delivers direct buyer discovery without taking a 25-30% cut of merchant revenue.",
    icon: "💎",
    tag: "0% Commission",
  },
  {
    title: "Unified Multi-Location Dashboard",
    description:
      "Regional retail chains and multi-store franchises can monitor local search ranking, buyer calls, and stock inquiries from one terminal.",
    icon: "📊",
    tag: "Enterprise Tier",
  },
  {
    title: "Automated Storefront Verification",
    description:
      "Boosts buyer trust with verified merchant badges, operating hours, active inventory status, and automated WhatsApp catalog sync.",
    icon: "🛡️",
    tag: "Verified Merchant",
  },
  {
    title: "Local Ad & Google My Business Boost",
    description:
      "Automates local citation optimization, review generation campaigns, and geo-fenced performance ads to dominate local map packs.",
    icon: "🚀",
    tag: "Map Domination",
  },
];

const HOW_LGM_WORKS = [
  {
    step: "01",
    title: "Catalog & Geo-Profile Setup",
    description:
      "The merchant registers their physical store, service radius, and key product categories. LGM automatically structures the catalog for search engine and ONDC protocols.",
  },
  {
    step: "02",
    title: "Hyperlocal Intent Interception",
    description:
      "When nearby consumers search for products available in your store, LGM Leader prioritizes your listing ahead of generic aggregators.",
  },
  {
    step: "03",
    title: "Direct Buyer Handshake",
    description:
      "Buyers connect via WhatsApp or direct phone call. Inquiries arrive pre-qualified with SKU name, intent level, and distance coordinates.",
  },
  {
    step: "04",
    title: "Customer Retention & Analytics",
    description:
      "The merchant builds their own direct buyer database, measuring weekly search impressions, calls converted, and repeat purchase loyalty.",
  },
];

export default function LGMLeaderPage() {
  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">

              <SplitHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.12]">
                Own the local search demand in your city.
              </SplitHeading>

              <Reveal delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl">
                  LGM Leader (Local Growth Marketing) is our dedicated discovery engine connecting
                  brick-and-mortar retailers, distributors, and service providers with nearby buyers
                  ready to purchase.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Magnetic strength={0.2}>
                    <a
                      href="https://lgm.socialtechnologies.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-xl bg-[#101828] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-black hover:shadow-md"
                    >
                      <span>Launch LGM Leader</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </Magnetic>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-[#E4E7EC] bg-white px-6 py-3.5 text-sm font-semibold text-[#101828] transition-all hover:bg-[#F5F7FA]"
                  >
                    Request demo &amp; onboarding
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#667085]">
                  <span className="text-[#2563EB] font-bold">✓</span>
                  <span>Live at lgm.socialtechnologies.in</span>
                  <span className="text-black/[0.2]">·</span>
                  <span>Tier-1 to Tier-3 Coverage</span>
                </div>
              </Reveal>
            </div>

            {/* Interactive Live Platform Mock */}
            <div className="lg:col-span-5">
              <Reveal delay={0.25}>
                <div className="relative rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                  {/* Mock Window Controls */}
                  <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#E4E7EC]" />
                      <div className="h-3 w-3 rounded-full bg-[#E4E7EC]" />
                      <div className="h-3 w-3 rounded-full bg-[#E4E7EC]" />
                    </div>
                    <span className="font-mono text-xs text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">
                      lgm.socialtechnologies.in
                    </span>
                  </div>

                  {/* Mock Lead Feed */}
                  <div className="space-y-3">
                    <div className="rounded-xl border border-[#E4E7EC] bg-white p-3.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-[#101828]">Active Discovery Feed</span>
                        <span className="font-mono text-[10px] text-[#2563EB] font-semibold">
                          ● Live Pulse
                        </span>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center justify-between text-xs bg-[#F5F7FA] p-2 rounded-lg border border-[#E4E7EC]">
                          <div>
                            <div className="font-medium text-[#101828]">South Ext. 1, New Delhi</div>
                            <div className="text-[11px] text-[#667085]">
                              Search: &quot;Smart Noise Cancelling Headphones&quot;
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-[#2563EB] font-semibold">Routed 4s ago</span>
                        </div>

                        <div className="flex items-center justify-between text-xs bg-[#F5F7FA] p-2 rounded-lg border border-[#E4E7EC]">
                          <div>
                            <div className="font-medium text-[#101828]">Indiranagar, Bengaluru</div>
                            <div className="text-[11px] text-[#667085]">
                              Search: &quot;Cast Iron Cookware Set 3pc&quot;
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-[#2563EB] font-semibold">Routed 18s ago</span>
                        </div>

                        <div className="flex items-center justify-between text-xs bg-[#F5F7FA] p-2 rounded-lg border border-[#E4E7EC]">
                          <div>
                            <div className="font-medium text-[#101828]">Kalyani Nagar, Pune</div>
                            <div className="text-[11px] text-[#667085]">
                              Search: &quot;Polycarbonate Cabin Trolley Luggage&quot;
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-[#2563EB] font-semibold">Routed 42s ago</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Summary Bar */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-[#E4E7EC] bg-white p-3">
                        <div className="font-mono text-xl font-bold text-[#101828]">
                          <Counter value={34200} suffix="+" />
                        </div>
                        <div className="text-[11px] text-[#667085] mt-0.5">Monthly Intent Queries</div>
                      </div>
                      <div className="rounded-xl border border-[#E4E7EC] bg-white p-3">
                        <div className="font-mono text-xl font-bold text-[#2563EB]">
                          <Counter value={88} suffix=" Cities" />
                        </div>
                        <div className="text-[11px] text-[#667085] mt-0.5">Active Merchant Hubs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-white px-3 py-1 font-mono text-xs font-medium text-[#2563EB]">
              Capabilities
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101828]">
              Built for High-Velocity Local Commerce
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">
              Empower physical retailers and local brand branches to intercept nearby high-intent
              shoppers before they click on delivery aggregators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LGM_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="group relative rounded-2xl border border-[#E4E7EC] bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{feat.icon}</span>
                  <span className="font-mono text-[10px] text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#101828] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white text-[#101828] py-20 md:py-28 relative border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-[#F5F7FA] px-3 py-1 font-mono text-xs font-semibold text-[#2563EB]">
              The Process
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101828]">
              How LGM Leader Captures &amp; Routes Demand
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#667085]">
              A continuous loop of search indexing, qualification, and direct merchant connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_LGM_WORKS.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-[#2563EB] mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-semibold text-[#101828] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E7EC] flex items-center text-xs font-mono text-[#667085]">
                  <span>Status: Ready</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="https://lgm.socialtechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#101828] text-white px-8 py-3.5 text-sm font-semibold transition-all hover:bg-black hover:shadow-lg"
            >
              <span>Explore lgm.socialtechnologies.in</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
