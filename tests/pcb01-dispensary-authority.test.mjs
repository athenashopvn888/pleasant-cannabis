import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("PCB01 authority page uses the approved metadata, H1, and canonical", () => {
  const page = read("app/resources/cannabis-dispensary-vs-weed-dispensary/page.tsx");
  assert.ok(page.includes('title: { absolute: "Cannabis Store vs Weed Dispensary | Pleasant Cannabis" }'));
  assert.ok(page.includes("Weed dispensary, cannabis dispensary or dispensary near me? Learn how these local-search terms connect at Pleasant Cannabis in Toronto."));
  assert.ok(page.includes("<h1>Cannabis, Weed, Store or Dispensary — What Are People Looking For?</h1>"));
  assert.ok(page.includes('const canonical = "https://www.pleasantcannabis.ca/resources/cannabis-dispensary-vs-weed-dispensary"'));
  assert.ok(page.includes("robots: { index: true, follow: true }"));
});

test("authority page links to the verified local owner and has all approved FAQs", () => {
  const page = read("app/resources/cannabis-dispensary-vs-weed-dispensary/page.tsx");
  assert.ok(page.includes('<Link href="/weed-dispensary-toronto">local/store page</Link>'));
  for (const question of [
    "Is a weed dispensary different from a cannabis dispensary?",
    "Does “dispensary near me” include cannabis dispensaries?",
    "Is “cannabis store near me” related?",
    "Should every keyword variation have a separate page?",
  ]) assert.ok(page.includes(`<h3>${question}</h3>`));
});

test("one resource backlink and the sitemap expose the authority page", () => {
  const href = "/resources/cannabis-dispensary-vs-weed-dispensary";
  const resources = read("app/resources/resourceData.ts");
  assert.equal(resources.split(`href: "${href}"`).length - 1, 1);
  assert.ok(resources.includes('title: "Cannabis Dispensary vs. Weed Dispensary"'));
  assert.ok(read("app/sitemap.ts").includes("`${BASE}" + href));
});

test("authority copy contains no direct purchase CTA or volatile commercial claim", () => {
  const page = read("app/resources/cannabis-dispensary-vs-weed-dispensary/page.tsx").toLowerCase();
  for (const phrase of ["buy now", "order now", "discount", "coupon", "in stock", "available now"]) {
    assert.equal(page.includes(phrase), false, phrase);
  }
});
