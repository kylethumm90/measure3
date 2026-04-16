import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From discovery to scale in four weeks. See how Measure3 builds marketing systems for home service companies.",
};

export default function HowItWorksPage() {
  return (
    <PageHero
      badge="Our process"
      heading="From first call to measurable results"
      description="A four-week onboarding that gets your marketing running right. Detailed page coming soon."
    />
  );
}
