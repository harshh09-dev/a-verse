import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("akverse-loaded");
    if (seen) {
      setDone(true);
      return;
    }
    const start = Date.now();
    const duration = 1600;
    const id = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => {
          sessionStorage.setItem("akverse-loaded", "1");
          setDone(true);
        }, 250);
      }
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <div className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              AK<span className="text-accent">4</span>U
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-xs md:text-sm text-muted-foreground font-serif italic"
            >
              Wait… something aesthetic is loading
            </motion.p>
          </motion.div>

          <div className="mt-10 w-48 md:w-64 h-px bg-border overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground tracking-[0.3em]">
            {Math.floor(progress).toString().padStart(2, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
