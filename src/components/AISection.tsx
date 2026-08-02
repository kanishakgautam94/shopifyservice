import { Bot, Sparkles, Gauge } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";

const capabilities = [
  {
    icon: Bot,
    n: "01",
    title: "AI agents for ecommerce",
    desc: "Sales assistants in checkout, product recommendation engines, support automation, and order-flow agents built on Claude and the Anthropic API.",
  },
  {
    icon: Sparkles,
    n: "02",
    title: "LLM integrations",
    desc: "Claude, OpenAI, and open-source models wired into Shopify via custom apps: product copy, semantic search, smart merchandising, and multilingual content at scale.",
  },
  {
    icon: Gauge,
    n: "03",
    title: "AI-accelerated delivery",
    desc: "We build with Claude Code and Cursor every day. Same senior-level code quality with materially faster turnaround. Your project ships in weeks, not quarters.",
  },
];

const terminalLines = [
  { text: "$ npm run agent:checkout", type: "cmd" },
  { text: "// Claude-powered sales assistant", type: "comment" },
  { text: "✓ connected to Storefront API", type: "ok" },
  { text: "✓ cart context loaded (3 items)", type: "ok" },
  { text: "✓ upsell generated: +1 matching bench", type: "ok" },
  { text: "✓ objection handled: shipping ETA", type: "ok" },
  { text: "// AOV +18% in A/B test", type: "comment" },
] as const;

export function AISection() {
  return (
    <section className="border-y border-border bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="AI-powered development"
          title="We ship with AI, and we build with it too"
          description="AI is core infrastructure in how we work and what we deliver: faster builds for you, and intelligent features wired directly into your store."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <RevealStagger className="flex flex-col gap-5">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <RevealItem key={c.n}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-background p-6">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/20">
                      <Icon className="size-6" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-accent">{c.n}</span>
                        <h3 className="font-semibold text-foreground">{c.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{c.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>

          <Reveal delay={0.1}>
            <Parallax offset={22}>
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
                <span className="size-3 rounded-full bg-red-500/70" />
                <span className="size-3 rounded-full bg-yellow-500/70" />
                <span className="size-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted-2">
                  checkout-sales-agent · node
                </span>
              </div>
              <div className="flex flex-col gap-1.5 p-6 font-mono text-[13px] leading-relaxed">
                {terminalLines.map((line, i) => (
                  <p
                    key={i}
                    className={
                      line.type === "cmd"
                        ? "text-foreground"
                        : line.type === "comment"
                          ? "text-muted-2"
                          : "text-accent"
                    }
                  >
                    {line.text}
                  </p>
                ))}
                <p className="text-foreground">
                  $ <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />
                </p>
              </div>
            </div>
            </Parallax>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
