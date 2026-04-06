import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, PenLine, Layers } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const creativeCards = [
  {
    icon: Camera,
    title: "Photography",
    subtitle: "Moments frozen in time",
    description: "Golden hours, quiet streets, and the kind of light that makes you pause.",
    href: "/creative/photography",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: PenLine,
    title: "Writing",
    subtitle: "Words that linger",
    description: "Poetic fragments, reflections, and the stories between the lines.",
    href: "/creative/writing",
    gradient: "from-rose-500/10 to-pink-500/10",
  },
  {
    icon: Layers,
    title: "UI Experiments",
    subtitle: "Design playgrounds",
    description: "Concept explorations, micro-interactions, and visual experiments.",
    href: "/creative/experiments",
    gradient: "from-violet-500/10 to-indigo-500/10",
  },
];

export default function CreativeSide() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Creative Corner</p>
          <h2 className="section-heading mb-4">
            Beyond the{" "}
            <span className="font-serif italic gradient-text">code</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mb-16">
            Not everything I create lives in a terminal. This is the space where I explore, experiment, and express.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {creativeCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link to={card.href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 h-full relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                      <card.icon size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{card.title}</h3>
                    <p className="text-xs text-accent font-medium mb-3">{card.subtitle}</p>
                    <p className="text-sm text-secondary-foreground leading-relaxed mb-6">{card.description}</p>
                    <span className="inline-flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      Explore <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
