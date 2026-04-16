"use client";

import { useState } from "react";
import type { Metadata } from "next";

const adSpendOptions = [
  "Less than $5k",
  "$5k - $25k",
  "$25k - $100k",
  "$100k+",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      adSpend: (form.elements.namedItem("adSpend") as HTMLSelectElement).value,
      challenge: (form.elements.namedItem("challenge") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-lg px-5 text-center">
          <h1 className="text-3xl font-medium text-[#1a1a1a]">
            Thanks — we&apos;ll be in touch
          </h1>
          <p className="mt-4 text-sm text-[#6b7280]">
            We typically respond within one business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-lg px-5">
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-[#f5f5f4] px-3 py-1 text-xs font-medium text-[#6b7280]">
            Get started
          </span>
          <h1 className="text-3xl font-medium text-[#1a1a1a] sm:text-4xl">
            Book a free marketing audit
          </h1>
          <p className="mt-4 text-sm text-[#6b7280]">
            Tell us about your business and we&apos;ll show you where you&apos;re
            leaving money on the table.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:ring-2 focus:ring-[#2563eb]/20"
              style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:ring-2 focus:ring-[#2563eb]/20"
              style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:ring-2 focus:ring-[#2563eb]/20"
                style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:ring-2 focus:ring-[#2563eb]/20"
                style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="adSpend" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              Monthly ad spend
            </label>
            <select
              id="adSpend"
              name="adSpend"
              className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:ring-2 focus:ring-[#2563eb]/20"
              style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
            >
              <option value="">Select a range</option>
              {adSpendOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="challenge" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
              What&apos;s your biggest marketing challenge?
            </label>
            <textarea
              id="challenge"
              name="challenge"
              rows={4}
              className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:ring-2 focus:ring-[#2563eb]/20"
              style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-lg bg-[#2563eb] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get a free audit"}
          </button>
        </form>
      </div>
    </section>
  );
}
