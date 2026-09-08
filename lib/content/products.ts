export type Platform = "iOS" | "Android" | "Web";

export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  features: string[];
  platforms: Platform[];
  website?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  icon: "GraduationCap" | "Building2" | "BookHeart";
};

export const products: Product[] = [
  {
    slug: "superprep",
    name: "SuperPrep",
    summary:
      "Exam preparation and tutoring for students, tutors, parents, and schools.",
    description:
      "SuperPrep brings structured exam preparation to students across every major curriculum, connecting them with tutors and giving parents and schools visibility into progress. Practice questions, live tutoring, and performance tracking sit in one platform built for the way students actually study.",
    features: [
      "Curriculum-aligned practice questions and mock exams",
      "Live and on-demand tutoring from vetted tutors",
      "Progress tracking for parents and school administrators",
      "Works well on low-bandwidth connections",
    ],
    platforms: ["iOS", "Android", "Web"],
    website: "https://superprep.pro",
    icon: "GraduationCap",
  },
  {
    slug: "realvista",
    name: "Realvista Properties",
    summary:
      "A property marketplace for buyers, sellers, and investors in Nigerian real estate.",
    description:
      "Realvista Properties is a marketplace for buying, selling, and investing in Nigerian real estate. Listings are verified, search is built around how Nigerian buyers actually shop for property, and tools for investors make it possible to track a portfolio alongside the open market.",
    features: [
      "Verified property listings across major Nigerian cities",
      "Tools for tracking investment portfolios",
      "Direct messaging between buyers, sellers, and agents",
      "Market data to support pricing decisions",
    ],
    platforms: ["iOS", "Android", "Web"],
    website: "https://realvistaproperties.com",
    icon: "Building2",
  },
  {
    slug: "ipraydaily",
    name: "IPrayDaily",
    summary:
      "Daily devotionals with offline Bible access, hymns, and prayers.",
    description:
      "IPrayDaily is a daily companion for devotion, built for offline use so it works wherever its users are. It combines a full offline Bible, guided daily devotionals, hymns, and prayers into a single, distraction-free app.",
    features: [
      "Full Bible available offline",
      "Daily guided devotionals",
      "A library of hymns and prayers",
      "No account required to use the core app",
    ],
    platforms: ["iOS", "Android"],
    icon: "BookHeart",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
