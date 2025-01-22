import PropertyListingHeroSection from "@/components/rental/rentalList/hero-section";
import PropertyDetails from "@/components/rental/rentalList/content-section";
import NearbySections from "@/components/rental/rentalList/nearby-section";
import AdditionalInfo from "@/components/rental/rentalList/additional-info";

import { Rental } from "@/types/rentals";

type RentalDetailProps = {
  rentalDetail: Rental;
};

const RentalsDetailView: React.FC<RentalDetailProps> = ({
  rentalDetail,
}: RentalDetailProps) => {
  return (
    <div>
      <PropertyListingHeroSection rentalDetail={rentalDetail} />
      <PropertyDetails rentalDetail={rentalDetail} />
      <NearbySections />
      <AdditionalInfo />
    </div>
  );
};

export default RentalsDetailView;
