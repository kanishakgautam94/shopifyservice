"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Calendar } from "lucide-react";
import { site } from "@/content/site";

const PLACEHOLDER_CALENDLY = "https://calendly.com/shopifyservice/consultation";

export function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);

  // Only render the live widget when a real Calendly URL is configured via
  // NEXT_PUBLIC_CALENDLY_URL (i.e. it isn't the built-in placeholder).
  const configured =
    site.calendlyUrl.startsWith("https://calendly.com/") &&
    site.calendlyUrl !== PLACEHOLDER_CALENDLY;

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!configured) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-background p-8 text-center">
        <Calendar className="size-8 text-accent" />
        <p className="font-medium text-foreground">Booking calendar</p>
        <p className="max-w-xs text-sm text-muted">
          Set <code className="text-accent">NEXT_PUBLIC_CALENDLY_URL</code> to embed your live
          Calendly here. Until then, use the form or email us directly.
        </p>
      </div>
    );
  }

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget min-h-[640px] w-full overflow-hidden rounded-2xl border border-border"
        data-url={site.calendlyUrl}
        style={{ minWidth: "320px" }}
      />
      {!loaded && null}
    </>
  );
}
