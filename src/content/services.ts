import {
  Palette,
  Blocks,
  Rocket,
  Layers,
  ArrowLeftRight,
  TrendingUp,
  Plug,
  LifeBuoy,
  Bot,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "theme-development",
    icon: Palette,
    title: "Theme Development & Customization",
    short: "Pixel-perfect, fast, on-brand storefronts built to convert.",
    description:
      "Custom Shopify themes and deep customizations of Dawn, Prestige, Impulse and premium themes. We turn your Figma designs into fast, accessible, conversion-focused storefronts your merchandising team can actually manage.",
    deliverables: [
      "Custom theme builds from Figma",
      "Reusable, editable theme sections",
      "Core Web Vitals & speed optimization",
      "Responsive, accessible, on-brand UI",
    ],
  },
  {
    slug: "custom-apps",
    icon: Blocks,
    title: "Custom Shopify Apps",
    short: "Private & public apps that extend Shopify beyond the defaults.",
    description:
      "Bespoke public and custom apps using the latest Shopify App framework, Remix, GraphQL Admin API, and app extensions. From subscriptions to bundling to custom checkout logic, we build what off-the-shelf apps can't.",
    deliverables: [
      "Public & custom (private) apps",
      "Checkout UI & Functions extensions",
      "Admin API / GraphQL integrations",
      "App maintenance & App Store listing",
    ],
  },
  {
    slug: "ai-llm",
    icon: Bot,
    title: "AI Agents & LLM Integrations",
    short: "Ship intelligent features and automate real work with AI.",
    description:
      "We build AI directly into your store, not as a gimmick but as infrastructure. Checkout sales assistants, product recommendation engines, semantic search, AI-generated content at scale, and autonomous order-flow agents powered by Claude, OpenAI, and the Anthropic API. We also develop with AI daily, so you get senior-level code with materially faster turnaround.",
    deliverables: [
      "AI sales & support agents",
      "LLM content & semantic search",
      "RAG, embeddings & smart merchandising",
      "AI-accelerated delivery (weeks, not quarters)",
    ],
  },
  {
    slug: "shopify-plus",
    icon: Rocket,
    title: "Shopify Plus",
    short: "Enterprise builds, automations, and checkout customization.",
    description:
      "Full Shopify Plus implementations for high-volume brands: Shopify Functions, Flow automations, checkout branding & extensibility, B2B, Scripts migration, and multi-store Expansion setups.",
    deliverables: [
      "Checkout extensibility & branding",
      "Shopify Functions & Flow automation",
      "B2B / wholesale storefronts",
      "Expansion stores & multi-market",
    ],
  },
  {
    slug: "headless-hydrogen",
    icon: Layers,
    title: "Headless & Hydrogen",
    short: "Blazing-fast headless commerce on Hydrogen + Oxygen.",
    description:
      "Headless storefronts using Hydrogen, Oxygen, and the Storefront API, or Next.js when it fits better. Ideal for content-heavy, performance-obsessed brands that need total design freedom.",
    deliverables: [
      "Hydrogen / Oxygen storefronts",
      "Storefront API & custom data",
      "Next.js headless commerce",
      "CMS integration (Sanity, Contentful)",
    ],
  },
  {
    slug: "migrations",
    icon: ArrowLeftRight,
    title: "Replatforming & Migrations",
    short: "Move to Shopify without losing traffic, data, or sales.",
    description:
      "Safe migrations from WooCommerce, Magento, BigCommerce, or legacy platforms to Shopify. We preserve SEO, redirect every URL, and migrate products, customers, and order history cleanly.",
    deliverables: [
      "Data & catalog migration",
      "301 redirect mapping (SEO-safe)",
      "Theme & functionality rebuild",
      "QA, launch & post-launch support",
    ],
  },
  {
    slug: "cro",
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    short: "Data-driven experiments that lift revenue per visitor.",
    description:
      "Structured CRO programs: audits, hypotheses, A/B testing, and analytics. We find where you leak revenue and systematically fix it, from PDPs to cart to checkout.",
    deliverables: [
      "Conversion & UX audits",
      "A/B & multivariate testing",
      "Analytics & funnel tracking",
      "Landing pages for paid traffic",
    ],
  },
  {
    slug: "integrations",
    icon: Plug,
    title: "Integrations & Automation",
    short: "Connect Shopify to your ERP, CRM, 3PL, and tools.",
    description:
      "Reliable integrations with ERPs, CRMs, 3PLs, ESPs, and marketplaces. We automate the busywork with Flow, custom middleware, and APIs so your operations scale without more headcount.",
    deliverables: [
      "ERP / CRM / 3PL integrations",
      "Klaviyo, Meta, Google, TikTok",
      "Custom middleware & webhooks",
      "Amazon & marketplace sync",
    ],
  },
  {
    slug: "maintenance",
    icon: LifeBuoy,
    title: "Maintenance & Support",
    short: "A dedicated Shopify team on retainer, whenever you need it.",
    description:
      "Ongoing development retainers for growing brands. Priority fixes, new features, performance monitoring, and a partner who already knows your store, with no ramp-up and no agency overhead.",
    deliverables: [
      "Monthly development retainers",
      "Priority bug fixes & SLAs",
      "New features & A/B tests",
      "Performance & uptime monitoring",
    ],
  },
];
