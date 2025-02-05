import { z } from "zod";

export const rentalFormSchema = z.object({
  name: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  project_type: z.string().min(1, {
    message: "Please select a project type.",
  }),
  city: z.string().min(1, {
    message: "Please select a city.",
  }),
  project_address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  is_featured: z.boolean().optional().default(false),
  postal_code: z.string().optional(),
  price: z.coerce.number().min(1, "Price is required"),
  price_breakdown: z.string().optional(),
  project_description: z.string().optional(),
  area_square_footage: z.coerce.number().optional(),
  garage_spaces: z.coerce.number().optional(),
  bedrooms: z.coerce.number().min(1, "Number of bedrooms is required"),
  bathrooms: z.coerce.number().min(1, "Number of bathrooms is required"),
  availability: z.boolean().optional(),
  available_date: z.string().optional(),
  uploaded_images: z.array(z.any()).optional(),
  feature_ids: z.array(z.number()).optional(),
});

export type RentalFormSchema = z.infer<typeof rentalFormSchema>;
