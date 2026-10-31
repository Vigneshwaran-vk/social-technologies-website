import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/mdx";
import { FinalCTA } from "@/components/sections";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Social Technologies",
    };
  }

  return {
    title: `${study.client} Case Study | Social Technologies`,
    description: study.description,
    openGraph: {
      title: `${study.client} (${study.metric}) | Case Study`,
      description: study.description,
      url: `https://socialtechnologies.in/case-studies/${study.slug}`,
      siteName: "Social Technologies",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${study.client} Case Study`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // Split markdown sections by headings (###) to render cleanly
  const sections = study.content
    .split(/(?=###\s+)/)
    .filter((sec) => sec.trim().length > 0);

  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Header Breadcrumb & Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#667085] hover:text-[#2563EB] transition-colors mb-6"
          >
            <span>← Back to all case studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
              {study.industry}
            </span>
            <span className="font-mono text-xs text-[#667085]">{study.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#101828] leading-tight mb-6">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-8">
            {study.description}
          </p>

          {/* Metric Highlight Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-6 shadow-sm">
            <div>
              <div className="text-xs font-mono text-[#667085] uppercase tracking-wider">
                Client Brand
              </div>
              <div className="text-base font-semibold text-[#101828] mt-1">
                {study.client}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#667085] uppercase tracking-wider">
                Primary Impact
              </div>
              <div className="text-2xl font-bold text-[#2563EB] mt-0.5">
                {study.metric}
              </div>
              <div className="text-[11px] font-mono text-[#667085]">{study.metricLabel}</div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#667085] uppercase tracking-wider mb-1.5">
                Channels Deployed
              </div>
              <div className="flex flex-wrap gap-1">
                {study.channels.map((ch) => (
                  <span
                    key={ch}
                    className="rounded bg-white border border-[#E4E7EC] px-2 py-0.5 text-[11px] font-mono text-[#101828]"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content Body */}
      <section className="py-16 md:py-24 border-b border-[#E4E7EC] bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, idx) => {
              const lines = section.trim().split("\n");
              const headingLine = lines[0].startsWith("###")
                ? lines[0].replace(/^###\s+/, "")
                : null;
              const bodyLines = headingLine ? lines.slice(1).join("\n").trim() : section.trim();

              return (
                <div key={idx} className="border-b border-[#E4E7EC] pb-10 last:border-b-0">
                  {headingLine && (
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] mb-4">
                      {headingLine}
                    </h2>
                  )}
                  <div className="space-y-4 text-sm sm:text-base text-[#667085] leading-relaxed whitespace-pre-line">
                    {bodyLines}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-[#E4E7EC] flex items-center justify-between">
            <Link
              href="/case-studies"
              className="text-xs font-mono text-[#667085] hover:text-[#101828] transition-colors"
            >
              ← All Case Studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#101828] px-5 py-2.5 text-xs font-semibold text-white hover:bg-black transition-all"
            >
              <span>Get Similar Results</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
