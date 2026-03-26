export interface NavLink {
  href: string;
  label: string;
}

export interface App {
  title: string;
  icon: string;
  description: string;
  tags: string[];
  image: string;
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
  },
  {
    title: "Custom Cart Genius",
    icon: "insights",
    description:
      "Dynamic upsell and cross-sell engine that uses Shopify's Storefront API to boost AOV by 15% through intelligent cart logic.",
    tags: ["RemixJS", "Express", "GraphQL", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0KzYYaIirK93ZfS_QFbScQnKkxl8gSTVDExyfmn6_cc6FbDdHrGXNWjH-cmzgmdrodIMEPpjMVc6Oxg9U9-iOmmXScBTkQH8L5t70JpNu3B1iFCMiiD2GSYk1seNEHGuhPaDSbSdjdtvGo02JANjDCHMpJns9I8W0SBrAwTsBWjvxeOXp3g3_6r-XZzlpVoCMMdpiH4_JX1TwE66K4XIPtOnBOB29apGE3l5T_EwsVg_0bFGPjdfBp8UAXPzz_liX93NAc7N8n4c",
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

export const FOOTER_LINKS: string[] = [
  "Email",
  "LinkedIn",
  "GitHub",
  "Twitter",
];
