"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

const spring: Transition = { type: "spring", stiffness: 320, damping: 22 };

const MotionLink = motion.create(Link);

export function HoverLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <MotionLink
      href={href}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      transition={spring}
      className={className}
    >
      {children}
    </MotionLink>
  );
}

export function HoverCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={spring}
      className={className}
    >
      {children}
    </motion.article>
  );
}
