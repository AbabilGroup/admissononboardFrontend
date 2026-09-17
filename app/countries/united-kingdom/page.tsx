import AdmissionVisaProcessUK from "@/components/AdmissionVisaProcessUK";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroUK from "@/components/HeroUK";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyUK from "@/components/WhyUK";

export default function page() {
  return (
    <div>
      <HeroUK />
      <WhyUK />
      <EntryRequirements />
      <AdmissionVisaProcessUK />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
