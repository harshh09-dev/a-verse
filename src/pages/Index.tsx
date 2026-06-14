import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhatIDo from "@/components/sections/WhatIDo";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CreativeSide from "@/components/sections/CreativeSide";
import AboutPreview from "@/components/sections/AboutPreview";
import SkillsSection from "@/components/sections/SkillsSection";
import LyricsAndLogic from "@/components/sections/LyricsAndLogic";
import ContactCTA from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <HeroSection />
      <div className="divider-line" />
      <WhatIDo />
      <div className="divider-line" />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsSection />
      <div className="divider-line" />
      <CreativeSide />
      <LyricsAndLogic />
      <div className="divider-line" />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
