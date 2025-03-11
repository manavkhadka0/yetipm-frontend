import ContactDetails from "@/sections/contact-us/components/contact-details";
import ContactUsHeroSection from "@/sections/contact-us/components/contact-hero-section";
import Image from "next/image";

export default function ContactView() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/hero.png"
          alt="Contact Yeti Property Management"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
              Contact Us
            </h1>
            <p className="text-xl max-w-2xl text-center font-light">
              We&apos;re here to help with all your property management needs
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-10 mb-20">
        <ContactUsHeroSection />
      </div>

      <ContactDetails />
    </div>
  );
}
