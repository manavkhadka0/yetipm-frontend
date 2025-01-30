import HomeHero from "../home-hero";
import Filter from "../filter";
import NewHomes from "../explore";
import Page from "../tips";
import WeInclude from "../we-include";
import ServicesSection from "../service";

export default function HomeView() {
  return (
    <>
      <HomeHero />
      <Filter />
      <NewHomes />
      <WeInclude />
      <Page />
      <ServicesSection />
    </>
  );
}
