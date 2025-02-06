import { TeamMember } from "@/types/team";
import { TeamMemberCard } from "@/components/team-member-card";

type OurTeamCardProps = {
  teamMembers: TeamMember[];
};

export default function OurTeamCard({ teamMembers }: OurTeamCardProps) {
  return (
    <div>
      {teamMembers.map((member, index) => (
        <div
          key={member.id}
          className={index !== 0 ? "border-t border-gray-200" : ""}
        >
          <TeamMemberCard member={member} reverse={index % 2 === 1} />
        </div>
      ))}
    </div>
  );
}
