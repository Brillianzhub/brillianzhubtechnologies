import type { MetadataRoute } from "next";
import { company } from "@/lib/content/company";
import { products } from "@/lib/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/support",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const productRoutes = products.map((product) => `/products/${product.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${company.domain}${route}`,
    lastModified: new Date(),
  }));
}
