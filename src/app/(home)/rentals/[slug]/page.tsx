import RentalsDetailView from "@/components/rental/page";
import { RentalsDetailPageProps, RentalDetail } from "@/@types/rental";

export default async function RentalsDetailPage({
  params,
}: RentalsDetailPageProps) {
  // Wait for the entire params object
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const rentalDetail: RentalDetail = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`
  ).then((res) => res.json());
  return <RentalsDetailView rentalDetail={rentalDetail} />;
}
