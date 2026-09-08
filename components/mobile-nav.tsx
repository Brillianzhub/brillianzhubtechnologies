"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { company } from "@/lib/content/company";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Open menu"
        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-ink"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-canvas">
          <div className="flex h-16 items-center justify-between border-b border-line px-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-base font-medium tracking-tight text-ink"
            >
              {company.shortName}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-ink"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-lg text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-lg border border-line px-3 py-3 text-center text-lg text-ink"
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
