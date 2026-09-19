import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessMalta from "@/components/AdmissionVisaProcessMalta";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroMalta from "@/components/HeroMalta";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyMalta from "@/components/WhyMalta";

export const metadata = pageMetadata({
  title: "Study in Malta | Admissions, Visa & Scholarships",
  description: "Study in Malta with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/malta",
});

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
