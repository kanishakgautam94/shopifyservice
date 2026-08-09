"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Calendar, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";

const PLACEHOLDER_CALENDLY = "https://calendly.com/shopifyservice/consultation";

export function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);

  const configured =
    site.calendlyUrl.startsWith("https://calendly.com/") &&
    site.calendlyUrl !== PLACEHOLDER_CALENDLY;

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!configured) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-background p-8 text-center">
        <Calendar className="size-8 text-accent" />
        <div className="flex flex-col gap-1.5">
          <p className="font-medium text-foreground">Prefer to book by email or phone?</p>
          <p className="max-w-xs text-sm text-muted">
            Use the form on this page, or reach me directly. I usually reply within one business
            day.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 text-accent hover:underline"
          >
            <Mail className="size-4" /> {site.email}
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 text-accent hover:underline"
          >
            <Phone className="size-4" /> {site.phone}
          </a>
        </div>
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
