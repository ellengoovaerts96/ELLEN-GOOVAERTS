import { notFound } from "next/navigation";

import { ImageGrid } from "@/components/ImageGrid";
import { ProjectHeader } from "@/components/ProjectHeader";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(18rem,0.38fr)] lg:items-start">
        <div className="contents lg:order-2 lg:block lg:sticky lg:top-28">
          <ProjectHeader
            title={project.title}
            year={project.year}
            description={project.description}
            className="space-y-8 border-b border-ink/10 pb-10 lg:border-b-0 lg:pb-0"
          />
          {project.sidebarText ? (
            <div className="order-3 border-t border-ink/10 pt-8 lg:mt-10">
              <div className="max-w-md space-y-5 text-base leading-8 text-ink/72">
                {project.sidebarText.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="order-2 lg:order-1">
          <ImageGrid images={project.images} />
        </div>
      </div>
    </div>
  );
}
