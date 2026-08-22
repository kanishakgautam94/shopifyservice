# Ads launch checklist — Shopify Service

Last updated: 2026-08-22  
Live site: https://shopifyservice.com (redirects to www)  
Repo: shopifyservice (Vercel production)

When you come back and ask “what’s left?”, start here.

---

## Done (do not redo unless broken)

- [x] Custom domain live: shopifyservice.com → www
- [x] Core pages live (200): `/` `/services` `/work` `/about` `/blog` `/contact` `/privacy`
- [x] Blog posts live
- [x] Primary CTAs (“Book a free call”) → `/contact`
- [x] Calendly embed working on `/contact`
  - URL: `https://calendly.com/kanishakgautam94/30min`
  - Env: `NEXT_PUBLIC_CALENDLY_URL`
- [x] mailto / tel links present
- [x] Contact form UI + required-field validation
- [x] Privacy policy page (mentions Meta/analytics for when pixels go live)
- [x] OG image / robots.txt / sitemap.xml
- [x] Hero copy: “I'm Kanishak. I build Shopify for $1M+ brands.”
- [x] Mobile marquee fixed (JS-driven scroll)
- [x] Code already supports Meta Pixel + GA via env vars (no code change needed later)

---

## Left before running ads

### 1. Business email (waiting on user)

- [ ] Get `info@shopifyservice.com` (or final public inbox)
- [ ] Point DNS MX / Google Workspace / whatever provider
- [ ] Update public site email in `src/content/site.ts` if different from current
- [ ] Vercel env:
  - `CONTACT_TO_EMAIL` = real inbox that receives leads
  - `CONTACT_FROM_EMAIL` = verified Resend sender (e.g. `Shopify Service <onboarding@resend.dev>` until domain verified, then `info@…`)
- [ ] Verify domain in Resend when ready
- [ ] Send one real test from `/contact` and confirm inbox delivery

### 2. Contact form delivery (confirm before ads)

- [ ] Confirm `RESEND_API_KEY` is set in Vercel Production
- [ ] Confirm form success path (not the “email me directly” fallback)
- [ ] Optional: reply-to / notification to phone or Slack later

### 3. Meta (Facebook / Instagram) ads tracking — later

- [ ] Create Meta Business + Ads account
- [ ] Create Meta Pixel
- [ ] Vercel Production env: `NEXT_PUBLIC_META_PIXEL_ID=<id>`
- [ ] Redeploy
- [ ] Events Manager: confirm PageView on shopifyservice.com
- [ ] Decide conversion event (e.g. Contact / Schedule) — may need Lead event on form success + Calendly
- [ ] Ad creative + landing URL (`/` or `/contact`)
- [ ] Budget, audience ($1M+ Shopify brands), geo, placements

### 4. Google Analytics / Google Ads — later

- [ ] Create GA4 property
- [ ] Vercel Production env: `NEXT_PUBLIC_GA_ID=G-XXXXXXXX`
- [ ] Redeploy
- [ ] Optional: Google Ads + conversion linking once Meta path is proven

### 5. Final pre-flight (same day as ads)

- [ ] Hard-refresh mobile Safari: home, contact, Calendly book flow
- [ ] Book + cancel a test Calendly slot
- [ ] Submit one real contact form lead
- [ ] Confirm privacy page still accurate for tracking
- [ ] Pick primary landing URL and CTA copy for the ad

---

## Explicitly deferred (user choice)

- Meta Pixel — after Meta account setup
- Google / GA pixel — after account setup
- Public `info@` — waiting to obtain mailbox
- Ad creative / campaign build — later session (user will ask for help)

---

## Env vars reference (Vercel → Production)

| Variable | Purpose | Status |
|----------|---------|--------|
| `NEXT_PUBLIC_CALENDLY_URL` | Booking widget | Set (live) |
| `RESEND_API_KEY` | Form email | Confirm |
| `CONTACT_TO_EMAIL` | Where leads go | Confirm / temp inbox OK until info@ |
| `CONTACT_FROM_EMAIL` | Resend from address | Confirm |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta ads | Not yet |
| `NEXT_PUBLIC_GA_ID` | GA4 | Not yet |

---

## Next session prompt (copy/paste)

> What’s left before I run ads on shopifyservice.com? Check ADS-LAUNCH.md.
