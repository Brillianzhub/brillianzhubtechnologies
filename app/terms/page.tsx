import type { Metadata } from "next";
import { Section } from "@/components/section";
import { termsContent } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Brillianzhub Technologies website.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms — Brillianzhub Technologies",
    description: "Terms of use for the Brillianzhub Technologies website.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-[1.75rem] font-medium tracking-tight text-ink md:text-3xl">
          Terms of use
        </h1>
        <p className="mt-2 font-mono text-xs text-muted">
          Last updated {termsContent.updated}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          {termsContent.intro}
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {termsContent.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-base font-medium text-ink">{section.heading}</h2>
              <div className="mt-2 flex flex-col gap-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
