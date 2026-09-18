import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { VideoCard } from "@/components/VideoCard";
import { videoProjects, videoCategories, type VideoCategory } from "@/lib/videoProjects";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Video Editing — Lidia Dobos" },
      {
        name: "description",
        content:
          "Video editing work by Lidia Dobos: social edits, AI-generated pieces, fashion film, and faceless-style content.",
      },
      { property: "og:title", content: "Video Editing — Lidia Dobos" },
      {
        property: "og:description",
        content:
          "Video editing work by Lidia Dobos: social edits, AI-generated pieces, fashion film, and faceless-style content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VideoPage,
});

function VideoPage() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "All">("All");

  const featured = videoProjects.slice(0, 4);
  const filtered =
    activeCategory === "All"
      ? videoProjects
      : videoProjects.filter((v) => v.category === activeCategory);

  return (
    <section className="container-tight py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Video editing
      </p>
      <h1 className="mt-2 font-serif text-4xl text-foreground md:text-5xl">Video</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A selection of social edits, AI-assisted pieces, and short-form video work — cut for
        pacing, hook, and platform-native feel.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {featured.map((project) => (
          <VideoCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("All")}
        >
          All
        </Button>
        {videoCategories.map((category) => (
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
        {filtered.slice(4).map((project) => (
          <VideoCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
