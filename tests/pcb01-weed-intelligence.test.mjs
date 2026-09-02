import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const migrations = [
  ["/exotic", "/exotic-weed"],
  ["/premium", "/premium-weed"],
  ["/aaa", "/aaa-weed"],
  ["/aa", "/aa-weed"],
  ["/budget", "/budget-weed"],
  ["/resources", "/weed-resources"],
  ["/resources/flower-guide", "/resources/weed-flower-guide"],
  ["/resources/value-guide", "/resources/weed-value-guide"],
  ["/resources/menu-guide", "/resources/weed-menu-guide"],
];

function appSources(directory = path.join(root, "app")) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return appSources(target);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [target] : [];
  });
}

test("all nine V2 migrations are direct and permanent", () => {
  const config = read("next.config.ts");
  for (const [legacy, canonical] of migrations) {
    assert.match(
      config,
      new RegExp(`source: ["']${legacy.replaceAll("/", "\\/")}["'], destination: ["']${canonical.replaceAll("/", "\\/")}["'], permanent: true`),
      `${legacy} must redirect directly to ${canonical}`,
    );
  }
});

test("tier configuration uses Weed-first labels and compliant canonical slugs", () => {
  const products = read("app/lib/products.ts");
  const expected = [
    ["Exotic Weed", "exotic-weed"],
    ["Premium Weed", "premium-weed"],
    ["AAA+ Weed", "aaa-weed"],
    ["AA Weed", "aa-weed"],
    ["Budget Weed", "budget-weed"],
  ];
  for (const [name, slug] of expected) {
    assert.ok(products.includes(`name: "${name}"`));
    assert.ok(products.includes(`slug: "${slug}"`));
  }
});

test("tier SEO titles and H1s use Weed-first naming with Cannabis Flower", () => {
  const seo = read("app/lib/tierSeoContent.ts");
  for (const tier of ["Exotic", "Premium", "AAA+", "AA", "Budget"]) {
    assert.ok(seo.includes(`seoTitle: "Weed ${tier} & Cannabis Flower Toronto | Pleasant Cannabis"`));
    assert.ok(seo.includes(`h1: "Weed ${tier} & Cannabis Flower in Toronto"`));
  }
});

test("supporting Weed resources use compliant slugs and evergreen copy", () => {
  const resources = read("app/resources/resourceData.ts").replaceAll("\r\n", "\n");
  for (const slug of ["weed-menu-guide", "weed-flower-guide", "weed-value-guide"]) {
    assert.ok(resources.includes(`slug: "${slug}"`));
  }
  const resourceBlock = (slug) => {
    const start = resources.indexOf(`slug: "${slug}"`);
    const end = resources.indexOf("\n  },\n  {", start);
    return resources.slice(start, end);
  };
  const refreshed = ["", "weed-menu-guide", "weed-flower-guide", "weed-value-guide"]
    .map(resourceBlock)
    .join("\n");
  assert.doesNotMatch(refreshed, /\$\d|\b3g\b|\b6g\b|cheap weed|open 24|758 Mt Pleasant|owner page|SEO owner|canonical|site structure|search path/i);
});

test("no application link points to a migrated legacy URL", () => {
  const files = appSources();
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    for (const [legacy] of migrations) {
      for (const reference of [
        `href: "${legacy}"`,
        `href: '${legacy}'`,
        `href="${legacy}"`,
        `href='${legacy}'`,
        `secondaryHref: "${legacy}"`,
      ]) {
        assert.ok(!source.includes(reference), `${path.relative(root, file)} still links to ${legacy}`);
      }
    }
  }
});

test("sitemap and resource home canonical use only the new owner", () => {
  assert.ok(read("app/sitemap.ts").includes("`${BASE}/weed-resources`"));
  assert.ok(read("app/weed-resources/page.tsx").includes("https://www.pleasantcannabis.ca/weed-resources"));
});

test("protected delivery and vape route identities remain explicit", () => {
  const navigation = read("app/components/Navbar.tsx");
  assert.ok(navigation.includes('{ href: "/delivery", label: "DELIVERY MENU" }'));
  assert.ok(navigation.includes('{ href: "/items/vapes", label: "Nicotine Vape" }'));
  assert.ok(navigation.includes('{ href: "/items/vape-disposables", label: "THC Vape" }'));
});
