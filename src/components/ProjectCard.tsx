import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.coverImage}
          alt={`Cover image for ${project.title}`}
          width={1200}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-xl leading-tight text-card-foreground group-hover:text-primary">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
        </div>
        <Badge
          variant="secondary"
          className="mt-3 bg-secondary text-secondary-foreground hover:bg-secondary"
        >
          {project.category}
        </Badge>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{project.summary}</p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
          View case study
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
