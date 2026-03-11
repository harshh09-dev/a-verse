import ScrollReveal from "@/components/ScrollReveal";

const skills = [
  "ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma",
  "Zustand", "Git", "Docker", "AWS", "Vercel", "Linux",
];

const marqueeWords = [
  "User-Friendly", "Adaptive", "Fluid", "Future-Proof", "SEO-Ready",
  "Immersive", "Protected", "Dependable", "Captivating",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Technical arsenal</p>
          <h2 className="section-heading mb-12">
            MY SKILLSET{" "}
            <span className="font-serif italic gradient-text">The Magic Behind</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 rounded-full border border-border text-sm text-secondary-foreground hover:text-foreground hover:border-foreground/30 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Marquee */}
        <ScrollReveal delay={0.2}>
          <div className="overflow-hidden py-6 border-y border-border">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...marqueeWords, ...marqueeWords].map((word, i) => (
                <span key={i} className="text-lg md:text-xl font-medium text-muted-foreground mx-4 flex items-center gap-3">
                  {word}
                  <span className="text-xs">✦</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
