import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "Figma"],
  },
];

const marqueeWords = [
  "Scalable", "Adaptive", "Immersive", "User-First", "Performant",
  "Accessible", "Responsive", "Elegant", "Reliable", "Creative",
];

export default function SkillsSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      {/* Marquee */}
      <div className="border-y border-border py-5 mb-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className="text-lg md:text-2xl font-medium text-muted-foreground/40 mx-6 flex items-center gap-4"
            >
              {word}
              <span className="text-accent text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <ScrollReveal>
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-heading mb-16">
            Skills & <span className="font-serif italic gradient-text">Technologies</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={gi} delay={gi * 0.1}>
              <div className="glass-card p-8">
                <h3 className="text-xs text-accent uppercase tracking-widest mb-6">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, borderColor: "hsl(0 0% 30%)" }}
                      className="px-4 py-2 rounded-full border border-border text-sm text-secondary-foreground cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
