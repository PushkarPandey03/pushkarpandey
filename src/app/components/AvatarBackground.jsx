"use client";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Avatar3DModel from "./Avatar3DModel";
import styles from "./AvatarBackground.module.css";

export default function AvatarBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {/* Orbiting particles (CSS, behind the 3D canvas) */}
      <div className={styles.particleRing}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              "--angle": `${i * 30}deg`,
              "--delay": `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Three.js Canvas – transparent background, positioned right */}
      <Canvas
        className={styles.canvas}
        camera={{ position: [0, 0.3, 4.2], fov: 38 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        {/* Lighting rig */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.4}
          color="#e8f0ff"
          castShadow={false}
        />
        <directionalLight
          position={[-3, 3, -2]}
          intensity={0.6}
          color="#a0c8ff"
        />
        <pointLight position={[0, -1, 3]} intensity={0.4} color="#c8e6ff" />
        <pointLight position={[0, 2, -2]} intensity={0.3} color="#7d67c7" />

        {/* Subtle environment reflection */}
        <Suspense fallback={null}>
          <Environment preset="city" background={false} />
        </Suspense>

        {/* The 3D Avatar */}
        <Avatar3DModel scrollProgress={scrollProgress} />
      </Canvas>

      {/* Ambient glow circle behind avatar */}
      <div className={styles.ambientGlow} />
    </div>
  );
}
