"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[320px] flex items-end overflow-hidden px-margin-mobile md:px-margin-desktop pb-16 pt-12">
        {/* Ambient glows */}
        <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(215,186,255,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(117,212,232,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="max-w-container-max mx-auto w-full relative z-10">
          <motion.span
            className="font-label-sm text-label-sm text-secondary tracking-[0.3em] uppercase block mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio Exhibit
          </motion.span>

          <motion.h1
            className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Manifesting the
            <br />
            <span className="text-primary italic">Invisible.</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mt-6 font-body-lg text-body-lg text-on-surface-variant"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            A curated collection of digital experiences — mobile apps, intelligent systems, and full-stack platforms — where structural integrity meets ethereal aesthetics.
          </motion.p>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto border-b border-outline-variant/20 pb-0" />
      </div>

      {/* ── All Projects Grid ─────────────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "PNG Jewellers_admin_portal",
                type: "Admin Dashboard App",
                description: "A sleek and highly scalable administrative dashboard built with React Native to manage application operations effectively.",
                img: "/PNG_JEWELLER_ADMIN.png",
                href: "https://github.com/ravine27/PNG_admin_portal",
                linkText: "VIEW REPOSITORY",
              },

              {
                title: "Vconnect",
                type: "Mobile Application",
                description: "A luxury ecommerce mobile experience with real-time product browsing, cart management, and seamless checkout flows.",
                img: "/Vconnect.png",
                href: "https://github.com/ravine27/VConnect",
                linkText: "VIEW REPOSITORY",
              },


              {
                title: "PNG Jewellers",
                type: "Mobile Application",
                description: "A luxury ecommerce mobile experience with real-time product browsing, cart management, and seamless checkout flows.",
                img: "/png-jewellers.png",
                href: "https://github.com",
                linkText: "VIEW REPOSITORY",
              },

              {
                title: "Movie Recommender",
                type: "AI System",
                description: "An intelligent recommendation engine using KNN collaborative filtering to deliver highly personalized suggestions.",
                img: "/movie-rec.png",
                href: "https://github.com",
                linkText: "VIEW REPOSITORY",
              },
              {
                title: "Password Hashing",
                type: "Web App",
                description: "A password hashing utility deployed on Render with a live interactive demo for security demonstrations.",
                img: "/password_hashing.png",
                href: "https://password-hashing-je7m.onrender.com/",
                linkText: "VISIT PROJECT",
              },
            ].map((p, i) => (
              <motion.article
                key={p.title}
                className="group glass-card glow-hover rounded-3xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0b10]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                    <span className="font-label-sm text-[11px] text-white/80 tracking-widest uppercase">{p.type}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="font-body-md text-white/60 leading-relaxed mb-8 flex-1">{p.description}</p>

                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-label-sm text-sm text-[#d7baff] hover:text-white transition-colors uppercase tracking-widest font-semibold mt-auto w-fit">
                      {p.linkText}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  ) : (
                    <Link href="/about#contact"
                      className="inline-flex items-center gap-2 font-label-sm text-sm text-[#d7baff] hover:text-white transition-colors uppercase tracking-widest font-semibold mt-auto w-fit">
                      {p.linkText}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop pb-32">
        <div className="max-w-container-max mx-auto">
          <motion.div
            className="p-12 md:p-16 glass-card rounded-2xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(117,212,232,0.08), transparent 70%)" }} />
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                Have a vision in mind?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
                I&apos;m always looking for ambitious projects that push the boundaries of what&apos;s possible.
              </p>
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(215,186,255,0.4)] hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
