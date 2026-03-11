import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft, Palette, Camera, PenTool } from "lucide-react";

const uiDesigns = [
  { title: "Dashboard Concept", desc: "A minimal analytics dashboard with warm dark theme." },
  { title: "Mobile App UI", desc: "Social media app interface with glassmorphism elements." },
  { title: "E-commerce Redesign", desc: "Modern product page with immersive visuals." },
];

const photographs = [
  { title: "Golden Hour", desc: "Landscape captured during the golden hour." },
  { title: "Urban Geometry", desc: "Architectural patterns found in everyday structures." },
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
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mb-8 font-body">
              <ArrowLeft size={14} /> Back home
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
              <span className="gold-gradient">Creative Corner</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body mb-16">
              Where creativity meets curiosity.
            </p>
          </ScrollReveal>

          {/* UI Design */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-8">
                <Palette size={20} className="text-primary" />
                <h2 className="font-display text-2xl font-bold">UI Design Showcase</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {uiDesigns.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="glass-card overflow-hidden hover-lift group">
                    <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                      <Palette size={32} className="text-muted-foreground/30" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
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
                <Camera size={20} className="text-primary" />
                <h2 className="font-display text-2xl font-bold">Photography</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photographs.map((photo, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="glass-card overflow-hidden hover-lift group cursor-pointer">
                    <div className={`bg-secondary/50 flex items-center justify-center ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                      <Camera size={24} className="text-muted-foreground/30" />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-display font-medium group-hover:text-primary transition-colors">{photo.title}</p>
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
                <PenTool size={20} className="text-primary" />
                <h2 className="font-display text-2xl font-bold">Writings</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {writings.map((w, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="glass-card p-6 hover-lift">
                    <h3 className="font-display font-semibold mb-3 text-primary">{w.title}</h3>
                    <p className="text-sm text-muted-foreground font-body italic leading-relaxed">"{w.text}"</p>
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
