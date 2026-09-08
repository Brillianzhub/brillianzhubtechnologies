import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { company } from "@/lib/content/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: `${company.shortName} — digital platforms for Africa and its diaspora`,
    template: "%s — Brillianzhub Technologies",
  },
  description: company.subhead,
  openGraph: {
    title: company.legalName,
    description: company.subhead,
    url: company.domain,
    siteName: company.shortName,
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brillianzhub Technologies",
  legalName: company.legalName,
  url: company.domain,
  email: company.email,
  address: { "@type": "PostalAddress", addressCountry: "NG" },
  sameAs: ["https://superprep.pro", "https://realvistaproperties.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
