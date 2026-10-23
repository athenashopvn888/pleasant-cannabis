import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CIG_WORDING_FALLBACK,
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  publicWebsiteCigaretteFlag,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
  resolveSurfaceFlag,
} from "../app/lib/cigDecision.ts";
import { SHOW_CIGARETTES, cigaretteEnvHardOff, filterCigaretteItems } from "../app/lib/siteConfig.ts";
import { tvCigaretteCards } from "../app/lib/tvCigaretteBoard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const paper = { category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" };
const zyn = { category: "CONCENTRATES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAPS", slug: "hemp-wraps" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };

const cards = [
  { id: "PREROLLS_ADDONS" },
  { id: "VAPES" },
  { id: "CIGARETTES" },
  { id: "MAGIC" },
];

function cig(extra: Record<string, unknown> = {}) {
  return { on: false, tvOn: false, webOn: false, webFollowsTv: true, ...extra };
}

test("tvOn shows the card and cigarette items while webOn false keeps the website hidden", () => {
  const items = [vape, carton, grabba, backwoods, pouch, paper, zyn, wrap];
  const feed = cig({ on: true, tvOn: true, webOn: false, master: true });
  assert.equal(SHOW_CIGARETTES, false);
  assert.equal(decideCigaretteSurface({ cig: feed, items, surface: "tv" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: feed, items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: feed, items, surface: "web" }).reason, "off");
  assert.deepEqual(tvCigaretteCards(cards, true).map((card) => card.id), ["PREROLLS_ADDONS", "VAPES", "CIGARETTES", "MAGIC"]);
  const shown = reconcileSurfaceItems(items, items, true);
  assert.ok(shown.some((item) => item.slug === carton.slug));
  assert.equal(filterCigaretteItems(items).some((item) => item.category === "CIGARETTES"), false);
  assert.ok(filterCigaretteItems(items).some((item) => item.slug === paper.slug));
  assert.ok(filterCigaretteItems(items).some((item) => item.slug === zyn.slug));
});

test("tv flag false hides the card and real cigarettes and keeps wraps, papers, and pouches", () => {
  const items = [vape, carton, grabba, backwoods, pouch, paper, zyn, wrap];
  const feed = cig({ on: true, tvOn: false, webOn: false });
  assert.equal(decideCigaretteSurface({ cig: feed, items, surface: "tv" }).show, false);
  assert.deepEqual(tvCigaretteCards(cards, false).map((card) => card.id), ["PREROLLS_ADDONS", "VAPES", "MAGIC"]);
  assert.deepEqual(
    reconcileSurfaceItems(items, items, false).map((item) => item.slug),
    [vape.slug, backwoods.slug, pouch.slug, paper.slug, zyn.slug, wrap.slug],
  );
});

test("website follows webOn and TV follows tvOn, with on as the fallback", () => {
  const items = [carton, backwoods];
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "web" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "tv" }).show, true);
  assert.equal(resolveSurfaceFlag({ on: true }, "web"), true);
  assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false }), "web"), false);
});

test("TV hides on a feed error or a missing cig block, and follows tvOn on a successful feed", () => {
  const items = [carton, grabba, backwoods, pouch];
  const errored = decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", errored: true });
  assert.equal(errored.reason, "error");
  assert.equal(errored.show, false);
  const missing = decideCigaretteSurface({ cig: null, items, surface: "tv" });
  assert.equal(missing.reason, "missing");
  assert.equal(missing.show, false);
  const liveMissing = decideCigaretteSurface({ cig: null, items, surface: "tv", errored: false });
  assert.equal(liveMissing.show, false);
  assert.equal(liveMissing.reason, "missing");
  const shown = decideCigaretteSurface({ cig: cig({ on: false, tvOn: true }), items, surface: "tv" });
  assert.equal(shown.show, true);
  assert.equal(shown.reason, "on");
  const hidden = decideCigaretteSurface({ cig: cig({ on: true, tvOn: false }), items, surface: "tv" });
  assert.equal(hidden.show, false);
  assert.equal(hidden.reason, "off");
  // A saved last-good block is not an error, so it still follows tvOn.
  assert.equal(decideCigaretteSurface({ cig: cig({ tvOn: true }), items, surface: "tv", errored: false }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ tvOn: false }), items, surface: "tv", errored: false }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig(), items, surface: "tv" }).reason, "off");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items: [backwoods, pouch], surface: "tv" }).reason, "no-items");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", envRaw: "false" }).reason, "env");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "web", envRaw: "false" }).show, false);
  assert.equal(cigaretteEnvHardOff(undefined), false);
  assert.equal(cigaretteEnvHardOff(""), false);
  assert.equal(cigaretteEnvHardOff("false"), true);
  assert.equal(cigaretteEnvHardOff("off"), true);
  assert.equal(cigaretteEnvHardOff("true"), false);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: false, master: true }), items }).show, true);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: false }), items }).show, false);
  const stripped = reconcileSurfaceItems(items, items, errored.show);
  assert.equal(stripped.some((item) => item.slug === carton.slug), false);
  assert.equal(stripped.some((item) => item.slug === grabba.slug), false);
  assert.equal(stripped.some((item) => item.slug === backwoods.slug), true);
  assert.equal(stripped.some((item) => item.slug === pouch.slug), true);
});

