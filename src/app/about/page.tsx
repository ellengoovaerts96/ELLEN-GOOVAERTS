export default function AboutPage() {
  return (
    <div className="page-shell grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-ink/45">About</p>
        <h1 className="font-serif text-5xl text-ink">
          A practice centered on stillness, trace, and spatial attention.
        </h1>
        <p className="text-base leading-8 text-ink/68">
          Use this page for a concise bio, artistic context, and the questions that guide the work.
        </p>
      </div>
      <div className="surface-panel p-7 md:p-9">
        <div className="space-y-6 text-base leading-8 text-ink/70">
          <p>
            Ellen Goovaerts works with photography as a way of listening to atmosphere, repetition,
            and fragile transitions within everyday space.
          </p>
          <p>
            The images often move between architecture, gesture, and absence, allowing sequences to
            build meaning gradually rather than through immediate narration.
          </p>
          <p>
            This page can later expand with a longer artist statement, publications, residencies,
            or selected press excerpts.
          </p>
        </div>
      </div>
    </div>
  );
}
