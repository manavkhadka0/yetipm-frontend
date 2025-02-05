import RentalsDetailView from "@/components/rental/page";
import { Rental } from "@/types/rentals";

type RentalDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const fetchRental = async (slug: string): Promise<Rental> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`
  );
  return response.json();
};

export default async function RentalsDetailPage({
  params,
}: RentalDetailPageProps) {
  const resolvedParams = await params;

  const rentalDetail: Rental = await fetchRental(resolvedParams.slug);

  return <RentalsDetailView rentalDetail={rentalDetail} />;
}
