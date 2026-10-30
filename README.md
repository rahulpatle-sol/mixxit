# Mixxit

Scroll-led storefront for jaggery-sweetened premix drinks (Rose Petal, Choco Dryfruit, Haldi, Makhana).

## Stack
Bun + Vite + React + Tailwind v4 + GSAP (ScrollTrigger) + Lenis + Motion (motion/react) + lucide-react.

## Run locally

```sh
bun install
bun dev       # http://localhost:5173
bun run build # production build
```

## Images

Put assets in `public/images/` and map them in `src/assets.js`:

- `pouch-rose.png`, `pouch-choco.png`, `pouch-haldi.png`, `pouch-makhana.png` (transparent pouches)
- `logo.png`
- `lifestyle-1.jpg`, `lifestyle-2.jpg`

Missing pouch images fall back to an inline SVG illustration so nothing breaks.

### Free lifestyle images (Unsplash)
Replace `public/images/lifestyle-1.jpg` and `lifestyle-2.jpg` with free Unsplash photos, e.g.:

```
https://images.unsplash.com/photo-1461849927569-f7b437285723?w=900&q=80   # warm milk drink
https://images.unsplash.com/photo-1559559803-d137052641cf?w=900&q=80   # herbal tea / comfort drink
```

Download them and save as `public/images/lifestyle-1.jpg` / `lifestyle-2.jpg`.

## Shopify follow-up (UI only, TODOs in place)
- `src/components/CartDrawer.jsx`: checkout button → `TODO: connect Shopify checkout (Storefront API / checkout URL)`.
- `src/components/LoginModal.jsx`: "Continue with Shopify" / "Continue with Shop" → `TODO: connect Shopify Customer Accounts / Storefront API authentication`.

The storefront UI works without Shopify. Desktop uses a pinned GSAP chapter timeline; mobile and `prefers-reduced-motion` use static chapters.
