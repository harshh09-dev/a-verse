import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm text-primary tracking-widest uppercase mb-4 font-body">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Build <span className="gold-gradient">Something Together</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              If you have a project idea, collaboration opportunity, or just want to say hello — feel free to reach out.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary border-border"
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary border-border"
                required
              />
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-secondary border-border min-h-[120px]"
                required
              />
              <Button type="submit" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-3">Get in touch</h3>
                <div className="space-y-3 text-sm text-muted-foreground font-body">
                  <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail size={16} />
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-3">Social</h3>
                <div className="space-y-2 text-sm font-body">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">GitHub →</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">LinkedIn →</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">Instagram →</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
