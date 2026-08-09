import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  revenue: z.string().trim().max(60).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more (at least 10 characters)")
    .max(4000),
  // Honeypot: bots tend to fill every field. Any value is silently dropped in the action.
  company_url: z.string().optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const revenueOptions = [
  "Under $1M",
  "$1M to $5M",
  "$5M to $20M",
  "$20M to $100M",
  "$100M+",
] as const;
