import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <div className="page-shell">
      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
