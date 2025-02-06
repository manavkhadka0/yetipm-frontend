import { z } from "zod";

export const blogTagFormSchema = z.object({
  tag_name: z.string().min(2, "Tag name must be at least 2 characters"),
});

export type BlogTagFormSchema = z.infer<typeof blogTagFormSchema>;
