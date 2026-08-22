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

The homepage can show a live [@nailmonsterboston](https://www.instagram.com/nailmonsterboston/) grid. Instagram does not allow public scraping, so the site uses [Behold](https://behold.so).

1. Create a free Behold account and connect the salon Instagram.
2. Copy the feed ID from the Behold dashboard.
3. Add it to `.env.local`:

```bash
BEHOLD_FEED_ID=your-feed-id
```

4. Restart `npm run dev`.

Until that ID is set, the section falls back to local gallery photos.
