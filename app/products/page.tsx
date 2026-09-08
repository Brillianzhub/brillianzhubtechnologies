import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "Products",
  description: "The platforms Brillianzhub Technologies builds and operates.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Brillianzhub Technologies",
    description: "The platforms Brillianzhub Technologies builds and operates.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <Section>
      <h1 className="text-[1.75rem] font-medium tracking-tight text-ink md:text-3xl">
        Products
      </h1>
      <p className="mt-3 max-w-xl text-base text-muted">
        Platforms we design, build, and operate ourselves.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}
