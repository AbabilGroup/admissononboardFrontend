import { pageMetadata } from "@/lib/seo";
import About from "@/components/About";
import Branches from "@/components/Branches";
import ContactCta from "@/components/ContactCta";
import HeroOurStory from "@/components/HeroOurStory";
import OurMission from "@/components/OurMission";

export const metadata = pageMetadata({
  title: "Our Story",
  description: "Learn about Admission On Board, our mission, our global branches and how we help students reach top universities abroad.",
  path: "/our-story",
});

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
