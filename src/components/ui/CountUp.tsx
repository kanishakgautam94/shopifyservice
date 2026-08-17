"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function CountUp({
  value,
  className,
  duration = 1.4,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = numStr ? parseFloat(numStr.replace(/,/g, "")) : NaN;
  const hasDecimal = numStr.includes(".");

  // Start at final value so remounts never flash 0; animate only once when first in view.
  const [display, setDisplay] = useState(isNaN(target) ? 0 : target);

  useEffect(() => {
    if (isNaN(target) || ran.current) return;

    if (reduce) {
      ran.current = true;
      setDisplay(target);
      return;
    }

    if (!inView) return;

    ran.current = true;
    setDisplay(0);
    const controls = animate(0, target, {
      duration,
      ease,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, target, duration]);

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
