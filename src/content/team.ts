export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  // Drop headshots into /public/team and reference them here, e.g. "/team/name.jpg"
  image?: string;
  initials: string;
};

// NOTE: Placeholder team. Swap names, bios, and add photos to /public/team.
export const team: TeamMember[] = [
  {
    name: "Kanishak Gautam",
    role: "Founder & Lead Shopify Developer",
    bio: "10+ years building Shopify. Currently a developer and dev lead at Transformer Table, which grew from $50M to $150M during my time there. I lead every engagement end to end.",
    initials: "KG",
  },
  {
    name: "Senior Frontend Developer",
    role: "Theme & Storefront Engineer",
    bio: "Liquid, React, and Hydrogen specialist focused on pixel-perfect, high-performance storefronts and Core Web Vitals.",
    initials: "FD",
  },
  {
    name: "Product Designer",
    role: "UI/UX & Brand",
    bio: "Conversion-focused ecommerce designer. Turns brand strategy into Figma systems that developers can ship fast.",
    initials: "UX",
  },
  {
    name: "SEO Strategist",
    role: "Technical & Content SEO",
    bio: "Owns technical SEO, migrations, and content strategy, keeping rankings intact through replatforms and driving organic growth.",
    initials: "SE",
  },
  {
    name: "Growth & Content Writer",
    role: "Ecommerce Copy & Content",
    bio: "Writes product, landing page, and email copy that sells, plus the content engine behind your organic and paid campaigns.",
    initials: "CW",
  },
  {
    name: "Amazon & Marketplace Specialist",
    role: "Marketplace Growth",
    bio: "Manages Amazon and multi-marketplace expansion, listings, and Shopify-to-marketplace sync for omnichannel brands.",
    initials: "AM",
  },
];
