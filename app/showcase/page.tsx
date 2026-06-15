import type { Metadata } from "next";
import { Footer } from "@/components/showcase/layout/Footer";
import { Header } from "@/components/showcase/layout/Header";
import { Contact } from "@/components/showcase/sections/Contact";
import { Hero } from "@/components/showcase/sections/Hero";
import { Services } from "@/components/showcase/sections/Services";
import { Skills } from "@/components/showcase/sections/Skills";
import { Work } from "@/components/showcase/sections/Work";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Portfolio showcase of Sanchit Jain — Shopify apps, headless storefronts, and client work. 2 live Shopify apps, 50+ merchants served.",
  alternates: {
    canonical: "https://www.sanchitjain.in/showcase",
  },
  openGraph: {
    title: "Showcase | Sanchit Jain",
    description:
      "Real Shopify projects — custom apps, headless storefronts, GraphQL integrations. Delhi-based Shopify Expert.",
    url: "https://www.sanchitjain.in/showcase",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanchit Jain — Showcase",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
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
};

export default function Portfolio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col md:flex-row h-screen w-full bg-[#FFFFFF] text-[#000000] font-['Inter'] selection:bg-[#000000] selection:text-[#FFFFFF] overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto relative bg-[#FFFFFF]">
          <main className="w-full mx-auto md:py-12 flex flex-col">
            <Hero />
            <Work />
            <Skills />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
