import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] lantern-glow" />
        <div
          className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] lantern-glow"
          style={{ background: "radial-gradient(circle, #d7baff 0%, transparent 70%)" }}
        />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter w-full max-w-container-max mx-auto">
          <div className="md:col-span-5 space-y-6">
            <div className="relative rounded-xl overflow-hidden glass-card p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full aspect-[4/5] object-cover rounded-lg"
                alt="A magical digital illustration of a young woman sitting in a moonlit garden"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgLkpRxFJW93AUb-nOkN213v3JCn2tnk4bM7gJlgoIav1wOte9nfRIes05hs8MmWEqT-TDOMPDoHl0FfwgBEP5h7uEudCnq-ba5V1dU3IMw54hCJ2QJ_ZGvnOmiEhQ9EHNcyMHoRQv0KZXhEMYyGrI1oF2riLL4N2wCJBZnHtMZ7O0AsmH6YdnwyisJS9wBhvzunWnvZdlIuSUNQc2YhTLdKov3Ss_GqRRoZNfDdLbVsjLycWiY78zfIp-GVeSmVRPj1Fspi96YA6Z"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500 ml-12 -mt-12 md:ml-24">
              <img
                className="w-full aspect-square object-cover rounded-lg"
                alt="A close-up artistic portrait with long flowing hair and a luminous moon"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGqqg73gzvbF6mcIV1I8oDYMrvgyQuxX-U363Aj0RcDadtj6x2uUDM1AzALIaKIdIXKnRNBnOidSlfXnfXDUTkTYMFiZDbR59S2w63x89LgO3Icp4bq-NxXq4JG0XeXLN_68g9b2UjfrIDg55xHdRzittHTNKtGiPDxzpeISmRIM_dMC6EPDggKbNvsVBZTM3vhPM8C1bAJO0awYG0V9MtLD74lkc5lU0bYJJREbd0CSVL_p-W3Jl-pyplgB7Ts1YWRNeEMUzW1hUL"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 opacity-30">
                <span className="material-symbols-outlined text-[80px] text-secondary">flare</span>
              </div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
                Hi, <br />I'm <span className="text-secondary">Radha Agarwal</span>
              </h1>
              <p className="font-headline-md text-headline-md text-primary mb-4">Full Stack Developer | App &amp; Web Developer</p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                I build modern, fast, and scalable applications. My work blends technical precision with the atmospheric storytelling of a visionary creator.
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Link
                  href="/work"
                  className="bg-primary/20 border border-primary text-primary px-8 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_20px_rgba(215,186,255,0.2)]"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="text-on-surface font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-2 hover:text-secondary transition-colors group"
                >
                  Learn More <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">arrow_forward</span>
                </Link>
                <a
                  className="text-on-surface font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-2 hover:text-secondary transition-colors group"
                  href="/resume.pdf"
                  download="resume.pdf"
                >
                  Download CV <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                </a>
              </div>
            </div>
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
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group" href="/work">
              VIEW ALL PROJECTS <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Lumina Financial",
                text: "A real-time asset tracking platform with predictive atmospheric visualization.",
                alt: "A sleek mockup of a high-end fintech application dashboard displayed on a curved glass screen.",
                tag: "Fintech • React • Node.js",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzomuyqp6b5fQhwqh8HRbVTSU6SrtV3qsT0PqwkNuqdATfT4uUNt-FFICUn8c3V2fP8AnHpxiDffFlb7XQD4bDIfTplbylP4PIHkIloJnIQSo32W2ZskQ5ElrlO80iqLrtd7o3iynzRunDofCuWb50-oTEmScvzUQte1_GbTaGPtoicnWnKiBzj7PVo3ZkdkWHydQIW9HCA3OAlsiY5Gd_niAp1yekN4kXqfwDxDtguNxb209wwx1uLgo5671DYsbJfeGnYH7olxd",
              },
              {
                title: "Aether Couture",
                text: "Minimalist luxury shopping experience with seamless cloud integration.",
                alt: "An innovative e-commerce interface for a high-end fashion brand.",
                tag: "E-Commerce • Next.js • Tailwind",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVPmNllyzRG3O3FqywMqfCg74UW3gRtUI8IVz3VklNhh4W4WPBr32XZkVwWq1Oj-Y-14rqJrpJwB8On19qBUb1dZnx8nmxgk8lTtSAFZrgaiKSFUbPjxLzSUTOL8hZQNjdXcAIdHh6umwcoJ26PjJOTZJzk5qd6CzJXV-nXG37p59Te1ZYAsh_Bh9QPkaCB0KATVUYfF7BVVnvF92SNpFCumGLS8zrOhaBFyTs4ShyMSw5KcLRIpJiZJg6b-Vwvi4IKALF2s-TWrSu",
              },
            ].map((project, index) => (
              <article key={project.title} className={`group relative ${index === 1 ? "md:mt-24" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl glass-card transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={project.alt} src={project.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <p className="font-label-sm text-label-sm text-tertiary uppercase mb-2">{project.tag}</p>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{project.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant opacity-80 group-hover:opacity-100 transition-opacity">{project.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
