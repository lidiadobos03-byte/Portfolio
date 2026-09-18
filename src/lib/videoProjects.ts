// Place the matching files from /src/assets/videos/ as imported below.
// Video + poster pairs live together so each import stays obvious.
import podcastSplitScreenPoster from "../assets/videos/poster-podcast-split-screen.jpg";
import podcastSplitScreenVideo from "../assets/videos/podcast-split-screen.mp4";
import aiCinematicPortraitPoster from "../assets/videos/poster-ai-cinematic-portrait.jpg";
import aiCinematicPortraitVideo from "../assets/videos/ai-cinematic-portrait.mp4";
import editorialFashionFilmPoster from "../assets/videos/poster-editorial-fashion-film.jpg";
import editorialFashionFilmVideo from "../assets/videos/editorial-fashion-film.mp4";
import vlogSelfieEditPoster from "../assets/videos/poster-vlog-selfie-edit.jpg";
import vlogSelfieEditVideo from "../assets/videos/vlog-selfie-edit.mp4";
import facelessMovieEditPoster from "../assets/videos/poster-faceless-movie-edit.jpg";
import facelessMovieEditVideo from "../assets/videos/faceless-movie-edit.mp4";
import editorBtsPoster from "../assets/videos/poster-editor-bts-motivational.jpg";
import editorBtsVideo from "../assets/videos/editor-bts-motivational.mp4";
import aerialDriftCarPoster from "../assets/videos/poster-aerial-drift-car.jpg";
import aerialDriftCarVideo from "../assets/videos/aerial-drift-car.mp4";
import businessAdTemplatePoster from "../assets/videos/poster-business-ad-template.jpg";
import businessAdTemplateVideo from "../assets/videos/business-ad-template.mp4";
import neonCinematicPortraitPoster from "../assets/videos/poster-neon-cinematic-portrait.jpg";
import neonCinematicPortraitVideo from "../assets/videos/neon-cinematic-portrait.mp4";
import realEstateWalkthroughPoster from "../assets/videos/poster-real-estate-walkthrough.jpg";
import realEstateWalkthroughVideo from "../assets/videos/real-estate-walkthrough.mp4";
import podcastSplitScreen2Poster from "../assets/videos/poster-podcast-split-screen-2.jpg";
import podcastSplitScreen2Video from "../assets/videos/podcast-split-screen-2.mp4";
import talkingHeadChannelPromoPoster from "../assets/videos/poster-talking-head-channel-promo.jpg";
import talkingHeadChannelPromoVideo from "../assets/videos/talking-head-channel-promo.mp4";
import cinematicSceneEditPoster from "../assets/videos/poster-cinematic-scene-edit.jpg";
import cinematicSceneEditVideo from "../assets/videos/cinematic-scene-edit.mp4";
import cocktailProductShotPoster from "../assets/videos/poster-cocktail-product-shot.jpg";
import cocktailProductShotVideo from "../assets/videos/cocktail-product-shot.mp4";

export type VideoCategory = "Social Edits" | "AI-Generated" | "Fashion Film" | "Faceless Content";

export interface VideoProject {
  slug: string;
  title: string;
  category: VideoCategory;
  duration: string;
  /** CSS aspect-ratio value as "width/height", e.g. "9/16", "1/1", "16/9", "21/9" */
  aspect: string;
  poster: string;
  video: string;
  summary: string;
}

export const videoCategories: VideoCategory[] = [
  "Social Edits",
  "AI-Generated",
  "Fashion Film",
  "Faceless Content",
];

