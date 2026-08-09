import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: Hire a Senior Shopify Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060809",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(55,225,127,0.22), transparent 70%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#37e17f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#060809",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", color: "#eef2f0", fontSize: 30, fontWeight: 600 }}>
            <span>Shopify</span>
            <span style={{ color: "#37e17f" }}>Service</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#eef2f0",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Kanishak Gautam · Senior Shopify for $1M+ brands
          </div>
          <div style={{ color: "#9aa7a2", fontSize: 30, maxWidth: 820 }}>
            Theme · Shopify Plus · Headless · Custom Apps · CRO
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, color: "#6b7873", fontSize: 26 }}>
          <span>500+ projects</span>
          <span>100+ brands</span>
          <span>Since 2015</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
