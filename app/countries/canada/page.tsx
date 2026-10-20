import AdmissionVisaProcessCanada from "@/components/AdmissionVisaProcessCanada";
import EntryRequirementsCanada from "@/components/EntryRequirementsCanada";
import HeroCanada from "@/components/HeroCanada";
import UniversityPartner from "@/components/UniversityPartner";
import WhyCanada from "@/components/WhyCanada";
import ContactCta from "@/components/ContactCta";
export default function page() {
  return (
    <div>
      <HeroCanada />
      <WhyCanada />
      <EntryRequirementsCanada />
      <AdmissionVisaProcessCanada />
      <UniversityPartner country="Canada" />
      <ContactCta />
    </div>
  );
}
