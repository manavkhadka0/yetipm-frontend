import ContactDetails from "@/sections/contact-us/components/contact-details";
import ContactUsHeroSection from "@/sections/contact-us/components/contact-hero-section";
import ResponsiveContainer from "@/components/common/responsive-container";
import HeadingSection from "@/components/common/heading-section";

export default function ContactView() {
  return (
    <>
      <ResponsiveContainer paddingX="md" paddingY="xl">
        <HeadingSection
          title="Contact Us"
          subtitle="We're here to help with all your property management needs"
        />
        <ContactUsHeroSection />
      </ResponsiveContainer>
      <ContactDetails />
    </>
  );
}
