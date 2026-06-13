import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const skillGroups = [
  {
    num: "01",
    label: "Frontend",
    tagline: "Interfaces that breathe",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    num: "02",
    label: "Backend",
    tagline: "Logic that scales",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    num: "03",
    label: "Tools & DevOps",
    tagline: "Ship, deploy, repeat",
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "Figma"],
  },
];

const marqueeWords = [
  "Scalable", "Adaptive", "Immersive", "User-First", "Performant",
  "Accessible", "Responsive", "Elegant", "Reliable", "Creative",
];

function SkillRow({
  group,
  index,
  hovered,
  setHovered,
}: {
  group: (typeof skillGroups)[number];
  index: number;
  hovered: number | null;
  setHovered: (n: number | null) => void;
}) {
  const isActive = hovered === index;
  const dimmed = hovered !== null && !isActive;

  return (
    <ScrollReveal delay={index * 0.06}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="relative border-b border-border/60"
      >
        <div
          className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-10 py-6 md:py-10 transition-opacity duration-500"
          style={{ opacity: dimmed ? 0.35 : 1 }}
        >
          <span className="font-serif italic text-xs md:text-sm text-muted-foreground tabular-nums">
            {group.num}
          </span>

          <div className="min-w-0">
            <motion.h3
              animate={{ x: isActive ? 12 : 0 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
              className="text-[2rem] md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] text-foreground"
            >
              {group.label}
            </motion.h3>
            <p className="hidden md:block mt-2 font-serif italic text-sm text-muted-foreground">
              {group.tagline}
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-wrap gap-1.5 md:gap-2 md:justify-end md:max-w-md">
            <AnimatePresence mode="popLayout">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={false}
                  animate={{
                    y: isActive ? -2 : 0,
                    borderColor: isActive
                      ? "hsl(var(--accent) / 0.6)"
                      : "hsl(var(--border))",
                  }}
                  transition={{ duration: 0.4, delay: isActive ? i * 0.03 : 0 }}
                  className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border text-[10px] md:text-xs uppercase tracking-widest text-secondary-foreground"
                >
                  {skill}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="absolute bottom-[-1px] left-0 right-0 h-px bg-accent origin-left"
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
        />
      </div>
    </ScrollReveal>
  );
}

export default function SkillsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Marquee */}
      <div className="relative mb-10 md:mb-16 -mx-5 md:-mx-10 overflow-hidden">
        <div className="border-y border-border/60 py-3 md:py-4 bg-foreground/[0.015]">
          <motion.div
            className="flex gap-10 whitespace-nowrap text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="flex items-center gap-10">
                {w}
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-16 flex-wrap">
            <div>
              <p className="section-label">Technical Arsenal</p>
              <h2 className="section-heading">
                Skills &{" "}
                <span className="font-serif italic gradient-text">Technologies</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xs leading-relaxed">
              The stack I reach for — refined over projects, tuned for craft and speed.
            </p>
          </div>
        </ScrollReveal>

        <div className="border-t border-border/60">
          {skillGroups.map((g, i) => (
            <SkillRow
              key={g.num}
              group={g}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
