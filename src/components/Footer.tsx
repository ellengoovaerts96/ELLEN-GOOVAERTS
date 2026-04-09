export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white text-sm text-ink/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-serif tracking-[0.18em] text-ink">ELLEN GOOVAERTS</p>
        <div className="flex items-center gap-4 text-ink/70">
          <a
            href="mailto:goovaerts.ellen@telenet.be"
            aria-label="Email"
            className="transition duration-300 hover:text-clay"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6.75h18v10.5H3z" />
              <path d="m4.5 8.25 7.5 6 7.5-6" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/goovaerts.ellen"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition duration-300 hover:text-clay"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
