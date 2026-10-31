import { Metadata } from "next";
import Link from "next/link";
import { SplitHeading, Reveal } from "@/components/motion";
import { getBlogPosts } from "@/lib/mdx";
import { FinalCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Blog & Intelligence | Indian Marketplace Strategy & Logistics",
  description:
    "Direct insights from India's marketplace front lines: algorithm updates, 1P vs 3P economics, quick commerce dark store logistics, and Buy Box defense.",
  openGraph: {
    title: "Marketplace Intelligence & Blog | Social Technologies",
    description:
      "Playbooks and dispatches on Amazon, Flipkart, Meesho, Myntra, and quick commerce fulfillment.",
    url: "https://socialtechnologies.in/blog",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Technologies Marketplace Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogListingPage() {
  const posts = getBlogPosts();

  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <SplitHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.12]">
              Intelligence from the Indian e-commerce trenches.
            </SplitHeading>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                We write about what we learn while dispatching thousands of orders every day.
                Algorithms, fee changes, dark store routing, and operational strategies for brands
                scaling in India.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative rounded-2xl border border-[#E4E7EC] bg-white p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-0.5 rounded font-medium">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-[#667085]">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101828] group-hover:text-[#2563EB] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E7EC] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#101828]">{post.author}</div>
                    <div className="text-[11px] font-mono text-[#667085]">{post.authorRole}</div>
                  </div>
                  <div className="font-mono text-xs text-[#2563EB] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
