"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/* ────────────────────────────────────────────────
 *  Procedural 3D Robot Avatar
 *  A sleek, futuristic robot with glowing accents,
 *  visor eyes, antenna, and mechanical joints.
 * ──────────────────────────────────────────────── */

const METAL_MAIN = "#e8ecf0";       // bright silver body
const METAL_DARK = "#b0b8c4";       // darker panel accents
const METAL_FRAME = "#2d3748";      // dark frame / skeleton
const ACCENT = "#4f86c6";           // signature blue glow
const ACCENT_TEAL = "#2f8f84";      // teal accent
const ACCENT_PURPLE = "#7d67c7";    // purple accent
const JOINT_COLOR = "#4a5568";      // joint ball color
const VISOR_COLOR = "#0ea5e9";      // bright cyan visor
const GLOW_INTENSITY = 0.6;

/* ═══════════════  ANTENNA  ═══════════════ */
function Antenna() {
  const ballRef = useRef();

  useFrame((state) => {
    if (!ballRef.current) return;
    const t = state.clock.getElapsedTime();
    ballRef.current.material.emissiveIntensity = 0.4 + Math.sin(t * 3) * 0.4;
  });

  return (
    <group position={[0, 0.72, 0]}>
      {/* Antenna rod */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.008, 0.012, 0.16, 8]} />
        <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Glowing ball on top */}
      <mesh ref={ballRef} position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════  ROBOT HEAD  ═══════════════ */
function RobotHead() {
  const visorRef = useRef();

  useFrame((state) => {
    if (!visorRef.current) return;
    const t = state.clock.getElapsedTime();
    visorRef.current.material.emissiveIntensity = 0.5 + Math.sin(t * 2) * 0.2;
  });

  return (
    <group position={[0, 0.28, 0]}>
      {/* Main head – rounded box shape */}
      <mesh scale={[1, 1.05, 0.9]}>
        <boxGeometry args={[0.52, 0.48, 0.45, 4, 4, 4]} />
        <meshStandardMaterial color={METAL_MAIN} metalness={0.7} roughness={0.25} />
      </mesh>

      {/* Head top dome */}
      <mesh position={[0, 0.24, 0]} scale={[1, 0.5, 0.9]}>
        <sphereGeometry args={[0.26, 24, 16]} />
        <meshStandardMaterial color={METAL_MAIN} metalness={0.7} roughness={0.25} />
      </mesh>

      {/* Visor / eye strip – the main glowing element */}
      <mesh ref={visorRef} position={[0, 0.04, 0.23]} scale={[1, 0.5, 1]}>
        <boxGeometry args={[0.42, 0.1, 0.02, 4, 2, 1]} />
        <meshStandardMaterial
          color={VISOR_COLOR}
          emissive={VISOR_COLOR}
          emissiveIntensity={0.6}
          metalness={0.4}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Visor frame */}
      <mesh position={[0, 0.04, 0.22]}>
        <boxGeometry args={[0.46, 0.13, 0.015]} />
        <meshStandardMaterial color={METAL_FRAME} metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Left eye glow dot */}
      <mesh position={[-0.1, 0.04, 0.245]}>
        <sphereGeometry args={[0.022, 10, 10]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.8}
        />
      </mesh>
      {/* Right eye glow dot */}
      <mesh position={[0.1, 0.04, 0.245]}>
        <sphereGeometry args={[0.022, 10, 10]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Mouth grille */}
      <mesh position={[0, -0.12, 0.22]}>
        <boxGeometry args={[0.18, 0.06, 0.015]} />
        <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Mouth grille lines */}
      {[-0.06, -0.02, 0.02, 0.06].map((x, i) => (
        <mesh key={i} position={[x, -0.12, 0.23]}>
          <boxGeometry args={[0.008, 0.05, 0.005]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Side head panels */}
      <mesh position={[-0.27, 0.02, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.14, 12]} />
        <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.27, 0.02, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.14, 12]} />
        <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Forehead accent line */}
      <mesh position={[0, 0.2, 0.2]}>
        <boxGeometry args={[0.22, 0.015, 0.01]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.4}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════  NECK  ═══════════════ */
