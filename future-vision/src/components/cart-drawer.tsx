"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/cart-context";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, total, addToCart, decreaseItem, removeFromCart, clearCart } =
    useCart();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-neon-blue/40 bg-slate-900/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-neon-blue shadow-[0_0_40px_rgba(54,208,255,0.35)] backdrop-blur-xl transition hover:border-neon-pink/50 hover:text-neon-pink"
      >
        Cart
        {items.length > 0 && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-xs text-slate-950">
            {items.length}
          </span>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="fixed top-0 right-0 z-[60] flex h-full w-full max-w-md flex-col overflow-hidden border-l border-white/10 bg-slate-950/95 shadow-[0_-30px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-neon-blue">
                    Neon Cart
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    {items.length} Items
                  </h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 hover:border-neon-pink/50 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
                {items.length === 0 && (
                  <p className="text-sm text-slate-400">
                    Your cart is empty. Explore the neon store to add gear.
                  </p>
                )}
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                          {item.product.category}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-white">
                          {item.product.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-xs uppercase tracking-[0.3em] text-neon-pink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">
                      {item.product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseItem(item.product.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-slate-200 disabled:opacity-40"
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="text-sm uppercase tracking-[0.3em]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item.product)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-slate-200"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-lg font-semibold text-white">
                        {currency.format(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 px-6 py-6">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em] text-slate-300">
                  <span>Total</span>
                  <span className="text-xl font-semibold text-white">
                    {currency.format(total)}
                  </span>
                </div>
                <button className="gradient-button mt-4 w-full rounded-full px-8 py-3 text-sm uppercase tracking-[0.35em]">
                  Checkout &amp; Pay
                </button>
                <button
                  onClick={clearCart}
                  className="mt-3 w-full rounded-full border border-white/10 px-8 py-3 text-xs uppercase tracking-[0.35em] text-slate-400 hover:border-neon-blue/50 hover:text-white"
                >
                  Clear Cart
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
