import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { CollaboratorSeatCard } from "@/components/CollaboratorSeatCard";
import { CTASection } from "@/components/CTASection";
import { founder, collaboratorSeats } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kanishak Gautam and the small collaborator team behind Shopify Service: UI/UX, content, and full-stack development.",
};

const values = [
  {
    title: "One accountable lead",
    desc: "You work with me directly. I own the outcome and bring collaborators in when the project needs them.",
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
        title="A senior Shopify lead, with a small team around the work"
        description="Shopify Service is my boutique studio. I lead every engagement, and collaborators across UI/UX, content, and development join when a project needs a fuller team."
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
                <p>
                  I&apos;ve been building on Shopify for over a decade and never stopped. Today I lead
                  development at{" "}
                  <span className="font-semibold text-foreground">Transformer Table</span>, which I
                  joined as a $50M brand and helped grow into a{" "}
                  <span className="font-semibold text-foreground">$150M</span> business, writing
                  the code, leading developers, and solving the hard commerce problems that come
                  with scale.
                </p>
                <p>
                  Shopify Service is how I bring that same senior, in-the-trenches experience to
                  other ambitious brands, with a small group of collaborators I already trust across
                  design, content, and development.
                </p>
                <p>
                  I work with 7 and 8-figure brands that treat their store as their most important
                  asset. If that&apos;s you, you&apos;ll feel the difference of working with people
                  who genuinely own the outcome.
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
            eyebrow="The team"
            title="Collaborator profiles are being added"
            description="Open seats below are intentional. As each person joins, their name, photo, and bio go live here."
            align="center"
          />
          <div className="mx-auto mt-14 max-w-md">
            <Reveal>
              <TeamCard member={founder} />
            </Reveal>
          </div>
          <RevealStagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collaboratorSeats.map((seat, i) => (
              <RevealItem key={`${seat.role}-${i}`} className="h-full">
                <CollaboratorSeatCard seat={seat} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
