import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const featured = [
  {
    id: "fabro",
    title: "FABRO",
    category: "E-Commerce · Web Development",
    description: "Modern e-commerce platform for customization-first Indian embroidery apparel.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    year: "2026",
  },
  {
    id: "jmrc",
    title: "JMRC Portal",
    category: "Enterprise · Full Stack",
    description: "Scalable metro service management platform with intelligent fare computation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    year: "2025",
  },
  {
    id: "palate",
    title: "Palate",
    category: "Full Stack · Recipe Platform",
    description: "Full-stack recipe management with Prisma ORM and cloud-based auth system.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    year: "2025",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-padding">
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
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Mobile: swipe carousel */}
        <div className="md:hidden -mx-6 px-6 snap-row flex gap-4 overflow-x-auto pb-2">
          {featured.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block shrink-0 w-[85%]"
            >
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
                    <span className="text-[10px] text-accent uppercase tracking-widest">{project.category}</span>
                    <span className="text-[10px] text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-xs text-secondary-foreground leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    Case Study <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: full rows */}
        <div className="hidden md:block space-y-6">
          {featured.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <Link
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div className="glass-card overflow-hidden hover-lift">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs text-accent uppercase tracking-widest">{project.category}</span>
                          <span className="text-xs text-muted-foreground">{project.year}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-secondary-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        View Case Study
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
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
