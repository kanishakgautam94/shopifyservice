import { ArrowRight, Search, PenTool, Code2, Rocket } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TeamCard } from "@/components/TeamCard";
import { Testimonials } from "@/components/Testimonials";
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
    desc: "Clean, fast, maintainable code — themes, apps, or headless — with rigorous QA.",
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

      {/* Services */}
      <section id="services" className="py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Everything Shopify, under one roof"
              description="From your first theme to a headless rebuild and everything in between — one senior team for the whole ecosystem."
            />
            <Reveal>
              <ButtonLink href="/services" variant="secondary">
                All services <ArrowRight className="size-4" />
              </ButtonLink>
            </Reveal>
          </div>

          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service) => (
              <RevealItem key={service.slug} className="h-full">
                <ServiceCard service={service} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A proven process, minus the agency overhead"
            description="You work directly with senior people. No account managers, no telephone game — just clear communication and results."
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
