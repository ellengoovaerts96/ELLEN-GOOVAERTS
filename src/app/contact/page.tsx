export default function ContactPage() {
  return (
    <div className="page-shell max-w-3xl">
      <div className="surface-panel p-8 md:p-12">
        <div className="space-y-8 text-ink">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Email</p>
            <a
              href="mailto:goovaerts.ellen@telenet.be"
              className="font-serif text-3xl leading-tight transition duration-300 hover:text-clay md:text-4xl"
            >
              goovaerts.ellen@telenet.be
            </a>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Instagram</p>
            <a
              href="https://instagram.com/goovaerts.ellen"
              target="_blank"
              rel="noreferrer"
              className="text-lg leading-8 text-ink/72 transition duration-300 hover:text-clay"
            >
              @goovaerts.ellen
            </a>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Location</p>
            <p className="text-lg leading-8 text-ink/72">Belgium</p>
          </div>
        </div>
      </div>
    </div>
  );
}
