# Indie Hacker Program — landing page

Static landing page for the Indie Hacker Program. No build step: `index.html`, `styles.css`, `app.js`.

## Run locally

```bash
node serve.js          # http://localhost:4200
```

## Structure

| File | Purpose |
|---|---|
| `index.html` | The page — hero, SaaS explainer, calculator, questions, cost, start, giveaway, checkout, footer |
| `styles.css` | All styling. One system: white / `#FAFAF9` alternating, blue accent, hairlines over cards |
| `app.js` | Hero video, brand rotators, the revenue calculator, scroll reveal, checkout form |
| `data.js` | Builder profiles with publicly reported figures and sources (used by `builders.html`) |
| `builders.html`, `builder.html` | Standalone builder index and profile pages (not linked from the current landing page) |

## Known gaps

- **Checkout has no backend.** The form validates and stores to `localStorage`, then shows the success state. Nothing is emailed or charged.
- **MacBook photo missing.** Drop a licensed image at `assets/macbook-air.png`; a hand-drawn SVG shows until then.
- Brand logos load from third-party icon hosts. Self-host licensed copies before running paid traffic.
- Giveaway needs written terms; the double-refund guarantee needs its conditions defined.
