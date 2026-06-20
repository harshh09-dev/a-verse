import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.7, 0, 0.3, 1] as const;

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}
