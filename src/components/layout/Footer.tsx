"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    links: [
      {
        name: "LGM Leader",
        href: "https://lgm.socialtechnologies.in",
        external: true,
        badge: "Live",
      },
      { name: "ICM Retails (1P Selling)", href: "/products/icm-retails" },
      { name: "Marketplace Growth Suite", href: "/services" },
      { name: "Local Discovery Engine", href: "/products/lgm-leader" },
      { name: "Partner Program Portal", href: "/partners" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Marketplace Onboarding", href: "/services#onboarding" },
      { name: "Cataloging & Enrichment", href: "/services#cataloging" },
      { name: "Performance Advertising", href: "/services#advertising" },
      { name: "Account Health & Operations", href: "/services#operations" },
      { name: "Multi-Channel Fulfillment", href: "/services#fulfillment" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Social Tech", href: "/about" },
      { name: "The Ecosystem Story", href: "/about#ecosystem" },
      { name: "Why We Sell Ourselves", href: "/about#1p-model" },
      { name: "Partner Network", href: "/partners" },
      { name: "Careers", href: "/careers", badge: "Hiring" },
      { name: "Contact & Support", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Marketplace Playbooks", href: "/resources/playbooks" },
      { name: "India E-Commerce Insights", href: "/resources/insights" },
      { name: "API & Data Integrations", href: "/resources/integrations" },
      { name: "Trust & Compliance", href: "/legal/compliance" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-[#E4E7EC] bg-white text-[#101828]">
      {/* Top Newsletter & Ecosystem Teaser Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-[#E4E7EC] bg-[#F5F7FA] p-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12 shadow-[0_1px_3px_0_rgba(16,24,40,0.06)]">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-white px-3 py-1 font-mono text-xs font-medium text-[#667085]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              Intelligence from India&apos;s Marketplaces
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#101828] sm:text-3xl">
              Stay ahead of e-commerce shifts.
            </h3>
            <p className="mt-2 text-sm text-[#667085] max-w-xl leading-relaxed">
              Bi-weekly dispatch on marketplace algorithm updates, Indian consumer shopping trends,
              and seller operational playbooks straight from our active accounts.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] p-4 text-center">
                <p className="text-sm font-semibold text-[#2563EB]">
                  ✓ You&apos;re on the insider list.
                </p>
                <p className="mt-1 text-xs text-[#667085]">
                  Watch your inbox for our latest marketplace breakdown.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Work Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your work email"
                    className="h-12 w-full rounded-xl border border-[#E4E7EC] bg-white px-4 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                  />
                  {error && <p className="mt-1 text-xs text-rose-500 font-mono">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-xl bg-[#101828] px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E293B] shadow-sm active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Link Columns + Brand Info */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-xs leading-relaxed text-[#667085]">
              We build the tools, run the services, and sell on every Indian marketplace ourselves.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#E4E7EC] bg-[#F5F7FA] px-2.5 py-1 text-[11px] font-mono text-[#667085]">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              <span>HQ: New Delhi, India</span>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="col-span-1">
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#101828]">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-[#667085] transition-colors hover:text-[#2563EB]"
                      >
                        <span>{link.name}</span>
                        {link.badge && (
                          <span className="rounded bg-[#EFF6FF] px-1 py-0.2 font-mono text-[9px] text-[#2563EB] border border-[#BFDBFE]">
                            {link.badge}
                          </span>
                        )}
                        <span className="text-[10px] opacity-60 group-hover:translate-x-0.5 transition-transform">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-[#667085] transition-colors hover:text-[#101828]"
                      >
                        <span>{link.name}</span>
                        {link.badge && (
                          <span className="rounded bg-[#EFF6FF] px-1 py-0.2 font-mono text-[9px] text-[#2563EB] border border-[#BFDBFE]">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Legal, Social Icons, and Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#E4E7EC] pt-8 sm:flex-row">
          <p className="text-xs text-[#667085] text-center sm:text-left">
            © 2026 Social Technologies Private Limited. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#667085] transition-colors hover:text-[#2563EB]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.06 1.53 1.53 0 0 0 .01 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-[#667085] transition-colors hover:text-[#2563EB]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#667085] transition-colors hover:text-[#2563EB]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#667085] transition-colors hover:text-[#2563EB]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#667085]">
            <Link href="/privacy" className="hover:text-[#101828] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#101828] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#101828] transition-colors">
              Cookie Policy
            </Link>
            <Link href="/security" className="hover:text-[#101828] transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
