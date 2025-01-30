import HomeHero from "../home-hero";
import Filter from "../filter";
import NewHomes from "../explore";
import Page from "../tips";
import WeInclude from "../we-include";
import ServicesSection from "../service";
import Qna from "@/components/ourDiff/whyUs/whyus-list/qna";
import Testimonials from "../testimonials";
import { Testimonial } from "@/types/testimonials";

const fetchFaqs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs/`);
  const data = await response.json();
  return data.results;
};

const fetchTestimonials = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/testimonials/`
  );
  const data = await response.json();
  return data.results;
};

export default async function HomeView() {
  const faqs = await fetchFaqs();
  const testimonials: Testimonial[] = await fetchTestimonials();
  return (
    <>
      <HomeHero />
      <Filter />
      <NewHomes />
      <WeInclude />
      <Page />
      <Qna faqs={faqs} />
      <ServicesSection />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
