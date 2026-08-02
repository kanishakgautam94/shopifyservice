import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/CTASection";
import { getAllPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { site } from "@/content/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      url: `${site.url}/blog/${post.slug}`,
    },
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <article className="pt-36 pb-16 md:pt-44">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> Back to blog
          </Link>

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

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gradient md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-5 border-b border-border pb-8 text-sm text-muted-2">
            <span className="font-medium text-muted">{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" /> {post.readingTime}
            </span>
          </div>

          <div className="prose-custom mt-10">
            <MDXRemote source={post.content} />
          </div>
        </Container>
      </article>

      <CTASection />
    </>
  );
}
