export default function AboutPage() {
  return (
    <>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative p-2 glass-card rounded-2xl">
              <div className="overflow-hidden rounded-xl border border-primary/20">
                <img
                  className="w-full h-auto object-cover transition-all duration-700"
                  alt="A sophisticated professional portrait of a woman with an air of creative leadership"
                  src="/radha-photo1.jpg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 glass-card rounded-full flex items-center justify-center border border-secondary/40">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-tertiary">Biography</span>
              <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary-fixed leading-tight">The Visionary</h1>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              I&apos;m a <span className="text-primary">Full Stack Developer and AI enthusiast</span> passionate about transforming complex ideas into <span className="text-tertiary">scalable, intelligent, and visually immersive digital experiences</span>. My work blends robust backend architecture, seamless frontend design, and modern AI-driven solutions to create products that feel both powerful and effortless.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed pt-4">
              With experience in <span className="text-secondary">Full Stack Development, Android Development, and AI/ML using Python</span>, I enjoy building applications that combine clean engineering with meaningful user experiences. I actively explore <span className="text-primary">Generative AI, LLM fine-tuning, LoRA, and QLoRA</span>, constantly experimenting with how intelligent systems can elevate real-world products.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed pt-4">
              For me, development is more than writing code — it&apos;s about crafting systems that are <span className="text-tertiary">efficient, adaptive, and human-centered</span>, where every feature contributes to a smooth and engaging user journey.
            </p>
          </div>
        </div>
      </section>
      {/* 
      <section className="bg-surface-container-low/50 py-24 mb-24 border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <h2 className="font-display-lg text-headline-lg text-primary">08+</h2>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Years Experience</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-display-lg text-headline-lg text-tertiary">124</h2>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Projects Shipped</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-display-lg text-headline-lg text-secondary">99%</h2>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Uptime Record</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-display-lg text-headline-lg text-primary-fixed">15k</h2>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Active Users</p>
          </div>
        </div>
      </section> */}

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-2">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary">Core Pillars</span>
            <h2 className="font-display-lg text-headline-lg text-on-surface">Digital Foundation</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm text-right">Building systems that are as resilient as they are beautiful.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-12 rounded-3xl group hover:border-tertiary/40 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-tertiary/10" />
            <span className="material-symbols-outlined text-tertiary text-5xl mb-8 block">cloud_done</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Scalable Infrastructure</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">I architect resilient cloud ecosystems that grow with your ambitions.</p>
            <div className="flex flex-wrap gap-3">
              {["AWS", "Kubernetes", "Redis", "Terraform"].map((item) => (
                <span key={item} className="px-4 py-1 glass-card border border-white/5 rounded-full font-label-sm text-[10px] text-tertiary uppercase tracking-tighter">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-12 rounded-3xl group hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10" />
            <span className="material-symbols-outlined text-primary text-5xl mb-8 block">bolt</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Performance First</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">Speed is the soul of user experience. I optimize every millisecond.</p>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "V8 Optimization", "Web Vitals", "gRPC"].map((item) => (
                <span key={item} className="px-4 py-1 glass-card border border-white/5 rounded-full font-label-sm text-[10px] text-primary uppercase tracking-tighter">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary">Inquiry</span>
              <h2 className="font-display-lg text-headline-lg text-on-surface">Leave a spark in my inbox</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">Whether you have a revolutionary idea or just want to discuss the future of digital aesthetics, my doors are always open.</p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary">mail</span>
                <a href="mailto:radhaagrwal.380@gmail.com" className="font-body-md text-body-md text-on-surface">radhaagrwal.380@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary">location_on</span>
                <span className="font-body-md text-body-md text-on-surface">London | Remote</span>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 rounded-3xl border-outline-variant/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60 ml-1">Identity</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-3 px-0 text-on-surface placeholder:text-outline/50" placeholder="Your Name" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60 ml-1">Coordinates</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-3 px-0 text-on-surface placeholder:text-outline/50" placeholder="Your Email" type="email" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/60 ml-1">The Message</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-3 px-0 text-on-surface placeholder:text-outline/50 resize-none" placeholder="Describe your vision..." rows={4} />
              </div>
              <button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-on-primary border border-primary/40 py-4 rounded-lg font-label-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_15px_rgba(215,186,255,0.1)] active:scale-[0.98]" type="submit">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
