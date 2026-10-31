import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://socialtechnologies.in"),
  title: {
    default: "Social Technologies | Every marketplace. One team.",
    template: "%s | Social Technologies",
  },
  description:
    "We build the tools, run the services, and sell on every marketplace ourselves. Powering Indian e-commerce with LGM Leader, ICM Retails, and Marketplace Growth Services.",
  openGraph: {
    title: "Social Technologies | Every marketplace. One team.",
    description:
      "India's unified commerce infrastructure: LGM Leader, ICM Retails 1P, and Managed Marketplace Growth.",
    url: "https://socialtechnologies.in",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Technologies | Every marketplace. One team.",
    description:
      "India's unified commerce infrastructure: LGM Leader, ICM Retails 1P, and Managed Marketplace Growth.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-[#101828] flex flex-col selection:bg-[#EFF6FF] selection:text-[#2563EB]">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
