import { motion } from "framer-motion";
import { Quote, Code2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const lyrics = [
  {
    line: "Designing isn't decoration — it's deciding what gets left out.",
    context: "On restraint",
  },
  {
    line: "The best interfaces feel less like screens, more like conversations.",
    context: "On dialogue",
  },
  {
    line: "Code is just poetry with side effects.",
    context: "On craft",
  },
  {
    line: "Empty space is not absence — it's permission to breathe.",
    context: "On whitespace",
  },
];

const logic = [
  {
    title: "Build for the second visit",
    body: "Anyone can impress on the first load. The harder craft is making someone return — through speed, clarity, and small joys that don't wear out.",
  },
  {
    title: "Constraints > Choices",
    body: "A grid, a palette, a rule. Restriction sharpens taste. Infinite options dilute it. The system is the design.",
  },
  {
    title: "Animation is timing, not motion",
    body: "Easing curves matter more than distance. A 200ms ease-out can feel premium; a 600ms linear feels broken. Respect the user's attention.",
  },
];

export default function LyricsAndLogic() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
            <div>
              <p className="section-label">Notes from the margin</p>
              <h2 className="section-heading">
                Decoding lyrics &{" "}
                <span className="font-serif italic gradient-text">logic</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xs leading-relaxed">
              Fragments I've collected — half poetry, half principles. Things I
              keep returning to.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* LYRICS */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Quote size={16} className="text-accent" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Lyrics — felt thoughts
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6 md:space-y-8">
              {lyrics.map((l, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
                    className="border-l-2 border-border hover:border-accent pl-5 md:pl-6 py-2 transition-colors duration-500"
                  >
                    <p className="font-serif italic text-xl md:text-2xl lg:text-3xl leading-[1.3] text-foreground mb-2">
                      "{l.line}"
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      — {l.context}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* LOGIC */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Code2 size={16} className="text-accent" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Logic — working principles
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4 md:space-y-5">
              {logic.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
                    className="group relative p-6 md:p-7 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden"
                  >
                    <span className="absolute top-5 right-5 font-serif italic text-xs text-muted-foreground tabular-nums">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 pr-8 group-hover:text-accent transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      {item.body}
                    </p>
                    <motion.span
                      className="absolute bottom-0 left-0 h-px bg-accent origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: "100%" }}
                    />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
