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
      className="group grid gap-5 rounded-[1.5rem] border border-ink/10 bg-white/70 p-4 transition duration-300 hover:border-ink/20 md:p-5"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-mist/30">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 40vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.01]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(17,20,19,0),rgba(17,20,19,0.48))] px-4 pb-4 pt-10">
          <p className="max-w-[14rem] text-[11px] uppercase tracking-[0.22em] text-white/82">
            {project.description}
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-serif text-[1.65rem] leading-none text-ink transition duration-300 group-hover:text-clay">
            {project.title}
          </h3>
          <p className="text-sm leading-7 text-ink/62">{project.medium ?? "Fotografie"}</p>
        </div>
        <p className="pt-1 text-xs uppercase tracking-[0.2em] text-ink/45">{project.year}</p>
      </div>
    </Link>
  );
}
