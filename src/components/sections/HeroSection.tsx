import { motion } from "framer-motion";
import { MapPin, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <ThreeHero />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-tighter text-foreground leading-none"
      >
        ANJALI
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-4"
      >
        <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
          I design and build scalable systems that
        </p>
        <p className="font-serif italic text-2xl md:text-4xl gradient-text">
          solve real-world problems.
        </p>
      </motion.div>

      {/* Bottom badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-6 md:left-10 flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider"
      >
        <MapPin size={14} className="text-pink-400" />
        <span>Based in Jaipur, India</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 right-6 md:right-10 flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider"
      >
        <Code2 size={14} className="text-muted-foreground" />
        <span>Full Stack Dev, & AI Engineer</span>
      </motion.div>
    </section>
  );
}

/* Inline Three.js hero to keep it minimal */
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingParticles() {
  const count = 40;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() =>
    Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 10] as [number, number, number],
      speed: 0.1 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
      scale: 0.01 + Math.random() * 0.03,
    })),
  []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      const t = clock.elapsedTime * p.speed + p.offset;
      dummy.position.set(p.position[0] + Math.sin(t) * 0.3, p.position[1] + Math.cos(t * 0.7) * 0.3, p.position[2]);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
    </instancedMesh>
  );
}

function ThreeHero() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} style={{ background: "transparent" }}>
      <Stars radius={60} depth={50} count={600} factor={2} saturation={0} fade speed={0.3} />
      <FloatingParticles />
    </Canvas>
  );
}
