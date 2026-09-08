import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Enter your name.")
    .max(200, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(5000, "That message is too long."),
  company: z.string().max(0, "Submission rejected.").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;
