import { Rental } from "./rentals";

export interface Enquiry {
  id: number;
  inquiry_type: "General Inquiry" | "Specific Property";
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
  submitted_at: string;
  property: Rental | null;
}

export interface EnquiriesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Enquiry[];
}
