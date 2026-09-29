# PCB01 mobile speed pilot readback

## Lighthouse mobile (three runs; median in bold)

| Mode | State | LCP runs (ms) | TBT runs (ms) | CLS runs | Total-byte runs | Median LCP | Median TBT | Median CLS | Median bytes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Simulated | Before live | 7,978 / 21,360 / 12,167 | 155.5 / 149 / 73.5 | 0.0315 / 0 / 0 | 5,457,083 / 5,457,003 / 5,456,950 | **12,167 ms** | **149 ms** | **0** | **5,457,003** |
| Simulated | After local production build | 3,565 / 3,564 / 3,551 | 58 / 61 / 33.5 | 0.0022 / 0 / 0 | 853,348 / 852,809 / 853,568 | **3,564 ms** | **58 ms** | **0** | **853,348** |
| DevTools | Before live | 19,932 / 19,938 / 19,935 | 302 / 444 / 354 | 0 / 0 / 0 | 5,457,050 / 5,457,112 / 5,457,155 | **19,935 ms** | **354 ms** | **0** | **5,457,112** |
| DevTools | After local production build | 2,362 / 2,544 / 2,735 | 204 / 197 / 149 | 0 / 0 / 0 | 853,365 / 853,348 / 853,365 | **2,544 ms** | **197 ms** | **0** | **853,365** |

Targets pass: both after medians have LCP at or below 4 seconds, transfer below 1.5 MB, CLS at 0, and TBT below the matching before median.

## Protected rendered HTML

`node scripts/verify-speed-pilot-seo.mjs` compared the current live homepage with the local production build.

- PASS: title identical
- PASS: H1 identical
- PASS: canonical identical
- PASS: meta robots identical
- PASS: JSON-LD identical

## Age gate and responsive views

`node scripts/verify-speed-pilot.mjs` used a fresh browser context for each flow.

- PASS: selecting **No, I am not** kept the blocking overlay and showed Access Denied.
- PASS: selecting **Yes, I am 19+** removed the overlay and exposed the homepage.
- PASS: screenshots captured at 390 px and 1280 px; median Lighthouse CLS remained 0.

Screenshots:

- `homepage-390px.png`
- `homepage-1280px.png`

## Homepage links

`node scripts/verify-homepage-links.mjs` crawled 29 internal homepage links from the local production build.

- PASS: no 404s
- PASS: no redirects

## Implementation notes

- The existing welcome/LCP image, alt text, and position are unchanged; `next/image` now emits responsive widths and gives only the LCP image high fetch priority.
- Homepage banners, tiles, and the decorative hero background use lazy responsive images.
- The age gate, navbar, and homepage brand mark use the same logo in a 4,406-byte derivative; `public/storeFavicon.webp` remains in place.
- The homepage Google Sheets review fetch moved from the browser to a one-hour server revalidation path.
- Featured-strain selection now waits until its below-fold section approaches the viewport; menu content and prices are unchanged.
- Google Analytics tags remain present and load with `next/script` `lazyOnload`.
- Google Fonts are self-hosted through `next/font` with swap behavior.
- Public banners/products use moderate cache headers; Next.js retains its built-in immutable caching for fingerprinted assets.
