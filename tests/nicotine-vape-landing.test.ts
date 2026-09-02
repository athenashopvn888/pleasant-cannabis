import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { SEO_PAGES } from "../app/lib/seoPages.ts";
const page = SEO_PAGES.find((entry) => entry.slug === "nicotine-vapes-mount-pleasant");
const products = readFileSync("app/lib/products.ts", "utf8");
const slugs = ["envi-dripn-5-28k-puffs","geek-promax-5-30k-puffs","geek-universe-25k-puffs","nexa-pix-30k-puffs-many-flavors","ovns-10000-5-10k-puffs","ovns-disposable-5-8ml-many-flavors"];
test("Pleasant Cannabis nicotine page uses the six live-checked products", () => {
  assert.ok(page?.heroPreview);
  assert.deepEqual(page.heroPreview.products.map((product) => product.sourceSlug), slugs);
  assert.equal(page.heroPreview.menuHref, "/items/vapes");
  assert.equal(page.heroPreview.secondaryHref, "#featured-vapes");
  assert.equal(page.heroPreview.warning, "Adults 19+. Nicotine is addictive.");
  assert.match(page.sections[2].body, /\/items\/vape-disposables/);
});

test("nicotine and THC vape routes remain explicitly separate", () => {
  assert.match(products, /"VAPE PENS": \{[\s\S]*?name: "Nicotine Vape"[\s\S]*?slug: "vapes"/);
  assert.match(products, /"VAPE PENS": \{[\s\S]*?adults 19\+/);
  assert.match(products, /"VAPE DISPOSABLE": \{[\s\S]*?name: "THC Vape"[\s\S]*?slug: "vape-disposables"/);
});
