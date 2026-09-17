import AdmissionVisaProcessNewZealand from "@/components/AdmissionVisaProcessNewZealand";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroNewZealand from "@/components/HeroNewZealand";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyNewZealand from "@/components/WhyNewZealand";

export default function page() {
  return (
    <div>
      <HeroNewZealand />
      <WhyNewZealand />
      <EntryRequirements />
      <AdmissionVisaProcessNewZealand />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
