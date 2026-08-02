import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, no-fluff articles on Shopify development, Shopify Plus, headless commerce, CRO, and scaling ecommerce brands.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Ideas for scaling on Shopify"
        description="Practical insights from the trenches on development, performance, CRO, and growing 7 and 8-figure stores."
      />

      <section className="pb-24">
        <Container>
          {posts.length === 0 ? (
            <p className="text-muted">New articles coming soon.</p>
          ) : (
            <RevealStagger className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <RevealItem key={post.slug} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card-hover group flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-7"
                  >
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-2">
                      <span className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5" /> {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3.5" /> {post.readingTime}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
