import BranchLocations from "@/components/BranchLocations";
import ContactCta from "@/components/ContactCta";
import HeroContact from "@/components/HeroContact";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroContact />
      <BranchLocations />
      <ContactCta />
    </div>
  );
}
