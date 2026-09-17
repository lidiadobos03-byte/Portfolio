import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Lidia Dobos` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — Lidia Dobos` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: CaseStudy,
  notFoundComponent: CaseStudyNotFound,
});

function CaseStudy() {
  const project = Route.useLoaderData();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length]!;
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]!;

  return (
    <article className="pb-20">
      {/* Hero */}
      <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
        <img
          src={project.coverImage}
          alt={`Hero image for ${project.title}`}
          width={1200}
          height={675}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container-tight py-12">
        <Button variant="ghost" className="-ml-4 mb-6" asChild>
          <Link to="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to work
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <Badge variant="secondary">{project.category}</Badge>
            <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>

            <Separator className="my-10" />

            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-foreground">Brief</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.brief}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-foreground">Process</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.process}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-foreground">Outcome</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.outcome}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-8 lg:pt-14">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-card-foreground">Details</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="text-card-foreground">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="text-card-foreground">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Tools</dt>
                  <dd className="flex flex-wrap gap-2 pt-1">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <img
            src={project.detailImage}
            alt={`Detail image for ${project.title}`}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover"
          />
        </div>

        {/* Prev / Next */}
        <div className="mt-16 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
          <Button variant="outline" className="justify-start" asChild>
            <Link to="/work/$slug" params={{ slug: prevProject.slug }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="block text-left">
                <span className="block text-xs text-muted-foreground">Previous</span>
                <span className="block text-foreground">{prevProject.title}</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" className="justify-end" asChild>
            <Link to="/work/$slug" params={{ slug: nextProject.slug }}>
              <span className="block text-right">
                <span className="block text-xs text-muted-foreground">Next</span>
                <span className="block text-foreground">{nextProject.title}</span>
              </span>
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function CaseStudyNotFound() {
  return (
    <div className="container-tight py-32 text-center">
      <h1 className="font-serif text-4xl text-foreground">Project not found</h1>
      <p className="mt-4 text-muted-foreground">
        That case study doesn't exist. Browse the full portfolio instead.
      </p>
      <Button className="mt-8" asChild>
        <Link to="/work">View all work</Link>
      </Button>
    </div>
  );
}
