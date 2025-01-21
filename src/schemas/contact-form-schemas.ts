import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  phone_number: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number.")
    .nonempty("Phone number is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
