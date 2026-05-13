import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop">
      <div className="max-w-2xl text-center glass-card rounded-3xl p-10 md:p-16">
        <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary mb-4">404</p>
        <h1 className="font-display-lg text-headline-lg text-on-surface mb-4">Page not found</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          The page you&apos;re looking for doesn&apos;t exist, but the portfolio is still open.
        </p>
        <Link href="/" className="inline-flex px-6 py-3 rounded-full bg-primary text-on-primary font-label-sm uppercase tracking-widest">
          Back Home
        </Link>
      </div>
    </section>
  );
}
