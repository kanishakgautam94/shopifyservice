"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b shadow-[0_8px_30px_-12px_color-mix(in_srgb,var(--foreground)_20%,transparent)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-18">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={site.name}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-background">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
              <path d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4Zm-1.2 13.2-3.3-3.3 1.4-1.4 1.9 1.9 4.6-4.6 1.4 1.4-6 6Z" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Shopify<span className="text-accent">Service</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ButtonLink href="/contact" size="sm">
            Book a free call
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex size-10 items-center justify-center rounded-lg text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" size="lg" className="mt-3 w-full">
              Book a free call
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
