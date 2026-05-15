import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Galaxy from "../components/Galaxy";
import ConnectBubble from "../components/ConnectBubble";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiet Visionary | Radha Agarwal Portfolio",
  description: "Portfolio of Radha Agarwal built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-surface text-on-surface selection:bg-secondary/30 relative" suppressHydrationWarning>
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={true}
            density={2}
            glowIntensity={0.5}
            saturation={0.4}
            hueShift={200}
            twinkleIntensity={0.5}
            starSpeed={0.3}
          />
        </div>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <ConnectBubble />
      </body>
    </html>
  );
}
