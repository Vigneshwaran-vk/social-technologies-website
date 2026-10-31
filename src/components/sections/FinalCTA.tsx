"use client";

import Link from "next/link";
import { Magnetic } from "@/components/motion";
import { PLACEHOLDERS } from "@/content";

export function FinalCTA() {
  const prefilledMessage = encodeURIComponent(
    "Hi Social Technologies team, I'd like to explore how your unified commerce engine can scale our marketplace accounts."
  );
  const whatsappUrl = `https://wa.me/${PLACEHOLDERS.WHATSAPP_NUMBER}?text=${prefilledMessage}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F5F7FA] text-[#101828] py-24 sm:py-32 border-b border-[#E4E7EC] scroll-mt-16">
      {/* Oversized Marquee Background Text: "Let's grow together" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden select-none opacity-40"
      >
        <div className="flex w-max animate-marquee gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-[#101828]/[0.03] whitespace-nowrap"
            >
              Let&apos;s grow together • Let&apos;s grow together •
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-tight">
          Ready to eliminate the chaos and{" "}
          <span className="text-[#2563EB]">
            dominate every channel?
          </span>
        </h2>

        {/* Supporting Line */}
        <p className="mt-5 text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Book an ecosystem demo with our marketplace operations team or connect instantly via
          WhatsApp to review your brand&apos;s channel catalog.
        </p>

        {/* Action Buttons: Magnetic Book a Demo & WhatsApp Button */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Magnetic strength={0.3}>
            <Link
              href="/book-demo"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#101828] px-8 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:bg-[#1E293B] shadow-sm active:scale-[0.98]"
            >
              <span>Book a demo</span>
              <span className="text-lg">→</span>
            </Link>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl border border-[#E4E7EC] bg-white px-7 text-sm sm:text-base font-semibold text-[#101828] shadow-xs transition-all duration-200 hover:bg-[#F5F7FA] hover:border-[#D0D5DD] active:scale-[0.98]"
            >
              {/* WhatsApp Icon */}
              <svg className="h-5 w-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.115.549 4.104 1.516 5.834l-1.61 5.882 6.024-1.581c1.663.908 3.565 1.428 5.587 1.428 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </Magnetic>
        </div>

        {/* Trust Points */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#667085]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            Under 15-minute response time
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            Direct seller account audits
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            Pan-India operations desk
          </span>
        </div>
      </div>
    </section>
  );
}
