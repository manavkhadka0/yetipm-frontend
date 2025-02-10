import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Hero Section */}
      <section className="relative h-[60vh] mb-20">
        <Image src="/hero.png" alt="Yeti Property Management Story" fill className="object-cover rounded-xl" />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center">
            Dedicated to providing exceptional property management services while maintaining the personal touch that
            makes every client feel like family.
          </p>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white w-12 h-12 animate-bounce" />
      </section>

      {/* Main Content */}
      <div className="space-y-24">
        {/* Mission Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-6 text-primary">Our Mission</h2>
            <p className="text-lg text-justify">
              At Yeti Property Management, our mission is to provide exceptional property management services that
              maximize value for property owners while ensuring a seamless and enjoyable experience for tenants. We are
              committed to maintaining high-quality properties, fostering strong relationships, and delivering
              efficient, transparent, and innovative solutions tailored to our clients&apos; needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/mission1.png"
              alt="Yeti Property Management Mission"
              width={500}
              height={500}
              className="rounded-xl "
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-6 text-primary">Our Vision</h2>
            <p className="text-lg text-justify">
              Our vision is to be the most trusted and forward-thinking property management company, known for
              integrity, excellence, and innovation. We aim to set new industry standards by integrating technology,
              sustainability, and personalized service to create thriving communities and profitable real estate
              investments.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/vision.png"
              alt="Yeti Property Management Vision"
              width={500}
              height={500}
              className="rounded-xl "
            />
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-muted rounded-xl p-8 md:p-12">
          <h2 className="text-4xl font-semibold mb-8 text-primary text-center">The Yeti Story</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3 text-justify">
              <p className="text-lg mb-4">
                Yeti Property Management was founded with the belief that property ownership should be a stress-free and
                rewarding experience. With a strong background in real estate and a passion for delivering outstanding
                service, we recognized the need for a management company that values both owners and tenants equally.
              </p>
              <p className="text-lg mb-4">
                From handling routine maintenance and rent collection to maximizing property investments, we take care
                of every detail with professionalism and care. Our philosophy is simple: &quot;Your Property, Our Priority.&quot;
                We treat every property as if it were our own, ensuring that owners have peace of mind and tenants feel
                at home.
              </p>
              <p className="text-lg">
                With Yeti Property Management, you&apos;re not just a client&mdash;you&apos;re part of a community that values
                excellence, transparency, and long-term success.
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/tips.png"
                alt="Yeti Property Management Team"
                width={400}
                height={300}
                className="rounded-xl "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}