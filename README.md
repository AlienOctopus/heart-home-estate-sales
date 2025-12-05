# Heart & Home Estate Sales

Full-service estate sales website for the East Bay area.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview  # Preview production build locally
```

## Deployment

Deployed to Vercel. Push to `main` to deploy.

## Pre-Launch Checklist

Before going live, update the following:

### 1. Domain Configuration
Search and replace `www.example.com` with your actual domain in:
- `constants.ts` - Line 8: `SITE_DOMAIN`
- `index.html` - Canonical URL and Open Graph tags
- `public/robots.txt` - Sitemap URL
- `public/sitemap.xml` - All URLs

### 2. Business Data (`constants.ts`)
- [ ] `address.street` - Currently placeholder "123 Main Street"
- [ ] `sale.saleDate` - Currently past date (2024-03-15)
- [ ] `sale.address` - Currently placeholder "Springfield, MO"

### 3. Vercel Configuration
- [ ] Add custom domain in Vercel dashboard
- [ ] Configure `www` redirect (www → apex or apex → www)
- [ ] Verify SSL certificate

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS (CDN)
- React Router
- Deployed on Vercel
