import { notFound } from "next/navigation";

import { ImageGrid } from "@/components/ImageGrid";
import { Lightbox } from "@/components/Lightbox";
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
    <div className="page-shell flex max-w-5xl flex-col gap-12">
      <ProjectHeader
        title={project.title}
        year={project.year}
        description={project.description}
        medium={project.medium}
        dimensions={project.dimensions}
        location={project.location}
      />
      <ImageGrid images={project.images} />
      <Lightbox />
    </div>
  );
}