function RobotNeck() {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Central neck cylinder */}
      <mesh>
        <cylinderGeometry args={[0.07, 0.1, 0.12, 12]} />
        <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Neck ring accent */}
      <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.085, 0.012, 8, 20]} />
        <meshStandardMaterial
          color={ACCENT_TEAL}
          emissive={ACCENT_TEAL}
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════  TORSO  ═══════════════ */
function RobotTorso() {
  const coreRef = useRef();

  useFrame((state) => {
    if (!coreRef.current) return;
    const t = state.clock.getElapsedTime();
    coreRef.current.material.emissiveIntensity = 0.3 + Math.sin(t * 1.5) * 0.2;
  });

  return (
    <group position={[0, -0.42, 0]}>
      {/* Main chest plate */}
      <mesh scale={[1, 1, 0.7]}>
        <boxGeometry args={[0.52, 0.55, 0.38, 3, 3, 3]} />
        <meshStandardMaterial color={METAL_MAIN} metalness={0.65} roughness={0.28} />
      </mesh>

      {/* Chest top bevel */}
      <mesh position={[0, 0.28, 0]} scale={[1, 0.3, 0.7]}>
        <sphereGeometry args={[0.26, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color={METAL_MAIN} metalness={0.65} roughness={0.28} />
      </mesh>

      {/* Center core reactor – glowing circle */}
      <mesh ref={coreRef} position={[0, 0.06, 0.145]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 20]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.5}
          metalness={0.5}
          roughness={0.15}
        />
      </mesh>
      {/* Core ring */}
      <mesh position={[0, 0.06, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.075, 0.008, 8, 24]} />
        <meshStandardMaterial color={METAL_FRAME} metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Chest panel lines */}
      <mesh position={[0, -0.06, 0.14]}>
        <boxGeometry args={[0.35, 0.008, 0.008]} />
        <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.14, 0.14]}>
        <boxGeometry args={[0.30, 0.008, 0.008]} />
        <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Bottom abdomen – darker plate */}
      <mesh position={[0, -0.3, 0]} scale={[0.85, 0.4, 0.65]}>
        <boxGeometry args={[0.48, 0.18, 0.34]} />
        <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.25} />
      </mesh>

      {/* Shoulder joints (the ball connectors) */}
      <mesh position={[-0.3, 0.2, 0]}>
        <sphereGeometry args={[0.06, 14, 14]} />
        <meshStandardMaterial color={JOINT_COLOR} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, 0.2, 0]}>
        <sphereGeometry args={[0.06, 14, 14]} />
        <meshStandardMaterial color={JOINT_COLOR} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Code symbol on chest */}
      <mesh position={[0.14, 0.18, 0.145]}>
        <boxGeometry args={[0.07, 0.025, 0.008]} />
        <meshStandardMaterial
          color={ACCENT_PURPLE}
          emissive={ACCENT_PURPLE}
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════  ROBOT ARMS  ═══════════════ */
function RobotArms() {
  return (
    <group>
      {/* ═══ LEFT ARM ═══ */}
      <group position={[-0.34, -0.28, 0]}>
        {/* Upper arm */}
        <mesh position={[-0.02, -0.12, 0]} rotation={[0, 0, 0.12]}>
          <capsuleGeometry args={[0.045, 0.2, 8, 14]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.25} />
        </mesh>
        {/* Upper arm detail strip */}
        <mesh position={[-0.04, -0.12, 0.05]} rotation={[0, 0, 0.12]}>
          <boxGeometry args={[0.015, 0.18, 0.005]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.25}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Elbow joint */}
        <mesh position={[-0.06, -0.28, 0.01]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
        </mesh>

        {/* Forearm */}
        <mesh position={[-0.08, -0.42, 0.03]} rotation={[0.1, 0, 0.04]}>
          <capsuleGeometry args={[0.04, 0.18, 8, 14]} />
          <meshStandardMaterial color={METAL_MAIN} metalness={0.7} roughness={0.25} />
        </mesh>

        {/* Wrist joint */}
        <mesh position={[-0.09, -0.56, 0.04]}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
        </mesh>

        {/* Hand – robotic claw/block */}
        <mesh position={[-0.09, -0.63, 0.05]} scale={[0.8, 0.9, 0.6]}>
          <boxGeometry args={[0.08, 0.07, 0.06]} />
          <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Finger segments */}
        <mesh position={[-0.1, -0.69, 0.05]} scale={[0.5, 0.4, 0.4]}>
          <boxGeometry args={[0.08, 0.05, 0.05]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-0.075, -0.69, 0.05]} scale={[0.5, 0.4, 0.4]}>
          <boxGeometry args={[0.08, 0.05, 0.05]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* ═══ RIGHT ARM ═══ */}
      <group position={[0.34, -0.28, 0]}>
        {/* Upper arm */}
        <mesh position={[0.02, -0.12, 0]} rotation={[0, 0, -0.12]}>
          <capsuleGeometry args={[0.045, 0.2, 8, 14]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.25} />
        </mesh>
        {/* Upper arm detail strip */}
        <mesh position={[0.04, -0.12, 0.05]} rotation={[0, 0, -0.12]}>
          <boxGeometry args={[0.015, 0.18, 0.005]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.25}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Elbow joint */}
        <mesh position={[0.06, -0.28, 0.01]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
        </mesh>

        {/* Forearm */}
        <mesh position={[0.08, -0.42, 0.03]} rotation={[0.1, 0, -0.04]}>
          <capsuleGeometry args={[0.04, 0.18, 8, 14]} />
          <meshStandardMaterial color={METAL_MAIN} metalness={0.7} roughness={0.25} />
        </mesh>

        {/* Wrist joint */}
        <mesh position={[0.09, -0.56, 0.04]}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
        </mesh>

        {/* Hand */}
        <mesh position={[0.09, -0.63, 0.05]} scale={[0.8, 0.9, 0.6]}>
          <boxGeometry args={[0.08, 0.07, 0.06]} />
          <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Finger segments */}
        <mesh position={[0.075, -0.69, 0.05]} scale={[0.5, 0.4, 0.4]}>
          <boxGeometry args={[0.08, 0.05, 0.05]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.1, -0.69, 0.05]} scale={[0.5, 0.4, 0.4]}>
          <boxGeometry args={[0.08, 0.05, 0.05]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

/* ═══════════════  ROBOT LEGS  ═══════════════ */
function RobotLegs() {
  return (
    <group>
      {/* ═══ LEFT LEG ═══ */}
      {/* Hip joint */}
      <mesh position={[-0.1, -0.8, 0]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Upper leg */}
      <mesh position={[-0.1, -0.96, 0]}>
        <capsuleGeometry args={[0.055, 0.2, 8, 14]} />
        <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Knee joint */}
      <mesh position={[-0.1, -1.1, 0.01]}>
        <sphereGeometry args={[0.048, 12, 12]} />
        <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Knee accent */}
      <mesh position={[-0.1, -1.1, 0.05]}>
        <cylinderGeometry args={[0.02, 0.02, 0.015, 10]} />
        <meshStandardMaterial
          color={ACCENT_TEAL}
          emissive={ACCENT_TEAL}
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      {/* Lower leg */}
      <mesh position={[-0.1, -1.24, 0]}>
        <capsuleGeometry args={[0.048, 0.2, 8, 14]} />
        <meshStandardMaterial color={METAL_MAIN} metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Leg detail strip */}
      <mesh position={[-0.1, -1.24, 0.05]}>
        <boxGeometry args={[0.012, 0.18, 0.005]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.2}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      {/* ═══ RIGHT LEG ═══ */}
      {/* Hip joint */}
      <mesh position={[0.1, -0.8, 0]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Upper leg */}
      <mesh position={[0.1, -0.96, 0]}>
        <capsuleGeometry args={[0.055, 0.2, 8, 14]} />
        <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Knee joint */}
      <mesh position={[0.1, -1.1, 0.01]}>
        <sphereGeometry args={[0.048, 12, 12]} />
        <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Knee accent */}
      <mesh position={[0.1, -1.1, 0.05]}>
        <cylinderGeometry args={[0.02, 0.02, 0.015, 10]} />
        <meshStandardMaterial
          color={ACCENT_TEAL}
          emissive={ACCENT_TEAL}
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      {/* Lower leg */}
      <mesh position={[0.1, -1.24, 0]}>
        <capsuleGeometry args={[0.048, 0.2, 8, 14]} />
        <meshStandardMaterial color={METAL_MAIN} metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Leg detail strip */}
      <mesh position={[0.1, -1.24, 0.05]}>
        <boxGeometry args={[0.012, 0.18, 0.005]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.2}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════  ROBOT FEET  ═══════════════ */
