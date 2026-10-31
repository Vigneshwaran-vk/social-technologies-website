import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Social Technologies - The Marketplace Operating System",
  description:
    "We build proprietary commerce software, run high-velocity 1P marketplace stores through ICM Retails, and scale Indian brands across every e-commerce channel.",
  openGraph: {
    title: "About Social Technologies | Every marketplace. One team.",
    description:
      "The story, vision, and team behind India's unified marketplace commerce infrastructure.",
    url: "https://socialtechnologies.in/about",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Social Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-[70vh] bg-white">
      {/* Ready for new content */}
    </div>
  );
}
