import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FocusMate",
    description: "Modular edge-computing system connecting physical workspace signals with intelligent digital automation.",
    bullets: [
      "Real-time presence monitoring and event-driven decision engine",
      "Android control app for personalized focus management",
      "Privacy-first architecture with fully local processing",
    ],
    tags: ["Raspberry Pi", "Python", "Android", "Event-Driven Systems"],
  },
  {
    title: "JMRC Metro Services Portal",
    description: "Scalable service management platform built with serverless APIs and algorithm-driven fare computation.",
    bullets: [
      "Designed route-based fare calculation engine with inter-line transfer logic",
      "Implemented complaint lifecycle APIs with SLA breach monitoring",
      "Built analytics dashboard with sentiment analysis and resolution tracking",
    ],
    tags: ["Next.js 16", "TypeScript (Strict)", "Zod", "Serverless Functions"],
    link: "https://jmrc-service-portal-nl7e.vercel.app/",
  },
  {
    title: "FABRO",
    description: "Modern e-commerce platform engineered for customization-first apparel ordering with performance-optimized architecture.",
    bullets: [
      "Designed modular product + customization flow with dynamic state management",
      "Implemented WhatsApp-integrated checkout logic with structured message payloads",
      "Optimized image-heavy layout using Next.js image pipeline",
    ],
    tags: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "SEO Optimization"],
    link: "https://fabro-handcrafted-indian-embroidery.vercel.app/",
  },
  {
    title: "APS Official Website",
    description: "Community-focused web platform engineered to streamline event communication and member engagement.",
    bullets: [
      "Designed modular event and gallery components",
      "Implemented structured routing for dynamic event detail pages",
      "Integrated motion-based UI transitions for enhanced user experience",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://aps-iiitdmj.vercel.app/",
  },
  {
    title: "Palate",
    description: "Scalable full-stack recipe management platform engineered with modern App Router architecture and typed API routes.",
    bullets: [
      "Designed relational schema with Prisma ORM and PostgreSQL",
      "Implemented protected API routes with Supabase authentication",
      "Integrated cloud image storage with role-based access policies",
    ],
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Supabase Auth"],
    link: "https://palate-nu.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground font-serif italic">AK</span>
            <span className="text-xs text-muted-foreground">Crafting modern experiences</span>
          </div>
          <h2 className="section-heading mb-14">
            VENTURE{" "}
            <span className="font-serif italic gradient-text">Showcase</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col hover-lift group">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary-foreground mb-3">{project.description}</p>

                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex gap-1.5">
                      <span className="shrink-0">-</span> {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="https://github.com/A-verse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
            >
              See more projects →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
