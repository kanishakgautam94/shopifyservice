"use client";

import { useEffect, useState } from "react";

/**
 * True on phones / touch-first devices.
 * Used only to skip scroll-linked parallax (iOS Safari jank), not entrance motion.
 */
export function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return touch;
}
