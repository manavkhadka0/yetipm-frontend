import Page from "@/components/ourDiff/whyUs/whyus-list/hero";
import FeaturesSection from "@/components/ourDiff/whyUs/whyus-list/features";
import ServicesSection from "@/components/ourDiff/whyUs/whyus-list/service";
import Qna from "@/components/ourDiff/whyUs/whyus-list/qna";

export default function WhyUsPage() {
  return (
    <div>
      <Page />
      <FeaturesSection />
      <ServicesSection />
      <Qna />
    </div>
  );
}
