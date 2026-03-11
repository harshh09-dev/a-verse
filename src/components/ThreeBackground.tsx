import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WarmParticles() {
  const count = 60;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      scale: 0.02 + Math.random() * 0.04,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      const t = clock.elapsedTime * p.speed + p.offset;
      dummy.position.set(
        p.position[0] + Math.sin(t) * 0.5,
        p.position[1] + Math.cos(t * 0.7) * 0.5,
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
      <meshBasicMaterial color="#d4a44a" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function FloatingShape({ position, color, size }: { position: [number, number, number]; color: string; size: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.15;
    ref.current.rotation.y = clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.15} wireframe />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#d4a44a" />
        <Stars radius={50} depth={40} count={800} factor={2} saturation={0.2} fade speed={0.5} />
        <WarmParticles />
        <FloatingShape position={[-4, 2, -3]} color="#d4a44a" size={1.2} />
        <FloatingShape position={[4, -2, -4]} color="#c87533" size={0.8} />
        <FloatingShape position={[0, 3, -5]} color="#e8b04a" size={0.6} />
        <FloatingShape position={[-3, -3, -2]} color="#b8860b" size={0.5} />
      </Canvas>
    </div>
  );
}
