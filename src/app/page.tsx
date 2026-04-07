import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { TextBlock } from "@/components/TextBlock";
import { projects } from "@/data/projects";
import { formatProjectCount } from "@/lib/utils";

export default function HomePage() {
  const projectCount = formatProjectCount(projects.length);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page-shell flex flex-col gap-20">
      <section className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="space-y-7 md:space-y-8">
          <p className="text-xs uppercase tracking-[0.28em] text-ink/45">Art Photography</p>
          <h1 className="max-w-2xl font-serif text-4xl leading-[1.02] text-ink sm:text-[2.9rem] md:text-[4.2rem]">
            A quiet space for images, sequences, and attentive looking.
          </h1>
          <p className="max-w-lg text-[1.02rem] leading-8 text-ink/68">
            This portfolio is structured as a digital exhibition: minimal navigation, strong image
            presence, and texts that deepen rather than distract.
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-ink/45">
            {projectCount} ready in the local content structure
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio" className="button-primary">
              View portfolio
            </Link>
            <Link href="/about" className="button-secondary">
              About
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/70">
          <div className="relative min-h-[22rem] md:min-h-[28rem]">
            <Image
              src={projects[0]?.coverImage}
              alt={projects[0]?.coverAlt}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(17,20,19,0),rgba(17,20,19,0.5))] px-6 pb-6 pt-16 text-paper md:px-8 md:pb-8">
              <p className="text-xs uppercase tracking-[0.28em] text-paper/75">Featured series</p>
              <h2 className="mt-2 font-serif text-3xl md:text-[2.1rem]">{projects[0]?.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-7 text-paper/82">
                A restrained hero image that can later be replaced by a final selected photograph.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
        <TextBlock
          eyebrow="Approach"
          title="Built around series, not isolated images."
          body="The site gives each project its own pace. Overview pages stay airy and restrained, while project pages can hold images, short texts, and exhibition details in a considered order."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
