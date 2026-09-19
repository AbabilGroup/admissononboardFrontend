import { pageMetadata } from "@/lib/seo";
import ContactCta from "@/components/ContactCta";
import CountryHero from "@/components/CountryHero";
import DreamDestinations from "@/components/DreamDestinations";

export const metadata = pageMetadata({
  title: "Study Abroad Destinations",
  description: "Explore study-abroad destinations with Admission On Board: UK, Australia, New Zealand, Cyprus, Finland, Greece, Hungary, Lithuania, Malta and Romania.",
  path: "/countries",
});

export default function page() {
  return (
    <div>
      <CountryHero />
      <DreamDestinations />
      <ContactCta />
    </div>
  );
}
