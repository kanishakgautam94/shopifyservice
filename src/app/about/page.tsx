import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { CTASection } from "@/components/CTASection";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "A senior Shopify developer and a hand-picked team of designers, developers, SEO, content, and marketplace specialists — serving ambitious brands worldwide.",
};

const values = [
  {
    title: "Senior by default",
    desc: "You work directly with people who've shipped hundreds of stores — never junior guesswork.",
  },
  {
    title: "Revenue-obsessed",
    desc: "Every decision is tied to conversion, retention, and growth — not vanity metrics.",
  },
  {
    title: "Radically transparent",
    desc: "Clear timelines, honest advice, and communication you never have to chase.",
  },
  {
    title: "Built to last",
    desc: "Clean, documented, maintainable code that your next developer will thank us for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A senior Shopify team, on demand"
        description="Shopify Service is led by a developer with 10+ years in the ecosystem, backed by a trusted network of specialists. Big-agency capability, without the big-agency overhead."
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
                <p>
                  I started building on Shopify over a decade ago and never stopped. Today I lead
                  development at{" "}
                  <span className="font-semibold text-foreground">Transformer Table</span>, which I
                  joined as a $50M brand and helped grow into a{" "}
                  <span className="font-semibold text-foreground">$150M</span> business — writing
                  the code, leading developers, and solving the hard commerce problems that come
                  with scale.
                </p>
                <p>
                  Shopify Service is how I bring that same senior, in-the-trenches experience to
                  other ambitious brands. When a project needs more hands, I pull in a hand-picked
                  team I trust — designers, developers, UI/UX, SEO, content, and Amazon &amp;
                  marketplace specialists — so you get a complete team without managing five
                  freelancers yourself.
                </p>
                <p>
                  We work with 7 and 8-figure brands that treat their store as their most important
                  asset. If that&apos;s you, you&apos;ll feel the difference of working with people
                  who genuinely own the outcome.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                  What we stand for
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
            eyebrow="The team"
            title="Meet the people behind the work"
            description="One accountable lead, and a vetted team of specialists we bring in based on what your project needs."
            align="center"
          />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.name} className="h-full">
                <TeamCard member={member} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
