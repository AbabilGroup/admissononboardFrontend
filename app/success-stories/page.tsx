import { pageMetadata } from "@/lib/seo";
import ContactCta from "@/components/ContactCta";
import CtaBanner from "@/components/CtaBanner";
import HeroSuccessStory from "@/components/HeroSuccessStory";
// import StudentTestimonials from "@/components/StudentTestimonials";
import StudentVideoStories from "@/components/StudentVideoStories";
import SuccessStoriesGallery from "@/components/SuccessStoriesGallery";
import VisaSuccessCarousel from "@/components/VisaSuccessCarousel";

export const metadata = pageMetadata({
  title: "Student Success Stories",
  description: "Read and watch visa and admission success stories from students who studied abroad with Admission On Board.",
  path: "/success-stories",
});

export default function page() {
  return (
    <div>
      <HeroSuccessStory />
      <SuccessStoriesGallery />
      {/* <StudentTestimonials /> */}
      <CtaBanner />
      {/* <VisaSuccessCarousel /> */}
      <StudentVideoStories />
      <ContactCta />
    </div>
  );
}
