import DoubleCta from "@/components/DoubleCta";
import HeroDoubleEntry from "@/components/HeroDoubleEntry";
import HowItWorksDoubleEntry from "@/components/HowItWorksDoubleEntry";
import IntroDoubleEntry from "@/components/IntroDoubleEntry";
import TimelineDoubleEntry from "@/components/TimelineDoubleEntry";
import WhoItsFor from "@/components/WhoItsFor";

export default function page() {
  return (
    <div>
      <HeroDoubleEntry />
      <IntroDoubleEntry />
      <WhoItsFor />
      <TimelineDoubleEntry />
      <HowItWorksDoubleEntry />
      <DoubleCta />
    </div>
  );
}
