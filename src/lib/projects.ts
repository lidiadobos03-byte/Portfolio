import crispyClassicCover from "../assets/projects/crispy-classic-cover.jpg";
const crispyClassicDetail = crispyClassicCover;
import greenDetoxCover from "../assets/projects/green-detox-cover.jpg";
const greenDetoxDetail = greenDetoxCover;
import margheritaNapoliCover from "../assets/projects/margherita-napoli-cover.jpg";
const margheritaNapoliDetail = margheritaNapoliCover;
import avoEggToastCover from "../assets/projects/avo-egg-toast-cover.jpg";
const avoEggToastDetail = avoEggToastCover;
import spinachNoodleCover from "../assets/projects/spinach-noodle-cover.jpg";
const spinachNoodleDetail = spinachNoodleCover;
import gardenRiceDetail from "../assets/projects/garden-rice-detail.jpg";
const gardenRiceCover = gardenRiceDetail;
import flameTowerCover from "../assets/projects/flame-tower-cover.jpg";
const flameTowerDetail = flameTowerCover;
import neonStackCover from "../assets/projects/neon-stack-cover.jpg";
const neonStackDetail = neonStackCover;
import toxicVeggieDetail from "../assets/projects/toxic-veggie-detail.jpg";
const toxicVeggieCover = toxicVeggieDetail;
import aiFashionCover from "../assets/projects/ai-fashion-cover.jpg";
import aiFashionDetail from "../assets/projects/ai-fashion-detail.jpg";
import summerReadsCover from "../assets/projects/summer-reads-cover.jpg";
import summerReadsDetail from "../assets/projects/summer-reads-detail.jpg";
import wellnessAppCover from "../assets/projects/wellness-app-cover.jpg";
import wellnessAppDetail from "../assets/projects/wellness-app-detail.jpg";

export type ProjectCategory =
  | "Food photography"
  | "Food styling"
  | "Menu design"
  | "Social media"
  | "Art direction"
  | "Product shot"
  | "App design";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  coverImage: string;
  detailImage: string;
  brief: string;
  process: string;
  tools: string[];
  outcome: string;
}

export const categories: ProjectCategory[] = [
  "Food photography",
  "Food styling",
  "Menu design",
  "Social media",
  "Art direction",
  "Product shot",
  "App design",
];

