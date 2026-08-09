import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { stack } from "@/content/stack";

export function StackSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="The full toolkit"
          title="A stack that scales with your store"
          description="Deep expertise across the entire modern Shopify stack, so I can architect the right solution, not just the one I happen to know."
          align="center"
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <RevealItem key={group.category} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-xs text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
