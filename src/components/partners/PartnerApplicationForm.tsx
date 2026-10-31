"use client";

import { useState } from "react";

export function PartnerApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    tier: "brand",
    volume: "10-50L",
    channels: [] as string[],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChannelToggle = (channel: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter((c) => c !== channel)
        : [...prev.channels, channel],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setError("Please fill in your name, work email, and company name.");
      return;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter a valid business email address.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#BFDBFE] bg-white p-8 sm:p-12 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-3xl text-[#2563EB]">
          ✓
        </div>
        <h3 className="mt-6 text-2xl font-bold text-[#101828]">Application Received</h3>
        <p className="mt-2 text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-[#101828] font-semibold">{formData.name}</span>. Our Partner
          Desk has received your application for{" "}
          <span className="text-[#2563EB] font-semibold">{formData.company}</span>. A category director
          will review your tier eligibility and reach out within 24 business hours.
        </p>
        <div className="mt-8 pt-6 border-t border-[#E4E7EC] flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                tier: "brand",
                volume: "10-50L",
                channels: [],
                message: "",
              });
            }}
            className="text-xs font-mono text-[#2563EB] font-semibold hover:underline transition-colors"
          >
            ← Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#E4E7EC] bg-white p-6 sm:p-10 shadow-sm"
    >
      <div className="mb-6">
        <span className="font-mono text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
          Ecosystem Application
        </span>
        <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#101828]">
          Apply to the Social Technologies Partner Program
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-[#667085]">
          Select your partner tier and provide initial brand or infrastructure parameters.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 font-mono">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Tier Selection */}
        <div>
          <label className="block text-xs font-mono text-[#667085] mb-2 uppercase font-semibold">
            1. Select Program Tier
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: "brand", label: "Brand / 1P Wholesale", desc: "Wholesale buyout & ICM Retails distribution" },
              { id: "logistics", label: "3PL & Logistics Node", desc: "Dark stores, line-haul & micro-fulfillment" },
              { id: "tech", label: "Tech / ERP Partner", desc: "API integrations, WMS & inventory sync" },
              { id: "agency", label: "Agency & Referral", desc: "Client co-selling & revenue share" },
            ].map((t) => (
              <label
                key={t.id}
                className={`relative flex flex-col p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  formData.tier === t.id
                    ? "border-[#2563EB] bg-[#EFF6FF] text-[#101828]"
                    : "border-[#E4E7EC] bg-[#F5F7FA] text-[#667085] hover:border-[#D0D5DD]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#101828]">{t.label}</span>
                  <input
                    type="radio"
                    name="tier"
                    value={t.id}
                    checked={formData.tier === t.id}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="h-3.5 w-3.5 accent-[#2563EB]"
                  />
                </div>
                <span className="mt-1 text-xs text-[#667085]">{t.desc}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
              Work Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="rahul@brand.com"
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
              Company / Brand Name *
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Consumer Goods"
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>
        </div>

        {/* Current Scale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
              Monthly E-Commerce GMV Run-Rate
            </label>
            <select
              value={formData.volume}
              onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            >
              <option value="under-10L">Under ₹10 Lakhs / Early Stage</option>
              <option value="10-50L">₹10 Lakhs - ₹50 Lakhs / Scaling</option>
              <option value="50L-2Cr">₹50 Lakhs - ₹2 Crores / High Volume</option>
              <option value="2Cr+">₹2 Crores+ / Enterprise Brand</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
              Primary Active Channels
            </label>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Amazon", "Flipkart", "Meesho", "Myntra", "Quick Commerce", "D2C Shopify"].map(
                (ch) => (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => handleChannelToggle(ch)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-mono transition-all cursor-pointer ${
                      formData.channels.includes(ch)
                        ? "bg-[#2563EB] text-white font-semibold shadow-xs"
                        : "bg-[#F5F7FA] text-[#667085] border border-[#E4E7EC] hover:border-[#D0D5DD]"
                    }`}
                  >
                    {ch}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
            Brief Overview of Partnership Goals
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your product categories, distribution bottlenecks, or technical integration requirements..."
            className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-xl bg-[#101828] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1E293B] shadow-sm disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Submitting Application..." : "Submit Partner Application →"}
        </button>

        <p className="text-center text-[11px] font-mono text-[#667085]">
          Confidentiality guaranteed. We sign mutual NDAs before reviewing proprietary sales data.
        </p>
      </div>
    </form>
  );
}
