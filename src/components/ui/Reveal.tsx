"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, type ReactNode } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/** Survives React Strict Mode remounts so entrance animations only play once. */
const played = new Set<string>();

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const alreadyPlayed = played.has(id);

  useEffect(() => {
    if (inView) played.add(id);
  }, [inView, id]);

  const show = alreadyPlayed || inView || !!reduce;
  const offset = reduce ? 0 : y;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{ duration: 0.45, delay: alreadyPlayed ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const alreadyPlayed = played.has(id);

  useEffect(() => {
    if (inView) played.add(id);
  }, [inView, id]);

  const show = alreadyPlayed || inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: alreadyPlayed ? 0 : 0.06,
            delayChildren: alreadyPlayed ? 0 : 0.02,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
