import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label">Let's Connect</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Let's build something{" "}
            <span className="font-serif italic gradient-text">aesthetic</span>{" "}
            together
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-10">
            Have a project idea, a collaboration in mind, or just want to say hello? I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Start a Conversation <ArrowRight size={14} />
            </Link>
            <a
              href="mailto:anjalikamal3105@gmail.com"
              className="btn-outline"
            >
              anjalikamal3105@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
