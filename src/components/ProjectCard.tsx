import { TrendingUp } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { HoverCard } from "@/components/ui/HoverCard";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <HoverCard
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_18px_50px_-22px_rgba(0,0,0,0.75)]",
        className,
      )}
    >
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(120% 120% at 50% 0%, ${project.accent}33, transparent 60%), #0c1012`,
        }}
      >
        <span
          className="text-2xl font-bold tracking-tight text-foreground/90"
          style={{ textShadow: `0 0 40px ${project.accent}55` }}
        >
          {project.name}
        </span>
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-2">
          {project.category}
        </p>
        <p className="flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div
          className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            backgroundColor: `${project.accent}1a`,
            color: project.accent,
          }}
        >
          <TrendingUp className="size-3.5" />
          {project.result}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </HoverCard>
  );
}