test("website flag stays false whenever the static gate is off, and on a feed error or missing block", () => {
  const items = [carton, backwoods];
  const explicitOn = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web" });
  const explicitOff = decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" });
  const errored = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web", errored: true });
  const missing = decideCigaretteSurface({ cig: null, items, surface: "web" });
  assert.equal(explicitOn.show, true);
  assert.equal(errored.show, true);
  assert.equal(missing.show, true);
  assert.equal(publicWebsiteCigaretteFlag(explicitOn, false), false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOff, false), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, false), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, false), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, true), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, true), false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOff, true), false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOn, true), true);
  assert.equal(SHOW_CIGARETTES, false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOn, SHOW_CIGARETTES), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, SHOW_CIGARETTES), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, SHOW_CIGARETTES), false);
  assert.equal(SHOW_CIGARETTES ? explicitOn.show : false, false);
});

test("TV off keeps wraps, pouches, Backwoods, cigarillos, papers, Zyn, and Velo", () => {
  const cigarillo = { category: "CIGARETTES", name: "GRAPE CIGARILLO", slug: "grape-cigarillo" };
  const velo = { category: "CIGARETTES", name: "VELO POUCH", slug: "velo-pouch" };
  const kept = [wrap, pouch, backwoods, cigarillo, paper, zyn, velo];
  const hidden = reconcileSurfaceItems([vape, carton, grabba, ...kept], [carton, ...kept], false);
  assert.deepEqual(hidden.map((item) => item.slug), [vape.slug, ...kept.map((item) => item.slug)]);
});

test("tv header round-trips the feed flag and falls back when wording is missing", () => {
  const headers = cigarettePublicHeaders({
    web: false,
    tv: true,
    wording: { ...CIG_WORDING_FALLBACK, tv2BoardTitle: "FEED BOARD" },
  });
  assert.equal(headers["x-tv-data-cig-tv"], "1");
  assert.equal(headers["x-tv-data-cig-web"], "0");
  const read = readCigaretteTvHeader({ get: (name) => headers[name] ?? null });
  assert.equal(read.show, true);
  assert.equal(read.wording.tv2BoardTitle, "FEED BOARD");
  assert.equal(read.wording.priceCarton, CIG_WORDING_FALLBACK.priceCarton);
  const off = readCigaretteTvHeader({ get: () => null });
  assert.equal(off.show, false);
});

test("TV boards read the live header and web surfaces keep the static gate", () => {
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const products = readFileSync(new URL("../app/lib/products.ts", import.meta.url), "utf8");
  const navbar = readFileSync(new URL("../app/components/Navbar.tsx", import.meta.url), "utf8");
  const sitemap = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  const feed = readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8");
  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const status = readFileSync(new URL("../app/api/content-status/route.ts", import.meta.url), "utf8");
  const itemPage = readFileSync(new URL("../app/item/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(tv2, /readCigaretteTvHeader\(res\.headers\)/);
  assert.match(tv2, /tvCigaretteCards\(CARD_CONFIG, tvCig\.show\)/);
  assert.match(tv2, /setInterval\(loadData, 5\*60\*1000\)/);
  assert.match(tv, /readCigaretteTvHeader\(iRes\.headers\)/);
  assert.match(tv, /reconcileSurfaceItems\(iData, iData, tvCig\.show\)/);
  assert.match(tv, /setInterval\(loadData, 5\*60\*1000\)/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /snapshotHeaders\(snap\)/);
  assert.match(route, /reconcileSurfaceItems\(body, snap\.items, snap\.tv\.show\)/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
  assert.match(products, /SHOW_CIGARETTES/);
  assert.match(navbar, /filterCigaretteEntries/);
  assert.match(sitemap, /SHOW_CIGARETTES/);
  assert.match(feed, /publicWebsiteCigaretteFlag\(webDecision, SHOW_CIGARETTES\)/);
  assert.match(feed, /!live && !cig/);
  assert.match(layout, /web: SHOW_CIGARETTES \? cigarettes\.web : false/);
  assert.match(status, /web: SHOW_CIGARETTES \? cig\.web\.show : false/);
  assert.doesNotMatch(itemPage, /publicWebsiteCigaretteFlag/);
  assert.doesNotMatch(sitemap, /publicWebsiteCigaretteFlag/);
});
