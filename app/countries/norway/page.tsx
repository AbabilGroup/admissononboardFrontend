import { pageMetadata } from "@/lib/seo";
import ContactCta from "@/components/ContactCta";
import HeroNorway from "@/components/HeroNorway";
import WhyNorway from "@/components/WhyNorway";
import AdmissionVisaProcessNorway from "@/components/AdmissionVisaProcessNorway";
import EntryRequirementsNorway from "@/components/EntryRequirementsNorway";

export const metadata = pageMetadata({
  title: "Study in Norway | Admissions, Visa & Scholarships",
  description:
    "Study in Norway with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/norway",
});

export default function page() {
  return (
    <div>
      <HeroNorway />
      <WhyNorway />
      <EntryRequirementsNorway />
      <AdmissionVisaProcessNorway />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
