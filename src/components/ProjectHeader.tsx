type ProjectHeaderProps = {
  title: string;
  year: string;
  description: string;
  className?: string;
};

export function ProjectHeader({
  title,
  year,
  description,
  className
}: ProjectHeaderProps) {
  return (
    <div className={className ?? "grid gap-10 border-b border-ink/10 pb-10 md:grid-cols-[1.1fr_0.9fr] md:pb-12"}>
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-ink/50">Project</p>
        <h1 className="font-serif text-[2.4rem] leading-[0.98] text-ink md:text-[4.25rem]">{title}</h1>
        <p className="text-sm uppercase tracking-[0.18em] text-ink/45">{year}</p>
      </div>
      <div className="space-y-4">
        <p className="text-[1.02rem] leading-8 text-ink/68">{description}</p>
      </div>
    </div>
  );
}
