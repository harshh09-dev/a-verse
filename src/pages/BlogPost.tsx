import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/pages/Blog";
import { ArrowLeft, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <div className="h-full bg-primary transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <Navbar />
      <article className="pt-24 section-padding">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mb-8 font-body">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/80 font-body leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
