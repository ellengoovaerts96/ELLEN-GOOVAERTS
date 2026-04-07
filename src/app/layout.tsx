import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

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
      <body className="bg-white text-ink antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
