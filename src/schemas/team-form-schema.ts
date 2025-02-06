import { z } from "zod";

export const teamFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  email: z.string().email().nullable(),
  profile_picture: z.any().optional(),
  profile_picture_alt_description: z.string().optional().nullable(),
  facebook_link: z.string().url().optional().nullable(),
  instagram_link: z.string().url().optional().nullable(),
  twitter_link: z.string().url().optional().nullable(),
  linkedin_link: z.string().url().optional().nullable(),
});

export type TeamFormSchema = z.infer<typeof teamFormSchema>;
