import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "BLOGS", href: "/blog", isRoute: true },
];

const moreLinks = [
  { label: "Creative Corner", href: "/creative", isRoute: true },
  { label: "Signature Book", href: "/signature-book", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setMoreOpen(false);
    if (href.startsWith("#") && isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif italic text-lg font-semibold text-foreground tracking-wide">
          A-VERSE
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <div className="pill-nav flex items-center gap-1">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs font-medium px-4 py-1.5 rounded-full text-secondary-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium px-4 py-1.5 rounded-full text-secondary-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                  {link.label}
                </a>
              )
            )}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="text-xs font-medium px-4 py-1.5 rounded-full text-secondary-foreground hover:text-foreground hover:bg-muted transition-all flex items-center gap-1"
              >
                More
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}>
                  <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-xl py-2 min-w-[180px] shadow-2xl">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-xs text-secondary-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link
            to="#"
            className="ml-2 text-xs font-medium px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            RESUME
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-3">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="block text-sm text-secondary-foreground hover:text-foreground">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={isHome ? link.href : `/${link.href}`} onClick={() => handleNavClick(link.href)} className="block text-sm text-secondary-foreground hover:text-foreground">
                {link.label}
              </a>
            )
          )}
          {moreLinks.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="block text-sm text-secondary-foreground hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <span className="text-xs font-medium px-5 py-2 rounded-full bg-foreground text-background inline-block">
              RESUME
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
