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
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="section-label">From the blog</p>
              <h2 className="section-heading">
                Latest{" "}
                <span className="font-serif italic gradient-text">thoughts</span>
              </h2>
            </div>
            <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
              View all <ArrowRight size={12} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPreviews.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <Link to="/blog" className="glass-card p-6 block hover-lift group h-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-secondary-foreground transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground">{post.readTime} read</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
