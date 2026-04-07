import Link from "next/link";

const links = [
  { href: "/portfolio", label: "Werk" },
  { href: "/about", label: "Over" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
        <Link
          href="/"
          className="font-serif text-base tracking-[0.28em] text-ink transition duration-300 hover:text-clay md:text-lg"
        >
          ELLEN GOOVAERTS
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm uppercase tracking-[0.18em] text-ink/70">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition duration-300 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-clay after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
