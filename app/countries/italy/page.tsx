import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessLithuania from "@/components/AdmissionVisaProcessLithuania";
import ContactCta from "@/components/ContactCta";
import HeroItaly from "@/components/HeroItaly";
import WhyItaly from "@/components/WhyItaly";
import EntryRequirementsItaly from "@/components/EntryRequirementsItaly";
import AdmissionVisaProcessItaly from "@/components/AdmissionVisaProcessItaly";

export const metadata = pageMetadata({
  title: "Study in Italy | Admissions, Visa & Scholarships",
  description:
    "Study in Italy with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/italy",
});

export default function page() {
  return (
    <div>
      <HeroItaly />
      <WhyItaly />
      <EntryRequirementsItaly />
      <AdmissionVisaProcessItaly />
      <ContactCta />
    </div>
  );
}
