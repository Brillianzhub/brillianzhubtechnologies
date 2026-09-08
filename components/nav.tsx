import Link from "next/link";
import { company } from "@/lib/content/company";
import { MobileNav } from "@/components/mobile-nav";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-base font-medium tracking-tight text-ink">
          {company.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-lg border border-line px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
