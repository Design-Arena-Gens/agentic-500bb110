"use client";

import { motion } from "framer-motion";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/917055008186?text=Hi%20Future%20Vision%2C%20I%20want%20to%20book%20a%20session."
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.35)] backdrop-blur-xl transition hover:border-emerald-300/80 hover:text-emerald-100"
    >
      WhatsApp
    </motion.a>
  );
}
