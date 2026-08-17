import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Shopify and Shopify Plus projects across skincare, furniture, supplements, luxury accessories, and more, for brands worldwide.",
};

export default function WorkPage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Stores I've built and scaled"
        description="500+ Shopify projects delivered. Here's a selection. Detailed case studies are on the way as I get sign-off from each brand."
      />

      {featured && (
        <section className="pb-8">
          <Container>
            <Reveal>
              <article className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface">
                <div className="bg-radial-accent pointer-events-none absolute inset-0" />
                <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12">
                  <div className="flex flex-col justify-center gap-5">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                      Featured case study
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                      {featured.name}
                    </h2>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-2">
                      {featured.category}
                    </p>
                    <p className="text-lg leading-relaxed text-muted">{featured.summary}</p>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background">
                      <TrendingUp className="size-4" />
                      {featured.result}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-border"
                    style={{
                      background: `radial-gradient(120% 120% at 50% 0%, ${featured.accent}30, transparent 60%), #0c1012`,
                    }}
                  >
                    <span
                      className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                      style={{ textShadow: `0 0 50px ${featured.accent}66` }}
                    >
                      {featured.name}
                    </span>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                  </div>
                </div>
              </article>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="More projects" title="A cross-section of brands I serve" />
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <RevealItem key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
