import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const journey = [
  {
    year: "2026",
    title: "Web Developer — FABRO",
    description: "Delivered a scalable e-commerce platform showcasing Indian embroidery through high-impact visual storytelling.",
  },
  {
    year: "2025",
    title: "Software Developer — JMRC",
    description: "Developed voice detection modules and contributed to a smart complaint portal for metro operations.",
  },
  {
    year: "2024–25",
    title: "Core Committee — APS, IIIT Jabalpur",
    description: "Organized technical workshops, coding sessions, and STEM engagement activities for the student community.",
  },
  {
    year: "2024",
    title: "Open Source Contributor — GSSoC",
    description: "Contributed feature enhancements and bug fixes to production-level open-source repositories.",
  },
  {
    year: "2023",
    title: "Started B.Tech — IIIT Jabalpur",
    description: "Began the journey into computer science, discovering a passion for building structured, scalable systems.",
  },
];

const interests = [
  "Photography", "Visual Storytelling", "Creative Writing",
  "System Design", "AI & Data Science", "Music",
  "Typography", "Open Source", "IoT",
];

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <div className="pt-28 md:pt-36 section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <ScrollReveal>
            <p className="section-label">About</p>
            <h1 className="page-heading mb-10">
              Not your typical{" "}
              <span className="font-serif italic gradient-text">developer bio</span>
            </h1>
          </ScrollReveal>


          {/* Story */}
          <div className="grid md:grid-cols-5 gap-12 mb-24">
            <ScrollReveal className="md:col-span-3">
              <div className="space-y-5 text-sm text-secondary-foreground leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-medium">Anjali Kamal</span> — a builder at heart, 
                  currently pursuing B.Tech at IIIT Jabalpur. I don't just write code; I craft experiences 
                  that bridge the gap between engineering precision and creative expression.
                </p>
                <p>
                  My journey started with curiosity — taking apart how things work, from embedded systems 
                  to elegant web interfaces. That curiosity evolved into a deep passion for building 
                  full-stack applications, IoT systems, and AI-powered solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me behind a camera capturing golden-hour landscapes, 
                  deconstructing song lyrics, or sketching UI concepts in a notebook. I believe the best 
                  technology feels invisible — it just works, and it makes you feel something.
                </p>
                <p className="text-foreground font-serif italic text-base">
                  "I design systems the way I see the world — with structure, intention, and a touch of poetry."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="md:col-span-2">
              <div className="glass-card overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80"
                  alt="Anjali Kamal"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Journey Timeline */}
          <ScrollReveal>
            <p className="section-label">The Journey</p>
            <h2 className="section-heading mb-16">
              How I got <span className="font-serif italic gradient-text">here</span>
            </h2>
          </ScrollReveal>

          <div ref={timelineRef} className="relative mb-24">
            {/* Timeline track */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
            {/* Animated progress line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 md:left-8 top-0 w-px bg-gradient-to-b from-accent via-yellow-500 to-pink-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]"
            />

            <div className="space-y-12">
              {journey.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative pl-8 md:pl-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-0 md:left-8 top-1.5 w-3 h-3 rounded-full bg-accent -translate-x-[5px] ring-4 ring-background shadow-[0_0_16px_rgba(249,115,22,0.6)]"
                  />
                  <span className="text-xs text-accent uppercase tracking-widest">{item.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary-foreground leading-relaxed max-w-xl">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <ScrollReveal>
            <p className="section-label">Beyond Code</p>
            <h2 className="section-heading mb-10">
              Things I <span className="font-serif italic gradient-text">love</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full border border-border text-sm text-secondary-foreground hover:border-accent/30 hover:text-foreground transition-all cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
}
