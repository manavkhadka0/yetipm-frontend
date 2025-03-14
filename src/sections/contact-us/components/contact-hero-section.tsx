import ContactForm from "./contact-form";
import ContactMap from "./contact-map";

export default function ContactUsHeroSection() {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Drop Us A Line</h2>
            <p className="text-gray-600">
              Have questions about our services? Fill out the form below and
              we&apos;ll get back to you within 2 business days.
            </p>
          </div>
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </div>
  );
}
