import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Measure3 was built by operators who've run marketing inside home service companies, not agency guys.",
};

export default function AboutPage() {
  return (
    <PageHero
      badge="About us"
      heading="Built by operators, not agency guys"
      description="We've sat in the seat — running marketing inside home service companies, managing real budgets, and answering to real revenue targets. Detailed page coming soon."
    />
  );
}
