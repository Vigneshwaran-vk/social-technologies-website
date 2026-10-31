"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "services",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in your name, business email, and message.");
      return;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter a valid business email address.");
      return;
    }

    setError("");
    setLoading(true);

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
        <h3 className="mt-6 text-2xl font-bold text-[#101828]">Message Dispatched</h3>
        <p className="mt-2 text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-[#101828] font-semibold">{formData.name}</span>. Your inquiry
          has been assigned to our marketplace operations desk. A specialist will follow up via email
          or WhatsApp within 15 minutes during market trading hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              interest: "services",
              message: "",
            });
          }}
          className="mt-6 text-xs font-mono text-[#2563EB] font-semibold hover:underline transition-colors"
        >
          ← Send another message
        </button>
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
          Direct Dispatch
        </span>
        <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#101828]">
          Connect with Our Marketplace Operations Desk
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-[#667085]">
          Tell us about your brand, SKU volume, or marketplace operational challenges.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 font-mono">
          {error}
        </div>
      )}

      <div className="space-y-4 sm:space-y-5">
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
              placeholder="e.g. Vikram Malhotra"
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
              placeholder="vikram@brand.com"
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
              Company / Brand
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Consumer Tech"
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
            Primary Area of Interest
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          >
            <option value="services">Marketplace Growth Services (Ads, Catalog, Health)</option>
            <option value="icm-retails">ICM Retails 1P Distribution (Wholesale Buyout)</option>
            <option value="lgm-leader">LGM Leader (Local Discovery &amp; Leads)</option>
            <option value="partner-program">Partner Program (Brand, 3PL, Tech, Agency)</option>
            <option value="general">Book an Ecosystem Demo</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-[#667085] mb-1.5 uppercase font-semibold">
            Message / Specific Problem Statement *
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share details on your current marketplace channels, inventory sync issues, or advertising targets..."
            className="w-full rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3 text-sm text-[#101828] placeholder-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-xl bg-[#101828] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1E293B] shadow-sm disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Sending Message..." : "Dispatch Message to Operations Team →"}
        </button>
      </div>
    </form>
  );
}
