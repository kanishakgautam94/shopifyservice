export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  // Drop headshots into /public/team and reference them here, e.g. "/team/name.jpg"
  image?: string;
  initials: string;
};

/** A collaborator seat. When `member` is set, the real person is shown. */
export type CollaboratorSeat = {
  role: string;
  blurb: string;
  member?: TeamMember;
};

export const founder: TeamMember = {
  name: "Kanishak Gautam",
  role: "Founder & Lead Shopify Developer",
  bio: "10+ years building Shopify. Currently a developer and dev lead at Transformer Table, which grew from $50M to $150M during my time there. I lead every engagement end to end.",
  initials: "KG",
};

/**
 * Open seats match the colleagues being invited.
 * Drop real name/photo/bio into `member` when they approve.
 */
export const collaboratorSeats: CollaboratorSeat[] = [
  {
    role: "UI/UX Design",
    blurb: "Ecommerce design and Figma systems that ship cleanly into Shopify.",
  },
  {
    role: "UI/UX Design",
    blurb: "Additional design support for larger storefront and brand projects.",
  },
  {
    role: "Content Strategy",
    blurb: "Messaging, landing-page structure, and content direction for growth.",
  },
  {
    role: "Content Writing",
    blurb: "Product copy, page copy, and campaign writing that sells.",
  },
  {
    role: "Full Stack Development",
    blurb: "Frontend-leaning Shopify builds: themes, Hydrogen, and storefront UX.",
  },
  {
    role: "Full Stack Development",
    blurb: "Backend-leaning Shopify builds: apps, APIs, and integrations.",
  },
];

/** @deprecated Prefer founder + collaboratorSeats. */
export const team: TeamMember[] = [founder];
