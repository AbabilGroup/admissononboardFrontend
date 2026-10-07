import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessUK from "@/views/countries/united-kingdom/AdmissionVisaProcessUK";
import ContactCta from "@/components/common/ContactCta";
import EntryRequirements from "@/components/common/EntryRequirements";
import HeroUK from "@/views/countries/united-kingdom/HeroUK";
// import VisaSuccessCarousel from "@/views/success-stories/VisaSuccessCarousel";
import WhyUK from "@/views/countries/united-kingdom/WhyUK";

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
