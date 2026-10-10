import { pageMetadata } from "@/lib/seo";
import AdmissionVisaProcessNewZealand from "@/components/AdmissionVisaProcessNewZealand";
import ContactCta from "@/components/ContactCta";
import HeroNewZealand from "@/components/HeroNewZealand";
import WhyNewZealand from "@/components/WhyNewZealand";
import EntryRequirementsNewZealand from "@/components/EntryRequirementsNewZealand";

export const metadata = pageMetadata({
  title: "Study in New Zealand | Admissions, Visa & Scholarships",
  description:
    "Study in New Zealand with expert guidance from Admission On Board: university admissions, entry requirements, student visa support and scholarships.",
  path: "/countries/new-zealand",
});

export default function page() {
  return (
    <div>
      <HeroNewZealand />
      <WhyNewZealand />
      <EntryRequirementsNewZealand />
      <AdmissionVisaProcessNewZealand />
      <ContactCta />
    </div>
  );
}
