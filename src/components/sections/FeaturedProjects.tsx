import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const featured = [
  {
    id: "fabro",
    title: "FABRO",
    category: "E-Commerce",
    description:
      "Modern e-commerce platform for customization-first Indian embroidery apparel.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80",
    year: "2026",
    tags: ["Next.js", "Stripe", "Prisma"],
  },
  {
    id: "jmrc",
    title: "JMRC Portal",
    category: "Enterprise · Full Stack",
    description:
      "Scalable metro service management with intelligent fare computation and analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    year: "2025",
    tags: ["React", "Node", "PostgreSQL"],
  },
  {
    id: "palate",
    title: "Palate",
    category: "Recipe Platform",
    description:
      "A recipe space that feels like a kitchen journal — Prisma, cloud auth, and a flavor-forward UI.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&q=80",
    year: "2025",
    tags: ["Next.js", "Tailwind", "Auth"],
  },
];

function ProjectCard({ project, index }: { project: typeof featured[number]; index: number }) {
  // Alternate layout: even = image left / odd = image right
  const reverse = index % 2 === 1;
  return (
    <ScrollReveal delay={index * 0.08}>
      <Link
        to={`/projects/${project.id}`}
        className="group block"
      >
        <div
          className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
            className="md:col-span-7 relative aspect-[16/11] md:aspect-[16/10] overflow-hidden rounded-2xl bg-muted"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
              whileHover={{ scale: 1.06 }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Floating year tag */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border/60 text-[10px] tracking-[0.25em] uppercase text-foreground">
                {project.year}
              </span>
            </div>

            {/* Hover arrow */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/70 backdrop-blur-md border border-border/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
              <ArrowUpRight
                size={18}
                className="text-foreground group-hover:text-accent-foreground group-hover:rotate-45 transition-transform duration-500"
              />
            </div>

            {/* Bottom tags overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border/60 text-[10px] tracking-wider text-foreground/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-serif italic text-xs text-muted-foreground tabular-nums">
                0{index + 1}
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                {project.category}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-secondary-foreground leading-relaxed mb-6 max-w-md">
              {project.description}
            </p>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
              View Case Study
              <ArrowRight
                size={12}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12 md:mb-20 flex-wrap gap-4">
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

        <div className="space-y-20 md:space-y-32">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14 md:hidden">
            <Link to="/projects" className="btn-outline text-xs">
              View all projects <ArrowRight size={12} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
