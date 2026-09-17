import AdmissionVisaProcessFinland from "@/components/AdmissionVisaProcessFinland";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroFinland from "@/components/HeroFinland";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyFinland from "@/components/WhyFinland";

export default function page() {
  return (
    <div>
      <HeroFinland />
      <WhyFinland />
      <EntryRequirements />
      <AdmissionVisaProcessFinland />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
