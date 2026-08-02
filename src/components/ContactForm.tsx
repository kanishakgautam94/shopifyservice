"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions";
import { revenueOptions } from "@/lib/schema";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-background shadow-[0_8px_30px_-8px_rgba(55,225,127,0.6)] transition-all hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && <Send className="size-4" />}
    </button>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-accent-soft p-10 text-center">
        <CheckCircle2 className="size-12 text-accent" />
        <h3 className="text-xl font-semibold text-foreground">Message sent</h3>
        <p className="max-w-sm text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {/* Honeypot field, hidden from humans */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_url">Do not fill this in</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name *" name="name" error={state.errors?.name}>
          <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
        </Field>
        <Field label="Business email *" name="email" error={state.errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@brand.com"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" error={state.errors?.company}>
          <input id="company" name="company" placeholder="Brand Inc." className={inputClass} />
        </Field>
        <Field label="Store URL" name="website" error={state.errors?.website}>
          <input id="website" name="website" placeholder="brand.com" className={inputClass} />
        </Field>
      </div>

      <Field label="Annual revenue" name="revenue" error={state.errors?.revenue}>
        <select id="revenue" name="revenue" defaultValue="" className={cn(inputClass, "appearance-none")}>
          <option value="" disabled>
            Select a range
          </option>
          {revenueOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="How can we help? *" name="message" error={state.errors?.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your store, your goals, and what you're looking for…"
          className={cn(inputClass, "resize-y")}
        />
      </Field>

      {state.status === "error" && state.message && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="size-4 shrink-0" />
          {state.message}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs text-muted-2">We reply within 1 business day.</p>
        <SubmitButton />
      </div>
    </form>
  );
}
