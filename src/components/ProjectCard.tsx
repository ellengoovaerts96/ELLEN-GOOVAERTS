import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group grid gap-5 border border-ink/10 bg-white/70 p-4 transition duration-300 hover:border-ink/20 md:p-5"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.01]"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-serif text-[1.65rem] leading-none text-ink transition duration-300 group-hover:text-clay">
            {project.title}
          </h3>
          <p className="max-w-sm text-sm leading-7 text-ink/62">{project.medium ?? "Photography"}</p>
        </div>
        <p className="pt-1 text-xs uppercase tracking-[0.2em] text-ink/45">{project.year}</p>
      </div>
    </Link>
  );
}
