import HeroLegalization from "@/components/HeroLegalization";
import HowItWork from "@/components/HowItWork";
import Intro from "@/components/Intro";
import LegalizationCta from "@/components/LegalizationCta";
import RouteCards from "@/components/RouteCards";
import WhyServiceUs from "@/components/WhyServiceUs";

export default function page() {
  return (
    <div>
      <HeroLegalization />
      <Intro />
      <RouteCards />
      <WhyServiceUs />
      <HowItWork />
      <LegalizationCta />
    </div>
  );
}
