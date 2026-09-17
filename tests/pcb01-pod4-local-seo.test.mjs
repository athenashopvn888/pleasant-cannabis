import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const nap = readFileSync("app/lib/storeNap.ts", "utf8");
const layout = readFileSync("app/layout.tsx", "utf8");
const home = readFileSync("app/HomePage.tsx", "utf8");
const homePage = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const visitContent = readFileSync("app/visit/VisitContent.tsx", "utf8");
const city = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");

const publicCopy = [
  layout,
  home,
  homePage,
  visit,
  visitContent,
  city,
  readFileSync("app/components/Footer.tsx", "utf8"),
  readFileSync("app/components/Navbar.tsx", "utf8"),
].join("\n");

test("NAP source keeps FMD phone, Mount Pleasant address, and existing 24h hours", () => {
  assert.match(nap, /phoneIntl: "\+12898069425"/);
  assert.match(nap, /phoneDisplay: "\+1 289 806 9425"/);
  assert.match(nap, /streetAddress: "758 Mt Pleasant Rd"/);
  assert.match(nap, /postalCode: "M4S 2N6"/);
  assert.match(nap, /hoursLabel: "Open 24 Hours"/);
  assert.match(nap, /gbpWebsite: "https:\/\/www\.pleasantcannabis\.ca\/"/);
});

test("homepage schema is CannabisStore with FAQPage and a unique local image", () => {
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.match(nap, /"@type": "CannabisStore"/);
  assert.match(homePage, /faqPageJsonLd/);
  assert.match(nap, /"@type": "FAQPage"/);
  assert.match(nap, /imageUrl: "https:\/\/www\.pleasantcannabis\.ca\/banners\/welcome_banner\.webp"/);
  assert.doesNotMatch(layout, /7Clmh\.jpg|46Oi5\.jpg/);
  assert.doesNotMatch(home, /7Clmh\.jpg|46Oi5\.jpg/);
});

test("/visit is a supporting reach page that canonicalizes to the homepage", () => {
  assert.match(visit, /canonical: STORE_NAP\.homeUrl/);
  assert.match(visit, /openGraph:[\s\S]*url: STORE_NAP\.homeUrl/);
  assert.match(visitContent, /74 Mount Pleasant/);
  assert.match(visitContent, /Street parking is available along Mount Pleasant Road/);
  assert.match(visitContent, /758 Mt Pleasant Rd/);
  assert.match(visitContent, /Toronto ON M4S 2N6/);
  assert.match(visitContent, /STORE_NAP\.phoneDisplay/);
  assert.match(visitContent, /STORE_NAP\.hoursLabel/);
});

test("city weed-dispensary URL is noindexed and canonicalized to the homepage", () => {
  assert.match(city, /index: false/);
  assert.match(city, /canonical: STORE_NAP\.homeUrl/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.doesNotMatch(sitemap, /weed-dispensary-toronto/);
});

test("homepage is the visit hub with Mount Pleasant copy", () => {
  assert.match(home, /id="visit-hub"/);
  assert.match(home, /href="\/visit"/);
  assert.match(home, /Mount Pleasant walk-in dispensary/);
  assert.match(home, /HOME_FAQS\.map/);
});

test("public copy stays standalone", () => {
  assert.doesNotMatch(
    publicCopy,
    /Planet X|Native Medicine Garden|Main Kingston|Athena|sister store|our other locations|Fogtown|Runway Pot|Jane St/i,
  );
});
