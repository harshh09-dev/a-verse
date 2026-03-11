import ScrollReveal from "@/components/ScrollReveal";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-primary tracking-widest uppercase mb-4 font-body">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Building at the intersection of<br />
            <span className="gold-gradient">technology & creativity</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm <span className="text-foreground font-medium">Anjali Kamal</span>, a full stack developer and
                creative technologist passionate about building meaningful digital experiences.
              </p>
              <p>
                Currently pursuing BTech at <span className="text-foreground font-medium">IIIT Jabalpur</span> in
                Smart Manufacturing Engineering, I enjoy working at the intersection of technology, design and storytelling.
              </p>
              <p>
                I believe technology should not only solve problems but also create beautiful and engaging experiences.
                My work spans web development, UI/UX design, creative visual storytelling, and photography.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Web Development", icon: "🌐" },
                { label: "UI/UX Design", icon: "🎨" },
                { label: "Visual Storytelling", icon: "📸" },
                { label: "Creative Writing", icon: "✍️" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-4 text-center hover-lift cursor-default"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="text-xs text-muted-foreground font-body">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
