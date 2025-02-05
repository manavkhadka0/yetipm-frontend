import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Mission & Values | Yeti Property Management",
  description:
    "Learn about Yeti Property Management&apos;s commitment to excellence in property management and family-focused service",
}

export default function MissionAndValuesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Mission, Vision, and Story</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Dedicated to providing exceptional property management services while maintaining the personal touch that
          makes every client feel like family.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-20">
        {/* Mission Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-6">Our Mission</h1>
            <p className="text-lg text-justify">
              At Yeti Property Management, our mission is to provide exceptional property management services that
              maximize value for property owners while ensuring a seamless and enjoyable experience for tenants. We are
              committed to maintaining high-quality properties, fostering strong relationships, and delivering
              efficient, transparent, and innovative solutions tailored to our clients&apos; needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/mission.png"
              alt="Yeti Property Management Mission"
              width={400}
              height={400}
              className="ml-auto"
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-semibold mb-6">Our Vision</h2>
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
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Story Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold mb-6">Our Story</h1>
            <p className="text-lg text-justify">
              Yeti Property Management was founded with the belief that property ownership should be a stress-free and
              rewarding experience. With a strong background in real estate and a passion for delivering outstanding
              service, we recognized the need for a management company that values both owners and tenants equally.
            </p>
            <p className="text-lg text-justify mt-4">
              From handling routine maintenance and rent collection to maximizing property investments, we take care of
              every detail with professionalism and care. Our philosophy is simple: &quot;Your Property, Our Priority.&quot; We
              treat every property as if it were our own, ensuring that owners have peace of mind and tenants feel at
              home.
            </p>
            <p className="text-lg text-justify mt-4">
              With Yeti Property Management, you&apos;re not just a client&mdash;you&apos;re part of a community that values excellence,
              transparency, and long-term success.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero.png"
              alt="Yeti Property Management Story"
              width={600}
              height={400}
              className="rounded-lg ml-auto"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