export const projects: Project[] = [
  {
    slug: "crispy-classic-menu-hero",
    title: "Crispy Classic Menu Hero",
    category: "Menu design",
    year: "2025",
    summary:
      "A fried-chicken combo hero built as the anchor image for a fast-casual menu spread and digital ordering board.",
    coverImage: crispyClassicCover,
    detailImage: crispyClassicDetail,
    brief:
      "Refresh a fried-chicken restaurant's menu board with a single hero image that communicates crunch, value, and appetite appeal.",
    process:
      "I arranged the chicken, coleslaw, and drink into a balanced plate composition, then lit from above to keep the coating texture visible. The final image was masked and retouched for menu layout integration.",
    tools: ["Adobe Photoshop", "Canva", "Menu layout"],
    outcome:
      "The new menu board rolled out across three locations and improved order value at the counter.",
  },
  {
    slug: "green-detox-smoothie",
    title: "Green Detox Smoothie",
    category: "Product shot",
    year: "2024",
    summary:
      "A fresh lifestyle beverage shot for a health-focused cafe, emphasising natural ingredients and clean green tones.",
    coverImage: greenDetoxCover,
    detailImage: greenDetoxDetail,
    brief:
      "Create an inviting product image for a detox smoothie that would stand out in a wellness-focused social campaign.",
    process:
      "I used backlit greens and glassware with a striped straw to add personality. The palette was kept cool and fresh, with selective colour grading to make the avocado and spinach tones feel natural.",
    tools: ["Adobe Photoshop", "Canva", "Food styling"],
    outcome:
      "Used in the cafe's spring detox campaign and as a hero image on their menu boards and website landing page.",
  },
  {
    slug: "margherita-napoli",
    title: "Margherita Napoli",
    category: "Food photography",
    year: "2025",
    summary:
      "A rustic, sunlit Margherita pizza shot designed to evoke an authentic Italian trattoria atmosphere.",
    coverImage: margheritaNapoliCover,
    detailImage: margheritaNapoliDetail,
    brief:
      "Capture a classic Margherita for a neighbourhood pizzeria's rebrand, conveying freshness, simplicity, and warmth.",
    process:
      "I styled the scene with ripe tomatoes and basil in the background, then used soft natural light to keep the colours bright and appetising. The final image was lightly retouched to enhance the char on the crust.",
    tools: ["Adobe Photoshop", "Canva", "Natural-light setup"],
    outcome:
      "The photograph became a key visual in the pizzeria's rebrand and was used across menus, flyers, and social content.",
  },
  {
    slug: "avo-egg-toast",
    title: "Avo & Egg Toast",
    category: "Social media",
    year: "2024",
    summary:
      "A brunch-style social image balancing comfort and freshness, made for Instagram carousels and cafe promotions.",
    coverImage: avoEggToastCover,
    detailImage: avoEggToastDetail,
    brief:
      "Produce a shareable brunch image that communicates quality ingredients and a relaxed weekend mood.",
    process:
      "I built the composition on a warm wooden board with loose herbs and seeds for movement. Soft, directional light brought out the runny yolk and avocado texture, and I graded for a warm, inviting feed aesthetic.",
    tools: ["Adobe Photoshop", "Canva", "Social-media cropping"],
    outcome:
      "The post reached high engagement in the cafe's weekend-brunch campaign and was reused for story ads and email headers.",
  },
  {
    slug: "spinach-noodle-bowl",
    title: "Spinach Noodle Bowl",
    category: "Food styling",
    year: "2025",
    summary:
      "A styled bowl of green vegetable broth noodles, combining Asian comfort-food cues with a polished editorial look.",
    coverImage: spinachNoodleCover,
    detailImage: spinachNoodleDetail,
    brief:
      "Create an editorial-style bowl shot for a noodle bar's menu and online delivery thumbnails.",
    process:
      "I layered the noodles and vegetables to reveal texture, then added brass cutlery and small ingredient bowls to frame the hero. Final colour work kept the greens rich without looking artificial.",
    tools: ["Adobe Photoshop", "CorelDRAW", "Prop styling"],
    outcome:
      "The image anchored the noodle bar's menu redesign and was used across delivery-platform thumbnails.",
  },
  {
    slug: "garden-rice-bowl",
    title: "Garden Rice Bowl",
    category: "Product shot",
    year: "2025",
    summary:
      "A colourful top-down rice bowl image for a healthy-food brand, highlighting freshness and variety.",
    coverImage: gardenRiceCover,
    detailImage: gardenRiceDetail,
    brief:
      "Create a clean, vibrant product shot for a healthy bowl concept that would work on packaging and social feeds.",
    process:
      "I used a top-down angle to show the ingredient distribution, surrounding the bowl with raw vegetables to reinforce freshness. Colour grading kept each vegetable distinct while harmonising the overall palette.",
    tools: ["Adobe Photoshop", "Canva", "Overhead styling"],
    outcome: "Used across the brand's website, printed menus, and Instagram carousel campaigns.",
  },
  {
    slug: "flame-tower-burger",
    title: "Flame Tower Burger",
    category: "Art direction",
    year: "2024",
    summary:
      "A dramatic flame-grilled burger concept built for poster advertising and bold social cut-through.",
    coverImage: flameTowerCover,
    detailImage: flameTowerDetail,
    brief:
      "Develop a high-impact burger poster that communicates heat, size, and indulgence for a limited-time offer.",
    process:
      "I directed the lighting to catch the sauce drips and grill marks, then composited fire and smoke elements around the burger to create energy. Final grading pushed contrast and warmth for print impact.",
    tools: ["Adobe Photoshop", "Canva", "Compositing"],
    outcome:
      "The poster drove strong uptake in the limited-time offer and became a reference for the brand's bolder visual direction.",
  },
  {
    slug: "neon-stack-burger",
    title: "Neon Stack Burger",
    category: "Art direction",
    year: "2025",
    summary:
      "A neon-lit, stylised burger study exploring colour, reflection, and contemporary fast-food aesthetics.",
    coverImage: neonStackCover,
    detailImage: neonStackDetail,
    brief:
      "Create an eye-catching experimental burger image for a brand's youth-focused social campaign.",
    process:
      "I combined studio photography with neon colour grading, adding glossy reflections and saturated pinks and oranges. The result feels digital and shareable while still showing real food detail.",
    tools: ["Adobe Photoshop", "CorelDRAW", "Colour grading"],
    outcome:
      "The image was used as a paid-social hero and helped lift engagement in the target demographic.",
  },
  {
    slug: "toxic-veggie-concept",
    title: "Toxic Veggie Concept",
    category: "Art direction",
    year: "2024",
    summary:
      "A surreal AI-assisted food concept exploring dramatic atmosphere, unexpected colour, and narrative visual storytelling.",
    coverImage: toxicVeggieCover,
    detailImage: toxicVeggieDetail,
    brief:
      "Produce a bold conceptual burger image that breaks away from standard food photography to generate conversation.",
    process:
      "I used AI-generated base imagery as a mood starting point, then heavily edited the composition, colour, and texture in Photoshop to create a cohesive, high-concept final piece with hand-finished details.",
    tools: ["Midjourney", "Adobe Photoshop", "Adobe Illustrator"],
    outcome:
      "The concept was shared widely as a portfolio piece and used internally as a creative direction reference.",
  },
  {
    slug: "ai-fashion-editorial",
    title: "Sustainable Fashion Editorial",
    category: "Art direction",
    year: "2025",
    summary:
      "An AI-assisted editorial portrait and moodboard exploring sustainable fashion through earthy tones, organic fabrics, and natural texture.",
    coverImage: aiFashionCover,
    detailImage: aiFashionDetail,
    brief:
      "Build a mood-driven visual concept for a sustainable fashion story, pairing an editorial portrait with a supporting moodboard that could guide a brand's art direction.",
    process:
      "I generated and refined an AI-assisted portrait styled around draped, earth-toned fabric against natural rock and dried botanicals, then built a companion moodboard collecting palette, texture, and key-elements references to communicate the direction as a cohesive system.",
    tools: ["Midjourney", "Adobe Photoshop", "Moodboarding"],
    outcome:
      "Used as a pitch concept for sustainable-fashion art direction, presenting both a hero image and the visual language behind it in one deliverable.",
  },
  {
    slug: "summer-reads-campaign",
    title: "Summer Reads Social Campaign",
    category: "Social media",
    year: "2025",
    summary:
      "A playful, sun-drenched Instagram carousel campaign for an independent bookshop, built around a seasonal \"more books, brighter days\" theme.",
    coverImage: summerReadsCover,
    detailImage: summerReadsDetail,
    brief:
      "Design a multi-slide Instagram carousel for a small bookshop's summer campaign, encouraging seasonal browsing while supporting the shop's independent, community feel.",
    process:
      "I built a five-slide carousel around bold, hand-drawn-style type and a warm coastal colour palette, varying each slide's illustration (books, storefront, beach scene) while keeping type treatment and colour consistent for a recognisable campaign look.",
    tools: ["Canva", "Adobe Illustrator", "Social-media templating"],
    outcome:
      "Delivered as a ready-to-post carousel set, giving the bookshop a cohesive seasonal campaign across a single Instagram post sequence.",
  },
  {
    slug: "wellness-habit-app",
    title: "Wellness Habit-Tracker App",
    category: "App design",
    year: "2025",
    summary:
      "A calm, sage-and-cream mobile app concept for daily habit tracking, covering key screens and a full UI component kit.",
    coverImage: wellnessAppCover,
    detailImage: wellnessAppDetail,
    brief:
      "Design a mobile wellness app concept centred on small daily habits — hydration, meditation, movement, sleep — with an interface that feels calm rather than gamified.",
    process:
      "I designed the core home and habit-detail screens first, then extracted a reusable component kit (progress rings, habit cards, navigation bar, calendar strip) with a documented colour palette and typography so the system could scale to further screens consistently.",
    tools: ["Figma", "UI/UX design", "Design systems"],
    outcome:
      "Produced a cohesive screen set and component library suitable for handoff to development, demonstrating end-to-end product design thinking.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
