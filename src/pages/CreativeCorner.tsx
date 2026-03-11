import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft, Palette, Camera, PenTool } from "lucide-react";

const uiDesigns = [
  { title: "Dashboard Concept", desc: "A minimal analytics dashboard with dark theme." },
  { title: "Mobile App UI", desc: "Social media app interface with clean lines." },
  { title: "E-commerce Redesign", desc: "Modern product page with immersive visuals." },
];

const photographs = [
  { title: "Golden Hour", desc: "Landscape captured during the golden hour." },
  { title: "Urban Geometry", desc: "Architectural patterns in everyday structures." },
  { title: "Morning Mist", desc: "A misty morning in the countryside." },
  { title: "Night Lights", desc: "City lights reflecting on still water." },
  { title: "Wildflowers", desc: "Macro shot of wildflowers in bloom." },
  { title: "Silhouettes", desc: "Human silhouettes against a dramatic sunset." },
];

const writings = [
  {
    title: "On Curiosity",
    text: "Sometimes the best code is written when inspiration meets curiosity. The most beautiful solutions emerge not from force, but from a wandering mind that stumbles upon unexpected connections.",
  },
  {
    title: "Digital Gardens",
    text: "We tend our digital gardens the way we tend our souls — with patience, attention, and the quiet hope that something beautiful will grow from the seeds we plant today.",
  },
  {
    title: "The Art of Debugging",
    text: "Debugging is not just problem-solving. It is a meditation — a practice of patience, presence, and the willingness to question every assumption you hold dear.",
  },
];

export default function CreativeCorner() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 mb-8 transition-colors">
              <ArrowLeft size={12} /> Back home
            </Link>
            <h1 className="section-heading mb-2">
              <span className="gradient-text font-serif italic">Creative Corner</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-16">
              Where creativity meets curiosity.
            </p>
          </ScrollReveal>

          {/* UI Design */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-8">
                <Palette size={16} className="text-muted-foreground" />
                <h2 className="text-xl font-bold text-foreground">UI Design Showcase</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {uiDesigns.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="glass-card overflow-hidden hover-lift group">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Palette size={24} className="text-muted-foreground/30" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-secondary-foreground transition-colors">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Photography */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-8">
                <Camera size={16} className="text-muted-foreground" />
                <h2 className="text-xl font-bold text-foreground">Photography</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photographs.map((photo, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="glass-card overflow-hidden hover-lift group cursor-pointer">
                    <div className={`bg-muted flex items-center justify-center ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                      <Camera size={20} className="text-muted-foreground/30" />
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium text-foreground group-hover:text-secondary-foreground transition-colors">{photo.title}</p>
                      <p className="text-xs text-muted-foreground">{photo.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Writings */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-8">
                <PenTool size={16} className="text-muted-foreground" />
                <h2 className="text-xl font-bold text-foreground">Writings</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {writings.map((w, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="glass-card p-5 hover-lift">
                    <h3 className="text-sm font-semibold text-foreground mb-3">{w.title}</h3>
                    <p className="text-xs text-muted-foreground italic leading-relaxed">"{w.text}"</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
