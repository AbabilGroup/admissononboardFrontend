import About from "@/components/About";
import Branches from "@/components/Branches";
import ContactCta from "@/components/ContactCta";
import HeroOurStory from "@/components/HeroOurStory";
import OurMission from "@/components/OurMission";

export default function page() {
  return (
    <div>
      <HeroOurStory />
      <About />
      <Branches />
      <OurMission />
      <ContactCta />
    </div>
  );
}
