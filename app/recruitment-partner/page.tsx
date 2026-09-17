import HeroRecruitmentPartner from "@/components/HeroRecruitmentPartner";
import PartnerCta from "@/components/PartnerCta";
import PartnerExpand from "@/components/PartnerExpand";
import RiseWithEveryStep from "@/components/RiseWithEveryStep";
import WhatYouWillGain from "@/components/WhatYouWillGain";

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
