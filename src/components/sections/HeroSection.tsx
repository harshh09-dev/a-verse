import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import heroBg from "@/assets/hero-bg.jpg";

function FloatingParticles() {
  const count = 50;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 15,
        ] as [number, number, number],
        speed: 0.08 + Math.random() * 0.2,
        offset: Math.random() * Math.PI * 2,
        scale: 0.008 + Math.random() * 0.025,
      })),
    []
  );

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      const t = clock.elapsedTime * p.speed + p.offset;
      dummy.position.set(
        p.position[0] + Math.sin(t) * 0.4,
        p.position[1] + Math.cos(t * 0.6) * 0.4,
        p.position[2]
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#f97316" transparent opacity={0.08} />
    </instancedMesh>
  );
}

function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <Stars radius={80} depth={60} count={400} factor={2} saturation={0} fade speed={0.2} />
      <FloatingParticles />
    </Canvas>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-28 md:pt-32 pb-20 md:pb-24 px-5 sm:px-8 md:px-14 lg:px-24">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />

      {/* 3D Background */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <ThreeBackground />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Available for freelance work
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-[clamp(3.5rem,14vw,8rem)] md:text-[clamp(5rem,10vw,11rem)] lg:text-[clamp(6rem,9vw,13rem)] font-black leading-[0.88] tracking-[-0.04em] text-foreground mb-6">
            ANJALI
            <br />
            <span className="text-muted-foreground">KAMAL</span>
          </h1>
        </motion.div>

        {/* Subtitle + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="max-w-md">
            <p className="text-sm md:text-base text-secondary-foreground leading-relaxed mb-6">
              Designer, developer & creative technologist crafting{" "}
              <span className="text-foreground font-medium">digital experiences</span> that feel like poetry.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View Work <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-6 text-right">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Specializing in</p>
              <p className="text-sm text-foreground">UI/UX · Full Stack · Photography</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Based in</p>
              <p className="text-sm text-foreground">Jaipur, India</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
