import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessUK from "@/components/AdmissionVisaProcessUK";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroUK from "@/components/HeroUK";
// import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyUK from "@/components/WhyUK";

export const metadata = pageMetadata({
  title: "Study in the UK | Admissions, Visa & Scholarships",
  description: "Study in the UK with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/united-kingdom",
});

export default function page() {
  return (
    <div>
      <HeroUK />
      <WhyUK />
      <EntryRequirements />
      <AdmissionVisaProcessUK />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
