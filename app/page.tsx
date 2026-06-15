import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import ScrollProgress from "@/components/home/ScrollProgress";
import GithubManifest from "@/components/home/GithubManifest";
import { Header } from "@/components/showcase/layout/Header";
import { Footer } from "@/components/showcase/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanchit Jain | Shopify Expert Developer in Delhi, India",
  description:
    "Shopify Expert Developer based in Delhi, India. 2 live apps on Shopify App Store, 50+ merchants served. Custom Shopify apps, headless storefronts, Hydrogen, GraphQL, and API integrations.",
  keywords: [
    "Shopify Expert Developer Delhi",
    "Shopify App Developer India",
    "Custom Shopify App Development",
    "Shopify Hydrogen Developer",
    "Headless Shopify Developer",
    "Shopify Partner India",
    "Shopify GraphQL Developer",
    "RemixJS Shopify Developer",
    "Node.js Shopify Developer",
    "Freelance Shopify Developer India",
  ],
  authors: [{ name: "Sanchit Jain", url: "https://www.sanchitjain.in" }],
  openGraph: {
    title: "Sanchit Jain | Shopify Expert Developer",
    description:
      "2 live Shopify apps. 50+ merchants. Custom apps, headless storefronts, GraphQL & API integrations. Based in Delhi, India.",
    url: "https://www.sanchitjain.in",
    siteName: "Sanchit Jain",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Sanchit Jain — Shopify Expert Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchit Jain | Shopify Expert Developer",
    description:
      "2 live Shopify apps. 50+ merchants. Delhi-based Shopify Expert.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.sanchitjain.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      "@id": "https://www.sanchitjain.in/#person",
      name: "Sanchit Jain",
      jobTitle: "Shopify Expert Developer",
      description:
        "Shopify Expert Developer with 2 live apps on Shopify App Store serving 50+ merchants. Specializing in custom Shopify apps, headless storefronts, and API integrations.",
      url: "https://www.sanchitjain.in",
      image: "https://www.sanchitjain.in/og-image.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      sameAs: [
        "https://linkedin.com/in/sanchitjain28",
        "https://github.com/SanchitJain28",
      ],
      knowsAbout: [
        "Shopify App Development",
        "Shopify Hydrogen",
        "Headless Commerce",
        "RemixJS",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "Next.js",
      ],
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col md:flex-row h-screen w-full bg-[#FFFFFF] text-[#000000] font-['Inter'] selection:bg-[#000000] selection:text-[#FFFFFF] overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto relative bg-[#FFFFFF] custom-scrollbar">
          <ScrollProgress />
          <main className="w-full flex flex-col">
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <GithubManifest />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
