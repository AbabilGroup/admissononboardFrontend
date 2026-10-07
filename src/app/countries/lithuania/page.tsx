import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessLithuania from "@/views/countries/lithuania/AdmissionVisaProcessLithuania";
import ContactCta from "@/components/common/ContactCta";
import EntryRequirements from "@/components/common/EntryRequirements";
import HeroLithuania from "@/views/countries/lithuania/HeroLithuania";
// import VisaSuccessCarousel from "@/views/success-stories/VisaSuccessCarousel";
import WhyLithuania from "@/views/countries/lithuania/WhyLithuania";

export const metadata = pageMetadata({
  title: "Study in Lithuania | Admissions, Visa & Scholarships",
  description: "Study in Lithuania with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/lithuania",
});

export default function page() {
  return (
    <div>
      <HeroLithuania />
      <WhyLithuania />
      <EntryRequirements />
      <AdmissionVisaProcessLithuania />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
