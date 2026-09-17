import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SkillList } from "@/components/SkillList";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lidia Dobos" },
      {
        name: "description",
        content:
          "Learn about Lidia Dobos, a graphic designer with 5+ years of experience in food photography, brand identity, menu design, and AI-assisted visuals.",
      },
      { property: "og:title", content: "About — Lidia Dobos" },
      {
        property: "og:description",
        content:
          "Learn about Lidia Dobos, a graphic designer with 5+ years of experience in food photography, brand identity, menu design, and AI-assisted visuals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const timeline = [
  {
    period: "2020 – present",
    title: "Freelance Graphic Designer",
    place: "Self-employed",
    description:
      "Created food photography, brand visuals, menu designs, and social content for small businesses and food brands across Europe.",
  },
  {
    period: "2022 – 2024",
    title: "Visual Design Intern",
    place: "Studio Mara",
    description:
      "Supported brand projects for hospitality and retail clients. Produced social templates, packaging artwork, and presentation decks.",
  },
  {
    period: "2021 – 2025",
    title: "BA (Hons) Graphic Design",
    place: "University of Applied Arts, Europe",
    description:
      "Graduated with a focus on visual identity, editorial design, and digital illustration. Final project explored AI-assisted art direction.",
  },
];

function About() {
  return (
    <>
      <section className="container-tight py-20">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">
            Designer with a love for craft and clarity.
          </h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm Lidia Dobos, a graphic designer with 5+ years of experience, based in Europe. I
              collaborate comfortably with designers, PMMs, and stakeholders across time zones.
            </p>
            <p>
              I have formal training in graphic design and use Canva, CorelDRAW, Adobe Photoshop,
              and Adobe Illustrator daily. I enjoy building vector illustrations from scratch,
              shaping brand identities, and combining generative AI tools with careful art
              direction.
            </p>
            <p>
              Outside of client work, I'm also involved with{" "}
              <a
                href="https://www.clarityroom.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-primary underline-offset-4 hover:text-primary"
              >
                Clarity Room
              </a>{" "}
              and{" "}
              <a
                href="https://itpex.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-primary underline-offset-4 hover:text-primary"
              >
                ITPEX
              </a>
              — two projects where I keep learning about brand, web, and digital product design.
            </p>
            <p>
              I care about colour, composition, and hierarchy, but also about deadlines, feedback,
              and the small details that make a design feel complete. I'm open to full-time roles
              and collaborations where I can keep learning while contributing real craft.
            </p>
          </div>
          <Button asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>

      <Separator />

      <section className="container-tight py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Skills & tools
        </p>
        <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">How I work</h2>
        <div className="mt-12">
          <SkillList />
        </div>
      </section>
    </>
  );
}
