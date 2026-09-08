import type { Metadata } from "next";
import { Section } from "@/components/section";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "About",
  description: `About ${company.legalName} — a product company building digital platforms for Africa and its diaspora.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Brillianzhub Technologies",
    description: `About ${company.legalName}.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-[1.75rem] font-medium tracking-tight text-ink md:text-3xl">
          About
        </h1>

        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
          <p>
            <strong className="font-medium text-ink">
              Brillianzhub Technologies Limited
            </strong>{" "}
            is a product company. We build, launch and operate our own
            platforms — the mobile apps, the web portals, the APIs and the
            infrastructure behind them.
          </p>
          <p>
            Our work centres on markets we understand. African users are
            mobile-first, often on constrained networks, and underserved by
            products designed elsewhere. We build for those conditions.
          </p>
          <p>
            Today we operate platforms in education, real estate and faith,
            with products in development in adjacent areas.
          </p>
        </div>
      </div>
    </Section>
  );
}
