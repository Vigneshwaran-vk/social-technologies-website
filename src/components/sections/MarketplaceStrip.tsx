"use client";

import Image from "next/image";
import { useReducedMotion } from "@/components/motion";
import { cn } from "@/lib/utils";

interface MarketplaceItem {
  id: string;
  name: string;
  tagline: string;
  brandColor: string;
  imageSrc?: string;
  renderLogo?: () => React.ReactNode;
}

const MARKETPLACES: MarketplaceItem[] = [
  {
    id: "amazon",
    name: "Amazon India",
    tagline: "Prime & Fulfilled by Amazon",
    brandColor: "#C25E00",
    imageSrc: "/logos/amazon.png",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    tagline: "Assured & Big Billion Days",
    brandColor: "#1D4ED8",
    imageSrc: "/logos/flipkart.png",
  },
  {
    id: "meesho",
    name: "Meesho",
    tagline: "Bharat Tier 2/3 Pioneer",
    brandColor: "#9D174D",
    imageSrc: "/logos/meesho-badge.png",
  },
  {
    id: "myntra",
    name: "Myntra",
    tagline: "Fashion & Lifestyle",
    brandColor: "#BE123C",
    imageSrc: "/logos/myntra.png",
  },
  {
    id: "nykaa",
    name: "Nykaa",
    tagline: "Beauty & Personal Care",
    brandColor: "#D81B60",
    imageSrc: "/logos/nykaa.png",
  },
  {
    id: "ajio",
    name: "Ajio",
    tagline: "Reliance Digital & Trends",
    brandColor: "#1D4ED8",
    imageSrc: "/logos/ajio.png",
    renderLogo: () => (
      <svg className="h-7 w-auto" viewBox="0 0 120 36" fill="currentColor">
        <path d="M18 6h5.5l9.5 24h-5.8l-2.2-5.8H15L12.8 30H7L18 6zm5.2 14.2L20.8 13l-2.4 7.2h4.8zM36 6h5.8v18c0 4.2-2.8 6.5-7.5 6.5-2.2 0-4.4-.6-5.8-1.5l1.6-4.2c1 .6 2.4 1.1 3.8 1.1 2.2 0 3.5-.9 3.5-3V6h-1.4zm12 0h5.8v24H48V6zm14 12c0-7.2 5.2-12.5 12.8-12.5 7.6 0 12.8 5.3 12.8 12.5 0 7.2-5.2 12.5-12.8 12.5-7.6 0-12.8-5.3-12.8-12.5zm19.6 0c0-4.5-2.8-7.8-6.8-7.8s-6.8 3.3-6.8 7.8 2.8 7.8 6.8 7.8 6.8-3.3 6.8-7.8z" />
      </svg>
    ),
  },
  {
    id: "blinkit",
    name: "Blinkit",
    tagline: "Quick Commerce 10-Min Engine",
    brandColor: "#CA8A04",
    imageSrc: "/logos/blinkit.png",
  },
];

export function MarketplaceStrip() {
  const prefersReducedMotion = useReducedMotion();

  // Double the array to create a seamless infinite loop
  const marqueeItems = [...MARKETPLACES, ...MARKETPLACES];

  return (
    <section className="relative overflow-hidden border-b border-[#E4E7EC] bg-[#F5F7FA] py-12 sm:py-16">
      {/* Edge Fade Masks for Smooth Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-20 sm:w-36 bg-gradient-to-r from-[#F5F7FA] via-[#F5F7FA]/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-20 sm:w-36 bg-gradient-to-l from-[#F5F7FA] via-[#F5F7FA]/80 to-transparent"
      />

      {/* Context Header */}
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#667085]">
          Direct API integrations, multi-channel catalog feeds &amp; proprietary 1P storefronts
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track with Pause on Hover */}
      <div className="pause-on-hover relative flex w-full overflow-hidden">
        <div
          className={cn(
            "flex shrink-0 items-center gap-6 sm:gap-8 will-change-transform",
            !prefersReducedMotion ? "animate-marquee" : "overflow-x-auto py-2"
          )}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative flex h-20 sm:h-24 min-w-[170px] sm:min-w-[210px] items-center justify-center rounded-2xl border border-[#E4E7EC] bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:border-[#D0D5DD] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="relative z-10 flex flex-col items-center justify-center text-[#667085] transition-all duration-300 group-hover:scale-105">
                <div className="h-8 sm:h-9 flex items-center justify-center">
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={130}
                      height={36}
                      className={cn(
                        "h-7 sm:h-8 w-auto max-w-[130px] object-contain transition-transform duration-300",
                        (item.id === "meesho" || item.id === "blinkit") && "rounded-md sm:rounded-lg"
                      )}
                    />
                  ) : item.renderLogo ? (
                    <div
                      className="transition-colors duration-300"
                      style={{
                        color: item.brandColor,
                      }}
                    >
                      {item.renderLogo()}
                    </div>
                  ) : null}
                </div>
                <span className="mt-1.5 text-[10px] font-mono tracking-wider text-[#667085] group-hover:text-[#101828]">
                  {item.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
