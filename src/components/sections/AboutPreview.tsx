import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "4+", label: "Professional Roles" },
  { value: "2+", label: "Years of Experience" },
];

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="section-label">About Me</p>
            <h2 className="section-heading mb-8">
              Where design meets{" "}
              <span className="font-serif italic gradient-text">storytelling</span>
            </h2>
            <p className="text-sm text-secondary-foreground leading-relaxed mb-6">
              I'm Anjali Kamal — a B.Tech student at IIIT Jabalpur, full-stack developer, 
              and creative thinker who believes technology should feel human. I build systems 
              that are scalable, reliable, and beautiful.
            </p>
            <p className="text-sm text-secondary-foreground leading-relaxed mb-8">
              From embedded IoT systems to modern web platforms, my work bridges engineering 
              precision with design sensibility. Currently exploring AI, data science, and 
              the art of visual storytelling.
            </p>
            <Link to="/about" className="btn-outline text-xs">
              More about me <ArrowRight size={12} />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text-warm mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
