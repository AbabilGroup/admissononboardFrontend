import AdmissionVisaProcessGreece from "@/components/AdmissionVisaProcessGreece";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroGreece from "@/components/HeroGreece";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyGreece from "@/components/WhyGreece";

export default function page() {
  return (
    <div>
      <HeroGreece />
      <WhyGreece />
      <EntryRequirements />
      <AdmissionVisaProcessGreece />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
