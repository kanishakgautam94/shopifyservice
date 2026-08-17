"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/content/site";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/** Prevents hero entrance from replaying on Strict Mode remount. */
let heroPlayed = false;

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();
  const alreadyPlayed = useRef(heroPlayed);
  const [play, setPlay] = useState(heroPlayed);

  useEffect(() => {
    heroPlayed = true;
    setPlay(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-radial-accent pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      {play && !reduce && (
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
          <motion.div
            custom={0}
            variants={fade}
            initial={alreadyPlayed.current || reduce ? false : "hidden"}
            animate={play || reduce ? "show" : "hidden"}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              500+ Shopify projects · freelancing since 2015
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial={alreadyPlayed.current || reduce ? false : "hidden"}
            animate={play || reduce ? "show" : "hidden"}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">I&apos;m Kanishak.</span>{" "}
            <span className="text-gradient-accent">Senior Shopify for $1M+ brands.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial={alreadyPlayed.current || reduce ? false : "hidden"}
            animate={play || reduce ? "show" : "hidden"}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
          >
            I lead every project end to end, from theme to headless to custom apps, with a small
            team of collaborators across design, content, and development.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial={alreadyPlayed.current || reduce ? false : "hidden"}
            animate={play || reduce ? "show" : "hidden"}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/contact" size="lg">
              Book a free call <ArrowRight className="size-5" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="lg">
              See the work
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          variants={fade}
          initial={alreadyPlayed.current || reduce ? false : "hidden"}
          animate={play || reduce ? "show" : "hidden"}
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
