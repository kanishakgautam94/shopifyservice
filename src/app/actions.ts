"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";
import { site } from "@/content/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string>;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    website: formData.get("website"),
    revenue: formData.get("revenue"),
    message: formData.get("message"),
    company_url: formData.get("company_url"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  const data = parsed.data;

  // Honeypot triggered — silently accept without sending.
  if (data.company_url && data.company_url.length > 0) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Shopify Service <onboarding@resend.dev>";

  if (!apiKey) {
    // Fail gracefully in dev / before env is configured, but log for visibility.
    console.warn("[contact] RESEND_API_KEY not set — logging submission instead:", {
      name: data.name,
      email: data.email,
      company: data.company,
    });
    return {
      status: "success",
      message: "Thanks! We'll be in touch shortly.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `New lead: ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || "—")}</p>
        <p><strong>Website:</strong> ${escapeHtml(data.website || "—")}</p>
        <p><strong>Annual revenue:</strong> ${escapeHtml(data.revenue || "—")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please email us directly.",
      };
    }

    return { status: "success", message: "Thanks! We'll be in touch within 1 business day." };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please email us directly at " + site.email + ".",
    };
  }
}
