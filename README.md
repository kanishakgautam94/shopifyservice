# Shopify Service — Marketing Website

A premium, conversion-focused marketing site for an end-to-end Shopify freelance/studio business. Built to convert paid (Google/Meta) ad traffic from 7 and 8-figure brands into booked consultation calls.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** for animation
- **Resend** + **Zod** for the contact form (Server Action + honeypot)
- **Calendly** embed for booking calls
- **MDX** blog (`src/content/blog/*.mdx`)
- **Vercel Analytics** + **Google Analytics 4**
- Deployed on **Vercel**, auto-deploy on push to `main`

## Local development

```bash
npm install
cp .env.example .env.local   # fill in values (all optional for local dev)
npm run dev                  # http://localhost:3000
```

The site works with zero env vars locally: the contact form logs submissions to
the console instead of emailing, and the Calendly section shows a placeholder.

## Project structure

```
src/
├─ app/                 # routes (home, services, work, about, blog, contact)
│  ├─ actions.ts        # contact form Server Action (Zod + Resend)
│  ├─ sitemap.ts        # SEO sitemap
│  ├─ robots.ts         # robots.txt
│  └─ opengraph-image.tsx
├─ components/          # UI + section components
├─ content/            # editable site content (edit these, then push)
│  ├─ site.ts          # name, contact info, stats, nav
│  ├─ services.ts      # service offerings
│  ├─ team.ts          # team members (add photos to /public/team)
│  ├─ testimonials.ts  # client quotes
│  ├─ projects.ts      # portfolio / case studies
│  └─ blog/*.mdx       # blog posts
└─ lib/                # utils, blog loader, schema, formatting
```

## Editing content

Everything is in `src/content`. To add a blog post, drop a new `.mdx` file in
`src/content/blog` with frontmatter (`title`, `description`, `date`, `author`,
`tags`). Team photos go in `public/team/` and are referenced from `team.ts`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for sending contact-form emails |
| `CONTACT_TO_EMAIL` | Inbox that receives leads (default `info@shopifyservice.com`) |
| `CONTACT_FROM_EMAIL` | Verified Resend sender |
| `NEXT_PUBLIC_CALENDLY_URL` | Live Calendly booking URL |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID for ad conversion tracking |

## Deploy to Vercel (auto-deploy on `main`)

1. Push this repo to GitHub.
2. In [vercel.com](https://vercel.com) → **New Project** → import the repo.
   Framework preset auto-detects Next.js; no config needed.
3. Add the environment variables above under **Settings → Environment Variables**.
4. Deploy. Every push to `main` redeploys automatically; pull requests get
   preview URLs.

## Connecting the domain (`shopifyservice.com`)

Once you're happy with the deployment and ready to move off WordPress:

1. In Vercel → **Settings → Domains**, add `shopifyservice.com` and `www.shopifyservice.com`.
2. Vercel shows the DNS records to set. At your domain registrar, update:
   - **A record** `@` → `76.76.21.21` (or the value Vercel shows), **or** a CNAME/ALIAS to `cname.vercel-dns.com`.
   - **CNAME** `www` → `cname.vercel-dns.com`.
3. Remove the old WordPress DNS records pointing to your previous host.
4. Vercel provisions an SSL certificate automatically. Propagation can take up to
   a few hours.

## Pre-launch checklist

- [ ] Add real team photos + bios (`src/content/team.ts`, `public/team/`)
- [ ] Replace placeholder testimonials with real quotes
- [ ] Add real case studies (`src/content/projects.ts`)
- [ ] Verify a sending domain in Resend and set `CONTACT_FROM_EMAIL`
- [ ] Set `NEXT_PUBLIC_CALENDLY_URL` and `NEXT_PUBLIC_GA_ID`
- [ ] Confirm contact form delivers to your inbox
- [ ] Point DNS to Vercel
```
