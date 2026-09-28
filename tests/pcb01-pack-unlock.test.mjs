import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const routes = ["weed-dispensary-mount-pleasant","24-hour-mount-pleasant-dispensary","native-cigarettes-mount-pleasant","nicotine-vape-mount-pleasant"];

test("adds the four approved local pillars with self canonicals", () => {
  for (const route of routes) {
    const page = read(`app/${route}/page.tsx`);
    assert.match(page, new RegExp(`canonical: \\"https://www\\.pleasantcannabis\\.ca/${route}\\"`));
  }
});

test("homepage connects the six-card authority hub", () => {
  const home = read("app/HomePage.tsx");
  for (const route of [...routes, "weed-delivery-toronto", "visit"]) assert.ok(home.includes(`/${route}`));
});

test("tier pages expose CollectionPage and ItemList schema", () => {
  const tier = read("app/[tier]/page.tsx");
  assert.match(tier, /"@type": "CollectionPage"/);
  assert.match(tier, /"@type": "ItemList"/);
  assert.match(tier, /flowers\.map/);
  assert.match(tier, /about: \{ "@id": `\$\{STORE_NAP\.homeUrl\}\/\#store` \}/);
});

test("additive rollout includes new routes in sitemap and no noindex", () => {
  const sitemap = read("app/sitemap.ts");
  for (const route of routes) assert.ok(sitemap.includes(`/${route}`));
  const changed = [sitemap, read("app/lib/authorityPages.ts"), read("app/components/AuthorityLanding.tsx"), read("app/[tier]/page.tsx")].join("\n");
  assert.doesNotMatch(changed, /noindex/i);
  assert.doesNotMatch(changed, /Ottawa|Gatineau|ByWard|sister store/i);
});

test("pillars carry exact NAP, adult ID language, map and visit links", () => {
  const component = read("app/components/AuthorityLanding.tsx");
  const nap = read("app/lib/storeNap.ts");
  assert.match(nap, /758 Mt Pleasant Rd/);
  assert.match(nap, /\+1 289 806 9425/);
  assert.match(component, /Adults 19\+ with government photo ID/);
  assert.match(component, /mapsSearchUrl/);
  assert.match(component, /href="\/visit"/);
});

test("mobile navigation has an accessible SVG hamburger signal", () => {
  const nav = read("app/components/Navbar.tsx");
  assert.match(nav, /aria-label=\{mobileOpen/);
  assert.match(nav, /aria-expanded=\{mobileOpen\}/);
  assert.match(nav, /aria-controls="mobile-store-navigation"/);
  assert.match(nav, /<svg viewBox="0 0 24 24"/);
});
