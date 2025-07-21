import { z } from "zod";

export const blogFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  slug: z.string().optional(), // Auto-generated in backend
  blog_content: z.string().min(10, "Content must be at least 10 characters"),
  blog_duration_to_read: z.string().min(1, "Duration is required"),
  thumbnail_image: z.any().optional(),
  thumbnail_image_alt_description: z.string().optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  meta_keywords: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  author: z.number().min(1, "Author is required"),
  tags: z.array(z.number()).min(1, "At least one tag is required"),
});

export type BlogFormSchema = z.infer<typeof blogFormSchema>;
