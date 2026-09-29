import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

test("redirect-only info URLs are filtered from the sitemap", () => {
  for (const slug of [
    "dispensary-near-me-mount-pleasant",
    "mount-pleasant-weed-dispensary",
    "weed-store-near-midtown-toronto",
  ]) {
    assert.match(sitemap, new RegExp(`redirectedSeoPages[\\s\\S]*${slug}`));
  }
  assert.match(sitemap, /SEO_PAGES\.filter\(\(p\) => !redirectedSeoPages\.has\(p\.slug\)\)/);
  assert.match(sitemap, /`\$\{BASE\}\/weed-dispensary-mount-pleasant`/);
});
