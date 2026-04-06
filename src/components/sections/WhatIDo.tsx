import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Palette, Camera, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks, clean architecture, and performance-first thinking.",
    tools: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting interfaces that balance beauty with usability — every pixel intentional, every interaction meaningful.",
    tools: ["Figma", "Framer", "Tailwind", "Motion Design"],
  },
  {
    icon: Camera,
    title: "Visual Storytelling",
    description: "Photography and creative direction that captures mood, emotion, and the quiet beauty of everyday moments.",
    tools: ["Lightroom", "Photography", "Color Grading"],
  },
  {
    icon: Sparkles,
    title: "Creative Technology",
    description: "Exploring the intersection of art and engineering — 3D experiments, generative art, and interactive experiences.",
    tools: ["Three.js", "GLSL", "IoT", "AI"],
  },
];

export default function WhatIDo() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label">What I Do</p>
          <h2 className="section-heading mb-4">
            Crafting digital{" "}
            <span className="font-serif italic gradient-text">experiences</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mb-16">
            I sit at the crossroads of design and engineering — building things that are as thoughtful as they are functional.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(24 80% 55% / 0.3)" }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 h-full group cursor-default"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-secondary-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ml-14">
                  {service.tools.map((tool) => (
                    <span key={tool} className="tag-pill text-[10px]">{tool}</span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
