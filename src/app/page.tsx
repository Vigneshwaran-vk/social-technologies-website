import {
  Hero,
  MarketplaceStrip,
  EcosystemHub,
  FAQSection,
  FinalCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Marketplace Logos */}
      <MarketplaceStrip />

      {/* 3. An interconnected commerce engine */}
      <EcosystemHub />

      {/* 4. FAQ */}
      <FAQSection />

      {/* 5. Contact */}
      <FinalCTA />
    </div>
  );
}

