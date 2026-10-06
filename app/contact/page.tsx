import { pageMetadata } from "@/lib/seo";

import HeroContact from "@/components/HeroContact";
import ContactAudiences from "@/components/ContactAudiences";
import OurOffices from "@/components/OurOffices";
import ContactBanner from "@/components/ContactBanner";

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
      <ContactBanner />
    </div>
  );
}
