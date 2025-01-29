("");
import HomeHero from "../home-hero";
import Filter from "./filter";
import NewHomes from "./explore";
import Page from "./tips";
import ServicesSection from "./service";
import WeInclude from "../we-include";

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
