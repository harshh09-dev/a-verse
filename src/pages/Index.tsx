import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DecodingSection from "@/components/sections/DecodingSection";
import BlogPreview from "@/components/sections/BlogPreview";
import SignaturePreview from "@/components/sections/SignaturePreview";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <DecodingSection />
      <BlogPreview />
      <SignaturePreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
