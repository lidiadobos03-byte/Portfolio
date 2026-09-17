import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import type { VideoProject } from "@/lib/videoProjects";
// aspect accepts any "w/h" string (see VideoProject["aspect"])

interface VideoCardProps {
  project: VideoProject;
}

export function VideoCard({ project }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Give the <video> a tick to mount before calling play().
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card">
      <div
        className="relative overflow-hidden bg-muted"
        style={{ aspectRatio: project.aspect.replace("/", " / ") }}
      >
        {isPlaying ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.poster}
            controls
            playsInline
            className="h-full w-full object-cover"
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play ${project.title}`}
            className="group/play relative block h-full w-full cursor-pointer"
          >
            <img
              src={project.poster}
              alt={`Preview for ${project.title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover/play:bg-black/30">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-transform group-hover/play:scale-110">
                <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
              </span>
            </span>
            <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
              {project.duration}
            </span>
          </button>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-xl leading-tight text-card-foreground">
            {project.title}
          </h3>
        </div>
        <Badge
          variant="secondary"
          className="mt-3 bg-secondary text-secondary-foreground hover:bg-secondary"
        >
          {project.category}
        </Badge>
        <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
      </div>
    </div>
  );
}
