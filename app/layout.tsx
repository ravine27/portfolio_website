import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiet Visionary | Radha Agarwal Portfolio",
  description: "Portfolio of Radha Agarwal built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface text-on-surface selection:bg-secondary/30">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
