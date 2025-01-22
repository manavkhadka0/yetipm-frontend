interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
  department: "Leadership" | "Engineering";
}

const teamMembers: TeamMember[] = [
  {
    name: "Suraj Poudyal",
    title: "Broker/Owner",
    image: "/team-members/suraj.jpg",
    department: "Leadership",
    description: `With over 1.5 decades of experience as a Real Estate professional, Suraj (meaning "Sun") has earned a reputation for providing top-notch guidance from start to finish. Known for lowering stress levels and making the home-buying experience pleasurable, he maintains a strong base of loyal repeating customers. As an explorer by nature who loves biking in the Texan plains, Suraj has helped hundreds of clients find their dream homes.`,
  },
  {
    name: "Sunil Guatam",
    title: "Real Estate Professional & Civil Engineer",
    image: "/team-members/sunil.png",
    department: "Engineering",
    description: `A Civil Engineer graduate from UT Arlington, Sunil brings a unique combination of technical expertise and aesthetic appreciation to real estate. Known as a "home-doctor," his engineering background enables him to understand the in-and-out of every home, from design to foundation and structure. As a photographer by passion, he has a special eye for identifying the aesthetic qualities of properties, helping clients find homes that are both structurally sound and picturesquely beautiful.`,
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-primary">
              Meet Our Expert Team
            </h1>
            <p className="text-gray-600 text-lg">
              Our dedicated team of real estate professionals combines years of
              experience with deep local knowledge to help you find your perfect
              home in DFW.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-4 py-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
              index !== 0 ? "border-t border-gray-200" : ""
            }`}
          >
            <div className={`md:w-1/3 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className={`md:w-2/3 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  {member.name}
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  {member.title}
                </p>
                <div className="w-20 h-1 bg-primary/20 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-b from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary text-center">
              Your Trusted Real Estate Partners
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                At DFW Yeti Homes, we believe in building lasting relationships
                with our clients. Our success is measured by the satisfaction
                and trust of our loyal customers who return to us time and time
                again.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you&apos;re looking for your first home or a commercial
                property, our team combines technical expertise with a deep
                understanding of our clients&apos; needs to ensure you find the
                perfect property that matches your vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">(214) -995-0137</p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">info@dfwyetihomes.com</p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="font-medium">Address</p>
              <p className="text-gray-600">
                222 W. Las Colinas Blvd. Suite 1650E, Irving, TX 75038
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
