import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experiences } from "@/components/experiences";
import { SessionPlans } from "@/components/session-plans";
import { ShopGrid } from "@/components/shop-grid";
import { Tournaments } from "@/components/tournaments";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <Navbar />
      <Hero />
      <Experiences />
      <SessionPlans />
      <ShopGrid compact />
      <Tournaments />
      <ContactSection />
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  );
}
