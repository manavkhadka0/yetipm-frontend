import { z } from "zod";

export const blogAuthorFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  about: z.string().min(10, "About must be at least 10 characters"),
  picture: z.any().optional(),
});

export type BlogAuthorFormSchema = z.infer<typeof blogAuthorFormSchema>;
