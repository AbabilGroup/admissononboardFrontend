import AdmissionVisaProcess from "@/components/AdmissionVisaProcess";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroAustralia from "@/components/HeroAustralia";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyAustralia from "@/components/WhyAustralia";

export default function page() {
  return (
    <div>
      <HeroAustralia />
      <WhyAustralia />
      <EntryRequirements />
      <AdmissionVisaProcess />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
