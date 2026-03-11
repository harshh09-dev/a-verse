import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const mockEntries = [
  { name: "Rahul", message: "Amazing portfolio! Love the cosmic theme. 🌟", date: "2025-03-01" },
  { name: "Priya", message: "Your creative corner is so inspiring. Keep building!", date: "2025-02-28" },
  { name: "Alex", message: "The 3D elements are beautiful. Great work, Anjali!", date: "2025-02-25" },
  { name: "Sarah", message: "This is one of the most unique portfolios I've seen. Bookmarked!", date: "2025-02-20" },
];

export default function SignatureBook() {
  const [entries, setEntries] = useState(mockEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setEntries([{ name, message, date: new Date().toISOString().split("T")[0] }, ...entries]);
    setName("");
    setMessage("");
    toast.success("Thanks for signing the book! ✨");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mb-8 font-body">
              <ArrowLeft size={14} /> Back home
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen size={28} className="text-primary" />
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                <span className="gold-gradient">Signature Book</span>
              </h1>
            </div>
            <p className="text-muted-foreground font-body mb-12">
              Leave a message, share a thought, or just say hello. 💛
            </p>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="glass-card p-6 mb-12">
              <h3 className="font-display font-semibold mb-4">Sign the book</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border"
                  required
                />
                <div className="hidden md:block" />
              </div>
              <Textarea
                placeholder="Leave a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-secondary border-border mb-4"
                required
              />
              <Button type="submit" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Send size={14} />
                Sign
              </Button>
            </form>
          </ScrollReveal>

          {/* Entries */}
          <div className="grid md:grid-cols-2 gap-4">
            {entries.map((entry, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="glass-card p-5 hover-lift animate-float" style={{ animationDelay: `${i * 0.8}s` }}>
                  <p className="text-sm text-foreground font-body mb-3">"{entry.message}"</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-display font-semibold text-primary">{entry.name}</span>
                    <span className="text-xs text-muted-foreground">{entry.date}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
