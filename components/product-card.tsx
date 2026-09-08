import Link from "next/link";
import type { Product } from "@/lib/content/products";
import { productIcons } from "@/lib/icons";

export function ProductCard({ product }: { product: Product }) {
  const Icon = productIcons[product.icon];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-xl border border-line bg-surface p-6 hover:border-accent"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-lg font-medium text-ink">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.platforms.map((platform) => (
          <span
            key={platform}
            className="rounded-md border border-line px-2 py-1 font-mono text-xs text-muted"
          >
            {platform}
          </span>
        ))}
      </div>
    </Link>
  );
}
