import RentalsDetailView from "@/components/rental/page";
import { Rental } from "@/types/rentals";

export default async function RentalsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Wait for the entire params object
  const resolvedParams = await params;

  const rentalDetail: Rental = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${resolvedParams.slug}`
  ).then((res) => res.json());
  return <RentalsDetailView rentalDetail={rentalDetail} />;
}
