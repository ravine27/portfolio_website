"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TechGlobe from "../components/TechGlobe";
import SkillList from "../components/SkillList";
export default function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      <section className="relative pt-12 pb-16 md:pt-16 flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] lantern-glow" />
        <div
          className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] lantern-glow"
          style={{ background: "radial-gradient(circle, #d7baff 0%, transparent 70%)" }}
        />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter w-full max-w-container-max mx-auto">
          <div className="md:col-span-5 space-y-4 flex flex-col items-center md:items-start pt-10 md:pt-0">
            <div className="relative w-[65%] md:w-[60%] rounded-xl overflow-hidden glass-card p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full aspect-[4/5] object-cover rounded-lg"
                alt="A magical digital illustration of a young woman sitting in a moonlit garden"
                src="/ghibli-2.png"
              />
            </div>
            <div className="relative w-[55%] md:w-[50%] rounded-xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500 ml-12 -mt-16 md:ml-32 md:-mt-24 z-10">
              <img
                className="w-full aspect-square object-cover rounded-lg"
                alt="A close-up artistic portrait with long flowing hair and a luminous moon"
                src="/ghibli-1.jpeg"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="glass-card p-0 md:p-12 rounded-2xl relative overflow-hidden">

              <motion.h1
                className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 1 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                }}
              >
                {"Hi, ".split("").map((char, index) => (
                  <motion.span key={`hi-${index}`} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline" } }}>{char}</motion.span>
                ))}
                <br />
                {"I'm ".split("").map((char, index) => (
                  <motion.span key={`im-${index}`} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline" } }}>{char}</motion.span>
                ))}
                <span className="text-secondary">
                  {"Radha Agarwal".split("").map((char, index) => (
                    <motion.span key={`name-${index}`} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline" } }}>{char}</motion.span>
                  ))}
                </span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="inline-block w-[3px] md:w-[5px] h-[0.9em] bg-secondary align-middle ml-2 md:ml-4 -mt-2"
                />
              </motion.h1>
              <p className="font-headline-md text-headline-md text-primary mb-4">App &amp; Web Developer</p>
              <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
                I craft modern web and mobile applications that are fast, scalable, and visually immersive. By blending full-stack development with AI/ML integration, I build intelligent digital experiences that go beyond functionality—transforming data, automation, and user interaction into seamless, impactful products.
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Link
                  href="/work"
                  className="bg-primary/20 border border-primary text-primary px-8 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_20px_rgba(215,186,255,0.2)]"
                >
                  View Projects
                </Link>
                <a
                  className="bg-primary/20 border border-primary text-primary px-8 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_20px_rgba(215,186,255,0.2)] flex items-center group"
                  href="/resume.pdf"
                  download="resume.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto glass-card rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto border border-primary/20">
              <img src="/radha-photo1.jpg" alt="Radha Agarwal" className="w-full h-full object-cover transition-all duration-700" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-tertiary">About Me</p>
            <h2 className="font-display-lg text-headline-lg md:text-display-lg text-primary-fixed leading-tight">The Visionary</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed text-[17px]">
              I'm a <span className="text-primary">Full Stack Developer and AI enthusiast</span> passionate about transforming complex ideas into <span className="text-tertiary">scalable, intelligent, and visually immersive digital experiences</span>. My work blends robust backend architecture, seamless frontend design, and modern AI-driven solutions to create products that feel both powerful and effortless.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-2 font-label-sm text-sm text-secondary hover:text-white transition-colors uppercase tracking-widest font-semibold">
                Read Full Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop relative">
        <div className="max-w-container-max mx-auto">
          <div className="space-y-2 mb-16 text-center md:text-left">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary">What I know?</span>
            <h2 className="font-display-lg text-headline-lg text-on-surface">Tech Stack Interface</h2>
          </div>
          {/* ── 3D Flip Card ───────────────────────────────────────────── */}
          <div className="globe-flip-scene">
            <div className={`globe-flip-card${isFlipped ? " is-flipped" : ""}`}>
              {/* Front: TechGlobe */}
              <div className="globe-flip-face globe-flip-front">
                <TechGlobe />
              </div>
              {/* Back: Skill List */}
              <div className="globe-flip-face globe-flip-back">
                <SkillList />
              </div>
            </div>
          </div>

          {/* ── Drag hint + CTA ───────────────────────────────────────────── */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Drag badge — hidden when flipped */}
            {!isFlipped && (
              <div className="flex items-center gap-3 bg-surface-variant/50 border border-outline-variant/50 rounded-full px-6 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-surface">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span className="font-label-sm text-[14px] text-on-surface">Drag to explore skills universe</span>
              </div>
            )}

            {/* Flip button */}
            <button
              id="skill-list-toggle-btn"
              onClick={() => setIsFlipped((v) => !v)}
              className="skill-flip-btn"
            >
              {isFlipped ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10" />
                    <polyline points="22 2 22 8 16 8" />
                  </svg>
                  Back to Globe
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  Get the list of skills
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low/30">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-2">Curated Exhibits</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Featured Work</h2>
            </div>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors flex items-center group" href="/work">
              VIEW ALL PROJECTS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "VConnect",
                type: "Social Network App",
                description: "A next-generation social networking platform focused on seamless communication and immersive UI, built with React Native and Firebase.",
                tech: ["React Native", "Firebase", "JavaScript"],
                img: "https://raw.githubusercontent.com/ravine27/Vconnect/main/resources/project_preview.png",
              },
              {
                title: "PNG Admin Portal",
                type: "Admin Dashboard App",
                description: "A sleek and highly scalable administrative dashboard built with React Native to manage application operations effectively.",
                tech: ["React Native", "TypeScript", "Dashboard"],
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
              },
            ].map((p, index) => (
              <article key={p.title} className={`group relative ${index === 1 ? "md:mt-24" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl glass-card transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <img className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt={p.title} src={p.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start">
                    <p className="font-label-sm text-label-sm text-tertiary uppercase mb-2 tracking-widest">{p.type}</p>
                    <h3 className="font-headline-md text-headline-md text-white mb-2">{p.title}</h3>
                    <p className="font-body-md text-body-md text-white/60 opacity-80 group-hover:opacity-100 transition-opacity mb-6 line-clamp-2">{p.description}</p>
                    {p.tech && (
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-[#d7baff]/10 border border-[#d7baff]/20 rounded-full text-[#d7baff] text-[10px] font-mono uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href="/work" className="absolute inset-0 z-10">
                    <span className="sr-only">View {p.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
