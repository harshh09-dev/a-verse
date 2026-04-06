import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const facets = [
  {
    emoji: "📷",
    title: "Photography",
    text: "I chase golden hours and quiet corners. There's a whole world in the way light falls.",
  },
  {
    emoji: "🎵",
    title: "Music & Lyrics",
    text: "I find clarity in melodies. Songs are just feelings that learned how to travel.",
  },
  {
    emoji: "✍️",
    title: "Writing",
    text: "Sometimes the best thing I build all day is a sentence. Words are my other medium.",
  },
  {
    emoji: "🌌",
    title: "Stargazing",
    text: "The universe doesn't care about deadlines. That's exactly why I look up sometimes.",
  },
];

const currentlyPlaying = {
  song: "Softly",
  artist: "Clairo",
  mood: "Late night coding sessions",
};

export default function BeyondWork() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Beyond Work</p>
          <h2 className="section-heading mb-4">
            The human behind the{" "}
            <span className="font-serif italic gradient-text">pixels</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mb-16">
            Because a portfolio should feel like meeting someone, not reading a resume.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {facets.map((facet, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 h-full cursor-default"
              >
                <span className="text-2xl mb-3 block">{facet.emoji}</span>
                <h3 className="text-sm font-semibold text-foreground mb-2">{facet.title}</h3>
                <p className="text-xs text-secondary-foreground leading-relaxed">{facet.text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Currently vibing */}
        <ScrollReveal delay={0.3}>
          <div className="glass-card p-6 flex items-center gap-4 max-w-md mx-auto">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-accent text-lg"
              >
                ♪
              </motion.span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Currently vibing to</p>
              <p className="text-sm text-foreground font-medium">
                {currentlyPlaying.song} — <span className="text-secondary-foreground">{currentlyPlaying.artist}</span>
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{currentlyPlaying.mood}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
