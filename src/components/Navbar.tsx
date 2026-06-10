import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  {
    label: "Creative",
    href: "/creative",
    children: [
      { label: "Photography", href: "/creative/photography" },
      { label: "Writing", href: "/creative/writing" },
      { label: "UI Experiments", href: "/creative/experiments" },
    ],
  },
  {
    label: "More",
    href: "/links",
    children: [
      { label: "Journal", href: "/blog" },
      { label: "Signature Book", href: "/signature-book" },
      { label: "Links", href: "/links" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-foreground tracking-tight">
              A<span className="text-accent">.</span>verse
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={openMenu === link.label ? dropdownRef : undefined}>
                  <button
                    onClick={() => setOpenMenu(openMenu === link.label ? null : link.label)}
                    className={`text-sm transition-colors duration-300 flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${openMenu === link.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-52 bg-card/95 backdrop-blur-xl border border-border rounded-xl p-2 shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === child.href
                                ? "text-foreground bg-muted"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/A-verse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2.5 px-5"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.children ? (
                    <div>
                      <button
                        onClick={() => setMobileOpenMenu(mobileOpenMenu === link.label ? null : link.label)}
                        className={`text-3xl font-bold tracking-tight flex items-center gap-2 ${
                          isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                        <ChevronDown size={20} className={`transition-transform ${mobileOpenMenu === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOpenMenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-4 mt-3 space-y-3"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className={`block text-lg ${
                                  location.pathname === child.href ? "text-foreground" : "text-muted-foreground"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-3xl font-bold tracking-tight ${
                        isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-12 flex gap-4">
              <a href="https://github.com/A-verse" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/anjalikamal-ak3105/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
