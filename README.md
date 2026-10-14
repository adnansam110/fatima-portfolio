# Fatima Abid — Digital Marketing Portfolio

A responsive Next.js App Router portfolio for Fatima Abid, built with TypeScript, React, CSS, and Lucide icons.

## Features
- Responsive layout for desktop, tablet, and mobile
- Sticky navigation and smooth section links
- Scroll-triggered reveal animations with `IntersectionObserver`
- Services for Meta Ads, Google Ads, social media management, account integration, content planning, and performance insights
- Portfolio service cards linking to Instagram/email
- Email contact links and downloadable ATS resume PDF
- SEO metadata in `app/layout.tsx`
- No external API keys or environment variables required

## Requirements
- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Deploy
Import this project into Vercel or another Next.js-compatible host. No environment variables are required. After deployment, update `metadataBase` in `app/layout.tsx` from `https://example.com` to the actual public site URL.

## Customize
- Main content and sections: `app/page.tsx`
- Styling and responsive breakpoints: `app/globals.css`
- SEO and social metadata: `app/layout.tsx`
- Resume download: `public/Fatima_Abid_ATS_Resume.pdf`

## Important content note
The portfolio cards are illustrative service-area summaries, not verified case studies. Replace them with real campaign examples and verified metrics before presenting them as client results. The resume includes placeholders for work history, education, and certifications; update those details before applying.
