import type { Metadata } from "next";
import GithubManifest from "@/components/home/GithubManifest";

export const metadata: Metadata = {
  title: "GitHub",
  description:
    "GitHub profile of Sanchit Jain — Shopify Expert Developer from Delhi, India. Open-source Shopify apps, Next.js projects, RemixJS, Node.js, and GraphQL repositories.",
  alternates: {
    canonical: "https://www.sanchitjain.in/github",
  },
  openGraph: {
    title: "GitHub | Sanchit Jain",
    description:
      "Open-source work by Sanchit Jain — Shopify apps, headless storefronts, Next.js, RemixJS. Delhi-based Shopify Expert Developer.",
    url: "https://www.sanchitjain.in/github",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanchit Jain GitHub",
      },
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      "@id": "https://www.sanchitjain.in/#person",
      name: "Sanchit Jain",
      jobTitle: "Shopify Expert Developer",
      url: "https://www.sanchitjain.in",
      sameAs: [
        "https://github.com/SanchitJain28",
        "https://linkedin.com/in/sanchitjain28",
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Sanchit Jain — Open Source & Dev Work",
    url: "https://www.sanchitjain.in/github",
    author: {
      "@type": "Person",
      "@id": "https://www.sanchitjain.in/#person",
      name: "Sanchit Jain",
    },
    blogPost: [
      {
        "@type": "BlogPosting",
        headline: "Building Custom Shopify Apps with RemixJS",
        description:
          "How I built and published 2 Shopify apps on the Shopify App Store using RemixJS, Polaris, and the Shopify Admin API.",
        author: {
          "@type": "Person",
          "@id": "https://www.sanchitjain.in/#person",
          name: "Sanchit Jain",
        },
        url: "https://www.sanchitjain.in/github",
        datePublished: "2024-06-01",
        keywords: ["Shopify", "RemixJS", "Shopify App Development", "Polaris"],
      },
      {
        "@type": "BlogPosting",
        headline: "Headless Shopify Storefront with Next.js and Hydrogen",
        description:
          "Exploring headless commerce architecture using Shopify Hydrogen, Next.js, and Shopify Storefront GraphQL API.",
        author: {
          "@type": "Person",
          "@id": "https://www.sanchitjain.in/#person",
          name: "Sanchit Jain",
        },
        url: "https://www.sanchitjain.in/github",
        datePublished: "2024-08-01",
        keywords: [
          "Shopify Hydrogen",
          "Next.js",
          "Headless Commerce",
          "GraphQL",
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "GraphQL API Integrations for Shopify Merchants",
        description:
          "Practical patterns for integrating Shopify GraphQL Admin and Storefront APIs — mutations, pagination, webhooks.",
        author: {
          "@type": "Person",
          "@id": "https://www.sanchitjain.in/#person",
          name: "Sanchit Jain",
        },
        url: "https://www.sanchitjain.in/github",
        datePublished: "2024-10-01",
        keywords: ["GraphQL", "Shopify API", "Webhooks", "Node.js"],
      },
    ],
  },
];

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GithubManifest />
    </>
  );
}
