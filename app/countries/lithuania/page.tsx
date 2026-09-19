import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessLithuania from "@/components/AdmissionVisaProcessLithuania";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroLithuania from "@/components/HeroLithuania";
// import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyLithuania from "@/components/WhyLithuania";

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
