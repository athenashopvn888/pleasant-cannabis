import type { MetadataRoute } from "next";
import { TIER_CONFIG, CATEGORY_CONFIG, allFlowers, allItems } from "./lib/products";
import { SEO_PAGES } from "./lib/seoPages";
import { RESOURCE_PAGES } from "./resources/resourceData";
import { GUIDE_REGISTRY } from "./lib/guideRegistry";
import { DELIVERY_GUIDE_REGISTRY } from "./lib/deliveryGuideRegistry";

const BASE = "https://www.pleasantcannabis.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/visit`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/weed-dispensary-toronto`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/careers/budtender`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/weed-delivery-toronto`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/weed-dispensary-mount-pleasant`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/24-hour-mount-pleasant-dispensary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/native-cigarettes-mount-pleasant`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/nicotine-vape-mount-pleasant`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  /* Tier pages */
  const tierPages: MetadataRoute.Sitemap = Object.values(TIER_CONFIG).map((t) => ({
    url: `${BASE}/${t.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  /* Item category pages */
  const itemPages: MetadataRoute.Sitemap = Object.values(CATEGORY_CONFIG).map((c) => ({
    url: `${BASE}/items/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  /* Flower detail pages */
  const flowerPages: MetadataRoute.Sitemap = allFlowers.map((f) => ({
    url: `${BASE}/flower/${f.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* Item detail pages */
  const itemDetailPages: MetadataRoute.Sitemap = allItems.map((i) => ({
    url: `${BASE}/item/${i.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* SEO landing pages */
  const redirectedSeoPages = new Set([
    "dispensary-near-me-mount-pleasant",
    "mount-pleasant-weed-dispensary",
    "weed-store-near-midtown-toronto",
  ]);
  const seoPages: MetadataRoute.Sitemap = SEO_PAGES.filter((p) => !redirectedSeoPages.has(p.slug)).map((p) => ({
    url: `${BASE}/info/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const resourcePages: MetadataRoute.Sitemap = RESOURCE_PAGES.map((page) => ({
    url: page.slug ? `${BASE}/resources/${page.slug}` : `${BASE}/weed-resources`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.slug ? 0.65 : 0.75,
  }));

  const guidePages: MetadataRoute.Sitemap = [...GUIDE_REGISTRY, ...DELIVERY_GUIDE_REGISTRY].map((guide) => ({
    url: `${BASE}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const guideIndex: MetadataRoute.Sitemap = [
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  return [...guideIndex, ...guidePages, ...staticPages, ...tierPages, ...itemPages, ...flowerPages, ...itemDetailPages, ...seoPages, ...resourcePages];
}
