export interface NavLink {
  href: string;
  label: string;
}
export interface App {
  title: string;
  icon: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[];
  link?: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const APPS: App[] = [
  {
    title: "AI CrossSell, Related & Upsell",
    icon: "shopping_bag",
    description:
      "AI upsell, cross sell & related recommendations for every product without any setup using AI & CRO",
    tags: ["RemixJS", "Node.js", "PostgreSQL", "Shopify API"],
    image: "/App1/1.png",
    link: "https://apps.shopify.com/solid-ai-related-products",
    images: [
      "/App1/1.png",
      "/App1/2.png",
      "/App1/3.png",
      "/App1/4.png",
      "/App1/5.png",
      "/App1/6.png",
    ],
  },
  {
    title: "Pairly - Bundles and Upsell",
    icon: "insights",
    description:
      "Dynamic upsell and cross-sell engine that uses Shopify's Storefront API to boost AOV by 15% through intelligent cart logic.",
    tags: ["RemixJS", "Express", "GraphQL", "Node.js"],
    image: "/App2/1.png",
    link: "https://pairly-bundles.online",
    images: [
      "/App2/1.png",
      "/App2/2.png",
      "/App2/3.png",
      "/App2/4.png",
      "/App2/5.png",
      "/App2/6.png",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Custom Shopify Apps",
    description:
      "Bespoke public or private apps tailored to your unique business logic and merchant requirements.",
  },
  {
    number: "02",
    title: "Theme Customization",
    description:
      "Advanced liquid development and custom Storefront features that outperform standard themes.",
  },
  {
    number: "03",
    title: "API Integrations",
    description:
      "Seamless connection between Shopify and your external ERP, CRM, or custom database systems.",
  },
  {
    number: "04",
    title: "Backend Excellence",
    description:
      "Robust architecture using Node.js, Express, and PostgreSQL for scale and performance.",
  },
];

interface FooterLink {
  label: string;
  url: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Email", url: "mailto:sanchit@sanchitjain.in" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sanchitjain28" },
  { label: "GitHub", url: "https://github.com/SanchitJain28" },
  { label: "Twitter", url: "https://twitter.com/sanchitjain" },
];

export interface Skill {
  name: string;
  icon: string;
}

export const SKILLS: Skill[] = [
  { name: "React / Next.js", icon: "language" },
  { name: "TypeScript", icon: "data_object" },
  { name: "Shopify API", icon: "shopping_cart" },
  { name: "Node.js & Express", icon: "dns" },
  { name: "PostgreSQL", icon: "database" },
  { name: "GraphQL", icon: "hub" },
  { name: "Tailwind CSS", icon: "palette" },
  { name: "GSAP Animation", icon: "animation" },
  { name: "RemixJS", icon: "route" },
  { name: "Liquid Customization", icon: "water_drop" },
];