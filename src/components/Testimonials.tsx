import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Client love"
          title="Brands that trust us keep coming back"
          description="We measure success in revenue, retention, and referrals, not just launches."
          align="center"
        />

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-8">
                <Quote className="size-8 text-accent/50" />
                <blockquote className="flex-1 text-lg leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
