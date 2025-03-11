import { z } from "zod";
import { CATEGORY_CHOICES } from "@/constants/categories";

export const faqFormSchema = z.object({
  question: z.string().min(5, "Question must be at least 5 characters"),
  answer: z
    .string()
    .min(5, "Answer must be at least 5 characters")
    .transform((val) => val.trim()),
  category: z.enum([...CATEGORY_CHOICES] as [string, ...string[]]),
});

export type FaqFormSchema = z.infer<typeof faqFormSchema>;
