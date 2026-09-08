import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const flowerCard = fs.readFileSync("app/components/FlowerCard.tsx", "utf8");
const flowerDetail = fs.readFileSync("app/flower/[slug]/page.tsx", "utf8");
const tv = fs.readFileSync("app/tv/page.tsx", "utf8");

test("top-three storefront cards display the price5g source field as 6g", () => {
  assert.match(flowerCard, /const isPromoTier = !!tierCfg\?\.deal6g/);
  assert.match(flowerCard, /const grams = isPromoTier \? 6 : 5/);
  assert.match(flowerCard, /label: `\$\{grams\}g`/);
});

test("top-three product pages display the price5g source field as 6g", () => {
  assert.match(flowerDetail, /const TOP_TIERS = \["EXOTIC", "PREMIUM", "AAA\+"\]/);
  assert.match(flowerDetail, /const fiveGLabel = isTopTier \? "6g" : "5g"/);
  assert.match(flowerDetail, /const fiveGGrams = isTopTier \? 6 : 5/);
});

test("TV detail display uses 6g for top three while AA remains 5g", () => {
  assert.match(tv, /const isTop3 = \["EXOTIC","PREMIUM","AAA\+"\]\.includes\(tier\)/);
  assert.match(tv, /\{isTop3 \? "6g" : "5g"\} <b>/);
  assert.match(tv, /isAA \? <span className=\{styles\.headerDeal\}>\$20 5g AA<\/span>/);
  assert.match(tv, /<span className=\{styles\.pLab\}>5g<\/span>[\s\S]*?<PriceCell pp=\{f\.price5g\}/);
});

test("backend/POS price5g field remains the data source", () => {
  assert.match(flowerCard, /price: flower\.price5g/);
  assert.match(flowerDetail, /p: flower\.price5g/);
  assert.match(tv, /hi\.price5g\.sale \?\? hi\.price5g\.regular/);
  assert.match(tv, /const p3 = f\.price3g; const p5 = f\.price5g/);
});
