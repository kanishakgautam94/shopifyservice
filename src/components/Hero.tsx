"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/content/site";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-radial-accent pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      {/* Animated ambient light blobs */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-[15%] size-72 rounded-full bg-accent/20 blur-[110px]"
            animate={{ x: [0, 40, 0], y: [0, 26, 0], opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-4 right-[12%] size-80 rounded-full bg-emerald-400/10 blur-[130px]"
            animate={{ x: [0, -48, 0], y: [0, 22, 0], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div custom={0} variants={fade} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
              <span className="flex -space-x-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </span>
              700+ projects across 75+ countries
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Expert Shopify development for</span>{" "}
            <span className="text-gradient-accent">brands that mean business</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
          >
            We design, build, and scale high-converting Shopify and Shopify Plus stores. A senior
            developer and a hand-picked team, working end to end from theme to headless to custom apps.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/contact" size="lg">
              Book a free consultation <ArrowRight className="size-5" />
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="lg">
              See our work
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 bg-surface px-4 py-6">
              <CountUp value={s.value} className="text-3xl font-bold text-gradient-accent" />
              <span className="text-center text-xs uppercase tracking-wider text-muted-2">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
