import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const featured = [
  {
    id: "fabro",
    title: "FABRO",
    category: "E-Commerce · Web Development",
    description:
      "Modern e-commerce platform for customization-first Indian embroidery apparel — built for storytellers, not just shoppers.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    year: "2026",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    id: "jmrc",
    title: "JMRC Portal",
    category: "Enterprise · Full Stack",
    description:
      "Scalable metro service management with intelligent fare computation, role-based access, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    year: "2025",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    id: "palate",
    title: "Palate",
    category: "Full Stack · Recipe Platform",
    description:
      "A recipe space that feels like a kitchen journal — Prisma ORM, cloud auth, and a flavor-forward UI.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    year: "2025",
    accent: "from-emerald-500/20 to-transparent",
  },
];

function StickyCard({
  project,
  index,
  total,
}: {
  project: (typeof featured)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each subsequent card scales down and fades slightly as the next overlays
  const scale = useTransform(scrollYProgress, [0.4, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.95], [1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  const topOffset = 80 + index * 28; // each card sticks slightly lower

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        style={{ scale, opacity, y }}
        className="will-change-transform"
      >
        <Link to={`/projects/${project.id}`} className="group block">
          <div className="glass-card overflow-hidden hover-lift relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accent} pointer-events-none opacity-60`}
            />
            <div className="grid md:grid-cols-2 relative">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-accent uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      0{index + 1} / 0{total} · {project.year}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-8">
                  <span className="pill-cta">
                    <span className="pill-cta-ring" />
                    <span className="relative flex items-center gap-2 text-xs tracking-[0.3em] uppercase">
                      View Case Study
                      <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function FeaturedProjects() {
  const marquee = ["SELECTED WORK", "CASE STUDIES", "BUILT WITH CARE", "2025 — 2026"];
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Marquee band */}
      <div className="relative mb-10 md:mb-16 -mx-6 md:-mx-10 overflow-hidden">
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
          <div className="flex items-end justify-between mb-16">
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

        {/* Mobile: animated snap carousel */}
        <div className="md:hidden -mx-6 px-6 snap-row flex gap-4 overflow-x-auto pb-2">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="shrink-0 w-[85%]"
            >
              <Link to={`/projects/${project.id}`} className="group block">
                <div className="glass-card overflow-hidden hover-lift h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-accent uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-secondary-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      Case Study <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: scroll-stacked sticky cards */}
        <div className="hidden md:block space-y-10">
          {featured.map((project, i) => (
            <StickyCard
              key={project.id}
              project={project}
              index={i}
              total={featured.length}
            />
          ))}
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
