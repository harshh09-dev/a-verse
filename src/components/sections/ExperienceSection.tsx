import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "FABRO",
    period: "2024 - Present",
    description: "Building scalable web applications and leading frontend architecture.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Web Developer",
    company: "JMRC",
    period: "2024",
    description: "Developed a modern portal for managing operations and services.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Committee Member",
    company: "APS Committee",
    period: "2023 - 2024",
    description: "Designed and developed the official committee website and managed digital presence.",
    tags: ["React", "UI/UX", "Design"],
  },
  {
    title: "Open Source Contributor",
    company: "GSSoC",
    period: "2023",
    description: "Contributed to multiple open-source projects during GirlScript Summer of Code.",
    tags: ["Open Source", "Git", "Collaboration"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-primary tracking-widest uppercase mb-4 font-body">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="gold-gradient">contributed</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-3 md:left-7 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                  <div className="glass-card p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">{exp.title}</h3>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3 font-body">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
