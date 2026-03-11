import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPreviews = [
  {
    title: "Turning Small Projects Into Big Ones",
    excerpt: "How simple ideas can evolve into meaningful software projects.",
    readTime: "5 min",
    tags: ["Development", "Growth"],
  },
  {
    title: "Design Thinking in Code",
    excerpt: "Bridging the gap between visual design and software engineering.",
    readTime: "4 min",
    tags: ["Design", "Engineering"],
  },
  {
    title: "My Open Source Journey",
    excerpt: "Lessons learned from contributing to open-source communities.",
    readTime: "6 min",
    tags: ["Open Source", "Community"],
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm text-primary tracking-widest uppercase mb-4 font-body">Blog</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Latest <span className="gold-gradient">thoughts</span>
              </h2>
            </div>
            <Link to="/blog" className="text-sm text-primary hover:underline font-body flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPreviews.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link to="/blog" className="glass-card p-6 block hover-lift group h-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-3">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground">{post.readTime} read</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
