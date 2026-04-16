import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-subtle bg-[#f5f5f4]" style={{ borderBottom: "none", borderLeft: "none", borderRight: "none" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <p className="text-sm text-[#6b7280]">&copy; {year} Measure3 Consulting, LLC</p>
          <span className="text-sm text-[#6b7280]">Huntsville, AL</span>
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
