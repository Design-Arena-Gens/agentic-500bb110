"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-10"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-neon-blue">
              Visit Future Vision
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Sanjay Place, Agra
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Slides between Agra&apos;s corporate towers and neon-lit back alleys,
              Future Vision is your teleport to VR/AR adventures, esports bays,
              and console heavens.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Contact
                </p>
                <a
                  href="tel:+917055008186"
                  className="mt-2 block text-lg font-semibold text-white"
                >
                  +91 7055008186
                </a>
                <a
                  href="mailto:hello@futurevision.in"
                  className="text-sm text-slate-300 hover:text-white"
                >
                  hello@futurevision.in
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Hours
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Monday – Thursday · 12 PM – 11 PM
                </p>
                <p className="text-sm text-slate-300">
                  Friday – Sunday · 10 AM – 1 AM
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {[
                {
                  label: "WhatsApp",
                  href: "https://wa.me/917055008186",
                },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "YouTube", href: "https://youtube.com" },
                { label: "Discord", href: "https://discord.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-slate-300 transition hover:border-neon-blue/60 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel overflow-hidden p-2"
          >
            <iframe
              title="Future Vision Gaming Zone map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.558635988791!2d78.009816!3d27.197222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974734ef26738d3%3A0xaa6f12b5c9abf497!2sSanjay%20Place%2C%20Agra%2C%20Uttar%20Pradesh%20282002!5e0!3m2!1sen!2sin!4v1706295482008!5m2!1sen!2sin"
              width="100%"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full rounded-[1.5rem] border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
