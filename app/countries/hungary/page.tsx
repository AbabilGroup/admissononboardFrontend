import AdmissionVisaProcessHungary from "@/components/AdmissionVisaProcessHungary";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroHungary from "@/components/HeroHungary";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyHungary from "@/components/WhyHungary";

export default function page() {
  return (
    <div>
      <HeroHungary />
      <WhyHungary />
      <EntryRequirements />
      <AdmissionVisaProcessHungary />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
