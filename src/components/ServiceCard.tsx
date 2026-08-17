import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { HoverLink } from "@/components/ui/HoverCard";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <HoverLink
      href={`/services#${service.slug}`}
      className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_18px_50px_-22px_rgba(0,0,0,0.75)]"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/20 transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-6" aria-hidden />
        </span>
        <ArrowUpRight className="size-5 text-muted-2 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{service.short}</p>
    </HoverLink>
  );
}
