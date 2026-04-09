import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ELLEN GOOVAERTS",
  description: "Portfolio website setup for art photography."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-white font-sans text-ink antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />
          <main className="flex-1 bg-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
