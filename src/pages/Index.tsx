import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AboutPreview from "@/components/sections/AboutPreview";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactCTA from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <HeroSection />
      <div className="divider-line" />
      <FeaturedProjects />
      <div className="divider-line" />
      <AboutPreview />
      <SkillsSection />
      <div className="divider-line" />
      <TestimonialsSection />
      <div className="divider-line" />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
