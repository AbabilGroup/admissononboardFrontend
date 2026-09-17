import ContactCta from "@/components/ContactCta";
import HeroEventsSeminars from "@/components/HeroEventsSeminars";
import OurEvents from "@/components/OurEvents";
import PhotoGallery from "@/components/PhotoGallery";

export default function page() {
  return (
    <div>
      <HeroEventsSeminars />
      <OurEvents />
      <PhotoGallery />
      <ContactCta/>
    </div>
  );
}
