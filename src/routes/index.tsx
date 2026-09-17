import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillList } from "@/components/SkillList";
import { projects } from "@/lib/projects";
import portrait from "../assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lidia Dobos — Graphic Designer" },
      {
        name: "description",
        content:
          "Portfolio of Lidia Dobos, a graphic designer with 5+ years of experience specialising in food photography, brand visuals, and AI-assisted design.",
      },
      { property: "og:title", content: "Lidia Dobos — Graphic Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Lidia Dobos, a graphic designer with 5+ years of experience specialising in food photography, brand visuals, and AI-assisted design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container-tight py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Graphic Designer
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
              Clear ideas, crafted visuals, thoughtful detail.
            </h1>
            <p className="max-w-md text-lg text-muted-foreground">
              I'm Lidia Dobos, a graphic designer based in Europe. I turn briefs into food
              photography, brand visuals, marketing assets, and AI-assisted design work.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/work">View selected work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-4 border-border md:max-w-md">
            <img
              src={portrait}
              alt="Lidia Dobos, graphic designer"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-border bg-background py-20">
        <div className="container-tight">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Selected work
              </p>
              <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                Projects that show the full process
              </h2>
            </div>
            <Link to="/work" className="text-sm font-medium text-primary hover:underline">
              See all work →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container-tight py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Skills & tools
        </p>
        <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
          What I bring to a team
        </h2>
        <div className="mt-12">
          <SkillList />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary py-20">
        <div className="container-tight text-center">
          <h2 className="font-serif text-3xl text-secondary-foreground md:text-4xl">
            Let's make something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I'm currently open to graphic design roles and freelance projects. If you need food
            photography, brand visuals, or marketing assets, I'd love to hear from you.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
