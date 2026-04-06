import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Creative", href: "/creative" },
  { label: "About", href: "/about" },
  { label: "Signature Book", href: "/signature-book" },
  { label: "Links", href: "/links" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/A-verse", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anjalikamal-ak3105/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/anjalikamal3105", label: "Instagram" },
  { icon: Mail, href: "mailto:anjalikamal3105@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-xl font-bold text-foreground mb-3">
              A<span className="text-accent">.</span>verse
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designing visuals that feel like poetry.
            </p>
          </div>

          <div>
            <p className="text-xs text-accent uppercase tracking-widest mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-accent uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anjali Kamal. Crafted with intention.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, Three.js & lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
