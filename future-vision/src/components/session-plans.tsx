"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    label: "Starter Hour",
    price: 499,
    duration: "60 minutes",
    focus: "Perfect for first-timers looking to sample VR, AR, and racing rigs.",
    perks: ["Choose any platform", "Team host assistance", "Highlight reel export"],
    accent: "from-neon-blue/30 via-neon-purple/20 to-transparent",
  },
  {
    label: "Pro Duo",
    price: 899,
    duration: "120 minutes",
    focus:
      "Ideal for coop missions or versus matches with synced soundscapes and pro headsets.",
    perks: [
      "Dedicated lounge pod",
      "Performance analytics overlay",
      "Fuel-up energy drinks",
    ],
    accent: "from-neon-pink/35 via-neon-purple/20 to-transparent",
  },
  {
    label: "Tournament Squad",
    price: 1599,
    duration: "180 minutes",
    focus:
      "Bring your team for scrims with shoutcaster booth access, live scoreboard, and observers.",
    perks: [
      "Reserved esports bay",
      "LAN-grade latency",
      "Coach review session",
    ],
    accent: "from-neon-amber/35 via-neon-blue/25 to-transparent",
  },
];

export function SessionPlans() {
  return (
    <section id="sessions" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-neon-blue">
              Pay-Per-Hour Sessions
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Book A Slot Tailored To Your Playstyle
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Reserve immersive pods with real-time availability. No queueing —
              lock your arena, squad up, and we&apos;ll have gear tuned to your
              loadout when you arrive.
            </p>
          </div>
          <Link
            href="/book"
            className="gradient-button inline-flex items-center justify-center rounded-full px-8 py-3 text-sm uppercase tracking-[0.35em]"
          >
            Schedule Now
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.6)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${plan.accent} opacity-70`}
              />
              <div className="relative">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-slate-200">
                  {plan.duration}
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {plan.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-200/80">
                  {plan.focus}
                </p>
                <p className="mt-6 text-4xl font-semibold text-white">
                  ₹{plan.price}
                </p>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                  per slot
                </p>
                <ul className="mt-8 space-y-3 text-sm text-slate-200/90">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/book"
                className="relative mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-neon-blue transition hover:text-white"
              >
                Reserve
                <span className="h-px w-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