export const videoProjects: VideoProject[] = [
  {
    slug: "podcast-split-screen-2",
    title: "Podcast Split-Screen Cut II",
    category: "Social Edits",
    duration: "0:43",
    aspect: "9/16",
    poster: podcastSplitScreen2Poster,
    video: podcastSplitScreen2Video,
    summary:
      "Another split-screen podcast repurpose with word-by-word animated captions, cut for rhythm and punch across the two hosts' reactions.",
  },
  {
    slug: "talking-head-channel-promo",
    title: "Channel Promo, Talking Head",
    category: "Social Edits",
    duration: "0:45",
    aspect: "9/16",
    poster: talkingHeadChannelPromoPoster,
    video: talkingHeadChannelPromoVideo,
    summary:
      "A direct-to-camera creator clip with moody purple lighting and bold caption cards, edited to promote a channel with a confident, personal tone.",
  },
  {
    slug: "podcast-split-screen",
    title: "Podcast Split-Screen Cut",
    category: "Social Edits",
    duration: "0:59",
    aspect: "9/16",
    poster: podcastSplitScreenPoster,
    video: podcastSplitScreenVideo,
    summary:
      "A dual-host podcast moment re-cut into a vertical split-screen short with punchy text overlays, built for repurposing long-form audio into scroll-stopping social clips.",
  },
  {
    slug: "ai-cinematic-portrait",
    title: "AI Cinematic Portrait",
    category: "AI-Generated",
    duration: "0:19",
    aspect: "9/16",
    poster: aiCinematicPortraitPoster,
    video: aiCinematicPortraitVideo,
    summary:
      "An AI-generated cinematic portrait piece exploring mood, light, and a skyline backdrop — edited and graded for a moody, editorial feel.",
  },
  {
    slug: "editorial-fashion-film",
    title: "Editorial Fashion Film",
    category: "Fashion Film",
    duration: "0:11",
    aspect: "9/16",
    poster: editorialFashionFilmPoster,
    video: editorialFashionFilmVideo,
    summary:
      "A short editorial fashion clip with warm, golden-hour tones, cut for a fashion brand's social presence.",
  },
  {
    slug: "vlog-selfie-edit",
    title: "Vlog Selfie Edit",
    category: "Social Edits",
    duration: "0:10",
    aspect: "9/16",
    poster: vlogSelfieEditPoster,
    video: vlogSelfieEditVideo,
    summary:
      "A casual, handheld vlog-style clip edited with natural pacing to keep a personal, authentic feel for creator content.",
  },
  {
    slug: "faceless-movie-edit",
    title: "Faceless-Style Movie Edit",
    category: "Faceless Content",
    duration: "0:18",
    aspect: "1/1",
    poster: facelessMovieEditPoster,
    video: facelessMovieEditVideo,
    summary:
      "A square-format faceless-style edit built from film footage, paired with voiceover for narrative-driven social storytelling.",
  },
  {
    slug: "aerial-drift-car",
    title: "Mountain Road Drift",
    category: "AI-Generated",
    duration: "0:16",
    aspect: "9/16",
    poster: aerialDriftCarPoster,
    video: aerialDriftCarVideo,
    summary:
      "A sweeping aerial shot of a car drifting through an autumn mountain switchback, graded for a cinematic, high-production automotive feel.",
  },
  {
    slug: "business-ad-template",
    title: "\"Your Business\" Ad Template",
    category: "AI-Generated",
    duration: "0:12",
    aspect: "9/16",
    poster: businessAdTemplatePoster,
    video: businessAdTemplateVideo,
    summary:
      "A clean, customizable ad template built around a delivery-truck shot — designed as a drop-in placeholder for a brand's own logo and message.",
  },
  {
    slug: "neon-cinematic-portrait",
    title: "Neon Nights Portrait",
    category: "AI-Generated",
    duration: "0:26",
    aspect: "21/9",
    poster: neonCinematicPortraitPoster,
    video: neonCinematicPortraitVideo,
    summary:
      "A widescreen, cinemascope-style portrait bathed in pink and cyan neon, cut for mood and atmosphere over narrative.",
  },
  {
    slug: "real-estate-walkthrough",
    title: "Living Room Walkthrough",
    category: "AI-Generated",
    duration: "0:09",
    aspect: "16/9",
    poster: realEstateWalkthroughPoster,
    video: realEstateWalkthroughVideo,
    summary:
      "A smooth interior walkthrough of a bright living room and kitchen, edited for a real-estate listing's fast-paced visual tour.",
  },
  {
    slug: "cinematic-scene-edit",
    title: "Cinematic Scene Edit",
    category: "Faceless Content",
    duration: "0:08",
    aspect: "9/16",
    poster: cinematicSceneEditPoster,
    video: cinematicSceneEditVideo,
    summary:
      "A short, high-energy cut built from existing film footage, paced for maximum impact in a faceless-style social edit.",
  },
  {
    slug: "cocktail-product-shot",
    title: "Cocktail Product Shot",
    category: "AI-Generated",
    duration: "0:22",
    aspect: "9/16",
    poster: cocktailProductShotPoster,
    video: cocktailProductShotVideo,
    summary:
      "A moody, bokeh-lit product shot of a garnished cocktail, styled for a bar or restaurant's social and menu content.",
  },
];

export function getVideoBySlug(slug: string): VideoProject | undefined {
  return videoProjects.find((v) => v.slug === slug);
}
