import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessHungary from "@/components/AdmissionVisaProcessHungary";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroHungary from "@/components/HeroHungary";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyHungary from "@/components/WhyHungary";

export const metadata = pageMetadata({
  title: "Study in Hungary | Admissions, Visa & Scholarships",
  description: "Study in Hungary with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/hungary",
});

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
