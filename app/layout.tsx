import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Measure3 — AI marketing systems for home services",
    template: "%s | Measure3",
  },
  description:
    "We help HVAC, roofing, plumbing, and solar companies grow with AI-driven marketing systems that actually measure what's working.",
  keywords: [
    "home services marketing",
    "HVAC marketing consultant",
    "AI marketing for contractors",
    "roofing marketing",
    "plumbing marketing",
    "solar marketing",
  ],
  openGraph: {
    title: "Measure3 — AI marketing systems for home services",
    description:
      "We help HVAC, roofing, plumbing, and solar companies grow with AI-driven marketing systems that actually measure what's working.",
    url: "https://measure3.com",
    siteName: "Measure3",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Measure3 — AI marketing systems for home services",
    description:
      "Stop losing leads. Start closing jobs. AI-powered marketing for home service businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
