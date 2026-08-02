import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <div className="bg-radial-accent pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className="flex max-w-xl flex-col gap-6">
          <span className="text-7xl font-bold text-gradient-accent">404</span>
          <h1 className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
            This page took a detour
          </h1>
          <p className="text-lg text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
            back on track.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Back home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Book a free call
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
