"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#results", label: "Results" },
  { href: "/about", label: "About" },
] as const;

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="17" y2="6" />
      <line x1="3" y1="10" x2="17" y2="10" />
      <line x1="3" y1="14" x2="17" y2="14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-subtle">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Measure3 home">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1a1a1a]">
            <span className="text-[11px] font-medium text-[#B8860B] leading-none">M3</span>
          </div>
          <span className="hidden text-sm font-medium text-[#1a1a1a] sm:inline">Measure3</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-[#B8860B] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#A07608] sm:inline-block"
          >
            Book a call
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[rgba(0,0,0,0.1)] bg-white px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[#B8860B] px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#A07608]"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
