import { site } from "@/content/site";
import { services } from "@/content/services";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    areaServed: "Worldwide",
    knowsAbout: [
      "Shopify",
      "Shopify Plus",
      "Hydrogen",
      "Ecommerce development",
      "Conversion rate optimization",
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.short,
      },
    })),
    sameAs: Object.values(site.socials).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
