/**
 * Prebuild script: Fetches live stock data from Apps Script
 * and writes flowers.json + items.json before Next.js builds.
 *
 * This runs automatically via "prebuild" in package.json.
 * If the fetch fails, the existing JSON files are kept as fallback.
 */

const fs = require('fs');
const path = require('path');

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || '';
const STORE_CODE = 'PCB01';
const FETCH_TIMEOUT_MS = 120000;
const FLOWERS_PATH = path.join(__dirname, '..', 'app', 'lib', 'flowers.json');
const ITEMS_PATH = path.join(__dirname, '..', 'app', 'lib', 'items.json');
const SNAPSHOT_PATH = path.join(__dirname, '..', 'app', 'lib', 'stock-snapshot.json');

async function main() {
  if (!APPS_SCRIPT_URL) {
    console.log('[prebuild] No APPS_SCRIPT_URL set — using existing static JSON files');
    return;
  }

  console.log(`[prebuild] Fetching live stock from Apps Script (store=${STORE_CODE})...`);

  try {
    // Combined flowers+items includes current catalog prices filtered by ONHAND.
    // stock=1 is fetched separately for the ONHAND date / sku count snapshot.
    const url = `${APPS_SCRIPT_URL}?store=${STORE_CODE}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.flowers || !data.items) {
      throw new Error('Invalid response: missing flowers or items');
    }

    // ── Post-process flowers: derive sale flags + clean names ──
    const SALE_RE = /\bSALE\b/i;
    const ON_SALE_RE = /ON\s*SALE/i;
    function hasSalePrice(f) {
      return !!(
        (f.price3g && f.price3g.sale !== null) ||
        (f.price5g && f.price5g.sale !== null) ||
        (f.price14g && f.price14g.sale !== null) ||
        (f.price28g && f.price28g.sale !== null)
      );
    }
    function cleanName(name) {
      return name
        .replace(/\s*\(?\s*AAA\+?\s*ON\s*SALE\s*\)?\s*$/i, '')
        .replace(/\s*\(?\s*AAA\+?\s*SALE!?\s*\)?\s*$/i, '')
        .replace(/\s*\bSALE!?\s*$/i, '')
        .replace(/\s*\bON\s*SALE\s*$/i, '')
        .trim();
    }
    let saleFixed = 0;
    for (const f of data.flowers) {
      // Derive isSale from name or prices
      if (!f.isSale) {
        if (SALE_RE.test(f.name) || ON_SALE_RE.test(f.name) || hasSalePrice(f)) {
          f.isSale = true;
          saleFixed++;
        }
      }
      // Clean display name
      f.name = cleanName(f.name);
    }
    if (saleFixed > 0) console.log(`[prebuild] Fixed ${saleFixed} sale flags from names`);

    // Write flowers.json
    fs.writeFileSync(FLOWERS_PATH, JSON.stringify(data.flowers, null, 2), 'utf-8');
    console.log(`[prebuild] flowers.json updated: ${data.flowers.length} products`);

    // Tier breakdown
    const tiers = {};
    data.flowers.forEach(f => { tiers[f.tier] = (tiers[f.tier] || 0) + 1; });
    Object.entries(tiers).forEach(([t, c]) => console.log(`  ${t}: ${c}`));

    // ── Post-process items: fix '$[object Object]' prices ──
    let itemsFixed = 0;
    for (const it of data.items) {
      if (typeof it.price === 'string' && it.price.includes('[object')) {
        // Price was mangled by parsePriceCell_ returning an object
        // Try to extract from the raw price data
        it.price = '';
        itemsFixed++;
      }
    }
    if (itemsFixed > 0) console.log(`[prebuild] Fixed ${itemsFixed} mangled item prices`);

    // Write items.json
    fs.writeFileSync(ITEMS_PATH, JSON.stringify(data.items, null, 2), 'utf-8');
    console.log(`[prebuild] items.json updated: ${data.items.length} products`);

    // Category breakdown
    const cats = {};
    data.items.forEach(i => { cats[i.category] = (cats[i.category] || 0) + 1; });
    Object.entries(cats).sort().forEach(([c, n]) => console.log(`  ${c}: ${n}`));

    let stockDate = data.stockDate || null;
    let skuCount = null;
    let storeCode = data.storeCode || STORE_CODE;
    try {
      const stockUrl = `${APPS_SCRIPT_URL}?store=${STORE_CODE}&stock=1`;
      const stockRes = await fetch(stockUrl, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
      if (stockRes.ok) {
        const stockData = await stockRes.json();
        storeCode = stockData.storeCode || storeCode;
        stockDate = stockData.date || stockDate;
        skuCount = stockData.skuCount || (stockData.stock ? Object.keys(stockData.stock).length : null);
        console.log(`[prebuild] ONHAND stock=1 date: ${stockDate || 'unknown'} (${skuCount ?? '?'} SKUs)`);
      } else {
        console.warn(`[prebuild] stock=1 HTTP ${stockRes.status}; using combined stockDate`);
      }
    } catch (stockErr) {
      console.warn(`[prebuild] stock=1 fetch failed: ${stockErr.message}; using combined stockDate`);
    }

    const snapshot = {
      storeCode,
      stockDate,
      skuCount,
      flowers: data.flowers.length,
      items: data.items.length,
    };
    fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2) + '\n', 'utf-8');
    console.log(`[prebuild] stock-snapshot.json written`);

    console.log(`[prebuild] Stock date: ${stockDate || 'unknown'}`);
    console.log('[prebuild] Done!');

  } catch (err) {
    console.warn(`[prebuild] Live fetch failed: ${err.message}`);
    console.warn('[prebuild] Keeping existing JSON files as fallback');
  }
}

main();
