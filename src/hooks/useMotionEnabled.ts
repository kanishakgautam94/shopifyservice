"use client";

import { useEffect, useState } from "react";

/**
 * True when we should run entrance / hover motion.
 * Off by default for SSR + phones (hover:none) to avoid iOS flicker.
 */
export function useMotionEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(finePointer.matches && !reduceMotion.matches);
    };

    update();
    finePointer.addEventListener("change", update);
    reduceMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reduceMotion.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
