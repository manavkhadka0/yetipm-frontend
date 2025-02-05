import HomeView from "@/sections/home/view/home-view";

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

const fetchFeaturedRentals = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/?page_size=4`
  );
  const data = await response.json();
  return data.results;
};

export default async function Home() {
  const faqs = await fetchFaqs();
  const testimonials = await fetchTestimonials();
  const featuredRentals = await fetchFeaturedRentals();
  return (
    <HomeView
      faqs={faqs}
      testimonials={testimonials}
      featuredRentals={featuredRentals}
    />
  );
}
