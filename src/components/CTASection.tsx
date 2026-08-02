import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-16 text-center sm:px-16">
            <div className="bg-radial-accent pointer-events-none absolute inset-0" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-gradient sm:text-4xl md:text-5xl">
                Let&apos;s turn your Shopify store into your best salesperson
              </h2>
              <p className="text-pretty text-lg text-muted">
                Book a free 30-minute consultation and get a live audit of your store. No
                pressure, no obligation — just senior advice you can use.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Book a free call <ArrowRight className="size-5" />
                </ButtonLink>
                <ButtonLink href={`tel:${site.phoneHref}`} variant="secondary" size="lg">
                  <Phone className="size-5" /> {site.phone}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
