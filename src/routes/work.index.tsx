import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, categories, type ProjectCategory } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { githubProjects, githubProfileUrl } from "@/lib/githubProjects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Lidia Dobos" },
      {
        name: "description",
        content:
          "Selected graphic design, brand identity, vector illustration, packaging, and AI-assisted design projects by Lidia Dobos.",
      },
      { property: "og:title", content: "Work — Lidia Dobos" },
      {
        property: "og:description",
        content:
          "Selected graphic design, brand identity, vector illustration, packaging, and AI-assisted design projects by Lidia Dobos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="container-tight py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Portfolio
      </p>
      <h1 className="mt-2 font-serif text-4xl text-foreground md:text-5xl">Work</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A selection of food photography, menu design, product shots, social media visuals, and
        art-direction projects.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("All")}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-16">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          GitHub
        </p>
        <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">Built & shipped</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Design and front-end projects I build and publish myself — brand sites, interfaces, and
          smaller experiments.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {githubProjects.map((repo) => (
            <a
              key={repo.name}
              href={repo.liveUrl || repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg leading-tight text-card-foreground group-hover:text-primary">
                  {repo.title}
                </h3>
                <Github className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{repo.description}</p>
              <Badge variant="secondary" className="mt-4 w-fit">
                {repo.language}
              </Badge>
            </a>
          ))}
        </div>

        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Github className="h-4 w-4" />
          See all repositories on GitHub
        </a>
      </div>
    </section>
  );
}
