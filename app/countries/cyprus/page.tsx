import AdmissionVisaProcessCyprus from "@/components/AdmissionVisaProcessCyprus";
import ContactCta from "@/components/ContactCta";
import EntryRequirements from "@/components/EntryRequirements";
import HeroCyprus from "@/components/HeroCyprus";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";
import WhyCyprus from "@/components/WhyCyprus";

export default function page() {
  return (
    <div>
      <HeroCyprus />
      <WhyCyprus />
      <EntryRequirements />
      <AdmissionVisaProcessCyprus />
      <VisaSuccessCarousel />
      <ContactCta />
    </div>
  );
}
