"use client";

import { useEffect, useRef } from "react";

export function Marquee({
  items,
  speed = 40,
}: {
  items: string[];
  /** Pixels per second */
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      const half = halfWidthRef.current;
      if (half > 0) {
        offsetRef.current -= speed * dt;
        if (-offsetRef.current >= half) {
          offsetRef.current += half;
        }
        track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [speed]);

  return (
    <section className="border-y border-border bg-surface py-6" aria-label="Capabilities">
      <div className="marquee-viewport">
        <div className="marquee-fade marquee-fade-left" aria-hidden />
        <div className="marquee-fade marquee-fade-right" aria-hidden />
        <div ref={trackRef} className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="marquee-group"
              data-copy={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {items.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="whitespace-nowrap text-sm font-medium uppercase tracking-wider text-muted-2"
                >
                  {item}
                  <span className="ml-10 text-accent/40" aria-hidden>
                    /
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
