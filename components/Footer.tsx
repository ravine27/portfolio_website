"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  return (
    <footer className="w-full py-12 mt-24 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="flex flex-col items-center justify-center space-y-6 px-margin-mobile md:px-margin-desktop">
        <Link
          href="/"
          className="font-display-lg text-headline-md font-bold text-on-surface tracking-tight flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center border border-secondary/30 group-hover:border-secondary/60 transition-all duration-500">
            <span className="material-symbols-outlined text-secondary text-xl group-hover:rotate-90 transition-transform duration-700">
              blur_on
            </span>
          </div>
          <span className="group-hover:text-secondary transition-colors text-primary">Radha.exe</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors" href="https://github.com/ravine27">
            Github
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors" href="https://www.linkedin.com/in/radha-agarwal-67b925289/">
            LinkedIn
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors" href="https://www.instagram.com/golden_art_box?igsh=dHBoamhqamp6dmVr">
            Instagram
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("radhaagrwal.380@gmail.com");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? "Copied!" : "Email"}
          </a>
        </nav>
        <div className="font-label-sm text-label-sm text-on-surface-variant/60 text-center">
          © 2026 Radha Agarwal • Woman in the Digital Void
        </div>
      </div>
    </footer>
  );
}
