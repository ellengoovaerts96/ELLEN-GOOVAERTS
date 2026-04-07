import Image from "next/image";

import type { ProjectImage } from "@/types/project";

type ImageGridProps = {
  images: ProjectImage[];
};

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid gap-12">
      {images.map((image, index) => (
        <article
          key={image.src}
          className={`grid gap-5 ${index % 2 === 0 ? "md:grid-cols-[1.25fr_0.75fr]" : "md:grid-cols-[0.75fr_1.25fr]"}`}
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/70">
            <div className="relative min-h-[24rem] md:min-h-[28rem]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end gap-3 px-2 pb-2 md:px-4">
            <p className="font-serif text-2xl leading-none text-ink">Still {index + 1}</p>
            <p className="text-base leading-8 text-ink/65">
              {image.caption ?? "Caption can be added here in a later content pass."}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
