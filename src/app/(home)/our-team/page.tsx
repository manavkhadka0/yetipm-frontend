"use client";
import { useEffect, useState } from 'react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  profile_picture: string | null;
  facebook_link: string | null;
  instagram_link: string | null;
  twitter_link: string | null;
  linkedin_link: string | null;
}

export default function OurTeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://yetipm.baliyoventures.com/api/team/');
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

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
            key={member.id}
            className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
              index !== 0 ? "border-t border-gray-200" : ""
            }`}
          >
            <div className={`md:w-1/3 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={member.profile_picture || "/default-profile.jpg"}
                  alt={member.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className={`md:w-2/3 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary flex items-center">
                  {member.name}
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  {member.role}
                </p>
                <div className="w-20 h-1 bg-primary/20 rounded-full"></div>
                <div className="text-gray-600 leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: member.description }} />
                  <div className="flex space-x-4 mt-2">
                    {member.twitter_link && (
                      <a href={member.twitter_link} target="_blank" rel="noopener noreferrer">
                        <Twitter className="text-primary h-6 w-6" />
                      </a>
                    )}
                    {member.facebook_link && (
                      <a href={member.facebook_link} target="_blank" rel="noopener noreferrer">
                        <Facebook className="text-primary h-6 w-6" />
                      </a>
                    )}
                    {member.linkedin_link && (
                      <a href={member.linkedin_link} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-primary h-6 w-6" />
                      </a>
                    )}
                    {member.instagram_link && (
                      <a href={member.instagram_link} target="_blank" rel="noopener noreferrer">
                        <Instagram className="text-primary h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
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