import {
  ArrowRight,
  Search,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  UserCheck,
  FileCheck2,
  Gauge,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TeamCard } from "@/components/TeamCard";
import { Testimonials } from "@/components/Testimonials";
import { AISection } from "@/components/AISection";
import { StackSection } from "@/components/StackSection";
import { CTASection } from "@/components/CTASection";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { team } from "@/content/team";

const marquee = [
  "Shopify Plus",
  "Hydrogen",
  "Theme Development",
  "Custom Apps",
  "Headless Commerce",
  "CRO",
  "Migrations",
  "Klaviyo",
  "Subscriptions",
  "Checkout Extensions",
];

const trust = [
  { icon: UserCheck, label: "Senior-only team", desc: "No juniors on your project" },
  { icon: ShieldCheck, label: "NDA-friendly", desc: "Your data stays private" },
  { icon: FileCheck2, label: "Fixed-scope quotes", desc: "No surprise invoices" },
  { icon: Gauge, label: "Speed-obsessed", desc: "Core Web Vitals by default" },
];

const process = [
  {
    icon: Search,
    title: "Discover",
    desc: "We audit your store, understand your goals, and map the highest-impact opportunities.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Conversion-focused UX and on-brand design your customers and merchandisers will love.",
  },
  {
    icon: Code2,
    title: "Build",
    desc: "Clean, fast, maintainable code across themes, apps, and headless, with rigorous QA.",
  },
  {
    icon: Rocket,
    title: "Scale",
    desc: "Launch, measure, and iterate. Ongoing optimization that compounds your revenue.",
  },
];

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Trust marquee */}
      <section className="border-y border-border bg-surface py-6">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...marquee, ...marquee].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-medium uppercase tracking-wider text-muted-2"
              >
                {item}
                <span className="ml-10 text-accent/40">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Authority strip */}
      <section className="py-14">
        <Container>
          <RevealStagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <RevealItem key={t.label}>
                  <div className="flex items-center gap-3.5 rounded-2xl border border-border bg-surface px-5 py-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/20">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.label}</p>
                      <p className="text-xs text-muted">{t.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Everything Shopify, under one roof"
              description="From your first theme to a headless rebuild and everything in between, all from one senior team."
            />
            <Reveal>
              <ButtonLink href="/services" variant="secondary">
                All services <ArrowRight className="size-4" />
              </ButtonLink>
            </Reveal>
          </div>

          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services
              .filter((s) => s.slug !== "ai-llm")
              .slice(0, 8)
              .map((service) => (
                <RevealItem key={service.slug} className="h-full">
                  <ServiceCard service={service} />
                </RevealItem>
              ))}
          </RevealStagger>
        </Container>
      </section>

      <AISection />

      <StackSection />

      {/* Process */}
      <section className="border-y border-border bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A proven process, minus the agency overhead"
            description="You work directly with senior people. No account managers, no telephone game, just clear communication and results."
            align="center"
          />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <RevealItem key={step.title}>
                  <div className="relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6">
                    <span className="text-sm font-mono text-accent">
                      0{i + 1}
                    </span>
                    <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/20">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </Container>
      </section>

      {/* Work preview */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Results for real, growing brands"
              description="A snapshot of the stores we've helped build and scale across the world."
            />
            <Reveal>
              <ButtonLink href="/work" variant="secondary">
                View all work <ArrowRight className="size-4" />
              </ButtonLink>
            </Reveal>
          </div>

          <RevealStagger className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <RevealItem key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Team preview */}
      <section className="border-y border-border bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="Senior people who own the outcome"
            description="Led by the founder, backed by a hand-picked network of specialists across design, development, SEO, content, and marketplaces."
            align="center"
          />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member) => (
              <RevealItem key={member.name} className="h-full">
                <TeamCard member={member} />
              </RevealItem>
            ))}
          </RevealStagger>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/about" variant="secondary">
              Meet the whole team <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Testimonials />

      <CTASection />
    </>
  );
}
