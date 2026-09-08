# Brillianzhub Technologies — company website

The marketing website for **Brillianzhub Technologies Limited**, served at
[brillianzhub.com](https://brillianzhub.com). This is the company website
submitted to Apple as part of the App Store organization account.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, TypeScript, strict mode)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Geist](https://vercel.com/font) Sans and Mono via `next/font`
- [lucide-react](https://lucide.dev) for icons
- [Resend](https://resend.com) for the contact form, server-side only
- Fully static rendering; no database, CMS, or auth

## Local development

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Environment variables

Copy `.env.example` to `.env` and fill in values locally (never commit `.env`):

- `RESEND_API_KEY`
- `RESEND_TO_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

## Deployment

Deploys to Vercel automatically from the `main` branch.
