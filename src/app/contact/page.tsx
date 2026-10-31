import { Metadata } from "next";
import { SplitHeading, Reveal, Magnetic } from "@/components/motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { PLACEHOLDERS } from "@/content";

export const metadata: Metadata = {
  title: "Contact Us | Social Technologies Operations Desk",
  description:
    "Get in touch with the Social Technologies marketplace team. Operations desk located in New Delhi NCR. Connect via contact form or direct WhatsApp.",
  openGraph: {
    title: "Contact Social Technologies | Operations & Inquiries",
    description:
      "Schedule a marketplace audit or connect directly with our operations team via WhatsApp.",
    url: "https://socialtechnologies.in/contact",
    siteName: "Social Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Social Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  const prefilledMessage = encodeURIComponent(
    "Hi Social Technologies team, I'd like to discuss onboarding our brand catalog and scaling across Indian marketplaces."
  );
  const whatsappUrl = `https://wa.me/${PLACEHOLDERS.WHATSAPP_NUMBER}?text=${prefilledMessage}`;

  return (
    <main className="bg-white text-[#101828] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-[#E4E7EC] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <SplitHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.12]">
              Let&apos;s talk marketplace velocity.
            </SplitHeading>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                Whether you need sub-second inventory sync, 1P wholesale distribution via ICM
                Retails, or automated deduction audit, our marketplace operations team is ready to
                review your numbers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Form + Info & Map */}
      <section className="py-20 md:py-28 bg-[#F5F7FA] border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct WhatsApp + Interactive Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp Quick Connect Card */}
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#25D366]">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.115.549 4.104 1.516 5.834l-1.61 5.882 6.024-1.581c1.663.908 3.565 1.428 5.587 1.428 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#101828]">Instant WhatsApp Connect</h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Live Response Desk (&lt;15 mins)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#667085] leading-relaxed mb-6">
                  Skip the contact form if you need urgent technical or account support. Connect
                  directly with our operations duty manager.
                </p>

                <Magnetic strength={0.2}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#20ba5a] shadow-sm"
                  >
                    <span>Open WhatsApp Chat</span>
                    <span className="text-base">↗</span>
                  </a>
                </Magnetic>
              </div>

              {/* Headquarters Map Card */}
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#2563EB] uppercase tracking-wider font-semibold">
                    HQ Coordinates
                  </span>
                  <span className="font-mono text-xs text-[#667085]">28.4986° N, 77.0878° E</span>
                </div>

                {/* Styled Map SVG */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-[#E4E7EC] bg-[#F5F7FA] flex items-center justify-center">
                  {/* Subtle Grid Lines */}
                  <svg
                    className="absolute inset-0 h-full w-full opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                        <path
                          d="M 32 0 L 0 0 0 32"
                          fill="none"
                          stroke="#E4E7EC"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#map-grid)" />
                  </svg>

                  {/* Concentric Radar Rings */}
                  <div className="absolute h-36 w-36 rounded-full border border-[#BFDBFE]" />
                  <div className="absolute h-20 w-20 rounded-full border border-[#93C5FD]" />

                  {/* Center Node Pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB] shadow-sm">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                    <span className="mt-2 rounded-lg bg-white border border-[#E4E7EC] px-2.5 py-1 text-[11px] font-mono font-medium text-[#101828] shadow-sm">
                      Social Technologies HQ
                    </span>
                  </div>

                  {/* Corner Watermarks */}
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#667085]">
                    Cyber City Corridor · New Delhi NCR
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-[10px] text-[#2563EB] font-semibold">
                    ● Terminal Node: Online
                  </div>
                </div>

                {/* HQ Address Details */}
                <div className="mt-6 space-y-3 text-xs text-[#667085]">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#2563EB] mt-0.5">📍</span>
                    <div>
                      <strong className="text-[#101828] block font-semibold">Headquarters Address</strong>
                      Sector 24, Cyber City / Cyber Hub Corridor, Gurugram, New Delhi NCR, 122002, India
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-[#2563EB] mt-0.5">⏱️</span>
                    <div>
                      <strong className="text-[#101828] block font-semibold">Hours of Operation</strong>
                      Marketplace Trading Desk: Monday – Saturday (8:00 AM – 10:00 PM IST)
                      <br />
                      Automated Sync Kernel: 24/7/365 Non-Stop
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-[#2563EB] mt-0.5">✉️</span>
                    <div>
                      <strong className="text-[#101828] block font-semibold">Email Desks</strong>
                      General:{" "}
                      <a href="mailto:support@socialtechnologies.in" className="text-[#2563EB] hover:underline">
                        support@socialtechnologies.in
                      </a>
                      <br />
                      Partnerships:{" "}
                      <a href="mailto:partners@socialtechnologies.in" className="text-[#2563EB] hover:underline">
                        partners@socialtechnologies.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
