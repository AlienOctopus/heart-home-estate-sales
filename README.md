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
**One file to edit:** Set your domain in `domain.config.ts`:
```typescript
export const SITE_DOMAIN = "www.yoursite.com";
```
The build process automatically injects this domain into all files (index.html, robots.txt, sitemap.xml, etc.)

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
