import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.slug}`}
      className="card-hover group relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/20">
          <Icon className="size-6" />
        </span>
        <ArrowUpRight className="size-5 text-muted-2 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{service.short}</p>
    </Link>
  );
}
