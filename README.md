# AEC website

Website of the **Algerian Engineering Competition (AEC)**: Algeria's engineering competition.

Live at **https://aec.vic-enp.com**.

## What is on the site

- Home page with a countdown timer, photo slider, about, team and FAQ sections
- Registration flow, with a closed-registration state
- Accepted teams and winners pages
- Data stored in Supabase

## Stack

Next.js (App Router), React, TypeScript, Swiper, Supabase, Lucide icons.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Supabase credentials go in environment variables (`.env.local`). They are not in the repo.

## Layout

| Path | What |
|---|---|
| `src/app/page.tsx` | home |
| `src/app/register` | registration |
| `src/app/accepted` | accepted teams |
| `src/app/winners` | winners |
| `src/app/components` | timer, slider, FAQ, team, forms |
