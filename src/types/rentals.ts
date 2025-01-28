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

export interface Rental {
  id: number;
  images: RentalImage[];
  features: RentalFeature[];
  city: City;
  name: string;
  slug: string;
  project_type: string;
  project_address: string;
  price: number;
  price_breakdown: string;
  project_description: string;
  area_square_footage: number;
  garage_spaces: number;
  bedrooms: number;
  bathrooms: number;
  availability: boolean;
  available_date: string;
  postal_code: string;
  created_at: string;
  updated_at: string;
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
