import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Creative", href: "/creative" },
  { label: "Journal", href: "/blog" },
  { label: "Links", href: "/links" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", click);
    return () => document.removeEventListener("mousedown", click);
  }, []);

  // active index → which bullet gets the dot
  const activeIndex = Math.max(
    0,
    navLinks.findIndex((l) =>
      l.href === "/" ? location.pathname === "/" : location.pathname.startsWith(l.href)
    )
  );
  const dotIndex = activeIndex % 3;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-background/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="text-sm md:text-base font-bold tracking-tight text-foreground">
          A<span className="text-accent">.</span>verse
        </Link>

        {/* Bullet trigger */}
        <div ref={ref} className="relative">
          <motion.button
            onClick={() => setOpen((o) => !o)}
            className="relative h-10 w-12 flex items-end justify-center gap-[5px] pb-1 group"
            aria-label="Menu"
            whileTap={{ scale: 0.92 }}
          >
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative flex flex-col items-center gap-1">
                <motion.span
                  className="block w-[2px] bg-foreground rounded-full"
                  animate={{
                    height: open ? 22 : 14 + (i === 1 ? 4 : 0),
                    opacity: open ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.35, ease: [0.7, 0, 0.3, 1], delay: i * 0.04 }}
                />
                <motion.span
                  className="block w-[5px] h-[5px] rounded-full"
                  animate={{
                    backgroundColor:
                      i === dotIndex && !open
                        ? "hsl(var(--accent))"
                        : "hsl(var(--foreground) / 0.35)",
                    scale: i === dotIndex && !open ? 1.15 : 1,
                  }}
                />
              </div>
            ))}
          </motion.button>

          {/* Dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.7, 0, 0.3, 1] }}
                className="absolute top-full right-0 mt-3 min-w-[180px]"
              >
                <div className="relative rounded-2xl bg-card/90 backdrop-blur-2xl border border-border p-2 shadow-2xl overflow-hidden">
                  {/* gradient sheen */}
                  <div className="pointer-events-none absolute -top-1/2 -right-1/4 w-1/2 h-[200%] bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
                  <ul className="relative flex flex-col">
                    {navLinks.map((link, i) => {
                      const active =
                        link.href === "/"
                          ? location.pathname === "/"
                          : location.pathname.startsWith(link.href);
                      return (
                        <motion.li
                          key={link.label}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 + i * 0.035 }}
                        >
                          <Link
                            to={link.href}
                            className={`flex items-center justify-between gap-6 px-4 py-2.5 rounded-xl text-sm uppercase tracking-[0.18em] transition-colors ${
                              active
                                ? "text-foreground bg-foreground/[0.06]"
                                : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                            }`}
                          >
                            <span className="text-[10px] tabular-nums text-muted-foreground/60">
                              0{i + 1}
                            </span>
                            <span>{link.label}</span>
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                active ? "bg-accent" : "bg-foreground/20"
                              }`}
                            />
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
