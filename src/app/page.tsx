import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
      <section className="overflow-hidden border border-ink/10 bg-white">
        <div className="relative min-h-[24rem] sm:min-h-[29rem] md:min-h-[34rem] lg:min-h-[38rem] lg:max-h-[43rem]">
          <Image
            src="/images/HERO_IMAGE-1.webp"
            alt="Hero image"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
      </section>
    </div>
  );
}
