import ScrollReveal from "@/components/ScrollReveal";
import {
  Code2, Palette, Camera, Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Full Stack Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["UI/UX Design", "Figma", "Graphic Design", "Prototyping"],
  },
  {
    title: "Creative",
    icon: Camera,
    skills: ["Photography", "Editing", "Visual Storytelling", "Writing"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-primary tracking-widest uppercase mb-4 font-body">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            My <span className="gold-gradient">toolkit</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-6 hover-lift h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cat.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
