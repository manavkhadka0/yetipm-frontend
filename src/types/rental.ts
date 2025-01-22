export interface RentalDetail {
  slug: string;
  id: number;
  title: string;
  featured?: boolean;
  price: number;
  price_breakdown: string;
  project_description: string;
  project_address: string;
  bedrooms: number;
  bathrooms: number;
  area_square_footage: number;
  available_date?: string;
  features: {
    id: string;
    name: string;
  }[];
  images: {
    id: number;
    image: string;
  }[];
  nearby_schools?: {
    name: string;
    distance: string;
    grades: string;
  }[];
  similar_homes?: {
    image: string;
    rent: string;
    allInPrice: string;
    beds: number;
    baths: number;
    sqft: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    available: string;
    imageCount: string;
    hasVirtualTour: boolean;
  }[];
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

export interface RentalCardProps {
  rental: RentalDetail;
}

export interface RentalsDetailPageProps {
  params: {
    slug: string;
  };
}

export interface RentalComponentProps {
  rentalDetail: RentalDetail;
}

export interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}
