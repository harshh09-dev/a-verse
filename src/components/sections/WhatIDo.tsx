import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Palette, Camera, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Code2,
    title: "Full-Stack Development",
    tagline: "Code that scales, structures that last.",
    description:
      "Building scalable web applications with modern frameworks, clean architecture, and performance-first thinking.",
    tools: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    num: "02",
    icon: Palette,
    title: "UI / UX Design",
    tagline: "Where pixels meet poetry.",
    description:
      "Crafting interfaces that balance beauty with usability — every pixel intentional, every interaction meaningful.",
    tools: ["Figma", "Framer", "Tailwind", "Motion"],
  },
  {
    num: "03",
    icon: Camera,
    title: "Visual Storytelling",
    tagline: "Frames that hold a feeling.",
    description:
      "Photography and creative direction that captures mood, emotion, and the quiet beauty of everyday moments.",
    tools: ["Lightroom", "Photography", "Color Grading"],
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Creative Technology",
    tagline: "Art that you can run.",
    description:
      "Exploring the intersection of art and engineering — 3D experiments, generative art, and interactive experiences.",
    tools: ["Three.js", "GLSL", "IoT", "AI"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(sy, [-50, 50], [4, -4]);
  const rotateY = useTransform(sx, [-50, 50], [-4, 4]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
    ref.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const Icon = service.icon;

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 md:p-8 h-full cursor-default transition-colors duration-500 hover:border-accent/30"
      >
        {/* spotlight follow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), hsl(24 80% 55% / 0.12), transparent 50%)",
          }}
        />

        {/* number watermark */}
        <span className="absolute top-4 right-5 md:top-6 md:right-8 font-serif italic text-4xl md:text-5xl text-muted-foreground/15 group-hover:text-accent/30 transition-colors duration-500">
          {service.num}
        </span>

        <div className="relative">
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center shrink-0"
            >
              <Icon size={18} className="text-accent" />
            </motion.div>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <ArrowUpRight
              size={16}
              className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
            />
          </div>

          <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1.5 md:mb-2 tracking-tight">
            {service.title}
          </h3>
          <p className="font-serif italic text-xs md:text-sm text-accent/90 mb-3 md:mb-4">
            {service.tagline}
          </p>
          <p className="text-xs md:text-sm text-secondary-foreground leading-relaxed mb-5 md:mb-6">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {service.tools.map((tool) => (
              <span
                key={tool}
                className="tag-pill group-hover:border-accent/20 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* bottom gradient line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      </motion.div>
    </ScrollReveal>
  );
}

export default function WhatIDo() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* ambient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
              I sit at the crossroads of design and engineering — building things that are as thoughtful as they are functional.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
