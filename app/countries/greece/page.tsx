import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessGreece from "@/components/AdmissionVisaProcessGreece";
import ContactCta from "@/components/ContactCta";
import HeroGreece from "@/components/HeroGreece";
import WhyGreece from "@/components/WhyGreece";
import EntryRequirementsGreece from "@/components/EntryRequirementsGreece";

export const metadata = pageMetadata({
  title: "Study in Greece | Admissions, Visa & Scholarships",
  description:
    "Study in Greece with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/greece",
});

export default function page() {
  return (
    <div>
      <HeroGreece />
      <WhyGreece />
      <EntryRequirementsGreece />
      <AdmissionVisaProcessGreece />
      <ContactCta />
    </div>
  );
}
