import Link from "next/link";

const links = [
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2.5 md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/" className="transition duration-300 hover:text-clay">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-base font-bold tracking-[0.28em] text-ink md:text-lg">
              ELLEN GOOVAERTS
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-ink/35 md:text-[11px]">
              Art Photography
            </span>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm uppercase tracking-[0.18em] text-ink/70">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition duration-300 hover:text-clay after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-clay after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
