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
      className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md"
    >
      <div className="flex items-center justify-between bg-card/85 backdrop-blur-xl border border-border rounded-full px-2 py-2 shadow-2xl shadow-black/40">
        {items.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.href}
              className="relative flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-full"
            >
              {active && (
                <motion.div
                  layoutId="bottom-nav-pill"
                  className="absolute inset-0 bg-foreground/10 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon
                size={18}
                className={`relative z-10 transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] tracking-wide transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
