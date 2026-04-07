export default function ContactPage() {
  return (
    <div className="page-shell grid max-w-5xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-ink/45">Contact</p>
        <h1 className="font-serif text-5xl text-ink">
          For exhibitions, collaborations, or studio visits.
        </h1>
        <p className="text-base leading-8 text-ink/68">
          Keep this page restrained. A clear email address and one or two relevant links are often
          enough for a first version.
        </p>
      </div>
      <div className="surface-panel p-8">
        <div className="space-y-6 text-base leading-8 text-ink/70">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Email</p>
            <p>hello@ellengoovaerts.com</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Instagram</p>
            <p>@ellengoovaerts</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/45">Location</p>
            <p>Belgium</p>
          </div>
        </div>
      </div>
    </div>
  );
}
