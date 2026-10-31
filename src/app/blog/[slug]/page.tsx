import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/mdx";
import { FinalCTA } from "@/components/sections";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Social Technologies",
    };
  }

  return {
    title: `${post.title} | Social Technologies`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://socialtechnologies.in/blog/${post.slug}`,
      siteName: "Social Technologies",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Split markdown sections by headings (###) to render cleanly
  const sections = post.content
    .split(/(?=###\s+)/)
    .filter((sec) => sec.trim().length > 0);

  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Header Breadcrumb & Article Header */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#667085] hover:text-[#2563EB] transition-colors mb-6"
          >
            <span>← Back to all articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="font-mono text-xs text-[#667085]">{post.readTime}</span>
            <span className="text-[#E4E7EC]">·</span>
            <span className="font-mono text-xs text-[#667085]">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#101828] leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-4 border-t border-[#E4E7EC] pt-6">
            <div className="h-11 w-11 rounded-full bg-[#F5F7FA] border border-[#E4E7EC] flex items-center justify-center font-mono font-bold text-sm text-[#2563EB]">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="text-sm font-semibold text-[#101828]">{post.author}</div>
              <div className="text-xs font-mono text-[#667085]">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Body */}
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
              href="/blog"
              className="text-xs font-mono text-[#667085] hover:text-[#101828] transition-colors"
            >
              ← Back to all articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#101828] px-5 py-2.5 text-xs font-semibold text-white hover:bg-black transition-all"
            >
              <span>Talk to Our Marketplace Team</span>
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
