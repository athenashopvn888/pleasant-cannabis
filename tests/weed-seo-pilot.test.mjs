import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const landing = readFileSync("app/components/GBPLandingPage.tsx", "utf8");
const discovery = readFileSync("app/lib/weedDiscovery.ts", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");

test("protected owner renders exactly one H1 and approved content", () => {
  assert.equal((landing.match(/<h1>/g) || []).length, 1);
  assert.match(discovery, /Pleasant Cannabis — Weed Dispensary in Toronto/);
  assert.match(landing, /Find Your Weed/);
  assert.match(landing, /Weed, Cannabis, Bud and Flower/);
});

test("homepage has one bounded Weed bridge", () => {
  assert.equal((home.match(/<WeedDiscoveryModule \/>/g) || []).length, 1);
});

test("unsafe implementation claims stay absent", () => {
  assert.doesNotMatch(discovery, /now in stock|sale price|free delivery/i);
  assert.doesNotMatch(discovery, /\/exotics(?:["/])/);
});

test("tier pages preserve the broad Weed owner and avoid stale copy claims", () => {
  assert.match(tierPage, /TIER_COMPARE\.ownerHref/);
  assert.match(tierCopy, /\/weed-dispensary-toronto\//);
  assert.doesNotMatch(tierCopy, /\$\d+|current menu|in stock|sale price|free delivery/i);
  assert.equal((tierCopy.match(/h1: "/g) || []).length, 5);
  assert.equal((tierCopy.match(/metaDescription: "/g) || []).length, 5);
});
