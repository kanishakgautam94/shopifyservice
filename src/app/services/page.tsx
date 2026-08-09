import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Shopify Services",
  description:
    "Full-service Shopify development: theme development, custom apps, Shopify Plus, headless Hydrogen, migrations, CRO, integrations, and ongoing support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="End-to-end Shopify, done right"
        description="Whatever your store needs, from a fast custom theme to a headless rebuild or a bespoke app, I cover the Shopify ecosystem end to end and bring in specialists when the scope calls for it."
      />

      <section className="pb-24">
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i * 0.03}>
                  <article
                    id={service.slug}
                    className="scroll-mt-28 rounded-3xl border border-border bg-surface p-8 md:p-10"
                  >
                    <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <span className="flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/20">
                            <Icon className="size-7" />
                          </span>
                          <h2 className="text-2xl font-bold tracking-tight text-foreground">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-base leading-relaxed text-muted">
                          {service.description}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border bg-background p-6">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                          What you get
                        </h3>
                        <ul className="flex flex-col gap-3">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                              <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
