import ScrollReveal from "@/components/ScrollReveal";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label">A little about me</p>
          <h2 className="section-heading mb-10">
            Nice to meet you.{" "}
            <span className="font-serif italic gradient-text">I'm Anjali</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <div className="space-y-4 text-sm text-secondary-foreground leading-relaxed">
              <p>
                I'm Anjali Kamal, a B.Tech student at <span className="text-foreground">IIIT Jabalpur</span> with a strong interest in building structured, scalable software. I enjoy working across the full stack, solving DSA problems, and understanding how systems operate under the hood.
              </p>
              <p>
                My recent work spans full-stack web applications, embedded systems, and algorithm-driven platforms. I'm currently exploring data science, system design, and practical AI integration — focusing on building solutions that are useful, reliable, and scalable in real-world environments.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.linkedin.com/in/anjalikamal-ak3105/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/A-verse" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="https://instagram.com/anjalikamal3105" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="md:col-span-2">
            <div className="glass-card overflow-hidden rounded-2xl">
              <img
                src="https://aversee.vercel.app/cyber-security-experts-working-with-tech-devices-neon-lights.jpg"
                alt="Anjali working"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
