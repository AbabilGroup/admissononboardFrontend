import { pageMetadata } from "@/lib/seo";
import ContactCta from "@/components/ContactCta";
import HeroInstitutionPartner from "@/components/HeroInstitutionPartner";
import PartnershipForm from "@/components/PartnershipForm";
import WhyPartnerWithUs from "@/components/WhyPartnerWithUs";

export const metadata = pageMetadata({
  title: "Institution Partnership",
  description: "Universities and colleges: partner with Admission On Board to recruit qualified international students.",
  path: "/institution-partner",
});

export default function page() {
  return (
    <div>
      <HeroInstitutionPartner />
      <WhyPartnerWithUs />
      <PartnershipForm />
    </div>
  );
}
