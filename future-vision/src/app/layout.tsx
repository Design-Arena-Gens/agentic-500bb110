import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Future Vision Gaming Zone | Sanjay Place, Agra",
  description:
    "Future Vision is Uttar Pradesh's most advanced neon-lit gaming arena in Sanjay Place, Agra. Book immersive VR, AR, console, and PC experiences or shop cutting-edge gaming gear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-dark text-slate-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
