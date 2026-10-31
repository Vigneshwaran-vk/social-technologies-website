"use client";

import { useState } from "react";
import { FAQS_DATA } from "@/content";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  // Structured Data Schema for SEO Rich Results (FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative bg-white text-[#101828] py-20 sm:py-28 border-b border-[#E4E7EC]">
      {/* FAQPage Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#667085] max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our unified technology stack, 1P commerce model, and
            marketplace execution.
          </p>
        </div>

        {/* 8 Accordion Questions with Smooth Height Transition */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-[#BFDBFE] bg-white shadow-sm"
                    : "border-[#E4E7EC] bg-[#F5F7FA] hover:border-[#D0D5DD] hover:bg-white"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-bold text-[#101828] pr-4 leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-sm transition-transform duration-300",
                      isOpen
                        ? "rotate-180 text-[#2563EB] border-[#BFDBFE] bg-[#EFF6FF]"
                        : "text-[#667085] border-[#E4E7EC] bg-white"
                    )}
                  >
                    ↓
                  </span>
                </button>

                {/* CSS Grid Smooth Height Expansion */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-[#F2F4F7] pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
