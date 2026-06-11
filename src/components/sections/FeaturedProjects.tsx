import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, MouseEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const featured = [
  {
    id: "fabro",
    title: "FABRO",
    category: "E-Commerce",
    description:
      "Modern e-commerce platform for customization-first Indian embroidery apparel.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    year: "2026",
  },
  {
    id: "jmrc",
    title: "JMRC Portal",
    category: "Enterprise · Full Stack",
    description:
      "Scalable metro service management with intelligent fare computation and analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    year: "2025",
  },
  {
    id: "palate",
    title: "Palate",
    category: "Recipe Platform",
    description:
      "A recipe space that feels like a kitchen journal — Prisma, cloud auth, and a flavor-forward UI.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    year: "2025",
  },
];

function ProjectList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setHovered(null)}
      className="relative border-t border-border/60"
    >
      {/* Cursor-following image preview */}
      <motion.div
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute top-0 left-0 z-20 w-[280px] h-[180px] lg:w-[360px] lg:h-[230px] rounded-2xl overflow-hidden"
      >
        <AnimatePresence>
          {hovered !== null && (
            <motion.img
              key={featured[hovered].id}
              src={featured[hovered].image}
              alt={featured[hovered].title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.7, 0, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {featured.map((project, i) => {
        const isActive = hovered === i;
        const dimmed = hovered !== null && !isActive;
        return (
          <ScrollReveal key={project.id} delay={i * 0.06}>
            <Link
              to={`/projects/${project.id}`}
              onMouseEnter={() => setHovered(i)}
              className="block relative border-b border-border/60 group"
            >
              <div
                className="grid grid-cols-[auto_1fr_auto] items-center gap-6 lg:gap-10 py-8 lg:py-12 transition-opacity duration-500"
                style={{ opacity: dimmed ? 0.3 : 1 }}
              >
                <span className="font-serif italic text-sm text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <motion.h3
                    animate={{ x: isActive ? 16 : 0 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                    className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1] text-foreground"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {project.category} · {project.year}
                  </p>
                </div>
                <ArrowUpRight
                  size={28}
                  className="text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all duration-500"
                />
              </div>
              <motion.div
                className="absolute bottom-[-1px] left-0 right-0 h-px bg-accent origin-left"
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
              />
            </Link>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export default function FeaturedProjects() {
  const marquee = ["SELECTED WORK", "CASE STUDIES", "BUILT WITH CARE", "2025 — 2026"];
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Marquee band */}
      <div className="relative mb-10 md:mb-16 -mx-5 md:-mx-10 overflow-hidden">
        <div className="border-y border-border/60 py-3 md:py-4 bg-foreground/[0.015]">
          <motion.div
            className="flex gap-10 whitespace-nowrap text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...marquee, ...marquee, ...marquee, ...marquee].map((w, i) => (
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
          <div className="flex items-end justify-between mb-10 md:mb-16">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="section-heading">
                Featured{" "}
                <span className="font-serif italic gradient-text">Projects</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex pill-cta"
            >
              <span className="pill-cta-ring" />
              <span className="relative flex items-center gap-2 text-xs tracking-[0.3em] uppercase">
                View All <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Mobile: stacked image cards */}
        <div className="md:hidden space-y-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/projects/${project.id}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
                  <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <span className="absolute top-4 left-4 font-serif italic text-xs text-muted-foreground tabular-nums">
                      0{i + 1} / 0{featured.length}
                    </span>
                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-accent">
                      {project.year}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-3xl font-bold text-foreground leading-[1] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs text-secondary-foreground leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-foreground">
                        Case Study <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: moncy-style hover list */}
        <div className="hidden md:block">
          <ProjectList />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10 md:hidden">
            <Link to="/projects" className="btn-outline text-xs">
              View all projects <ArrowRight size={12} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
