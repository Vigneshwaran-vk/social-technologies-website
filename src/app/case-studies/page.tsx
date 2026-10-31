import { Metadata } from "next";
import Link from "next/link";
import { SplitHeading, Reveal } from "@/components/motion";
import { getCaseStudies } from "@/lib/mdx";
import { TrustCarousel, FinalCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Case Studies | Documented Marketplace Scale & Results",
  description:
    "See how Indian consumer brands scaled GMV by +310%, reached ₹1.4 Cr monthly run-rates, and defended Buy Box share with Social Technologies.",
  openGraph: {
    title: "Marketplace Case Studies | Social Technologies",
    description:
      "Real metrics from active stores on Amazon India, Flipkart Assured, Meesho, and Myntra.",
    url: "https://socialtechnologies.in/case-studies",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Technologies Case Studies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <SplitHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.12]">
              Real brands. Battle-tested results.
            </SplitHeading>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                We believe in transparent accountability. Explore how our sub-second inventory sync,
                1P distribution, and algorithmic advertising transformed e-commerce unit economics
                for emerging and enterprise Indian manufacturers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Case Studies Listing Grid */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group relative rounded-2xl border border-[#E4E7EC] bg-white p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#2563EB] font-medium">{study.industry}</span>
                    <span className="font-mono text-xs text-[#667085]">{study.date}</span>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#2563EB] block">
                      {study.metric}
                    </span>
                    <span className="text-xs font-mono text-[#667085] uppercase tracking-wider">
                      {study.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#2563EB] transition-colors mb-3">
                    {study.title}
                  </h3>

                  <p className="text-xs text-[#667085] leading-relaxed mb-6">
                    {study.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#E4E7EC] flex flex-wrap gap-1.5 mb-6">
                    {study.channels.map((ch) => (
                      <span
                        key={ch}
                        className="rounded bg-[#F5F7FA] border border-[#E4E7EC] px-2 py-0.5 text-[11px] font-mono text-[#667085]"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#2563EB] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Read Full Case Study</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Carousel Section */}
      <TrustCarousel />

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
