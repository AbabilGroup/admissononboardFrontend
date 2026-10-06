import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessRomania from "@/components/AdmissionVisaProcessRomania";
import ContactCta from "@/components/ContactCta";
import HeroRomania from "@/components/HeroRomania";
import WhyRomania from "@/components/WhyRomania";
import EntryRequirementsRomania from "@/components/EntryRequirementsRomania";

export const metadata = pageMetadata({
  title: "Study in Romania | Admissions, Visa & Scholarships",
  description:
    "Study in Romania with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/romania",
});

export default function page() {
  return (
    <div>
      <HeroRomania />
      <WhyRomania />
      <EntryRequirementsRomania />
      <AdmissionVisaProcessRomania />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
