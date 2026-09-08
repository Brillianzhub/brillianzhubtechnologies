import type { Metadata } from "next";
import { Section } from "@/components/section";
import { supportContent } from "@/lib/content/legal";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Support",
  description: `How to reach support for Brillianzhub products.`,
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support — Brillianzhub Technologies",
    description: "How to reach support for Brillianzhub products.",
    url: "/support",
  },
};

export default function SupportPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-[1.75rem] font-medium tracking-tight text-ink md:text-3xl">
          Support
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {supportContent.intro}
        </p>
        <p className="mt-2 text-base leading-relaxed text-muted">
          {supportContent.responseTime}
        </p>

        <div className="mt-10 flex flex-col divide-y divide-line border-t border-line">
          {supportContent.channels.map((channel) => (
            <div key={channel.product} className="py-6">
              <h2 className="text-base font-medium text-ink">{channel.product}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {channel.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          General enquiries:{" "}
          <a href={`mailto:${company.email}`} className="text-accent hover:underline">
            {company.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
