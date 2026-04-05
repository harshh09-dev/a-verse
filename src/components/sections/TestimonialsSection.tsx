import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aruna Jain",
    role: "Founder, FABRO",
    text: "Anjali understood the vision behind FABRO and translated it into a clean, elegant digital experience. The customization flow and product presentation reflect thoughtful design and structured execution.",
  },
  {
    name: "Natwar Lal Jain",
    role: "DGM (S&T), Jaipur Metro Rail Corporation",
    text: "Anjali demonstrated a structured approach while working on the JMRC Services Portal. Her clarity in system design and attention to implementation details contributed meaningfully to the project.",
  },
  {
    name: "Mayank Kaushik",
    role: "Co-Intern, JMRC",
    text: "Working with Anjali on the JMRC Services Portal was seamless. She structured the APIs and frontend logic clearly, making integration smooth and the system easy to scale.",
  },
  {
    name: "Sukriti Jha",
    role: "Team Lead, Aikyam – ABU DD Robocon 2025",
    text: "Anjali contributed strong analytical thinking and structured calculations to the Robocon robot design. Her work on motion parameters added clarity and precision to our overall build.",
  },
  {
    name: "Prof. Shyam Kumar Chokka",
    role: "Project Mentor (NeuroSpeak), IIIT Jabalpur",
    text: "Anjali demonstrated interdisciplinary thinking in the NeuroSpeak project, integrating AI concepts with system-level architecture. Her structured approach and technical clarity were commendable.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="section-label text-center">Testimonials</p>
          <h2 className="section-heading text-center mb-16">
            What people{" "}
            <span className="font-serif italic gradient-text">say</span>
          </h2>
        </ScrollReveal>

        <div className="glass-card p-10 md:p-14 relative">
          <Quote size={40} className="text-accent/10 absolute top-8 left-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-base md:text-lg text-secondary-foreground leading-relaxed mb-8 font-serif italic">
                "{testimonials[current].text}"
              </p>
              <p className="text-sm font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-xs text-muted-foreground mt-1">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs text-muted-foreground tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
