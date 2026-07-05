# scottsanford.com

Public fan-focused music site for Scott Sanford.

## Current site

This repo is a Next.js site prepared for Vercel. It includes:

- Home page with split artist positioning
- Music catalog page
- Individual song pages generated from catalog data
- Algebra of Light artist page
- C. Scott Sanford artist page
- Videos page
- About page
- Contact page placeholder

## Local setup

Install Node.js 22 LTS or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build check

```bash
npm run build
```

## Song catalog

Starter song data lives in:

```text
lib/catalog.ts
```

Add or edit entries there first. Each entry can include title, artist, release, status, tags, audio links, video links, credits, and notes.

## Vercel deployment

1. In Vercel, create a new project.
2. Import `sanfordcs/scottsanford.com` from GitHub.
3. Use the default Next.js settings.
4. Deploy the `main` branch.
5. Add the custom domain `scottsanford.com` and configure DNS as Vercel instructs.
6. Add `www.scottsanford.com` and redirect the apex domain and `www` consistently.

## Next content tasks

- Replace remaining draft catalog notes with final song data.
- Confirm the public contact email address.
- Add final artwork for Kimberly (My Secret Waterfall).
- Confirm final SoundCloud, Vimeo, YouTube, Spotify, Apple Music, and Bandcamp links.
- Decide whether covers should remain public and how they should be labeled.
