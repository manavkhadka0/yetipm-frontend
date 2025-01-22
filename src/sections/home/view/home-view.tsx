("");
import HomeHero from "../home-hero";
import Filter from "./filter";
import NewHomes from "./explore";
import Page from "./tips";
import ServicesSectio from "./service";

export default function HomeView() {
  return (
    <>
      <HomeHero />
      <Filter />
      <NewHomes />
      <Page />
      <ServicesSectio />
    </>
  );
}
