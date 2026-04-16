import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { MetricCard } from "@/components/metric-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";

const services = [
  {
    number: "01",
    title: "Paid media audit",
    description:
      "We tear apart your Google Ads, LSA, and Meta campaigns line by line. You get a clear report on what's working, what's bleeding money, and exactly what to fix.",
    detail: "Fixed fee \u00b7 2 weeks",
  },
  {
    number: "02",
    title: "AI lead engine",
    description:
      "Speed-to-lead automation, AI-powered follow-up sequences, and a system that books jobs while your team sleeps. Built on the tools you already use.",
    detail: "Monthly retainer",
  },
  {
    number: "03",
    title: "Fractional CMO",
    description:
      "A senior marketing operator embedded in your business. Strategy, vendor management, reporting, and accountability without the six-figure salary.",
    detail: "Monthly retainer",
  },
];

const steps = [
  {
    week: "Week 1",
    title: "Discovery",
    description: "We learn your business, your numbers, and where leads are falling through the cracks.",
  },
  {
    week: "Week 2",
    title: "Audit",
    description: "Full teardown of your ad accounts, CRM, follow-up process, and conversion tracking.",
  },
  {
    week: "Week 3",
    title: "Build",
    description: "We rebuild what's broken — new campaigns, automations, tracking, and reporting dashboards.",
  },
  {
    week: "Week 4+",
    title: "Scale",
    description: "Ongoing optimization. We test, measure, and scale what's working while cutting what's not.",
  },
];

const metrics = [
  { value: "\u221242%", label: "Average reduction in cost per booked job" },
  { value: "<60s", label: "Speed-to-lead response time" },
  { value: "$12M+", label: "Revenue attributed to our systems" },
];

const clients = [
  "Apex HVAC",
  "Summit Roofing",
  "ClearFlow Plumbing",
  "SunPeak Solar",
  "ProComfort Heating",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="mb-5 inline-block rounded-full bg-[#f5f5f4] px-3 py-1 text-xs font-medium text-[#6b7280]">
            AI-powered marketing for home services
          </span>
          <h1
            className="text-3xl font-medium text-[#1a1a1a] sm:text-4xl lg:text-5xl"
            style={{ lineHeight: 1.15 }}
          >
            More jobs booked.{" "}
            <span className="block sm:inline">Less money wasted on ads.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6b7280]">
            We help HVAC, roofing, plumbing, and solar companies grow with
            AI-driven marketing systems that actually measure what&apos;s working.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-[#2563eb] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Get a free marketing audit
            </Link>
            <Link
              href="/#how-it-works"
              className="rounded-lg bg-[#f5f5f4] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#e5e5e4]"
            >
              See how it works
            </Link>
          </div>

          {/* Proof stats */}
          <div
            className="mx-auto mt-12 flex max-w-lg items-center justify-center gap-8 sm:gap-12"
            style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}
          >
            <div className="pt-8 text-center">
              <span className="text-lg font-medium text-[#1a1a1a]">40+</span>
              <p className="text-xs text-[#6b7280]">Brands served</p>
            </div>
            <div className="pt-8 text-center">
              <span className="text-lg font-medium text-[#1a1a1a]">$12M+</span>
              <p className="text-xs text-[#6b7280]">Revenue driven</p>
            </div>
            <div className="pt-8 text-center">
              <span className="text-lg font-medium text-[#1a1a1a]">3.2x</span>
              <p className="text-xs text-[#6b7280]">Avg. ROAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client logo bar */}
      <section className="bg-[#f5f5f4] py-10">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-6 text-center text-xs font-medium text-[#6b7280] tracking-wide">
            Operators we&apos;ve helped grow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {clients.map((name) => (
              /* PLACEHOLDER — replace with actual logos */
              <span key={name} className="text-sm font-medium text-[#9ca3af]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
              Three ways we help you grow
            </h2>
            <p className="mt-3 text-sm text-[#6b7280]">
              Pick what fits. Most clients start with an audit and scale from there.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#f5f5f4] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
              How it works
            </h2>
            <p className="mt-3 text-sm text-[#6b7280]">
              From first call to measurable results in four weeks.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.week}
                className="flex flex-col gap-3 rounded-xl bg-white p-6"
                style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
              >
                <span className="text-xs font-medium text-[#2563eb]">
                  {step.week}
                </span>
                <h3 className="text-base font-medium text-[#1a1a1a]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b7280]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
              Results that matter
            </h2>
            <p className="mt-3 text-sm text-[#6b7280]">
              Numbers from real home service companies, not vanity metrics.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.value} {...metric} />
            ))}
          </div>
          <div className="mt-5">
            {/* PLACEHOLDER — replace with real testimonial */}
            <TestimonialCard
              quote="We were spending $15k a month on ads and had no idea what was working. Measure3 cut our cost per booked job nearly in half and we can actually see where every dollar goes now."
              name="Derek Ramirez"
              company="Apex HVAC"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Ready to see where your marketing is leaking?"
        description="Book a free 30-minute audit. We'll show you exactly where you're losing money and how to fix it."
        buttonText="Get a free audit"
        buttonHref="/contact"
      />
    </>
  );
}
