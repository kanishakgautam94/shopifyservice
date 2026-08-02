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

// NOTE: Placeholder case studies inspired by past work. Replace with real,
// detailed case studies (with permission) as they're ready.
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
      "Restorative hair & skincare for men with natural ingredients from the Amazon Rainforest — custom storefront and brand experience.",
    result: "Custom brand storefront",
    tags: ["Theme Dev", "Branding", "CRO"],
    accent: "#8b5cf6",
  },
  {
    slug: "bioclarity",
    name: "bioClarity",
    category: "Theme · Skincare",
    summary:
      "Plant-based skincare with signature Floralux®. Conversion-focused storefront for a vegan, cruelty-free brand.",
    result: "Conversion-focused rebuild",
    tags: ["Theme Dev", "CRO", "Subscriptions"],
    accent: "#22d3ee",
  },
  {
    slug: "bling-my-thing",
    name: "Bling My Thing",
    category: "Theme · Luxury Accessories",
    summary:
      "Luxury Swarovski® crystal iPhone cases from Berlin. Premium, fashion-forward storefront for a family-owned brand.",
    result: "Premium storefront",
    tags: ["Theme Dev", "Luxury UX"],
    accent: "#f472b6",
  },
  {
    slug: "healtholicious",
    name: "Healtholicious",
    category: "Theme · Keto & Organic",
    summary:
      "One-stop keto shop in Bangkok with same-day delivery. Complex catalog and localized storefront experience.",
    result: "Localized catalog store",
    tags: ["Theme Dev", "Integrations"],
    accent: "#facc15",
  },
  {
    slug: "athletic-greens",
    name: "Athletic Greens",
    category: "Theme · Supplements",
    summary:
      "Whole food supplement brand. High-trust, subscription-driven storefront built for scale.",
    result: "Subscription-driven store",
    tags: ["Subscriptions", "CRO"],
    accent: "#4ade80",
  },
];
