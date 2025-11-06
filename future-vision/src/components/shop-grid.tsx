"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useCart } from "@/components/cart-context";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function ShopGrid({ compact = false }: { compact?: boolean }) {
  const { addToCart } = useCart();
  const visibleProducts = compact ? products.slice(0, 4) : products;

  return (
    <section id="shop" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-neon-blue">
              Accessories Marketplace
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Gear Up With Signature Neon Hardware
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Every accessory is curated by our esports team for durability,
              response time, and that unmistakable Future Vision glow.
            </p>
          </div>
          {compact && (
            <Link
              href="/shop"
              className="rounded-full border border-white/20 px-6 py-2 text-sm uppercase tracking-[0.35em] text-slate-200 transition hover:border-neon-blue/60 hover:text-white"
            >
              View Full Store
            </Link>
          )}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-slate-900/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={640}
                  height={420}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative mt-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    {product.category}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neon-purple">
                    Neon
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {product.description}
                </p>
                <ul className="space-y-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1 w-8 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold text-white">
                    {currency.format(product.price)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="gradient-button rounded-full px-6 py-2 text-sm uppercase tracking-[0.35em]"
                  >
                    Add
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
