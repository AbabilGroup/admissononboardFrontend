// import Accreditations from "@/components/Accreditations";
import BranchLocations from "@/components/BranchLocations";
import CtaBanner from "@/components/CtaBanner";
import DreamDestinations from "@/components/DreamDestinations";
import FaqSection from "@/components/FaqSection";
import HeroHome from "@/components/HeroHome";
import LatestBlogs from "@/components/LatestBlogs";
// import OurPartners from "@/components/OurPartners";
// import PartnerInstitutions from "@/components/PartnerInstitutions";
// import StudentVideoStories from "@/components/StudentVideoStories";
import VisaSuccessStories from "@/components/VisaSuccessStories";
import WhyChose from "@/components/WhyChose";
import ContactCta from "@/components/ContactCta";
import HowWeHelp from "@/components/HowWeHelp";
import TheJourney from "@/components/TheJourney";
import SuccessStoriesGallery from "@/components/SuccessStoriesGallery";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <WhyChose />
      {/* <Accreditations /> */}
      <SuccessStoriesGallery />
      <HowWeHelp />
      <DreamDestinations />
      <TheJourney />
      {/* <PartnerInstitutions /> */}
      <VisaSuccessStories />
      <CtaBanner />
      {/* <StudentVideoStories />
      <OurPartners /> */}
      <LatestBlogs />
      <BranchLocations />
      <FaqSection />
      <ContactCta />
    </div>
  );
}
