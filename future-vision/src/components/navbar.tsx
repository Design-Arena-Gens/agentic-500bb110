"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/#experiences", label: "Experiences" },
  { href: "/#sessions", label: "Sessions" },
  { href: "/#shop", label: "Shop" },
  { href: "/#tournaments", label: "Tournaments" },
  { href: "/#contact", label: "Visit Us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.3em]"
        >
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-neon-blue/80 via-neon-purple/50 to-neon-pink/70 shadow-[0_0_45px_rgba(255,60,246,0.45)]">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.65),transparent_55%)]"
            />
            <span className="z-10 text-sm font-bold text-slate-900">FV</span>
          </span>
          Future Vision
        </Link>

        <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-slate-900/40 px-8 py-3 shadow-[0_10px_40px_rgba(17,17,51,0.45)] backdrop-blur-2xl lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium tracking-wide text-slate-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="gradient-button rounded-full px-5 py-2 text-sm shadow-[0_0_25px_rgba(169,113,255,0.35)]"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen((state) => !state)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/70 text-slate-100 shadow-[0_0_25px_rgba(54,208,255,0.3)] lg:hidden"
          aria-label="Toggle navigation"
        >
          <motion.div className="flex flex-col items-center justify-center gap-[6px]">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="block h-[2px] w-6 bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-[2px] w-6 bg-white"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="block h-[2px] w-6 bg-white"
            />
          </motion.div>
        </button>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-6 right-6 top-full mt-4 flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-[0_40px_70px_rgba(0,0,0,0.65)] lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-5 py-3 text-sm font-medium tracking-wide text-slate-200 transition hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="gradient-button rounded-full px-7 py-3 text-center text-sm"
            >
              Book Now
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
