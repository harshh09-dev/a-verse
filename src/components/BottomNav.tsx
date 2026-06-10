import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Sparkles, User, Mail } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Work", href: "/projects", icon: Briefcase },
  { label: "Creative", href: "/creative", icon: Sparkles },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="md:hidden fixed bottom-3 left-3 right-3 z-40"
    >
      <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-2 py-2 flex items-center justify-between shadow-2xl">
        {items.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              to={href}
              className="relative flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl"
            >
              {active && (
                <motion.div
                  layoutId="bottom-nav-pill"
                  className="absolute inset-0 bg-muted rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                size={18}
                className={`relative z-10 ${active ? "text-accent" : "text-muted-foreground"}`}
              />
              <span
                className={`relative z-10 text-[10px] tracking-wide ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
