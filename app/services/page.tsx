import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Paid media audits, AI lead engines, and fractional CMO services for home service businesses.",
};

export default function ServicesPage() {
  return (
    <PageHero
      badge="What we do"
      heading="Services built for home service operators"
      description="Paid media audits, AI-powered lead systems, and fractional marketing leadership. Detailed page coming soon."
    />
  );
}
