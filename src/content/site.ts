export const site = {
  name: "Shopify Service",
  legalName: "Shopifyservice",
  domain: "shopifyservice.com",
  url: "https://shopifyservice.com",
  tagline: "End-to-end Shopify development for ambitious brands",
  description:
    "Shopify Service is a specialist Shopify studio led by a senior developer and a hand-picked team. We design, build, and scale high-converting Shopify and Shopify Plus stores for 7 and 8-figure brands.",
  email: "info@shopifyservice.com",
  phone: "+1 (437) 234-1184",
  phoneHref: "+14372341184",
  location: "Toronto, Canada — working with brands worldwide",
  // Replace with your real Calendly link. Falls back to the contact section if unset.
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/shopifyservice/consultation",
  socials: {
    upwork: "",
    linkedin: "",
    x: "",
    instagram: "",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "700+", label: "Projects delivered" },
  { value: "75+", label: "Countries served" },
  { value: "$150M", label: "Brand we helped scale" },
  { value: "10+", label: "Years of Shopify" },
] as const;
