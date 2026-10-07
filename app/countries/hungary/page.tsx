import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessHungary from "@/components/AdmissionVisaProcessHungary";
import ContactCta from "@/components/ContactCta";
import HeroHungary from "@/components/HeroHungary";
import WhyHungary from "@/components/WhyHungary";
import EntryRequirementsHungary from "@/components/EntryRequirementsHungary";

export const metadata = pageMetadata({
  title: "Study in Hungary | Admissions, Visa & Scholarships",
  description:
    "Study in Hungary with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/hungary",
});

export default function page() {
  return (
    <div>
      <HeroHungary />
      <WhyHungary />
      <EntryRequirementsHungary />
      <AdmissionVisaProcessHungary />
      {/* <VisaSuccessCarousel /> */}
      <ContactCta />
    </div>
  );
}
