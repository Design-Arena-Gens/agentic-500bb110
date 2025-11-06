"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  GiVirtualMarker,
  GiConsoleController,
  GiCube,
  GiRetroController,
} from "react-icons/gi";
import { PiHeadsetBold } from "react-icons/pi";

type Experience = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

const experiences: Experience[] = [
  {
    title: "Immersive VR Arenas",
    description:
      "Walk, sprint, and teleport through multi-storey VR playgrounds with dynamic haptics and 360º tracking.",
    highlight: "Full-body tracking",
    icon: GiVirtualMarker,
  },
  {
    title: "Elite Console Lounge",
    description:
      "Battle on the latest PS5 and Xbox Series X titles, synced with 240Hz QLED panels and 7.1 surround.",
    highlight: "Zero lag pods",
    icon: GiConsoleController,
  },
  {
    title: "Meta & AR Stations",
    description:
      "Shift seamlessly between realities with exclusive Meta Quest experiences and mixed reality collabs.",
    highlight: "AR collabs",
    icon: GiCube,
  },
  {
    title: "Esports-Ready PC Bay",
    description:
      "Top-tier PCs tuned for competitive play with RTX 4090 GPUs, custom cooling, and pro-grade peripherals.",
    highlight: "240 FPS guarantee",
    icon: GiRetroController,
  },
  {
    title: "Signature Gear Bar",
    description:
      "Curated accessories and limited drops — from RGB flight sticks to pro controllers and neon merch.",
    highlight: "Limited drops",
    icon: PiHeadsetBold,
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-neon-blue">
            Uttar Pradesh&apos;s Most Advanced
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Experiences Engineered for the Future
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Whether you&apos;re a pro gamer, a VR explorer, or planning an epic
            squad night, Future Vision unlocks every dimension of play with
            tuned pods, custom lighting, and pro-grade staff.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-neon-blue/20 via-neon-purple/10 to-transparent" />
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 text-neon-blue shadow-[0_0_25px_rgba(54,208,255,0.25)]">
                  <Icon size={24} />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-300">
                  {experience.description}
                </p>
                <div className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-neon-purple">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
                  {experience.highlight}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
