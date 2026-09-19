import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessFinland from "@/components/AdmissionVisaProcessFinland";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroFinland from "@/components/HeroFinland";
// import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyFinland from "@/components/WhyFinland";

export const metadata = pageMetadata({
  title: "Study in Finland | Admissions, Visa & Scholarships",
  description: "Study in Finland with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/finland",
});

export default function page() {
  return (
    <div>
      <HeroFinland />
      <WhyFinland />
      <EntryRequirements />
      <AdmissionVisaProcessFinland />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
