import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessUK from "@/components/AdmissionVisaProcessUK";
import ContactCta from "@/components/ContactCta";
import HeroUK from "@/components/HeroUK";
import WhyUK from "@/components/WhyUK";
import EntryRequirementsUK from "@/components/EntryRequirementsUK";

export const metadata = pageMetadata({
  title: "Study in the UK | Admissions, Visa & Scholarships",
  description:
    "Study in the UK with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/united-kingdom",
});

export default function page() {
  return (
    <div>
      <HeroUK />
      <WhyUK />
      <EntryRequirementsUK />
      <AdmissionVisaProcessUK />
      <ContactCta />
    </div>
  );
}
