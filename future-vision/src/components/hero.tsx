"use client";

import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Mesh } from "three";

function NeonCore() {
  const ring = useRef<Mesh>(null);
  const inner = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (ring.current) {
      ring.current.rotation.z = clock.getElapsedTime() * 0.25;
      ring.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.45) * 0.4;
    }
    if (inner.current) {
      inner.current.rotation.y = clock.getElapsedTime() * -0.5;
    }
  });

  return (
    <group>
      <mesh ref={ring} scale={[2.8, 2.8, 2.8]}>
        <torusGeometry args={[1, 0.22, 32, 100]} />
        <meshStandardMaterial
          emissive="#36d0ff"
          emissiveIntensity={2.4}
          color="#0f2333"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
      <mesh ref={inner} scale={[1.5, 1.5, 1.5]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          emissive="#ff3cf6"
          emissiveIntensity={1.4}
          color="#1b0826"
          metalness={1}
          roughness={0.1}
        />
      </mesh>
      <Float floatIntensity={1.5} rotationIntensity={0.3}>
        <mesh position={[1.2, 0.8, -0.3]} scale={0.4}>
          <sphereGeometry args={[1, 42, 42]} />
          <meshStandardMaterial
            emissive="#a971ff"
            emissiveIntensity={2.1}
            color="#090b1b"
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
        <mesh position={[-1.4, -0.9, 0.6]} scale={0.35}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            emissive="#36d0ff"
            emissiveIntensity={1.8}
            color="#041934"
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-24 lg:pt-32">
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
          <color attach="background" args={["#03010f"]} />
          <ambientLight intensity={1.1} />
          <pointLight position={[4, 4, 4]} intensity={1.8} color="#36d0ff" />
          <pointLight position={[-6, -3, -4]} intensity={1.4} color="#ff3cf6" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <NeonCore />
        </Canvas>
      </div>
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel p-8 sm:p-12"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-neon-blue">
            Welcome to Sanjay Place, Agra
          </p>
          <h1 className="glow-text text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Future Vision{" "}
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Gaming Zone
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            Step into Uttar Pradesh’s most advanced arena for VR, AR, PS5, Xbox,
            PC, and Meta gaming. Glide through neon-drenched worlds, compete in
            live tournaments, and book immersive pay-per-hour sessions all in
            one futuristic hub.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/book" className="gradient-button rounded-full px-8 py-3">
              Reserve A Session
            </Link>
            <Link
              href="#shop"
              className="rounded-full border border-white/20 px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-100 transition hover:border-neon-blue/60 hover:text-white"
            >
              Shop Accessories
            </Link>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Experience pods", value: "18+" },
              { label: "Live tournaments", value: "Weekly" },
              { label: "Happy gamers", value: "24K+" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  {item.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden aspect-square items-center justify-center lg:flex"
        >
          <div className="neon-ring glass-panel grid-overlay inline-flex h-full w-full items-center justify-center overflow-hidden">
            <div className="relative flex h-[75%] w-[75%] items-center justify-center rounded-[3rem] bg-gradient-to-br from-white/10 via-neon-purple/10 to-transparent">
              <div className="absolute -left-6 top-20 h-20 w-20 rounded-full bg-gradient-to-br from-neon-blue/60 to-transparent blur-2xl" />
              <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-neon-pink/50 to-transparent blur-2xl" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                className="h-32 w-32 rounded-[2rem] border border-white/10"
              />
              <div className="relative z-10 text-center">
                <p className="text-sm uppercase tracking-[0.5em] text-slate-200/70">
                  Explore
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Immersive Worlds
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
