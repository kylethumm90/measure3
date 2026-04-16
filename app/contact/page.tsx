"use client";

import { useState } from "react";

const AD_SPEND_OPTIONS = [
  "Less than $5k",
  "$5k - $25k",
  "$25k - $100k",
  "$100k+",
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      adSpend: formData.get("adSpend"),
      challenge: formData.get("challenge"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-lg px-5 text-center">
          <h1 className="text-3xl font-medium text-[#1a1a1a]">
            Thanks. We&apos;ll be in touch.
          </h1>
          <p className="mt-4 text-sm text-[#6b7280]">
            We typically respond within one business day.
          </p>
        </div>
      </section>
    );
  }

  const inputClasses =
    "border-subtle w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10";

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-lg px-5">
        <div className="text-center">
          <p className="mb-4 inline-block rounded-full border border-[#B8860B]/20 bg-[#B8860B]/5 px-3 py-1 text-xs font-medium text-[#B8860B]">
            Get started
          </p>
          <h1 className="text-3xl font-medium text-[#1a1a1a] sm:text-4xl">
            Book a free marketing audit
          </h1>
          <p className="mt-4 text-sm text-[#6b7280]">
            Tell us about your business and we&apos;ll show you where you&apos;re
            leaving money on the table.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
          <fieldset className="flex flex-col gap-5" disabled={loading}>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                Name
              </label>
              <input id="name" name="name" type="text" required className={inputClasses} />
            </div>

            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                Company
              </label>
              <input id="company" name="company" type="text" className={inputClasses} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputClasses} />
              </div>
            </div>

            <div>
              <label htmlFor="adSpend" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                Monthly ad spend
              </label>
              <select id="adSpend" name="adSpend" className={inputClasses}>
                <option value="">Select a range</option>
                {AD_SPEND_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="challenge" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                What&apos;s your biggest marketing challenge?
              </label>
              <textarea id="challenge" name="challenge" rows={4} className={inputClasses} />
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-lg bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get a free audit"}
          </button>
        </form>
      </div>
    </section>
  );
}
