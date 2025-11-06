import { Navbar } from "@/components/navbar";
import { ShopGrid } from "@/components/shop-grid";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata = {
  title: "Shop Gaming Accessories | Future Vision Neon Store",
  description:
    "Buy premium gaming accessories, controllers, VR gear, and neon merch from Future Vision Gaming Zone in Agra.",
};

export default function ShopPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 grid-overlay opacity-45" />
      <Navbar />
      <main className="relative z-10">
        <ShopGrid />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  );
}
