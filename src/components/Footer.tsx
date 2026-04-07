export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-8 text-sm text-ink/60 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="font-serif tracking-[0.18em] text-ink">ELLEN GOOVAERTS</p>
          <p>A restrained portfolio for art photography.</p>
        </div>
        <p className="max-w-md leading-6 text-ink/50">
          Built around sequences, spacious pacing, and a calm reading experience across devices.
        </p>
      </div>
    </footer>
  );
}
