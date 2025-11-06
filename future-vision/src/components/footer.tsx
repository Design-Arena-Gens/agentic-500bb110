"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Future Vision Gaming Zone
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Sanjay Place, Agra · VR · AR · PS5 · Xbox · PC · Meta
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-neon-blue">
            Powered by neon dreams &amp; zero-lag synapses
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-300">
          <Link href="/#sessions" className="hover:text-white">
            Sessions
          </Link>
          <Link href="/shop" className="hover:text-white">
            Shop
          </Link>
          <Link href="/book" className="hover:text-white">
            Book
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            YouTube
          </a>
          <a
            href="https://wa.me/917055008186"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Future Vision Gaming Zone, Agra. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
