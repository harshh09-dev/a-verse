import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;
    let raf = 0;
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 noise-overlay pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative text-center px-8"
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-[18vw] md:text-[10vw] font-black leading-none tracking-tighter text-foreground"
              >
                AK<span className="text-accent">.</span>verse
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground"
            >
              Designing experiences
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-3 text-xs italic font-serif text-muted-foreground/70"
            >
              wait — something aesthetic is loading
            </motion.p>

            <div className="mt-10 h-px w-64 max-w-full mx-auto bg-border overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent via-yellow-500 to-pink-400 origin-left"
                style={{ scaleX: progress }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
