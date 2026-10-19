import AdmissionVisaProcessCanada from "@/components/AdmissionVisaProcessCanada";
import EntryRequirementsCanada from "@/components/EntryRequirementsCanada";
import HeroCanada from "@/components/HeroCanada";
import WhyCanada from "@/components/WhyCanada";

export default function page() {
  return (
    <div>
      <HeroCanada />
      <WhyCanada />
      <EntryRequirementsCanada />
      <AdmissionVisaProcessCanada />
    </div>
  );
}
