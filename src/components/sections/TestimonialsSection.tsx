import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mentor 1",
    role: "Senior Developer",
    text: "Anjali has a remarkable ability to combine technical skills with creative thinking. Her projects always stand out.",
  },
  {
    name: "Team Lead",
    role: "FABRO",
    text: "Working with Anjali has been a great experience. She brings both technical expertise and a keen eye for design.",
  },
  {
    name: "Professor",
    role: "IIIT Jabalpur",
    text: "A student who consistently goes beyond the curriculum to explore the intersection of technology and creativity.",
  },
  {
    name: "Colleague",
    role: "GSSoC",
    text: "Anjali's contributions to our open source projects were thoughtful, well-documented, and impactful.",
  },
  {
    name: "Client",
    role: "Freelance Project",
    text: "She delivered exactly what we needed and more. Her attention to detail and design sense is exceptional.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-primary tracking-widest uppercase mb-4 font-body text-center">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            What people <span className="gold-gradient">say</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 text-center relative">
            <Quote size={32} className="text-primary/30 mx-auto mb-6" />
            <p className="text-lg text-foreground font-body leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>
            <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs text-muted-foreground">
                {current + 1} / {testimonials.length}
              </span>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
