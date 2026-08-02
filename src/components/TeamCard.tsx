import Image from "next/image";
import type { TeamMember } from "@/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="card-hover flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center gap-4">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            width={56}
            height={56}
            className="size-14 rounded-full object-cover ring-1 ring-border"
          />
        ) : (
          <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-lg font-semibold text-accent ring-1 ring-inset ring-accent/20">
            {member.initials}
          </span>
        )}
        <div>
          <h3 className="font-semibold text-foreground">{member.name}</h3>
          <p className="text-sm text-accent">{member.role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
    </div>
  );
}
