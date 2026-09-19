import { pageMetadata } from "@/lib/seo";
import HeroRecruitmentPartner from "@/components/HeroRecruitmentPartner";
import PartnerCta from "@/components/PartnerCta";
import PartnerExpand from "@/components/PartnerExpand";
import RiseWithEveryStep from "@/components/RiseWithEveryStep";
import WhatYouWillGain from "@/components/WhatYouWillGain";

export const metadata = pageMetadata({
  title: "Become a Recruitment Partner",
  description: "Grow your education business by becoming an Admission On Board recruitment partner.",
  path: "/recruitment-partner",
});

export default function page() {
  return (
    <div>
      <HeroRecruitmentPartner />
      <PartnerExpand />
      <WhatYouWillGain />
      <RiseWithEveryStep />
      <PartnerCta />
    </div>
  );
}
