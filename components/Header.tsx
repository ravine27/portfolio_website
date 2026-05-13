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
        <div className="font-display-lg text-headline-md font-bold text-on-surface dark:text-on-surface-variant tracking-tight">
          Quiet Visionary
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-label-sm text-label-sm tracking-widest uppercase transition-opacity ${
                  active ? "relative text-secondary spark-active" : "text-on-surface-variant opacity-70 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          href="mailto:radhaagrwal.380@gmail.com"
          className="px-6 py-2 border border-primary text-primary font-label-sm text-label-sm uppercase hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(215,186,255,0.3)] transition-all"
        >
          Connect
        </a>
      </div>
    </header>
  );
}
