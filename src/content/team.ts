export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  // Drop headshots into /public/team and reference them here, e.g. "/team/name.jpg"
  image?: string;
  initials: string;
};

export type CollaboratorSpecialty = {
  title: string;
  description: string;
};

export const founder: TeamMember = {
  name: "Kanishak Gautam",
  role: "Founder & Lead Shopify Developer",
  bio: "Shopify freelancing since 2015. Currently a developer and dev lead at Transformer Table, which grew from $50M to $150M during my time there. I lead every engagement end to end.",
  initials: "KG",
};

/** Roles I pull in by project. Swap in real names + photos when colleagues approve. */
export const specialties: CollaboratorSpecialty[] = [
  {
    title: "UI/UX Design",
    description:
      "Conversion-focused ecommerce design and Figma systems that ship cleanly into Shopify.",
  },
  {
    title: "SEO",
    description:
      "Technical SEO, migrations, and organic growth so rankings stay intact through rebuilds.",
  },
  {
    title: "Content Strategy",
    description:
      "Product copy, landing pages, and the content engine behind organic and paid campaigns.",
  },
  {
    title: "Additional Development",
    description:
      "Extra senior hands on Liquid, React, or Hydrogen when a build needs more capacity.",
  },
  {
    title: "Amazon & Marketplaces",
    description:
      "Marketplace expansion and Shopify-to-marketplace sync when brands go omnichannel.",
  },
];

/** @deprecated Prefer founder + specialties. Kept for any remaining TeamCard previews. */
export const team: TeamMember[] = [founder];
