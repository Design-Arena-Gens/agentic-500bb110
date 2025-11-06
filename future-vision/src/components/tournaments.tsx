"use client";

import { motion } from "framer-motion";

const tournaments = [
  {
    title: "Neon Circuit: Valorant Weekly",
    prize: "₹50,000 pool",
    schedule: "Fridays · 7 PM Onward",
    details:
      "5v5 double elimination with shoutcasters, analyst desk, and live stream overlays.",
  },
  {
    title: "Future Drift Racing Cup",
    prize: "₹30,000 + Sponsor Swag",
    schedule: "Saturdays · 5 PM",
    details:
      "Sim rigs tuned with force feedback, dynamic weather, and AR leaderboards.",
  },
  {
    title: "Meta Quest Showdown",
    prize: "₹20,000 + Gear Packs",
    schedule: "Sundays · 3 PM",
    details:
      "Mixed reality mini games with local spectators beamed into XR display walls.",
  },
];

export function Tournaments() {
  return (
    <section id="tournaments" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/10" />
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-neon-blue">
              Live Arena
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Weekly Neon Tournaments &amp; Leaderboards
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Sign up solo or bring your entire squad. We broadcast every match,
              sync stats to the wall displays, and drop match analytics to your
              inbox post-game.
            </p>
          </div>
          <a
            href="https://wa.me/917055008186?text=I%20want%20to%20register%20for%20Future%20Vision%20tournaments"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.35em] text-slate-200 transition hover:border-neon-pink/60 hover:text-white"
          >
            Register On WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tournaments.map((tournament, index) => (
            <motion.article
              key={tournament.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel relative h-full overflow-hidden p-6"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-40" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.35em] text-neon-blue">
                  {tournament.schedule}
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neon-purple">
                  Live
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {tournament.title}
              </h3>
              <p className="mt-4 text-sm text-slate-300">{tournament.details}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-neon-pink">
                {tournament.prize}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
