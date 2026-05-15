"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ─── Project Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    index: "01",
    title: "PNG Jewellers",
    subtitle: "Mobile Application",
    description:
      "A luxury ecommerce mobile experience for PNG Jewellers. Built with React Native and a full Node.js/Express REST API backend. Features real-time product browsing, cart management, and seamless checkout flows.",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "REST API"],
    image: "/png-jewellers.png",
    color: "#c9924a",
    accentGlow: "rgba(201, 146, 74, 0.15)",
    github: "https://github.com",
    live: null,
    category: "Mobile · Ecommerce",
  },
  {
    id: 2,
    index: "02",
    title: "Information App",
    subtitle: "Offline Task Manager",
    description:
      "A fully offline-capable task management application built with React Native and TypeScript. Leverages AsyncStorage for persistent local data. Supports full CRUD operations with a clean, minimal interface.",
    tags: ["React Native", "TypeScript", "AsyncStorage", "CRUD", "Offline-first"],
    image: "/info-app.png",
    color: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.15)",
    github: "https://github.com",
    live: null,
    category: "Mobile · Productivity",
  },
  {
    id: 3,
    index: "03",
    title: "Movie Recommender",
    subtitle: "AI Recommendation System",
    description:
      "An intelligent movie recommendation engine powered by Machine Learning. Uses KNN collaborative filtering to analyze viewing patterns and deliver highly personalized suggestions with precision.",
    tags: ["Python", "Machine Learning", "KNN", "Collaborative Filtering", "Pandas"],
    image: "/movie-rec.png",
    color: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.15)",
    github: "https://github.com",
    live: null,
    category: "AI · Data Science",
  },
];

// ─── Individual project card (right column) ───────────────────────────────────
function ProjectCard({
  project,
  index,
  totalCount,
  containerRef,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  totalCount: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
    container: undefined,
  });

  // Cinematic transforms
  const scale   = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.92, 1, 1, 0.92, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.4, 1, 1, 1, 0.5]);
  const y       = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -20]);

  return (
    <div
      ref={cardRef}
      id={`project-card-${index}`}
      className="sp-card-wrapper"
      style={{ "--accent": project.color } as React.CSSProperties}
    >
      <motion.div
        className="sp-card"
        style={{ scale, opacity, y }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "2px",
            background: `linear-gradient(90deg, ${project.color}, transparent 70%)`,
            zIndex: 3,
          }}
        />
        {/* Glow layer */}
        <div
          className="sp-card-glow"
          style={{ background: `radial-gradient(ellipse 60% 50% at 0% 0%, ${project.accentGlow}, transparent 70%)` }}
        />

        {/* Content */}
        <div className="sp-card-content">
          <div className="sp-card-header">
            <span className="sp-card-index">{project.index}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                <h2 className="sp-card-title">{project.title}</h2>
                <span className="sp-card-chip" style={{ position: "relative", top: "auto", right: "auto" }}>{project.category}</span>
              </div>
              <p className="sp-card-subtitle">{project.subtitle}</p>
            </div>
          </div>

          <p className="sp-card-desc">{project.description}</p>

          {/* Tech badges */}
          <div className="sp-card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="sp-card-tag">{tag}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="sp-card-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-btn sp-btn-ghost"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn sp-btn-primary"
                style={{ "--btn-color": project.color } as React.CSSProperties}
              >
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            ) : (
              <span className="sp-btn sp-btn-disabled">In Progress</span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StickyPreview({ activeIndex }: { activeIndex: number }) {
  const project = PROJECTS[activeIndex];

  return (
    <div className="sp-preview">
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          className="sp-preview-bg z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={project.image} alt={project.title} className="sp-preview-img" />
        </motion.div>
      </AnimatePresence>

      {/* Ambient background glow overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${project.id}`}
          className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ background: `radial-gradient(circle at 50% 50%, ${project.accentGlow}, transparent 80%)` }}
        />
      </AnimatePresence>

      {/* Floating particles */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden mix-blend-screen opacity-80">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 2 + 'px',
              height: Math.random() * 3 + 2 + 'px',
              background: '#fff',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: `0 0 ${Math.random() * 15 + 10}px 2px ${project.color}`,
            }}
            animate={{
              y: [0, Math.random() * -60 - 20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.9, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Premium vignette overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none rounded-2xl shadow-[inset_0_0_80px_rgba(10,11,16,0.6)]" />
    </div>
  );
}

// ─── Root component ────────────────────────────────────────────────────────────
export default function StickyProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef  = useRef<HTMLDivElement>(null);

  // Observe which card is in center viewport
  useEffect(() => {
    const cards = PROJECTS.map((_, i) =>
      document.getElementById(`project-card-${i}`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = parseInt(id.replace("project-card-", ""));
            if (!isNaN(index)) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.55 }
    );

    cards.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sp-section" ref={containerRef}>
      {/* Section header */}
      <div className="sp-header">
        <motion.span
          className="sp-header-label"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Work
        </motion.span>
        <motion.h2
          className="sp-header-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projects That
          <br />
          <span className="sp-header-highlight">Define Me</span>
        </motion.h2>
        <motion.p
          className="sp-header-desc"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A curated selection of projects spanning mobile apps, AI systems, and full-stack platforms.
        </motion.p>
      </div>

      {/* Split layout */}
      <div className="sp-layout">
        {/* LEFT: Sticky preview */}
        <div className="sp-left">
          <div className="sp-sticky">
            <StickyPreview activeIndex={activeIndex} />
          </div>
        </div>

        {/* RIGHT: Scrolling cards */}
        <div className="sp-right" ref={rightColRef}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              totalCount={PROJECTS.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
