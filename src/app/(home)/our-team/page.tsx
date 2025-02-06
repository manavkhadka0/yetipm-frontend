import { TeamMember } from "@/types/team";
import OurTeamView from "@/sections/our-team/view/our-team-view";

const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/`);
  const data = await response.json();
  return data.results;
};

export default async function OurTeamPage() {
  const teamMembers = await fetchTeamMembers();

  return <OurTeamView teamMembers={teamMembers} />;
}
