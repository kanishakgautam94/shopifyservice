import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Hire Expert Shopify Developers`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Shopify developer",
    "Shopify experts",
    "Shopify Plus development",
    "Shopify theme customization",
    "hire Shopify developer",
    "headless Shopify Hydrogen",
    "Shopify app development",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Hire Expert Shopify Developers`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Hire Expert Shopify Developers`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
