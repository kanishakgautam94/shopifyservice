import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="bg-radial-accent pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
      <Container className="relative">
        <div className="flex max-w-3xl flex-col gap-5">
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
