import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-background">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                  <path d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4Zm-1.2 13.2-3.3-3.3 1.4-1.4 1.9 1.9 4.6-4.6 1.4 1.4-6 6Z" />
                </svg>
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                Shopify<span className="text-accent">Service</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              End-to-end Shopify development for ambitious 7 and 8-figure brands. Led by a senior
              developer, with a small collaborator team across design, content, and development.
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Mail className="size-4" aria-hidden /> {site.email}
              </a>
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone className="size-4" aria-hidden /> {site.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden /> {site.location}
              </span>
            </div>
          </div>

          <FooterCol title="Company">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            {services.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.title.replace(" & Customization", "")}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Get started">
            <FooterLink href="/contact">Book a free call</FooterLink>
            <FooterLink href="/work">See the work</FooterLink>
            <FooterLink href="/about">About & collaborators</FooterLink>
            <FooterLink href="/blog">Read the blog</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-muted transition-colors hover:text-accent">
      {children}
    </Link>
  );
}
