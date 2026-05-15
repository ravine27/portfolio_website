"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import { motion } from "framer-motion";
import { Mail, Share2 } from "lucide-react";

// ── Brand SVG icons (removed from lucide-react) ───────────────────────────────
type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function GitHubIcon({ size = 22, strokeWidth = 1.9, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ size = 22, strokeWidth = 1.9, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 22, strokeWidth = 1.9, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// ── Icon type ─────────────────────────────────────────────────────────────────
type AnyIcon = React.ComponentType<{ size?: number; strokeWidth?: number }>;

// ── Social items — no manual x/y, computed from polar math ───────────────────
// Arc spans 180° → 270° (left → up) in screen space:
//   angle=0  → pure left  (Mail)
//   angle=30 → upper-left (LinkedIn)
//   angle=60 → more-upper (GitHub)
//   angle=90 → pure up    (Instagram)
const SOCIAL = [
  {
    name: "Mail",
    href: "mailto:radhaagrwal.380@gmail.com",
    Icon: Mail as AnyIcon,
    color: "#ffb86c",            // amber/secondary
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/radha-agarwal-67b925289/",
    Icon: LinkedInIcon as AnyIcon,
    color: "#0A66C2",
    external: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/ravine27",
    Icon: GitHubIcon as AnyIcon,
    color: "#e6edf3",
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/golden_art_box?igsh=dHBoamhqamp6dmVr",
    Icon: InstagramIcon as AnyIcon,
    color: "#ff6ea8",
    external: true,
  },
];

// ── Quarter-circle geometry ────────────────────────────────────────────────────
// Origin = center of toggle button (bottom-right corner)
// Arc: 0° (left) → 90° (up)  i.e. 180°→270° in standard coords
// tx = -cos(angle) * R  (negative = leftward)
// ty = -sin(angle) * R  (negative = upward in screen)
const RADIUS = 118; // px — tight, elegant orbit
const N = SOCIAL.length;

function arcPosition(index: number): { tx: number; ty: number } {
  const angle = (index / (N - 1)) * (Math.PI / 2); // 0 → π/2
  return {
    tx: -Math.cos(angle) * RADIUS,
    ty: -Math.sin(angle) * RADIUS,
  };
}

// ── Spring configs ────────────────────────────────────────────────────────────
const OPEN_SPRING  = { type: "spring" as const, stiffness: 320, damping: 26, mass: 0.9 };
const CLOSE_SPRING = { type: "spring" as const, stiffness: 380, damping: 30, mass: 0.8 };

// ── Component ─────────────────────────────────────────────────────────────────
export default function ConnectBubble() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    /*
      Outer wrapper: fixed bottom-right, sized exactly to the toggle button.
      All icon positions are relative to this element's center, so they
      naturally originate from the toggle button's center point.
    */
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{ width: 72, height: 72 }}
    >
      {/* ── Arc icons ────────────────────────────────────────────────────── */}
      {SOCIAL.map((item, i) => {
        const { tx, ty } = arcPosition(i);
        // Stagger: open = first icon first, close = last icon first
        const openDelay  = i * 0.055;
        const closeDelay = (N - 1 - i) * 0.038;

        return (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              if (item.name === "Mail") {
                e.preventDefault();
                navigator.clipboard.writeText("radhaagrwal.380@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }
            }}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            aria-label={item.name}
            /*
              Start centered in the 72×72 container (same position as toggle
              button center). Framer's x/y animate it along the arc.
              We use inset-0 + m-auto to center the 52×52 pill in the container.
            */
            className="group absolute inset-0 m-auto flex items-center justify-center"
            style={{ width: 52, height: 52, pointerEvents: open ? "auto" : "none" }}
            initial={false}
            animate={
              open
                ? { x: tx, y: ty, opacity: 1, scale: 1 }
                : { x: 0,  y: 0,  opacity: 0, scale: 0.35 }
            }
            transition={open
              ? { ...OPEN_SPRING,  delay: openDelay  }
              : { ...CLOSE_SPRING, delay: closeDelay }
            }
          >
            {/* Icon circle */}
            <span
              className="relative flex items-center justify-center w-full h-full rounded-full
                border backdrop-blur-xl select-none
                transition-shadow duration-200"
              style={{
                background: "rgba(12, 13, 20, 0.75)",
                borderColor: `${item.color}28`,
                boxShadow: `0 0 0 1px ${item.color}18, 0 8px 24px rgba(0,0,0,0.4)`,
                color: item.color,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 16px ${item.color}55, 0 0 32px ${item.color}22, 0 8px 24px rgba(0,0,0,0.5)`;
                (e.currentTarget as HTMLElement).style.borderColor = `${item.color}66`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 0 1px ${item.color}18, 0 8px 24px rgba(0,0,0,0.4)`;
                (e.currentTarget as HTMLElement).style.borderColor = `${item.color}28`;
              }}
            >
              <item.Icon size={20} strokeWidth={1.85} />

              {/* Tooltip */}
              <span
                className="pointer-events-none absolute right-full mr-3
                  px-2.5 py-1 rounded-full text-[10px] font-mono uppercase
                  tracking-widest whitespace-nowrap
                  border border-white/8 bg-[rgba(12,13,20,0.88)]
                  backdrop-blur-xl text-white/60
                  opacity-0 -translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-200"
              >
                {item.name === "Mail" && copied ? "COPIED!" : item.name}
              </span>
            </span>
          </motion.a>
        );
      })}

      {/* ── Arc trail (subtle connecting glow) ───────────────────────────── */}
      <motion.svg
        className="absolute inset-0 pointer-events-none overflow-visible"
        width="72" height="72"
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: -1 }}
      >
        <defs>
          <radialGradient id="arcGrad" cx="100%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#ffb86c" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffb86c" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Quarter-circle arc path from center of button */}
        {/* cx=36, cy=36 (center of 72×72 container), R=RADIUS */}
        <path
          d={`M ${36 - RADIUS} 36 A ${RADIUS} ${RADIUS} 0 0 1 36 ${36 - RADIUS}`}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.45"
        />
      </motion.svg>

      {/* ── Toggle button ─────────────────────────────────────────────────── */}
      <motion.button
        type="button"
        aria-label={open ? "Close social dock" : "Open social dock"}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="group absolute inset-0 flex items-center justify-center rounded-full
          border backdrop-blur-2xl
          transition-colors duration-300"
        style={{
          background: "rgba(18, 19, 26, 0.88)",
          borderColor: open ? "rgba(255,184,108,0.45)" : "rgba(255,184,108,0.22)",
          boxShadow: open
            ? "0 0 28px rgba(255,184,108,0.25), 0 0 0 1px rgba(255,255,255,0.04), 0 16px 48px rgba(0,0,0,0.5)"
            : "0 0 0 1px rgba(255,255,255,0.03), 0 16px 40px rgba(0,0,0,0.4)",
        }}
        animate={{ scale: open ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        {/* Ambient glow bloom */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,184,108,0.12) 0%, transparent 70%)" }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <span className="relative flex flex-col items-center gap-[3px]">
          <Share2 className="h-[18px] w-[18px] text-secondary" strokeWidth={2} />
          <span
            className="font-mono text-[0.58rem] uppercase tracking-[0.22em]"
            style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1 }}
          >
            {open ? "close" : "social"}
          </span>
        </span>
      </motion.button>
    </div>
  );
}