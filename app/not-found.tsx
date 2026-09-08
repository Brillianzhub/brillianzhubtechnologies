import Link from "next/link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-[1.75rem] font-medium tracking-tight text-ink md:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-base text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-ink"
        >
          Back to home
        </Link>
      </div>
    </Section>
  );
}
