import { pageMetadata } from "@/lib/seo";
// import BranchLocations from "@/components/BranchLocations";
import ContactCta from "@/components/ContactCta";
import HeroContact from "@/components/HeroContact";
import ContactAudiences from "@/components/ContactAudiences";
import OurOffices from "@/components/OurOffices";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Admission On Board for free study-abroad counselling. Find our branch locations, phone, email and WhatsApp.",
  path: "/contact",
});

export default function page() {
  return (
    <div>
      <HeroContact />
      <ContactAudiences />
      <OurOffices />
      {/* <BranchLocations /> */}
      <ContactCta />
    </div>
  );
}
