import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessRomania from "@/views/countries/romania/AdmissionVisaProcessRomania";
import ContactCta from "@/components/common/ContactCta";
import EntryRequirements from "@/components/common/EntryRequirements";
import HeroRomania from "@/views/countries/romania/HeroRomania";
// import VisaSuccessCarousel from "@/views/success-stories/VisaSuccessCarousel";
import WhyRomania from "@/views/countries/romania/WhyRomania";

export const metadata = pageMetadata({
  title: "Study in Romania | Admissions, Visa & Scholarships",
  description: "Study in Romania with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/romania",
});

export default function page() {
  return (
    <div>
      <HeroRomania />
      <WhyRomania />
      <EntryRequirements />
      <AdmissionVisaProcessRomania />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
