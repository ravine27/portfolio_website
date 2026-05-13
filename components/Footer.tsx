export default function Footer() {
  return (
    <footer className="w-full py-12 mt-24 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="flex flex-col items-center justify-center space-y-6 px-margin-mobile md:px-margin-desktop">
        <div className="font-display-lg text-primary text-headline-md">Radha Agarwal</div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors" href="https://github.com/ravine27">
            Github
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors" href="https://www.linkedin.com/in/radha-agarwal-67b925289/">
            LinkedIn
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors" href="#">
            Twitter
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors" href="mailto:radhaagrwal.380@gmail.com">
            Email
          </a>
        </nav>
        <div className="font-label-sm text-label-sm text-on-surface-variant/60 text-center">
          © 2024 Radha Agarwal • Woven in the Digital Void
        </div>
      </div>
    </footer>
  );
}
