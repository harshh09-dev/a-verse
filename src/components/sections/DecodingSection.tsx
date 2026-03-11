import ScrollReveal from "@/components/ScrollReveal";
import { Github, Linkedin, Music } from "lucide-react";

export default function DecodingSection() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Behind the curtains</p>
          <h2 className="section-heading mb-12">
            Decoding logic{" "}
            <span className="font-serif italic gradient-text">&& the lyrics</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub card */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 h-full">
              <h3 className="font-semibold text-foreground mb-4">Anjali's Github</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Latest Push</p>
                  <p className="text-xs text-secondary-foreground mt-1">
                    "feat: implement context-aware task scheduler for FocusMate system."
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Repo: Private work</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://github.com/A-verse" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/anjalikamal-ak3105/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Music card */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <p className="text-xs text-muted-foreground">Lyrics & Decoding</p>
              </div>
              <h3 className="font-semibold text-foreground mb-3">Decoding the music</h3>
              <p className="text-xs text-secondary-foreground leading-relaxed mb-6">
                I love to break down the logic behind my favorite tracks—sometimes it's the lyrics, sometimes it's the code. Here you'll find a blend of both: music that inspires my work, and the logic that powers it.
              </p>
              <div className="glass-card bg-muted p-4 rounded-xl flex items-center gap-3">
                <Music size={16} className="text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Last Played</p>
                  <p className="text-sm font-semibold text-foreground">LIVE WHILE WE'RE YOUNG</p>
                  <p className="text-xs text-muted-foreground">FROM ONE DIRECTION</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
