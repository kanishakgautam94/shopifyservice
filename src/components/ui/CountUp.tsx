"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function CountUp({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  // Split "$150M" -> prefix "$", number "150", suffix "M"
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = numStr ? parseFloat(numStr.replace(/,/g, "")) : NaN;
  const hasDecimal = numStr.includes(".");

  const [display, setDisplay] = useState(reduce || isNaN(target) ? target : 0);

  useEffect(() => {
    if (isNaN(target)) return;
    if (!inView || reduce) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, target, duration]);

  // Non-numeric values render as-is.
  if (isNaN(target)) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const formatted = hasDecimal ? display.toFixed(1) : Math.round(display).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
