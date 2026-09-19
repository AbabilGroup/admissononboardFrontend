import { pageMetadata } from "@/lib/seo";
import ContactCta from "@/components/ContactCta";
import HeroEventsSeminars from "@/components/HeroEventsSeminars";
import OurEvents from "@/components/OurEvents";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata = pageMetadata({
  title: "Seminars & Events",
  description: "Join Admission On Board seminars, education fairs and events to meet universities and get study-abroad advice.",
  path: "/seminar-and-events",
});

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
