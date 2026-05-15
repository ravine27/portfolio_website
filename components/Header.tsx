"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about#contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/about#contact") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-xl border-b border-tertiary-container/20">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit">
        <Link
          href="/"
          className="font-display-lg text-headline-md font-bold text-on-surface dark:text-on-surface-variant tracking-tight flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-secondary/30 group-hover:border-secondary/60 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,184,108,0.3)]">
            <span className="material-symbols-outlined text-secondary text-2xl group-hover:rotate-90 transition-transform duration-700">
              blur_on
            </span>
          </div>
          <span className="group-hover:text-secondary transition-colors">Radha.exe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-label-sm text-label-sm tracking-widest uppercase transition-opacity ${active ? "relative text-secondary spark-active" : "text-on-surface-variant opacity-70 hover:opacity-100"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
