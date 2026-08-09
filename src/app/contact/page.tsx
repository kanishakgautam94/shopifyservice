import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free Shopify consultation. Get a live audit of your store and senior advice on how to grow. No pressure, no obligation.",
};

const points = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: MapPin, label: "Location", value: site.location },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book your free consultation"
        description="Tell me about your store and goals. I'll review it and get back to you with senior, honest advice, usually within one business day."
      />

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
              <h2 className="text-xl font-semibold text-foreground">Send a message</h2>
              <p className="mt-1.5 text-sm text-muted">
                The more detail you share, the more useful my first reply will be.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-4">
                {points.map((p) => {
                  const Icon = p.icon;
                  const content = (
                    <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-5">
                      <Icon className="size-5 text-accent" />
                      <p className="text-xs uppercase tracking-wider text-muted-2">{p.label}</p>
                      <p className="text-sm font-medium text-foreground">{p.value}</p>
                    </div>
                  );
                  return p.href ? (
                    <a key={p.label} href={p.href} className="transition-opacity hover:opacity-80">
                      {content}
                    </a>
                  ) : (
                    <div key={p.label}>{content}</div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Prefer to book a call?</h2>
                  <p className="mt-1.5 text-sm text-muted">
                    Grab a 30-minute slot that works for you.
                  </p>
                </div>
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
