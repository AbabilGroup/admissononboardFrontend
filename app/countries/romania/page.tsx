import AdmissionVisaProcessRomania from "@/components/AdmissionVisaProcessRomania";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroRomania from "@/components/HeroRomania";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyRomania from "@/components/WhyRomania";

export default function page() {
  return (
    <div>
      <HeroRomania />
      <WhyRomania />
      <EntryRequirements />
      <AdmissionVisaProcessRomania />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
