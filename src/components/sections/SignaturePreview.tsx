import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const mockEntries = [
  { name: "Rahul", message: "Amazing portfolio! Love the clean design. 🌟", date: "2025-03-01" },
  { name: "Priya", message: "Your creative corner is so inspiring. Keep building!", date: "2025-02-28" },
  { name: "Alex", message: "The 3D elements are beautiful. Great work, Anjali!", date: "2025-02-25" },
  { name: "Sarah", message: "This is one of the most unique portfolios I've seen. Bookmarked!", date: "2025-02-20" },
];

export default function SignaturePreview() {
  const [entries] = useState(mockEntries);

  return (
    <section id="signature" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Visitors</p>
          <h2 className="section-heading mb-4">
            Leave your{" "}
            <span className="font-serif italic gradient-text">signature</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-10">Let me know you were here.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {entries.slice(0, 4).map((entry, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="glass-card p-5 hover-lift">
                <p className="text-sm text-secondary-foreground mb-3">"{entry.message}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{entry.name}</span>
                  <span className="text-xs text-muted-foreground">{entry.date}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
