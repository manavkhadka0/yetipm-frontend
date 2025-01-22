import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
  department: "Executive" | "Operations" | "Development" | "Training";
}

const teamMembers: TeamMember[] = [
  {
    name: "Charles Thompson",
    title: "Chief Executive Officer",
    image: "/team-members/1.avif",
    department: "Executive",
    description:
      "With over 20 years of experience in property management, Charles leads our organization with a vision for innovation and excellence. His strategic leadership has transformed how we deliver value to property owners and residents alike.",
  },
  {
    name: "Rodd Schifferdecker",
    title: "Vice President of Market Development",
    image: "/team-members/2.avif",
    department: "Development",
    description:
      "Rodd brings extensive expertise in market analysis and business development. His innovative approaches have helped expand our services across multiple markets while maintaining our high standards of quality.",
  },
  {
    name: "Shane Faller",
    title: "Chief Financial Officer",
    image: "/team-members/3.avif",
    department: "Executive",
    description:
      "As CFO, Shane oversees all financial operations with precision and foresight. His strategic financial planning ensures our company's sustainable growth while maximizing value for our clients.",
  },
  {
    name: "Ari Lund",
    title: "Chief Operations Officer",
    image: "/team-members/4.avif",
    department: "Operations",
    description:
      "Ari expertly manages our day-to-day operations, ensuring seamless service delivery across all departments. His operational excellence has set new industry standards for property management efficiency.",
  },
  {
    name: "Deb Whiteley",
    title: "Vice President of Training",
    image: "/team-members/5.jpeg",
    department: "Training",
    description:
      "Deb leads our comprehensive training programs, ensuring our team stays at the forefront of industry best practices. Her innovative training methods have significantly enhanced our service quality.",
  },
  {
    name: "Stephanie Hicks",
    title: "Vice President of Operations",
    image: "/team-members/6.jpeg",
    department: "Operations",
    description:
      "Stephanie's operational expertise ensures smooth coordination between departments and stakeholders. Her leadership has been instrumental in optimizing our property management processes.",
  },
];

export default function OurTeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Meet Our Specialized Team
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our experienced team of property management professionals is dedicated
          to providing exceptional service and expertise to our clients.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="flex justify-center gap-2 mb-8">
          <TabsTrigger value="all" className="px-6 py-2 text-sm font-medium">
            All Team
          </TabsTrigger>
          <TabsTrigger
            value="Executive"
            className="px-6 py-2 text-sm font-medium"
          >
            Executive
          </TabsTrigger>
          <TabsTrigger
            value="Operations"
            className="px-6 py-2 text-sm font-medium"
          >
            Operations
          </TabsTrigger>
          <TabsTrigger
            value="Development"
            className="px-6 py-2 text-sm font-medium"
          >
            Development
          </TabsTrigger>
          <TabsTrigger
            value="Training"
            className="px-6 py-2 text-sm font-medium"
          >
            Training
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </TabsContent>

        {["Executive", "Operations", "Development", "Training"].map((dept) => (
          <TabsContent key={dept} value={dept}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => member.department === dept)
                .map((member, index) => (
                  <TeamMemberCard key={index} {...member} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          We Hire The Best
        </h2>
        <p className="text-gray-600 mb-6">
          No one in our industry has such a rigorous hiring process or requires
          such high standards of aptitude, education, performance, and
          customer-driven focus as the Specialized Property Management Dallas
          team.
        </p>
        <p className="text-gray-600">
          Our experienced leasing agents, licensed maintenance pros, veteran
          accountants, and expert Dallas property managers have seen it all, and
          know how to help you with whatever arises concerning your rental
          property.
        </p>
      </div>
    </div>
  );
}
