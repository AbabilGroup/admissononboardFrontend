import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessNewZealand from "@/components/AdmissionVisaProcessNewZealand";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroNewZealand from "@/components/HeroNewZealand";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyNewZealand from "@/components/WhyNewZealand";

export const metadata = pageMetadata({
  title: "Study in New Zealand | Admissions, Visa & Scholarships",
  description: "Study in New Zealand with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/new-zealand",
});

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
