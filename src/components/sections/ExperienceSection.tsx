import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    title: "Web Developer",
    company: "FABRO",
    period: "Feb 2026 – Present | Remote",
    bullets: [
      "Delivered a scalable e-commerce platform showcasing Indian embroidery through high-impact visual storytelling.",
      "Improved user conversion flow by designing seamless cart and order workflows integrated with WhatsApp-based routing.",
      "Built a maintainable TypeScript architecture to support future brand expansion and feature scaling.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Full-stack architecture", "API integration"],
  },
  {
    title: "Software Developer",
    company: "Jaipur Metro Rail Corporation (JMRC)",
    period: "June 2025 – August 2025 | Jaipur",
    bullets: [
      "Improved operational efficiency by developing a voice detection module for CCS2300 counters within the Automatic Fare Collection system.",
      "Enhanced issue resolution workflows by collaborating on a smart complaint & feedback portal for metro operations.",
      "Bridged software and physical infrastructure systems by gaining hands-on exposure to SMPS and signaling components.",
    ],
    tags: ["System integration", "Embedded systems", "Full-stack development", "Database workflows"],
  },
  {
    title: "Core Working Committee Member",
    company: "Astronomy & Physics Society (APS), IIIT Jabalpur",
    period: "August 2024 – April 2025",
    bullets: [
      "Increased student engagement in STEM activities by organizing and leading technical workshops and coding-based sessions.",
      "Coordinated cross-functional teams to execute coding challenges, guest lectures, and physics-based technical events.",
    ],
    tags: ["Leadership", "Technical mentoring", "Public speaking", "Event planning"],
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "May 2024 – August 2024",
    bullets: [
      "Improved application performance and usability by contributing feature enhancements and bug fixes to production-level open-source repositories.",
      "Strengthened code quality and maintainability through structured PR reviews and collaborative Git workflows.",
    ],
    tags: ["React", "Node.js", "TypeScript", "GitHub", "API integration", "Code reviews"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Career path</p>
          <h2 className="section-heading mb-14">
            Experience That Brings{" "}
            <span className="font-serif italic gradient-text">Ideas to Life</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass-card p-6 md:p-8 hover-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 md:mt-0 whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-secondary-foreground leading-relaxed flex gap-2">
                      <span className="text-muted-foreground mt-1 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
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
