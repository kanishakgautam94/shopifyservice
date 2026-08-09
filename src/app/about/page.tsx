import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { CTASection } from "@/components/CTASection";
import { founder, specialties } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kanishak Gautam, a senior Shopify developer freelancing since 2015. Boutique studio delivery with trusted specialists for design, SEO, and content.",
};

const values = [
  {
    title: "One accountable lead",
    desc: "You work with me directly. I own the outcome and bring specialists in only when the project needs them.",
  },
  {
    title: "Revenue-obsessed",
    desc: "Every decision is tied to conversion, retention, and growth, not vanity metrics.",
  },
  {
    title: "Radically transparent",
    desc: "Clear timelines, honest advice, and communication you never have to chase.",
  },
  {
    title: "Built to last",
    desc: "Clean, documented, maintainable code that your next developer will thank me for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A senior Shopify developer, with specialists when you need them"
        description="Shopify Service is my boutique studio. I lead every engagement, and I bring in trusted colleagues for UI/UX, SEO, and content when a project needs a fuller team."
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
                <p>
                  I started freelancing on Shopify in 2015 and never stopped. Today I lead
                  development at{" "}
                  <span className="font-semibold text-foreground">Transformer Table</span>, which I
                  joined as a $50M brand and helped grow into a{" "}
                  <span className="font-semibold text-foreground">$150M</span> business, writing
                  the code, leading developers, and solving the hard commerce problems that come
                  with scale.
                </p>
                <p>
                  Shopify Service is how I bring that same senior, in-the-trenches experience to
                  other ambitious brands. When a project needs more than development, I bring in
                  colleagues I already trust: UI/UX, SEO, content strategy, and marketplace help,
                  so you get a complete delivery team without juggling freelancers yourself.
                </p>
                <p>
                  I work with 7 and 8-figure brands that treat their store as their most important
                  asset. If that&apos;s you, you&apos;ll feel the difference of working with someone
                  who genuinely owns the outcome.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                  How I work
                </h3>
                {values.map((v) => (
                  <div key={v.title} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">{v.title}</p>
                      <p className="text-sm text-muted">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Delivery model"
            title="One lead. Specialists when the scope needs them."
            description="You always talk to me. Depending on the project, I pull in colleagues for design, SEO, content, and more."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <TeamCard member={founder} />
            </Reveal>
            <RevealStagger className="grid gap-3 sm:grid-cols-2">
              {specialties.map((s) => (
                <RevealItem key={s.title}>
                  <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-5">
                    <p className="text-sm font-semibold text-foreground">{s.title}</p>
                    <p className="text-sm leading-relaxed text-muted">{s.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
