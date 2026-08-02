export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
};

// NOTE: Placeholder testimonials. Replace with real client quotes when available.
export const testimonials: Testimonial[] = [
  {
    quote:
      "They rebuilt our storefront and our conversion rate jumped within the first month. Communication was sharp and the code was the cleanest we've seen.",
    name: "Sarah M.",
    title: "Founder, DTC Skincare Brand",
    initials: "SM",
  },
  {
    quote:
      "We migrated from Magento to Shopify Plus with zero drop in organic traffic. Every redirect was handled. Genuinely the smoothest launch we've had.",
    name: "James T.",
    title: "Head of Ecommerce, Home & Living",
    initials: "JT",
  },
  {
    quote:
      "The custom app they built saved our ops team hours every day. Feels like having a senior engineering team on demand without the agency price tag.",
    name: "Priya K.",
    title: "COO, Supplements Brand",
    initials: "PK",
  },
  {
    quote:
      "Fast, reliable, and they actually understand ecommerce — not just code. Our checkout customization directly lifted average order value.",
    name: "Daniel R.",
    title: "CEO, Fashion Accessories",
    initials: "DR",
  },
];
