import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
      <section className="mx-auto w-full max-w-5xl overflow-hidden border border-ink/10 bg-white">
        <div className="relative min-h-[18rem] sm:min-h-[22rem] md:min-h-[27rem] lg:min-h-[31rem] lg:max-h-[35rem]">
          <Image
            src="/images/HERO_IMAGE-DEF.jpg"
            alt="Hero image"
            fill
            priority
            sizes="(min-width: 1280px) 64rem, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 3rem)"
            className="object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}
