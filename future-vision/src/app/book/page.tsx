import { Navbar } from "@/components/navbar";
import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata = {
  title: "Book Sessions | Future Vision Gaming Zone",
  description:
    "Reserve VR, AR, PS5, Xbox, and esports pods at Future Vision Gaming Zone in Sanjay Place, Agra. Pick your time slot and squad size instantly.",
};

export default function BookPage() {
  return (
    <div className="relative min-h-screen pb-24 pt-12">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <Navbar />
      <main className="relative z-10 mx-auto mt-10 w-full max-w-6xl px-6 lg:px-12">
        <BookingForm />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  );
}
