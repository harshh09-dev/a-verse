import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles } from "lucide-react";

const topics = [
  "Advanced Full Stack Development",
  "Creative Coding & Generative Art",
  "Digital Storytelling",
  "3D Web Experiences",
];

export default function ExploringSection() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <Sparkles size={28} className="text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Currently <span className="gold-gradient">Exploring</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3">
          {topics.map((topic, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <span className="glass-card px-5 py-2.5 text-sm text-foreground font-body animate-float inline-block"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {topic}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
