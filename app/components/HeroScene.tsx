"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Environment, Float, Lightformer, RoundedBox, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function DataNode({ position, hot = false }: { position: [number, number, number]; hot?: boolean }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[hot ? 0.075 : 0.045, 24, 24]} />
        <meshBasicMaterial color={hot ? "#ff6a32" : "#ff2525"} toneMapped={false} />
      </mesh>
      <pointLight color={hot ? "#ff6a32" : "#ff172d"} intensity={hot ? 7 : 3} distance={1.4} />
    </group>
  );
}

function InterfaceLayer({ z, rotation, scale = 1, active = false }: { z: number; rotation: number; scale?: number; active?: boolean }) {
  return (
    <group position={[0, 0, z]} rotation={[0, 0, rotation]} scale={scale}>
      <RoundedBox args={[3.2, 1.72, 0.1]} radius={0.09} smoothness={6}>
        <meshPhysicalMaterial
          color={active ? "#230307" : "#080808"}
          metalness={0.72}
          roughness={0.18}
          transmission={active ? 0.18 : 0.05}
          transparent
          opacity={active ? 0.88 : 0.76}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={2.2}
        />
        <Edges color={active ? "#ff382d" : "#54151a"} threshold={12} />
      </RoundedBox>
      <mesh position={[-0.94, 0.49, 0.075]}>
        <boxGeometry args={[0.88, 0.035, 0.02]} />
        <meshBasicMaterial color={active ? "#ff5335" : "#4d1518"} toneMapped={false} />
      </mesh>
      <mesh position={[-1.13, 0.33, 0.075]}>
        <boxGeometry args={[0.5, 0.025, 0.02]} />
        <meshBasicMaterial color="#552027" />
      </mesh>
      <mesh position={[0.58, -0.02, 0.075]}>
        <planeGeometry args={[1.35, 0.75]} />
        <meshBasicMaterial color={active ? "#33070b" : "#101010"} transparent opacity={0.76} />
      </mesh>
      <mesh position={[0.58, -0.02, 0.08]}>
        <ringGeometry args={[0.22, 0.225, 64]} />
        <meshBasicMaterial color={active ? "#ff332d" : "#612027"} toneMapped={false} />
      </mesh>
    </group>
  );
}

function CoreMark() {
  return (
    <group position={[-0.45, -0.08, 0.92]}>
      <mesh rotation={[0, 0, 0.72]}>
        <boxGeometry args={[1.55, 0.055, 0.055]} />
        <meshBasicMaterial color="#ff3b2f" toneMapped={false} />
      </mesh>
      <mesh rotation={[0, 0, -0.72]}>
        <boxGeometry args={[1.55, 0.055, 0.055]} />
        <meshBasicMaterial color="#ff3b2f" toneMapped={false} />
      </mesh>
      <DataNode position={[0, 0, 0.03]} hot />
    </group>
  );
}

function SystemCore() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.2 - 0.28, 3.2, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -state.pointer.y * 0.12 + 0.18, 3.2, delta);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.08;
  });

  return (
    <Float speed={0.7} rotationIntensity={0.04} floatIntensity={0.12}>
      <group ref={group} rotation={[0.18, -0.28, -0.05]}>
        <InterfaceLayer z={-0.62} rotation={-0.1} scale={0.9} />
        <InterfaceLayer z={-0.2} rotation={0.055} scale={0.96} />
        <InterfaceLayer z={0.25} rotation={-0.035} active />
        <CoreMark />
        <DataNode position={[-1.35, 0.72, 0.55]} />
        <DataNode position={[1.48, -0.56, 0.38]} hot />
        <DataNode position={[1.1, 0.72, -0.1]} />
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 35 }} dpr={[1, 1.8]} gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
      <Environment resolution={128}>
        <Lightformer form="rect" intensity={5} color="#fff0e8" position={[-3, 4, 4]} scale={[4, 1, 1]} />
        <Lightformer form="rect" intensity={6} color="#ff2a20" position={[4, -2, 2]} scale={[1, 5, 1]} />
        <Lightformer form="ring" intensity={3} color="#b50018" position={[0, 0, -4]} scale={4} />
      </Environment>
      <ambientLight intensity={0.08} />
      <spotLight position={[-4, 5, 5]} color="#fff5ef" intensity={50} angle={0.5} penumbra={1} />
      <pointLight position={[3, -2, 3]} color="#ff1d24" intensity={20} distance={8} />
      <SystemCore />
      <Sparkles count={34} scale={[5.4, 4.2, 3]} size={0.65} speed={0.16} color="#ff3930" opacity={0.5} />
    </Canvas>
  );
}
