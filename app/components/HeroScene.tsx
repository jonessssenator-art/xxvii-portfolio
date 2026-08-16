"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Form(){const mesh=useRef<THREE.Mesh>(null);useFrame((state,delta)=>{if(mesh.current){mesh.current.rotation.y+=delta*.12;mesh.current.rotation.x=Math.sin(state.clock.elapsedTime*.28)*.18}});return <Float speed={1.2} rotationIntensity={.35} floatIntensity={.7}><mesh ref={mesh} scale={2.15}><icosahedronGeometry args={[1,7]}/><MeshDistortMaterial color="#e60b20" emissive="#a70016" emissiveIntensity={1.3} roughness={.12} metalness={.25} distort={.48} speed={1.4} transparent opacity={.93}/></mesh><mesh scale={2.38}><torusGeometry args={[1,.008,8,180]}/><meshBasicMaterial color="#ff4a3d" transparent opacity={.45}/></mesh></Float>}
export default function HeroScene(){return <Canvas camera={{position:[0,0,6.3],fov:40}} dpr={[1,1.7]} gl={{alpha:true,antialias:true}}><ambientLight intensity={.25}/><pointLight position={[-3,3,4]} color="#ff9a80" intensity={22}/><pointLight position={[4,-2,2]} color="#ff001f" intensity={16}/><Form/><Sparkles count={74} scale={6.5} size={1.6} speed={.35} color="#ff342b"/></Canvas>}
