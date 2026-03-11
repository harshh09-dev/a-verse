import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    initials: "MK",
    name: "Mayank Kaushik",
    role: "Co-Intern, JMRC",
    text: "Working with Anjali on the JMRC Services Portal was seamless. She structured the APIs and frontend logic clearly, making integration smooth and the system easy to scale.",
  },
  {
    initials: "AJ",
    name: "Aruna Jain",
    role: "Founder, FABRO",
    text: "Anjali understood the vision behind FABRO and translated it into a clean, elegant digital experience. The customization flow and product presentation reflect thoughtful design and structured execution.",
  },
  {
    initials: "NLJ",
    name: "Natwar Lal Jain",
    role: "DGM (S&T), Jaipur Metro Rail Corporation",
    text: "Anjali demonstrated a structured approach while working on the JMRC Services Portal. Her clarity in system design and attention to implementation details contributed meaningfully to the project.",
  },
  {
    initials: "AS",
    name: "Anil Sharma",
    role: "Project Mentor, JMRC",
    text: "Anjali maintained a structured approach throughout the JMRC Services Portal project. Her clarity in system flow and implementation ensured steady progress and reliable results.",
  },
  {
    initials: "SJ",
    name: "Sukriti Jha",
    role: "Team Lead, Aikyam – ABU DD Robocon 2025",
    text: "Anjali contributed strong analytical thinking and structured calculations to the Robocon robot design. Her work on motion parameters and system integration added clarity and precision to our overall build.",
  },
  {
    initials: "PSKC",
    name: "Prof. Shyam Kumar Chokka",
    role: "Project Mentor (NeuroSpeak), IIIT Jabalpur",
    text: "Anjali demonstrated interdisciplinary thinking in the NeuroSpeak project, integrating AI concepts with system-level architecture. Her structured approach and technical clarity were commendable.",
  },
  {
    initials: "PYSK",
    name: "Prof. Yashpal Singh Katharria",
    role: "Project Supervisor (FocusMate), IIIT Jabalpur",
    text: "Anjali contributed meaningfully to the FocusMate team by bringing structured thinking to the system design and implementation. Her ability to coordinate hardware integration with software logic supported the overall success of the project.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="section-label">What others say</p>
          <h2 className="section-heading mb-12">
            The Voices{" "}
            <span className="font-serif italic gradient-text">Behind</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground shrink-0">
                {t.initials}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>

            <p className="text-sm text-secondary-foreground leading-relaxed italic">
              "{t.text}"
            </p>

            <div className="flex items-center gap-3 mt-8">
              <button onClick={prev} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
                <ChevronLeft size={14} />
              </button>
              <span className="text-xs text-muted-foreground">{current + 1}/{testimonials.length}</span>
              <button onClick={next} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
