import AdmissionVisaProcessLithuania from "@/components/AdmissionVisaProcessLithuania";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroLithuania from "@/components/HeroLithuania";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyLithuania from "@/components/WhyLithuania";

export default function page() {
  return (
    <div>
      <HeroLithuania />
      <WhyLithuania />
      <EntryRequirements />
      <AdmissionVisaProcessLithuania />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
