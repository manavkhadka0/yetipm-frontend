import PropertyListingHeroSection from "@/components/rental/rentalList/hero-section";
import PropertyDetails from "@/components/rental/rentalList/content-section";
import NearbySections from "@/components/rental/rentalList/nearby-section";
import AdditionalInfo from "@/components/rental/rentalList/additional-info";

import { RentalComponentProps } from "@/@types/rental";

const RentalsDetailView: React.FC<RentalComponentProps> = ({
  rentalDetail,
}: RentalComponentProps) => {
  return (    
    <div>
      <PropertyListingHeroSection rentalDetail={rentalDetail} />
      <PropertyDetails rentalDetail={rentalDetail} />
      <NearbySections rentalDetail={rentalDetail} />
      <AdditionalInfo rentalDetail={rentalDetail} />
    </div>
  );
};

export default RentalsDetailView;
