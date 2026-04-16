import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%231a1a1a'/><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='system-ui' font-size='13' font-weight='500'>M3</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-inter), var(--font-sans)" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
