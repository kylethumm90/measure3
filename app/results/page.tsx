import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Case studies and results from HVAC, roofing, plumbing, and solar companies using Measure3 marketing systems.",
};

export default function ResultsPage() {
  return (
    <PageHero
      badge="Proof"
      heading="Real results from real operators"
      description="Case studies from home service companies we've worked with. Detailed page coming soon."
    />
  );
}
