import { Smartphone, Layers, Globe } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/content/products";

const principles = [
  {
    icon: Smartphone,
    heading: "Mobile-first",
    body: "Built for constrained networks and the devices people actually use.",
  },
  {
    icon: Layers,
    heading: "End to end",
    body: "We own the apps, the APIs, and the infrastructure behind them.",
  },
  {
    icon: Globe,
    heading: "Local by design",
    body: "Local payments, local curricula, local markets, not adapted afterwards.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="products" className="border-t border-line">
        <h2 className="text-2xl font-medium tracking-tight text-ink">Products</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <h2 className="text-2xl font-medium tracking-tight text-ink">
          How we work
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.heading}>
              <principle.icon
                className="h-6 w-6 text-accent"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-medium text-ink">
                {principle.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
