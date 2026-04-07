import { ProjectCard } from "@/components/ProjectCard";
import { TextBlock } from "@/components/TextBlock";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <div className="page-shell flex flex-col gap-14">
      <TextBlock
        eyebrow="Portfolio"
        title="Series arranged with room to breathe."
        body="This overview avoids the feel of a commercial image grid. Each project appears as a distinct body of work, with a single entry point and enough white space to keep the viewing experience calm."
      />
      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
