import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcess from "@/views/countries/australia/AdmissionVisaProcess";
import ContactCta from "@/components/common/ContactCta";
import EntryRequirements from "@/components/common/EntryRequirements";
import HeroAustralia from "@/views/countries/australia/HeroAustralia";
// import VisaSuccessCarousel from "@/views/success-stories/VisaSuccessCarousel";
import WhyAustralia from "@/views/countries/australia/WhyAustralia";

export const metadata = pageMetadata({
  title: "Study in Australia | Admissions, Visa & Scholarships",
  description: "Study in Australia with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/australia",
});

export default function page() {
  return (
    <div>
      <HeroAustralia />
      <WhyAustralia />
      <EntryRequirements />
      <AdmissionVisaProcess />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
