import type { Metadata } from "next";
import { Rubik, Nunito_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { MetaPixel } from "@/components/MetaPixel";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/Providers";
import { site } from "@/content/site";
import "./globals.css";

const heading = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = Nunito_Sans({
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
    default: `${site.name}: Hire a Senior Shopify Developer`,
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
  authors: [{ name: "Kanishak Gautam" }],
  creator: "Kanishak Gautam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name}: Hire a Senior Shopify Developer`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: Hire a Senior Shopify Developer`,
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
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <Providers>
          <JsonLd />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Analytics />
          <GoogleAnalytics />
          <MetaPixel />
        </Providers>
      </body>
    </html>
  );
}
