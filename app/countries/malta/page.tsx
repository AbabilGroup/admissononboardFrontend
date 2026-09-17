import AdmissionVisaProcessMalta from "@/components/AdmissionVisaProcessMalta";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroMalta from "@/components/HeroMalta";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyMalta from "@/components/WhyMalta";

export default function page() {
  return (
    <div>
      <HeroMalta />
      <WhyMalta />
      <EntryRequirements />
      <AdmissionVisaProcessMalta />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
