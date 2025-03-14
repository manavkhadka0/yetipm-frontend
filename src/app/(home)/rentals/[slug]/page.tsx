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

export async function generateMetadata({ params }: RentalDetailPageProps) {
  const resolvedParams = await params;
  const rentalDetail: Rental = await fetchRental(resolvedParams.slug);

  return {
    title: rentalDetail.name,
    description: rentalDetail.project_description,
    openGraph: {
      title: rentalDetail.name,
      description: rentalDetail.project_description,
      images: rentalDetail.images,
    },
  };
}

export default async function RentalsDetailPage({
  params,
}: RentalDetailPageProps) {
  const resolvedParams = await params;

  const rentalDetail: Rental = await fetchRental(resolvedParams.slug);

  return <RentalsDetailView rentalDetail={rentalDetail} />;
}
