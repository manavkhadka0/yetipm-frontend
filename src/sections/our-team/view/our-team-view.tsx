import OurTeamHeroSection from "../components/our-team-hero-section";
import OurTeamCard from "../components/our-team-card";
import ResponsiveContainer from "@/components/common/responsive-container";
import { TeamMember } from "@/types/team";
type OurTeamViewProps = {
  teamMembers: TeamMember[];
};

export default function OurTeamView({ teamMembers }: OurTeamViewProps) {
  return (
    <ResponsiveContainer paddingX="md" paddingY="lg">
      <OurTeamHeroSection />
      <OurTeamCard teamMembers={teamMembers} />
    </ResponsiveContainer>
  );
}
