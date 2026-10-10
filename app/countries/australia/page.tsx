import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcess from "@/components/AdmissionVisaProcess";
import ContactCta from "@/components/ContactCta";
import HeroAustralia from "@/components/HeroAustralia";
import WhyAustralia from "@/components/WhyAustralia";
import EntryRequirementsAustralia from "@/components/EntryRequirementsAustralia";

export const metadata = pageMetadata({
  title: "Study in Australia | Admissions, Visa & Scholarships",
  description:
    "Study in Australia with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/australia",
});

export default function page() {
  return (
    <div>
      <HeroAustralia />
      <WhyAustralia />
      <EntryRequirementsAustralia />
      <AdmissionVisaProcess />
      <ContactCta />
    </div>
  );
}
