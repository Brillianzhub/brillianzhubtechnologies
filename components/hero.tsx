import Link from "next/link";
import { company } from "@/lib/content/company";

export function Hero() {
  return (
    <div className="mx-auto max-w-[1120px] px-4 py-20 text-center sm:px-6 md:py-28">
      <span className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-muted">
        {company.legalName}
      </span>

      <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink">
        {company.tagline}
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-base text-muted">
        {company.subhead}
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#products"
          className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:bg-accent-hover sm:w-auto"
        >
          See our products
        </a>
        <Link
          href="/contact"
          className="w-full rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent sm:w-auto"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
