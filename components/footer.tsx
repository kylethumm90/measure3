import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f4]" style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="flex items-center gap-6">
          <p className="text-sm text-[#6b7280]">
            &copy; {new Date().getFullYear()} Measure3 Consulting, LLC
          </p>
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
