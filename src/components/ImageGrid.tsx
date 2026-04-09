import Image from "next/image";

import type { ProjectImage } from "@/types/project";

type ImageGridProps = {
  images: ProjectImage[];
};

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid gap-6 md:gap-8">
      {images.map((image) => (
        <article key={image.src} className="overflow-hidden border border-ink/10 bg-white/70">
          <div className="relative min-h-[24rem] md:min-h-[28rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
