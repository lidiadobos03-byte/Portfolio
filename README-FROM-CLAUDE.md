# Lidia Dobos portfolio — full local copy

This is the complete project as I have it, assembled from everything you
uploaded across our conversation plus every change I made along the way.
Unzip it and it should drop in as your `src/` + root config, matching
your real repo's structure.

## ⚠️ Missing image files — read this first

A handful of images referenced in `src/lib/projects.ts` were never
uploaded to me — only their file *names* existed in the code I saw. Your
real repo already has these files (the site worked before I touched it),
I simply never received copies of them, so they are **not included** in
this zip:

```
src/assets/projects/crispy-classic-detail.jpg
src/assets/projects/green-detox-detail.jpg
src/assets/projects/margherita-napoli-detail.jpg
src/assets/projects/avo-egg-toast-detail.jpg
src/assets/projects/spinach-noodle-detail.jpg
src/assets/projects/garden-rice-cover.jpg
src/assets/projects/flame-tower-detail.jpg
src/assets/projects/neon-stack-detail.jpg
src/assets/projects/toxic-veggie-cover.jpg
```

If you unzip this over a fresh clone of your repo (rather than merging
into your existing working copy), grab these 9 files from your existing
project first, or those case-study pages will show broken images.

Everything else in `assets/` is included and ready to use.

## What's in here

**Unchanged from your original upload:** all of `components/ui/*`,
`ProjectCard.tsx`, `__root.tsx`, `contact.tsx`, `index.tsx`, `work.tsx`,
`work.index.tsx`, `work.$slug.tsx`, `server.ts`, `start.ts`, `router.tsx`,
`routeTree.gen.ts` (will regenerate on `dev` anyway), `styles.css`, the
`lib/error-*` and `lovable-error-reporting.ts` files, `use-mobile.tsx`,
`utils.ts`, and all root config files.

**Updated during our conversation:**
- `routes/about.tsx` — large portrait removed, bio now full-width,
  tools sentence updated to Canva/CorelDRAW/Photoshop/Illustrator
- `components/SkillList.tsx` — "Design & illustration" group updated to
  match (also affects the Home page, which reuses this component)
- `components/ContactForm.tsx` — real Zod validation + `mailto:` submit
- `components/Footer.tsx` — real Email/LinkedIn/Instagram links
- `components/Header.tsx` — added the "Video" nav link
- `lib/projects.ts` — 3 image-less projects removed, 3 new ones added
  (AI Fashion, Summer Reads, Wellness App) — 12 total
- `lib/githubProjects.ts` — Clarity Room and ITPEX now link to their live
  sites instead of just their GitHub repos

**New:**
- `routes/video.tsx`, `components/VideoCard.tsx`, `lib/videoProjects.ts`
  — the new `/video` page with 14 projects
- `assets/videos/` — all 14 compressed clips + poster images
- `assets/projects/ai-fashion-*`, `summer-reads-*`, `wellness-app-*`

## Running it

Same as your existing README: `bun i` then `bun run dev` (or `npm i` /
`npm run dev` if you're not using bun locally). `routeTree.gen.ts` will
regenerate automatically once the dev server sees the new `video.tsx`
route file.