function RobotFeet() {
  return (
    <group>
      {/* Left foot */}
      <group position={[-0.1, -1.42, 0.02]}>
        {/* Foot body */}
        <mesh scale={[1, 0.6, 1.3]}>
          <boxGeometry args={[0.11, 0.06, 0.16]} />
          <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Sole plate */}
        <mesh position={[0, -0.023, 0]}>
          <boxGeometry args={[0.12, 0.012, 0.2]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Toe accent */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[0.08, 0.02, 0.02]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.2}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
        {/* Ankle connector */}
        <mesh position={[0, 0.04, -0.02]}>
          <sphereGeometry args={[0.03, 10, 10]} />
          <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
        </mesh>
      </group>

      {/* Right foot */}
      <group position={[0.1, -1.42, 0.02]}>
        <mesh scale={[1, 0.6, 1.3]}>
          <boxGeometry args={[0.11, 0.06, 0.16]} />
          <meshStandardMaterial color={METAL_FRAME} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.023, 0]}>
          <boxGeometry args={[0.12, 0.012, 0.2]} />
          <meshStandardMaterial color={METAL_DARK} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[0.08, 0.02, 0.02]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.2}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, 0.04, -0.02]}>
          <sphereGeometry args={[0.03, 10, 10]} />
          <meshStandardMaterial color={JOINT_COLOR} metalness={0.85} roughness={0.15} />
        </mesh>
      </group>
    </group>
  );
}

/* ═══════════════  MAIN 3D ROBOT AVATAR  ═══════════════ */
export default function Avatar3DModel({ scrollProgress = 0 }) {
  const groupRef = useRef();

  /* Idle sway animation + scroll rotation */
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Scroll-driven Y rotation
    const scrollRotation = scrollProgress * Math.PI * 2;
    // Idle sway
    const idleSway = Math.sin(t * 0.5) * 0.025;
    groupRef.current.rotation.y = scrollRotation + idleSway;

    // Subtle floating hover
    groupRef.current.position.y = -0.1 + Math.sin(t * 0.7) * 0.04;
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]} scale={1.65}>
      <Antenna />
      <RobotHead />
      <RobotNeck />
      <RobotTorso />
      <RobotArms />
      <RobotLegs />
      <RobotFeet />

      {/* Ground shadow disc */}
      <mesh position={[0, -1.47, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial
          color="#000"
          transparent
          opacity={0.1}
          roughness={1}
        />
      </mesh>
    </group>
  );
}
