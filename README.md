# Rahul Bansal — Portfolio (Next.js)

A creative, multi-page developer portfolio inspired by wadi3.codes: animated page
transitions, light/dark theme, a full-screen menu overlay, a custom cursor,
draggable project cards, project case-study pages, and a Mad-Libs contact form.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis · next-themes

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Build: `npm run build && npm start`. Deploys as-is to Vercel or Render.

> Requires Node 18.18+ (Node 20+ recommended). First `npm install` needs internet
> (Next also downloads the Google fonts at build time).

## Structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, providers, nav, footer, metadata
│   ├── template.tsx          # per-route enter animation
│   ├── globals.css           # Tailwind v4 tokens + light/dark variables
│   ├── loading.tsx · not-found.tsx
│   ├── page.tsx              # Home (Hero + Selected Work)
│   ├── projects/page.tsx     # Featured list + skill-building table + draggable cards
│   ├── projects/[slug]/page.tsx   # Case study (generated from data)
│   ├── about/page.tsx        # Narrative + stack + experience + education
│   └── contact/page.tsx      # Mad-Libs form + direct details
├── components/
│   ├── providers/  ThemeProvider · SmoothScroll (Lenis)
│   ├── layout/     Nav (+ menu overlay) · Footer · Cursor
│   ├── ui/         ThemeToggle · Magnetic · Reveal · Thumb
│   └── sections/   Hero · SelectedWork · DraggableCards · MadLibsForm
├── data/content.ts           # ALL copy + projects (edit here)
└── lib/cn.ts
```

## Editing

- **Content & projects:** `src/data/content.ts`. Add an object to `projects` and a
  case-study page is generated automatically at `/projects/<slug>`.
- **Accent + theme colors:** the CSS variables in `src/app/globals.css`
  (`--accent`, `--background`, `--foreground`, …) for both `:root` (light) and
  `.dark`.
- **Fonts:** swap the `next/font` imports in `src/app/layout.tsx`.
- **Résumé:** drop `resume.pdf` into `/public` (linked from content).
- **Project images:** replace the `<Thumb>` placeholders with `next/image` once you
  add screenshots under `/public/projects`.

## Notes

- Page transitions are enter-only (via `template.tsx`) — the most reliable pattern in
  the App Router. The menu overlay uses a full clip-path animation.
- Everything respects `prefers-reduced-motion`; the custom cursor only turns on for
  fine-pointer devices.
