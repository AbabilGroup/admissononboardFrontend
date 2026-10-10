import HeroOurTeam from "@/components/HeroOurTeam";
import JoinOurTeam from "@/components/JoinOurTeam";
import TeamCta from "@/components/TeamCta";
import TeamIntro from "@/components/TeamIntro";
import TeamLeadership from "@/components/TeamLeadership";
import TeamMembers from "@/components/TeamMembers";
import TeamValues from "@/components/TeamValues";

export default function page() {
  return (
    <div>
      <HeroOurTeam />
      <TeamIntro />
      <TeamLeadership />
      <TeamMembers />
      <TeamValues />
      <JoinOurTeam />
      <TeamCta />
    </div>
  );
}
