import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FocusMate",
    description: "A productivity companion app to help users stay focused with timer sessions and task tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "JMRC Portal",
    description: "Modern web portal for JMRC operations management with real-time data and admin dashboard.",
    tags: ["Next.js", "MongoDB", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    title: "FABRO",
    description: "Scalable platform for fabrication and manufacturing workflows with team collaboration.",
    tags: ["React", "PostgreSQL", "Express"],
    link: "#",
    github: "#",
  },
  {
    title: "APS Website",
    description: "Official website for the APS Committee with event management and member directory.",
    tags: ["React", "UI/UX", "Figma"],
    link: "#",
    github: "#",
  },
  {
    title: "Palate",
    description: "A culinary discovery platform showcasing recipes, cuisines and food stories.",
    tags: ["React", "API Integration", "CSS"],
    link: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-primary tracking-widest uppercase mb-4 font-body">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Things I've <span className="gold-gradient">built</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col hover-lift group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} />
                    </a>
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1 font-body">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline font-body"
            >
              See more on GitHub →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
