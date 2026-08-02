export type StackGroup = {
  category: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    category: "Shopify",
    items: [
      "Liquid",
      "Shopify Plus",
      "Metafields",
      "Markets",
      "Checkout Extensions",
      "Functions",
      "Hydrogen / Oxygen",
    ],
  },
  {
    category: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "SCSS",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "Admin & Storefront APIs",
      "GraphQL",
      "REST",
      "Webhooks",
      "App Bridge",
      "Theme Extensions",
    ],
  },
  {
    category: "AI & LLMs",
    items: [
      "Claude",
      "Claude Code",
      "Cursor",
      "Anthropic API",
      "OpenAI API",
      "AI agents",
      "RAG & embeddings",
    ],
  },
  {
    category: "Performance",
    items: [
      "Core Web Vitals",
      "Vite / Webpack",
      "Image optimization",
      "CDN & caching",
      "A/B testing",
    ],
  },
  {
    category: "DevOps & Analytics",
    items: ["Git", "CI/CD", "Docker", "GA4", "GTM", "Payment integrations"],
  },
];
