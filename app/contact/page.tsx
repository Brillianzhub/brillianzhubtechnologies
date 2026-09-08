import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.legalName}.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Brillianzhub Technologies",
    description: `Get in touch with ${company.legalName}.`,
    url: "/contact",
  },
};

type SearchParams = Promise<{
  sent?: string;
  error?: string;
  err_name?: string;
  err_email?: string;
  err_message?: string;
  name?: string;
  email?: string;
  message?: string;
}>;

const serverErrorMessages: Record<string, string> = {
  rate: "You've sent a few messages already — please wait a bit before trying again.",
  server:
    "Something went wrong sending your message. Please try again, or email us directly at " +
    company.email +
    ".",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const success = params.sent === "1";
  const serverError = params.error ? serverErrorMessages[params.error] : undefined;

  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <h1 className="text-[1.75rem] font-medium tracking-tight text-ink md:text-3xl">
          Get in touch
        </h1>
        <p className="mt-3 text-base text-muted">
          Questions about our products, partnerships, or anything else — we&apos;d
          like to hear from you.
        </p>

        <div className="mt-10">
          <ContactForm
            success={success}
            serverError={params.error === "validation" ? undefined : serverError}
            errors={{
              name: params.err_name,
              email: params.err_email,
              message: params.err_message,
            }}
            values={{
              name: params.name,
              email: params.email,
              message: params.message,
            }}
          />
        </div>
      </div>
    </Section>
  );
}
