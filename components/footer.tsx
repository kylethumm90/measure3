import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-subtle bg-[#fafafa]" style={{ borderBottom: "none", borderLeft: "none", borderRight: "none" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Image src="/logo.png" alt="Measure3" width={120} height={34} className="h-7 w-auto" />
          <p className="text-sm text-[#6b7280]">&copy; {year} Measure3 Consulting, LLC &middot; Huntsville, AL</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">
            Contact
          </Link>
          <span className="text-sm text-[#6b7280]">Privacy</span>
          <span className="text-sm text-[#6b7280]">Terms</span>
        </div>
      </div>
    </footer>
  );
}
