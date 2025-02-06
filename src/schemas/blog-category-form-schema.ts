import { z } from "zod";

export const blogCategoryFormSchema = z.object({
  category_name: z
    .string()
    .min(2, "Category name must be at least 2 characters"),
  category_image: z.any().optional(),
});

export type BlogCategoryFormSchema = z.infer<typeof blogCategoryFormSchema>;
