"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const platforms = [
  "VR Arena",
  "Meta Quest Hybrid",
  "PS5 Lounge",
  "Xbox Series X Dock",
  "Esports PC Bay",
  "Racing Sim Rig",
];

const hoursOptions = [1, 2, 3, 4];

type FormState = {
  name: string;
  phone: string;
  email: string;
  platform: string;
  date: string;
  startTime: string;
  hours: number;
  players: number;
  notes: string;
};

const defaultState: FormState = {
  name: "",
  phone: "",
  email: "",
  platform: platforms[0],
  date: "",
  startTime: "18:00",
  hours: 1,
  players: 1,
  notes: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);

  const totalEstimate = useMemo(() => {
    const baseRate = 499;
    const multiplier =
      form.platform === "Esports PC Bay" || form.players > 4 ? 1.4 : 1;
    return Math.round(baseRate * multiplier * form.hours);
  }, [form.hours, form.platform, form.players]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(defaultState);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass-panel space-y-6 p-8"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-neon-blue">
            Reserve your slot
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Book Future Vision Sessions
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Pick your preferred experience, squad size, and slot. Our hosts will
            confirm within minutes via WhatsApp.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-300">
            Full Name
            <input
              required
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-neon-blue/60 focus:bg-white/10"
              placeholder="Player one"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Contact Number
            <input
              required
              value={form.phone}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, phone: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-neon-blue/60 focus:bg-white/10"
              placeholder="7055008186"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-300">
            Email (optional)
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-neon-blue/60 focus:bg-white/10"
              placeholder="you@future.gg"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Choose Arena
            <select
              value={form.platform}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, platform: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-200 outline-none focus:border-neon-blue/60 focus:bg-white/10"
            >
              {platforms.map((platform) => (
                <option key={platform}>{platform}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="space-y-2 text-sm text-slate-300">
            Date
            <input
              type="date"
              required
              value={form.date}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, date: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-neon-blue/60 focus:bg-white/10"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Start Time
            <select
              value={form.startTime}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, startTime: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-200 outline-none focus:border-neon-blue/60 focus:bg-white/10"
            >
              {["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"].map(
                (slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ),
              )}
            </select>
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Hours
            <select
              value={form.hours}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  hours: Number(event.target.value),
                }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-200 outline-none focus:border-neon-blue/60 focus:bg-white/10"
            >
              {hoursOptions.map((hours) => (
                <option key={hours} value={hours}>
                  {hours} Hour{hours > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate-300">
          Squad Size
          <input
            type="number"
            min={1}
            max={8}
            value={form.players}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                players: Number(event.target.value),
              }))
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-neon-blue/60 focus:bg-white/10"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Anything we should prep?
          <textarea
            value={form.notes}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, notes: event.target.value }))
            }
            rows={4}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-neon-blue/60 focus:bg-white/10"
            placeholder="Preferred titles, tournament practice, accessibility needs..."
          />
        </label>
        <div className="rounded-3xl border border-neon-purple/30 bg-neon-purple/15 p-6 text-sm text-slate-200">
          <p className="uppercase tracking-[0.4em] text-neon-purple">
            Estimated Investment
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">
            ₹{totalEstimate} / session
          </p>
          <p className="mt-2 text-xs text-slate-300">
            Final pricing depends on platform upgrades, energy packs, and
            tournament add-ons. We&apos;ll confirm instantly.
          </p>
        </div>
        <button
          type="submit"
          className="gradient-button w-full rounded-full px-8 py-3 text-sm uppercase tracking-[0.35em]"
        >
          Submit Booking
        </button>
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-neon-blue"
          >
            Booking request sent! Team Future Vision will reach out on WhatsApp
            at 7055008186 within minutes.
          </motion.p>
        )}
      </motion.form>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="glass-panel p-8">
          <h2 className="text-2xl font-semibold text-white">
            Hourly Pods &amp; Arena Benefits
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>⚡ Instant WhatsApp confirmations &amp; upgrades</li>
            <li>🕹️ 18+ pods including VR treadmills and racing rigs</li>
            <li>🎙️ Dedicated shoutcasters for tournament sessions</li>
            <li>🥤 Energy zone access with neon mocktails</li>
            <li>🧑‍💻 On-site technicians &amp; custom performance tuning</li>
          </ul>
        </div>
        <div className="glass-panel p-8">
          <h3 className="text-xl font-semibold text-white">Locate Future Vision</h3>
          <p className="mt-3 text-sm text-slate-300">
            Future Vision Gaming Zone, Sanjay Place, Agra, Uttar Pradesh 282002
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Future Vision Gaming Zone Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.558635988791!2d78.009816!3d27.197222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974734ef26738d3%3A0xaa6f12b5c9abf497!2sSanjay%20Place%2C%20Agra%2C%20Uttar%20Pradesh%20282002!5e0!3m2!1sen!2sin!4v1706295482008!5m2!1sen!2sin"
              width="100%"
              height="280"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="glass-panel p-8">
          <h3 className="text-xl font-semibold text-white">Need Instant Support?</h3>
          <p className="mt-2 text-sm text-slate-300">
            Call or WhatsApp{" "}
            <a
              href="tel:+917055008186"
              className="text-neon-blue underline decoration-neon-blue/60 underline-offset-4"
            >
              +91 7055008186
            </a>{" "}
            for 24/7 assistance, corporate packages, and exclusive neon nights.
          </p>
          <a
            href="https://wa.me/917055008186?text=Hi%20Future%20Vision%2C%20I%20want%20to%20book%20a%20gaming%20session."
            target="_blank"
            rel="noreferrer"
            className="gradient-button mt-6 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm uppercase tracking-[0.35em]"
          >
            Chat On WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
