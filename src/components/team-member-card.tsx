import { TeamMember } from "@/types/team";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  member: TeamMember;
  reverse?: boolean;
}

export function TeamMemberCard({
  member,
  reverse = false,
}: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-12 py-16",
        "group hover:bg-gray-50/50 rounded-2xl transition-all duration-300 px-6"
      )}
    >
      <div
        className={cn(
          "md:w-1/3",
          reverse ? "md:order-2" : "",
          "transform transition-all duration-500"
        )}
      >
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={member.profile_picture || "/default-profile.jpg"}
            alt={member.name}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className={cn("md:w-2/3", reverse ? "md:order-1" : "")}>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
              {member.name}
            </h2>
            <p className="text-xl text-gray-600 font-medium mt-2">
              {member.role}
            </p>
          </div>

          <div className="w-24 h-1 bg-primary/20 rounded-full group-hover:w-32 transition-all duration-300" />

          <div className="text-gray-600 leading-relaxed">
            <div
              className="prose prose-gray max-w-none text-justify"
              dangerouslySetInnerHTML={{ __html: member.description }}
            />
          </div>

          <div className="flex space-x-4 pt-4">
            {member.twitter_link && (
              <SocialLink href={member.twitter_link}>
                <Twitter className="h-5 w-5" />
              </SocialLink>
            )}
            {member.facebook_link && (
              <SocialLink href={member.facebook_link}>
                <Facebook className="h-5 w-5" />
              </SocialLink>
            )}
            {member.linkedin_link && (
              <SocialLink href={member.linkedin_link}>
                <Linkedin className="h-5 w-5" />
              </SocialLink>
            )}
            {member.instagram_link && (
              <SocialLink href={member.instagram_link}>
                <Instagram className="h-5 w-5" />
              </SocialLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-primary transition-colors duration-300 
                 p-2 rounded-full hover:bg-primary/5"
    >
      {children}
    </a>
  );
}
