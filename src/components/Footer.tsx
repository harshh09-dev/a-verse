import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif italic text-sm text-muted-foreground">A-VERSE</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/A-verse" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/anjalikamal-ak3105/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={16} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anjali Kamal
        </p>
      </div>
    </footer>
  );
}
