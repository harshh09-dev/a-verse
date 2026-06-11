import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Development",
    tagline: "Code that scales",
    description:
      "Scalable web apps with modern frameworks, clean architecture, and performance-first thinking.",
    tools: ["React", "Next.js", "Node", "Postgres"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    num: "02",
    title: "Design",
    tagline: "Pixels meet poetry",
    description:
      "Interfaces that balance beauty with usability — every pixel intentional, every interaction meaningful.",
    tools: ["Figma", "Framer", "Tailwind", "Motion"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80",
  },
  {
    num: "03",
    title: "Photography",
    tagline: "Frames that hold feeling",
    description:
      "Visual storytelling that captures mood, emotion, and the quiet beauty of everyday moments.",
    tools: ["Lightroom", "Color", "Direction"],
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
  },
  {
    num: "04",
    title: "Creative Tech",
    tagline: "Art you can run",
    description:
      "The intersection of art and engineering — 3D experiments, generative art, and interactive experiences.",
    tools: ["Three.js", "GLSL", "IoT", "AI"],
    image:
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&q=80",
  },
];

function ServiceRow({
  service,
  index,
  hovered,
  setHovered,
}: {
  service: (typeof services)[number];
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
        className="group relative border-b border-border/60"
      >
        <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 py-6 md:py-10 transition-opacity duration-500"
          style={{ opacity: dimmed ? 0.35 : 1 }}
        >
          <span className="font-serif italic text-xs md:text-sm text-muted-foreground tabular-nums">
            {service.num}
          </span>

          <div className="min-w-0">
            <motion.h3
              animate={{ x: isActive ? 12 : 0 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
              className="text-[2rem] md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] text-foreground"
            >
              {service.title}
            </motion.h3>
            <p className="hidden md:block mt-2 text-sm text-muted-foreground max-w-md">
              {service.description}
            </p>
            <div className="mt-2 md:hidden flex flex-wrap gap-1.5">
              {service.tools.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Desktop preview image on hover */}
          <div className="hidden md:block w-32 h-20 lg:w-40 lg:h-24 rounded-xl overflow-hidden relative shrink-0">
            <AnimatePresence>
              {isActive && (
                <motion.img
                  key={service.image}
                  src={service.image}
                  alt={service.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-0 border border-border/60 rounded-xl pointer-events-none" />
          </div>

          <ArrowUpRight
            size={20}
            className="md:hidden text-muted-foreground"
          />
        </div>

        {/* Accent underline sweep */}
        <motion.div
          className="absolute bottom-[-1px] left-0 h-px bg-accent origin-left"
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          style={{ right: 0 }}
        />
      </div>
    </ScrollReveal>
  );
}

export default function WhatIDo() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-16 flex-wrap">
            <div>
              <p className="section-label">What I Do</p>
              <h2 className="section-heading">
                Crafting digital{" "}
                <span className="font-serif italic gradient-text">experiences</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xs leading-relaxed">
              At the crossroads of design and engineering — thoughtful, functional, and a little poetic.
            </p>
          </div>
        </ScrollReveal>

        <div className="border-t border-border/60">
          {services.map((s, i) => (
            <ServiceRow
              key={s.num}
              service={s}
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
