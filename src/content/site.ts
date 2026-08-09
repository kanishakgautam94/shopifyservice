export const site = {
  name: "Shopify Service",
  legalName: "Shopifyservice",
  domain: "shopifyservice.com",
  url: "https://shopifyservice.com",
  tagline: "Senior Shopify development, led by the person who builds it",
  description:
    "Shopify Service is a boutique Shopify studio led by senior developer Kanishak Gautam. I design, build, and scale high-converting Shopify and Shopify Plus stores for 7 and 8-figure brands, bringing in trusted specialists for design, SEO, and content when your project needs them.",
  email: "info@shopifyservice.com",
  phone: "+1 (437) 234-1184",
  phoneHref: "+14372341184",
  location: "Toronto, Canada. Working with brands worldwide",
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
  { value: "500+", label: "Projects delivered" },
  { value: "100+", label: "Brands worked with" },
  { value: "$150M", label: "Brand I helped scale" },
  { value: "10+", label: "Years of Shopify" },
] as const;
