/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* Data imports (static fallback) */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* Live stock fetch from Apps Script */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return {
      flowers: allFlowers,
      items: allItems,
      isLive: false,
      stockDate: null,
    };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=PCB01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return {
      flowers: allFlowers,
      items: allItems,
      isLive: false,
      stockDate: null,
    };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string;
    slug: string;
    color: string;
    icon: string;
    tagline: string;
    banner: string;
    unitPrice: number /* $/g */;
    deal3g: {
      label: string;
      total: string;
      price: number;
    } | null /* 3g bundle pricing */;
    deal6g: {
      label: string;
      total: string;
      price: number;
    } | null /* 6g bundle pricing (top 3 only) */;
  }
> = {
  EXOTIC: {
    name: "Weed Exotic",
    slug: "exotic-weed",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Explore the current Weed Exotic flower menu",
    banner: "/banners/exotics_banner.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Weed Premium",
    slug: "premium-weed",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Explore the current Weed Premium flower menu",
    banner: "/banners/premium_banner.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "Weed AAA+",
    slug: "aaa-weed",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Explore the current Weed AAA+ flower menu",
    banner: "/banners/aaa_plus_banner.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "Weed AA",
    slug: "aa-weed",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Explore the current Weed AA flower menu",
    banner: "/banners/aa_banner.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Weed Budget",
    slug: "budget-weed",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Shreds & value OZs \u00B7 From $40/oz",
    banner: "/banners/budget_banner.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* Item category config */
export interface CategoryInfo {
  name: string;
  slug: string;
  color: string;
  icon: string;
  banner?: string;
  seoTitle: string;
  seoIntro: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    banner: "/banners/edibles_prerolls_more_banner.webp",
    name: "Edibles",
    slug: "edibles",
    color: "#f97316",
    icon: "",
    seoTitle: "Edibles Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse edibles category information at Pleasant Cannabis near Mount Pleasant and Midtown Toronto.",
    seoDescription:
      "Review edibles category information for Pleasant Cannabis in Toronto. Confirm current menu details before visiting 758 Mt Pleasant Rd. This page supports browsing and does not promise current product listings.",
    faqs: [
      {
        q: "What edibles information can shoppers review?",
        a: "Customers can review edibles category information and confirm current menu details before visiting Pleasant Cannabis.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },

  "VAPE PENS": {
    banner: "/banners/01_Vape_Pens.webp",
    name: "Nicotine Vape",
    slug: "vapes",
    color: "#8b5cf6",
    icon: "",
    seoTitle: "Nicotine Vape Toronto",
    seoIntro:
      "Browse the Nicotine Vape category at Pleasant Cannabis. This category is separate from the site's THC Vape section and is intended for adults 19+.",
    seoDescription:
      "Pleasant Cannabis keeps nicotine-vape browsing separate from cannabis THC vape browsing so the two categories have clear destinations.",
    faqs: [
      {
        q: "What is the Nicotine Vape category at Pleasant Cannabis?",
        a: "The Nicotine Vape category is the site's dedicated nicotine-vape section and is separate from the THC Vape category. Nicotine is addictive and this section is intended for adults 19+.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },

  "VAPE DISPOSABLE": {
    banner: "/banners/02_Vape_Disposable.webp",
    name: "THC Vape",
    slug: "vape-disposables",
    color: "#a78bfa",
    icon: "",
    seoTitle: "THC Vape Toronto",
    seoIntro:
      "Browse the THC Vape category at Pleasant Cannabis, kept separate from the site's Nicotine Vape section.",
    seoDescription:
      "This category is the cannabis THC vape destination on the Pleasant Cannabis site and should not be labelled as Nicotine Vape.",
    faqs: [
      {
        q: "Is the THC Vape category the same as Nicotine Vape?",
        a: "No. THC Vape and Nicotine Vape use separate category routes on the Pleasant Cannabis site.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },

  CONCENTRATES: {
    banner: "/banners/03_Concentrates.webp",
    name: "Concentrates",
    slug: "concentrates",
    color: "#f59e0b",
    icon: "",
    seoTitle: "Concentrates Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse concentrates category information at Pleasant Cannabis near Mount Pleasant and Midtown Toronto.",
    seoDescription:
      "Review concentrates category information for Pleasant Cannabis in Toronto. Confirm current menu details before visiting 758 Mt Pleasant Rd. This page supports browsing and does not promise current product listings.",
    faqs: [
      {
        q: "What concentrates information can shoppers review?",
        a: "Customers can review concentrates category information and confirm current menu details before visiting Pleasant Cannabis.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },

  PREROLLS: {
    banner: "/banners/04_Pre_Rolls.webp",
    name: "Pre-Rolls",
    slug: "prerolls",
    color: "#22c55e",
    icon: "",
    seoTitle: "Pre-Rolls Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse pre-rolls category information at Pleasant Cannabis near Mount Pleasant and Midtown Toronto.",
    seoDescription:
      "Review pre-rolls category information for Pleasant Cannabis in Toronto. Confirm current menu details before visiting 758 Mt Pleasant Rd. This page supports browsing and does not promise current product listings.",
    faqs: [
      {
        q: "What pre-rolls information can shoppers review?",
        a: "Customers can review pre-rolls category information and confirm current menu details before visiting Pleasant Cannabis.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },

  "ADD ONS": {
    banner: "/banners/05_Accessories.webp",
    name: "Accessories",
    slug: "add-ons",
    color: "#34d399",
    icon: "",
    seoTitle: "Accessories Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse accessories category information at Pleasant Cannabis near Mount Pleasant and Midtown Toronto.",
    seoDescription:
      "Review accessories category information for Pleasant Cannabis in Toronto. Confirm current menu details before visiting 758 Mt Pleasant Rd. This page supports browsing and does not promise current product listings.",
    faqs: [
      {
        q: "What accessories information can shoppers review?",
        a: "Customers can review accessories category information and confirm current menu details before visiting Pleasant Cannabis.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },

  "MAGIC & OTHERS": {
    name: "Magic Stuff",
    slug: "magic",
    color: "#64748b",
    icon: "",
    seoTitle: "Magic Stuff Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse magic stuff category information at Pleasant Cannabis near Mount Pleasant and Midtown Toronto.",
    seoDescription:
      "Review magic stuff category information for Pleasant Cannabis in Toronto. Confirm current menu details before visiting 758 Mt Pleasant Rd. This page supports browsing and does not promise current product listings.",
    faqs: [
      {
        q: "What magic stuff information can shoppers review?",
        a: "Customers can review magic stuff category information and confirm current menu details before visiting Pleasant Cannabis.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },

  CIGARETTES: {
    banner: "/banners/native-cigarette-offer-20260822.webp",
    name: "Cigarettes",
    slug: "cigarettes",
    color: "#78716c",
    icon: "",
    seoTitle: "Cigarettes Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse cigarettes category information at Pleasant Cannabis near Mount Pleasant and Midtown Toronto.",
    seoDescription:
      "Review cigarettes category information for Pleasant Cannabis in Toronto. Confirm current menu details before visiting 758 Mt Pleasant Rd. This page supports browsing and does not promise current product listings.",
    faqs: [
      {
        q: "What cigarettes information can shoppers review?",
        a: "Customers can review cigarettes category information and confirm current menu details before visiting Pleasant Cannabis.",
      },
      {
        q: "Does this page guarantee current listings?",
        a: "No. Category details can change, so customers should confirm the current menu before visiting.",
      },
    ],
  },
};

/* Helper functions */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter((f) => f.tier.toUpperCase() === tier.toUpperCase());
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase(),
  );
}

export function getTierFromSlug(
  slug: string,
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(([, v]) => v.slug === slug);
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string,
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug,
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [
    flower.price3g,
    flower.price5g,
    flower.price14g,
    flower.price28g,
  ]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "—";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
