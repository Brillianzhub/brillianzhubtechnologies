import Link from "next/link";
import { company } from "@/lib/content/company";

const productLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-ink">{company.legalName}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              RC {company.rcNumber}
            </p>
            <p className="mt-1 text-sm text-muted">{company.address}</p>
            <p className="mt-3 text-sm text-muted">
              <a href={`mailto:${company.email}`} className="hover:text-ink">
                {company.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Company" className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Legal" className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
