export interface City {
  id: number;
  name: string;
  state_name: string;
  slug: string;
  description: string;
  state: number;
}

export interface CityResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: City[];
}
