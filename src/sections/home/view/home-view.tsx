"use client";
import HomeHero from "../home-hero";
import Filter from "../filter";
import NewHomes from "../explore";
import Page from "../tips";
import WeInclude from "../we-include";
import ServicesSection from "../service";
import Qna from "@/components/ourDiff/whyUs/whyus-list/qna";
import Testimonials from "../testimonials";
import { Testimonial } from "@/types/testimonials";
import { RentalList } from "@/types/rentals";
import FeaturedRentals from "../featured-rentals";
import { Faq } from "@/types/faqs";
import ContactView from "@/sections/contact-us/view/contact-view";

type HomeViewProps = {
  faqs: Faq[];
  testimonials: Testimonial[];
  featuredRentals: RentalList[];
};

export default function HomeView({
  faqs,
  testimonials,
  featuredRentals,
}: HomeViewProps) {
  return (
    <>
      <HomeHero />
      <Filter />
      <FeaturedRentals rentals={featuredRentals} />
      <NewHomes />
      <WeInclude />
      <Page />
      <Qna faqs={faqs} />
      <ServicesSection />
      <Testimonials testimonials={testimonials} />
      <ContactView />
    </>
  );
}
