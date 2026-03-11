import ScrollReveal from "@/components/ScrollReveal";
import { Send } from "lucide-react";
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
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="section-label text-center">Get in touch</p>
          <h2 className="section-heading text-center mb-4">
            Let's Build{" "}
            <span className="font-serif italic gradient-text">Something Together</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            If you have a project idea, collaboration opportunity, or just want to say hello — feel free to reach out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground min-h-[120px]"
              required
            />
            <Button
              type="submit"
              className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full"
            >
              <Send size={14} />
              Send Message
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
