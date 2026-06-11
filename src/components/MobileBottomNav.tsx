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

export default function MobileBottomNav() {
  const location = useLocation();
  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-xl border border-border/80 rounded-full px-2 py-2 shadow-2xl shadow-black/60">
        {items.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.href}
              aria-label={item.label}
              className="relative w-11 h-11 flex items-center justify-center rounded-full"
            >
              {active && (
                <motion.div
                  layoutId="bottom-nav-pill"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon
                size={18}
                strokeWidth={2}
                className={`relative z-10 transition-colors ${
                  active ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
