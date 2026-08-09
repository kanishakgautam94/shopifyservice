import Image from "next/image";
import type { CollaboratorSeat } from "@/content/team";

export function CollaboratorSeatCard({ seat }: { seat: CollaboratorSeat }) {
  const person = seat.member;

  if (person) {
    return (
      <div className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
        <div className="flex items-center gap-4">
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              width={56}
              height={56}
              className="size-14 rounded-full object-cover ring-1 ring-border"
            />
          ) : (
            <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-lg font-semibold text-accent ring-1 ring-inset ring-accent/20">
              {person.initials}
            </span>
          )}
          <div>
            <h3 className="font-semibold text-foreground">{person.name}</h3>
            <p className="text-sm text-accent">{person.role}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">{person.bio}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-dashed border-border bg-background/60 p-6">
      <div className="flex items-center gap-4">
        <span className="flex size-14 items-center justify-center rounded-full border border-dashed border-border text-xs font-medium text-muted-2">
          Soon
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-2">
            Seat open
          </p>
          <h3 className="font-semibold text-foreground">{seat.role}</h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted">{seat.blurb}</p>
      <p className="mt-auto pt-2 text-xs text-muted-2">Profile coming soon</p>
    </div>
  );
}
