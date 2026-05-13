import Link from "next/link";

type Project = {
  title: string;
  type: string;
  description: string;
  img: string;
  href?: string;
  preview?: "iframe";
};

const projects: Project[] = [
  {
    title: "password-hashing",
    type: "Web App",
    description: "A password hashing project deployed on Render with a dedicated live demo link.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe12iHqsLn4MsVBkYW4e5yQVE5oKQv2vj4ZJck-T4sfP9ke6X5J5BFzBTX-8yIR-5W0DgacReW7mJzGYxW5txbCNPhKgg4YnbU-44Dhbmp3rK74BMlKTNmAOt38hEsJmxV88eILnVUTH8f-zrbFNOLiQ4MJThHNsxBrTM6TrOIpDlXxuiTiiqCyIeplVt7mX_3JTsyB_oa1lgJ_v-K6tnCxh53nP3IxPcIftDuH7cLuZyZMLMsekNcTAS9FzDxGKLmrv3Tfu8nbPVz",
    href: "https://password-hashing-je7m.onrender.com/",
    preview: "iframe",
  },
  {
    title: "Mist Meditation App",
    type: "Mobile",
    description: "A minimalist wellness app focusing on rhythmic light patterns to guide deep breathing exercises.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFhBi-fM7aqj33QHQPLwz6RsRcV0KCieKwnp_DuSADjCEuo66Ss-YJi2tBzsDbctW2BOrAOJ8ElpIfPocpgAgnyVk8g5c8YMUyBrH3UH-Sr-9SPVwBs9mp3AgWLRMSueORFvxmgMlq7lGNNweZfLjbICeMum0q5vFuXWuz601PUini0jJhDHNJ-98-e68NMeTM-Dj7UW4RgGDW1yGZynC25b35Gq0I6grGTR1eCErSTigUG4NSJD53S5vZYDxAunuHTOIokk-tdcuR",
  },
  {
    title: "Ether Design System",
    type: "UI/UX",
    description: "A comprehensive library of components designed for the Quiet Visionary aesthetic, optimized for performance.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFJynCroRW16noNOs5MEqsYmWkdWu9mJIgDa1H861U0IdkIjiA9PMI3iAMM8f94xZwsKuiJ9G1qzViSoL12hKRBNTk3Tb_dMV9TEcTXkEKyEwSZxFJnhs_L-wbNt9AFEBqEnmCykwd8hia2LhMgC5AWfQAzCr1jXaxnfLbzYM7eL5th-gTE4fAowXwIl1VAL-BwcHHSRHLfTKCd0wEszGLsD9X5WQdDnzaMjwy2PpNhnAseGbzfAJgN92z1DeqdXB3t6r3ID_PH133",
  },
  {
    title: "Retro-Sync Engine",
    type: "Web App",
    description: "Bridging legacy hardware with modern cloud architectures through a bespoke ethereal dashboard.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmxwg4e-_YZbE2NffDq2vR4-MEHIX928EU0KwIBogKpIbb0CxfTHfUaK9J-jcp5Tj4AKclE7etzgtfLfLf46Q-GUIllGggV71EzOO0wmG2b3WvUc96fZV8JruDJIWGqCHQmXq9NfjegQTkvSLNBCFztD-4Lk52A4NCRlb5YUgMMWnk8A8lEJfKaOaVmdISPGUh4pzCungw7FEnV2zGBPqax3X01WjTre2zCDj0YiW1NDexjt1uaVgPrnqNDPhOnUAYKmDlxKEQnfDI",
  },
  {
    title: "Orion Network Mapper",
    type: "Web App",
    description: "Real-time mapping of global infrastructure nodes using generative art techniques to represent server load.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRSc-WREYhssmi9FjSCKncGQ8RT6aNbWLyCuGwKlmFWM9leoaHVCwFedFFWBhdCMV1TQUIPzZsGJ8cLMXMsPokN7sX0bkVMUKTHLXRlUNkX48Yr4PFTmYo-jSznikygq7g7Avx7AzcQEfwTJj8W80UF1hmwSI6SDUz6ubXLR6X2ia5aHTDcyUrqLq83r0FDHRGiteitIFKsEAUpShqlXawK3lJKelWWj6OBb07ReLRDn-f-J4fR4kzXFmtjjzF7Gr51Huqvm4MUu1s",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative min-h-[280px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop pt-8 pb-12">
        <div className="lantern absolute top-[-100px] left-[-100px] w-[300px] h-[300px]" />
        <div className="lantern absolute bottom-[10%] right-[-150px] w-[300px] h-[300px]" style={{ background: "radial-gradient(circle, rgba(215, 186, 255, 0.05) 0%, rgba(18, 19, 26, 0) 70%)" }} />
        <div className="max-w-container-max mx-auto w-full">
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">Portfolio Exhibit</span>
          <h1 className="mt-4 font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface">
            Manifesting the <br />
            <span className="text-primary italic">Invisible.</span>
          </h1>
          <p className="max-w-2xl mt-6 font-body-lg text-body-lg text-on-surface-variant">
            A curated collection of digital experiences, where structural integrity meets ethereal aesthetics. Every project is an exploration of form, light, and purpose.
          </p>
        </div>
      </section>

      <section className="py-8 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto border-b border-outline-variant/10 pb-6">
          <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-widest">All Work</button>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {projects.map((project, index) => {
            const wide = index === 0 || index === 3 || index === 4;
            return (
              <article key={project.title} className={`${wide ? "md:col-span-8" : "md:col-span-4"} group ${index === 1 ? "md:mt-24" : ""}`}>
                <div className={`glass-card glow-hover rounded-xl overflow-hidden transition-all duration-500 ${index === 2 ? "h-full" : ""}`}>
                  <div className={`relative overflow-hidden ${index === 2 ? "aspect-[3/4]" : index === 4 ? "aspect-[21/9]" : index === 0 ? "aspect-[16/9]" : "aspect-square"}`}>
                    {project.preview === "iframe" ? (
                      <div className="relative w-full h-full bg-surface-dim">
                        <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-3 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/20 text-[10px] font-label-sm uppercase tracking-widest text-on-surface-variant">
                          <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                          Live Preview
                        </div>
                        <iframe
                          title={project.title}
                          src={project.href}
                          loading="lazy"
                          scrolling="no"
                          style={{ overflow: "hidden" }}
                          className="w-full h-full border-0 pt-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-30 pointer-events-none" />
                      </div>
                    ) : (
                      <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" alt={project.title} src={project.img} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full border border-outline-variant/20">
                      <span className="font-label-sm text-[10px] text-tertiary uppercase">{project.type}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{project.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-6">{project.description}</p>
                    {project.href ? (
                      <a
                        className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VISIT PROJECT <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </a>
                    ) : (
                      <Link className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary" href="/about#contact">
                        VIEW CASE STUDY <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto mt-8 p-12 glass-card rounded-2xl text-center relative overflow-hidden">
          <div className="lantern absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-full h-full" style={{ background: "radial-gradient(circle, rgba(117, 212, 232, 0.2) 0%, rgba(18, 19, 26, 0) 70%)" }} />
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">Have a vision in mind?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">I&apos;m always looking for ambitious projects that challenge the boundaries of web experiences.</p>
            <Link href="/about#contact" className="px-10 py-4 bg-primary text-on-primary font-bold rounded-xl hover:shadow-[0_0_20px_rgba(215,186,255,0.4)] transition-all active:scale-95 inline-flex">
              START A CONVERSATION
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
