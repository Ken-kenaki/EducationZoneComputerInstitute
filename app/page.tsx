import HeroSection from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurTeam from "../Components/Team";
import Testimonials from "../Components/Testimonials";
import CallToAction from "../Components/Cta";
import { HomeAboutSection } from "@/Components/HomeAbout";
import { HomeCoursesSection } from "@/Components/HomeCourses";

export default function Home(): JSX.Element {
  return (
    <main className="space-y-16">
      <HeroSection />
      <WhyChooseUs />
      <div className="overflow-x-auto">
        <HomeCoursesSection />
      </div>
      <div className="overflow-x-auto">
        <HomeAboutSection />
      </div>
      <div className="overflow-x-auto">
        <OurTeam />
      </div>
      <div className="overflow-x-auto">
        <Testimonials />
      </div>

      <CallToAction />
    </main>
  );
}
