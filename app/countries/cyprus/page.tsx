import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessCyprus from "@/components/AdmissionVisaProcessCyprus";
import ContactCta from "@/components/ContactCta";
import HeroCyprus from "@/components/HeroCyprus";
import WhyCyprus from "@/components/WhyCyprus";
import EntryRequirementsCyprus from "@/components/EntryRequirementsCypus";

export const metadata = pageMetadata({
  title: "Study in Cyprus | Admissions, Visa & Scholarships",
  description:
    "Study in Cyprus with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/cyprus",
});

export default function page() {
  return (
    <div>
      <HeroCyprus />
      <WhyCyprus />
      <EntryRequirementsCyprus />
      <AdmissionVisaProcessCyprus />
      <ContactCta />
    </div>
  );
}
