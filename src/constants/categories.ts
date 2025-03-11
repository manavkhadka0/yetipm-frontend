export const CATEGORY_CHOICES = [
  "General Questions",
  "Property Owners/Landlords",
  "Tenants",
] as const;

export type CategoryType = (typeof CATEGORY_CHOICES)[number];
