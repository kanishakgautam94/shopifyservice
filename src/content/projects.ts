export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  result: string;
  tags: string[];
  // Featured brand color used for the placeholder card gradient
  accent: string;
  featured?: boolean;
};

// Real client work. Deepen case studies (with permission) as they're ready.
export const projects: Project[] = [
  {
    slug: "transformer-table",
    name: "Transformer Table",
    category: "Shopify Plus · Furniture",
    summary:
      "Ongoing development and dev leadership for a modular furniture brand that scaled from $50M to $150M in revenue.",
    result: "$50M → $150M revenue growth",
    tags: ["Shopify Plus", "Custom Apps", "CRO", "Performance"],
    accent: "#37e17f",
    featured: true,
  },
  {
    slug: "amazology",
    name: "Amazology",
    category: "Theme · Men's Skincare",
    summary:
      "Custom Shopify storefront and brand experience for men's restorative hair and skincare.",
    result: "Custom brand storefront",
    tags: ["Theme Dev", "Branding", "CRO"],
    accent: "#8b5cf6",
  },
  {
    slug: "bioclarity",
    name: "bioClarity",
    category: "Theme · Skincare",
    summary:
      "Conversion-focused Shopify storefront work for a vegan, plant-based skincare brand.",
    result: "Conversion-focused storefront",
    tags: ["Theme Dev", "CRO", "Subscriptions"],
    accent: "#22d3ee",
  },
  {
    slug: "bling-my-thing",
    name: "Bling My Thing",
    category: "Theme · Luxury Accessories",
    summary:
      "Premium Shopify storefront work for a luxury Swarovski crystal accessories brand.",
    result: "Premium storefront",
    tags: ["Theme Dev", "Luxury UX"],
    accent: "#f472b6",
  },
  {
    slug: "healtholicious",
    name: "Healtholicious",
    category: "Theme · Keto & Organic",
    summary:
      "Shopify optimization and conversion-focused development for a keto and organic shop with a complex catalog.",
    result: "Conversion-oriented Shopify work",
    tags: ["Theme Dev", "CRO", "Integrations"],
    accent: "#facc15",
  },
  {
    slug: "athletic-greens",
    name: "Athletic Greens",
    category: "Theme · Supplements",
    summary:
      "Shopify theme and storefront work for a subscription-driven supplements brand.",
    result: "Theme & storefront work",
    tags: ["Theme Dev", "Subscriptions"],
    accent: "#4ade80",
  },
];
