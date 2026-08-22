# Nail Monster

A recreation of [nailmonster.co](https://nailmonster.co) — an upscale Japanese and Korean nail salon in Brookline, MA.

## Pages

- Home
- About Us
- Gallery
- Price List
- Nail Services (manicure / pedicure)
- Eyelash / Wax
- Facial Spa
- FAQs
- Reservation
- News
- Contact

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Instagram feed

The homepage can show a live [@nailmonsterboston](https://www.instagram.com/nailmonsterboston/) grid via [Behold](https://behold.so).

1. Create a free Behold account and connect the salon Instagram.
2. Copy the feed ID from the Behold dashboard.
3. Add it to `.env.local`:

```bash
NEXT_PUBLIC_BEHOLD_FEED_ID=your-feed-id
```

4. Restart `npm run dev`.

Until that ID is set, the section falls back to local gallery photos.

## Deploy to Cloudflare Pages

This project uses Next.js **static export** (`out/`), which Cloudflare Pages supports natively.

### Connect GitHub (recommended)

1. Open [Cloudflare Dashboard → Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages).
2. Create application → **Pages** → Connect to Git.
3. Select `eddie-vo/nailmonster`.
4. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | **Next.js (Static HTML Export)** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` |

5. Add environment variable (optional, for live Instagram feed):

```bash
NEXT_PUBLIC_BEHOLD_FEED_ID=your-feed-id
```

6. Deploy.

Preview deployments are created automatically for each branch push.

### Deploy from CLI

```bash
npm install
npm run pages:deploy
```

Preview locally with the Cloudflare Pages dev server:

```bash
npm run pages:preview
```

### Files added for Cloudflare

- `wrangler.toml` — Pages output directory config
- `public/_headers` — cache rules for static assets
- `.node-version` — Node 20 for consistent builds
