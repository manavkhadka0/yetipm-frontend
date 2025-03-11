import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/hero.png"
          alt="Yeti Property Management Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-center font-light leading-relaxed">
              Dedicated to providing exceptional property management services
              while maintaining the personal touch that makes every client feel
              like family.
            </p>
            <ChevronDown className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white w-8 h-8 animate-bounce opacity-80" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="space-y-32">
          {/* Mission Section */}
          <section className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <div className="h-1 w-20 bg-primary mt-2"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Yeti Property Management is dedicated to delivering outstanding
                property management services that enhance property value for
                owners and create a smooth, satisfying experience for tenants.
                We prioritize quality, trust, and tailored solutions—blending
                efficiency, clarity, and a commitment to thriving communities in
                all we do.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/mission1.png"
                  alt="Yeti Property Management Mission"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
                <div className="h-1 w-20 bg-primary mt-2"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to be a leading property management company,
                recognized for trust, excellence, and innovative care. We aim to
                raise industry standards through smart technology, sustainable
                practices, and personalized service, delivering vibrant
                communities and strong returns for our clients.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/vision.png"
                  alt="Yeti Property Management Vision"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="bg-gray-50 rounded-3xl p-12 md:p-16">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  The Yeti Story
                </h2>
                <div className="h-1 w-20 bg-primary mx-auto"></div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-2/3">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Yeti Property Management was born from a belief that owning
                    property should be both rewarding and stress-free. With deep
                    roots in real estate and a passion for exceptional service,
                    we saw the need for a management company that prioritizes
                    owners and tenants alike.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mt-6">
                    From managing maintenance and rent collection to boosting
                    property value, we handle every detail with care,
                    professionalism, and a forward-thinking approach. Our
                    guiding principle is simple:{" "}
                    <span className="font-semibold text-primary">
                      &ldquo;Your Property, Our Priority.&rdquo;
                    </span>
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mt-6">
                    We treat each property as our own, giving owners confidence
                    and tenants a true sense of home. At Yeti, you&apos;re part
                    of a community built on excellence, trust, and lasting
                    success.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/tips.png"
                      alt="Yeti Property Management Team"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
