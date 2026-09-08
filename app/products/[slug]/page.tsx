import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/section";
import { products, getProductBySlug } from "@/lib/content/products";
import { productIcons } from "@/lib/icons";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — Brillianzhub Technologies`,
      description: product.summary,
      url: `/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const Icon = productIcons[product.icon];

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
        </div>

        <h1 className="mt-6 text-[1.75rem] font-medium tracking-tight text-ink md:text-3xl">
          {product.name}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted">
          {product.description}
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="text-sm font-medium text-ink">Available on</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-md border border-line px-2 py-1 font-mono text-xs text-muted"
              >
                {platform}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2">
            {product.website ? (
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-accent hover:underline"
              >
                Visit {product.name}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {product.appStoreUrl ? (
              <a
                href={product.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-accent hover:underline"
              >
                Download on the App Store
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {product.playStoreUrl ? (
              <a
                href={product.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-accent hover:underline"
              >
                Get it on Google Play
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
