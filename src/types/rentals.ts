import { City } from "./city";

export interface RentalImage {
  id: number;
  image: string;
}

export interface RentalFeature {
  id: number;
  image: string;
  name: string;
}

export interface RentalList {
  id: number;
  name: string;
  slug: string;
  project_address: string;
  price: number;
  area_square_footage: number;
  thumbnail_image: string;
  bedrooms: number;
  bathrooms: number;
  city: City;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Rental extends RentalList {
  images: RentalImage[];
  features: RentalFeature[];
  project_type: string;
  price_breakdown: string;
  project_description: string;
  garage_spaces: number;
  availability: boolean;
  available_date: string;
  zip_code: string;
}

export interface RentalsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Rental[];
}

export interface Feature {
  id: number;
  name: string;
  images: string;
}

export interface FilterState {
  min_price: string;
  max_price: string;
  beds: string;
  baths: string;
  project_type: string;
  city: string;
  availability: string;
}

export interface RentalFiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}
