import { z } from "zod";
import { servicesNav } from "@/content/site";

/** Budget pills shown in the contact form (USD, normalised from the legacy LE/$ mix). */
export const BUDGET_OPTIONS = [
  "< $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Let's discuss",
] as const;

/** Fallback select value when no specific service applies. */
export const GENERAL_ENQUIRY = "general-enquiry";

/** Allowed service values: the general-enquiry option plus every servicesNav
 *  slug — exactly what the contact form select emits. Keep in sync with
 *  app/contact/ContactForm.tsx. */
const SERVICE_VALUES = [
  GENERAL_ENQUIRY,
  ...servicesNav.map((service) => service.slug),
] as [string, ...string[]];

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .email("Please enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer."),
  service: z.enum(SERVICE_VALUES, "Please select a service."),
  budget: z.enum(BUDGET_OPTIONS).optional().or(z.literal("")),
  message: z
    .string()
    .min(20, "Please add a bit more detail (at least 20 characters).")
    .max(2000, "Please keep your message under 2000 characters."),
  // Honeypot: must be empty. Humans never see this field; bots fill it and are
  // answered with a generic fake success server-side (see app/api/contact/route.ts).
  company: z
    .string()
    .max(0, "Invalid submission.")
    .optional()
    .or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
