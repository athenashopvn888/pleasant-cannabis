const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string; sourceSlug?: string }[];
    disclosure: string;
    theme?: "cigarettes" | "nicotine";
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "mount-pleasant-weed-dispensary",
    title: "Mount Pleasant Weed Dispensary Pleasant Cannabis | Open 24 Hours",
    metaDescription:
      "Pleasant Cannabis is a local cannabis dispensary at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6. Browse flower tiers, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories before visiting.",
    h1: "Mount Pleasant Weed Dispensary Pleasant Cannabis",
    icon: "",
    heroTagline:
      "Local cannabis near Mount Pleasant and Midtown Toronto - Open 24 Hours - Walk-in welcome",
    banner: "",
    sections: [
      {
        heading:
          "A Local Cannabis Stop Near Mount Pleasant and Midtown Toronto",
        body: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6. This page is built for shoppers around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale who want clear store information and simple menu sections before visiting.",
      },
      {
        heading: "Flower Tiers And Menu Sections",
        body: "Pleasant Cannabis organizes flower into clear tiers, from Exotic and Premium to AAA+, AA, and Budget. You can also browse edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories through the live menu before stopping in.",
      },
      {
        heading: "Useful Local Search Without The Template Noise",
        body: "The store identity here is Mount Pleasant and Midtown Toronto, not a copied city page. Use this page for local context, then jump into the category pages or Resources hub for menu decisions.",
      },
      {
        heading: "Open 24 Hours Near Mount Pleasant",
        body: "Pleasant Cannabis is open 24 hours. Walk in when the shop is open, check the menu first, or call +1 (289) 806-9425 if you need current in-store details.",
      },
    ],
    faqs: [
      {
        q: "Where is Pleasant Cannabis located?",
        a: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, near Mount Pleasant and Midtown Toronto.",
      },
      {
        q: "What products can I browse?",
        a: "You can browse flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories before visiting.",
      },
      {
        q: "How do I check current menu listings?",
        a: "Use the current menu or ask in store for today's exact listings.",
      },
      {
        q: "What areas does this store naturally serve?",
        a: "Pleasant Cannabis is useful for shoppers around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale.",
      },
    ],
  },

  {
    slug: "cheap-weed-mount-pleasant",
    title: "Cheap Weed Near Mount Pleasant | Pleasant Cannabis",
    metaDescription:
      "Looking for affordable cannabis near Mount Pleasant? Pleasant Cannabis at 758 Mt Pleasant Rd has Budget, AA, AAA+, Premium, and Exotic flower tiers with clear menu browsing.",
    h1: "Cheap Weed Near Mount Pleasant",
    icon: "",
    heroTagline:
      "Budget flower, value ounces, and clear tier pricing near Mount Pleasant and Midtown Toronto",
    banner: "",
    sections: [
      {
        heading: "Value Flower Without Fake Claims",
        body: "Pleasant Cannabis uses clear flower tiers so shoppers can compare Budget, AA, AAA+, Premium, and Exotic options before visiting. This page is for value-oriented browsing near Mount Pleasant and Midtown Toronto.",
      },
      {
        heading: "Bundle Pricing Context",
        body: "Flower deal details can vary by current menu and tier. Check the live menu or ask in store before purchase so the price and package size are clear.",
      },
      {
        heading: "Local Value Search",
        body: "If you are searching for affordable cannabis around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale, start here and move into the flower tier pages for current category details.",
      },
    ],
    faqs: [
      {
        q: "Where can I find affordable cannabis near Mount Pleasant?",
        a: "Pleasant Cannabis at 758 Mt Pleasant Rd is a local option for value-focused shoppers near Mount Pleasant and Midtown Toronto.",
      },
      {
        q: "Does this page guarantee current prices?",
        a: "No. Prices and menu listings should be confirmed on the current menu or in store.",
      },
      {
        q: "Which flower tiers should value shoppers compare?",
        a: "Budget, AA, and AAA+ are usually the first tiers to compare when shopping for value.",
      },
    ],
  },

  {
    slug: "native-cigarettes-mount-pleasant",
    title: "Native Cigarettes Near Mount Pleasant | Pleasant Cannabis",
    metaDescription:
      "Browse native cigarette category information for Pleasant Cannabis at 758 Mt Pleasant Rd. Confirm current brands, varieties, and pricing in store.",
    h1: "Native Cigarettes Near Mount Pleasant",
    icon: "",
    heroTagline:
      "Cigarettes, accessories, and cannabis category browsing near Mount Pleasant and Midtown Toronto",
    heroPreview: {
      eyebrow: "Pleasant Cannabis · 758 Mt Pleasant Rd, Midtown Toronto",
      intro: "Cigarette category guidance near Mount Pleasant and Midtown Toronto",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    banner: "",
    sections: [
      {
        heading: "Cigarette Category Information",
        body: "Pleasant Cannabis includes cigarette category browsing alongside cannabis categories. Use this page to find the right store path, then confirm current brand selection and prices in store.",
      },
      {
        heading: "One Stop For Category Browsing",
        body: "Shoppers near Mount Pleasant and Midtown Toronto can browse cigarettes, flower, pre-rolls, edibles, vapes, concentrates, and accessories before visiting 758 Mt Pleasant Rd.",
      },
      {
        heading: "Local Context",
        body: "This page is centered on Mount Pleasant and Midtown Toronto and nearby areas like Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale. It does not reuse unrelated city copy.",
      },
    ],
    faqs: [
      {
        q: "Does Pleasant Cannabis list cigarette information?",
        a: "Yes. The site includes cigarette category information, but current brands and prices should be confirmed in store.",
      },
      {
        q: "Can I browse cannabis and cigarettes together?",
        a: "Yes. The site has category paths for cannabis products, cigarettes, and accessories.",
      },
      {
        q: "Where is the store?",
        a: "758 Mt Pleasant Rd, Toronto, ON M4S 2N6.",
      },
    ],
  },

  {
    slug: "weed-store-near-midtown-toronto",
    title: "Weed Store Near Midtown Toronto | Pleasant Cannabis",
    metaDescription:
      "Pleasant Cannabis is a local weed store at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, useful for shoppers around Mount Pleasant and Midtown Toronto and nearby Midtown Toronto.",
    h1: "Weed Store Near Midtown Toronto",
    icon: "",
    heroTagline:
      "Local cannabis browsing near Mount Pleasant and Midtown Toronto and Midtown Toronto",
    banner: "",
    sections: [
      {
        heading: "A Nearby Weed Store Path",
        body: "Pleasant Cannabis is anchored at 758 Mt Pleasant Rd. This page is for shoppers looking around Mount Pleasant and Midtown Toronto, Midtown Toronto, and nearby routes.",
      },
      {
        heading: "Why Start With The Menu",
        body: "The menu helps you compare flower tiers and category paths before visiting. It is a cleaner next step than a generic city page.",
      },
      {
        heading: "Directions Context",
        body: "Use Mount Pleasant and Midtown Toronto as the local anchor. Nearby shoppers may also recognize Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale.",
      },
    ],
    faqs: [
      {
        q: "Is this store near Midtown Toronto?",
        a: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, with local context around Mount Pleasant and Midtown Toronto.",
      },
      {
        q: "Can I check categories before visiting?",
        a: "Yes. Use the flower and item category pages to browse before you go.",
      },
      {
        q: "Does this page promise delivery?",
        a: "No. Delivery pages are marked coming soon unless the store has launched delivery.",
      },
    ],
  },

  {
    slug: "dispensary-near-me-mount-pleasant",
    title: "Cannabis Dispensary Near Me Mount Pleasant | Pleasant Cannabis",
    metaDescription:
      "Find Pleasant Cannabis at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6. Browse cannabis flower, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories before visiting.",
    h1: "Cannabis Dispensary Near Me Mount Pleasant",
    icon: "",
    heroTagline:
      "Walk-in friendly cannabis browsing near Mount Pleasant and Midtown Toronto",
    banner: "",
    sections: [
      {
        heading: "Find Cannabis Near Mount Pleasant",
        body: "If you are searching for a cannabis dispensary near Mount Pleasant, Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6.",
      },
      {
        heading: "Browse Before You Visit",
        body: "Use the menu and Resources hub to compare product categories, value options, flower tiers, and visit planning details.",
      },
      {
        heading: "Areas We Naturally Reference",
        body: "Pleasant Cannabis is associated with Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale. These local references keep the site identity specific and useful.",
      },
    ],
    faqs: [
      {
        q: "Where is the closest local page for this store?",
        a: "Start with /weed-dispensary-toronto for GBP-style address and visit details.",
      },
      {
        q: "Is walk-in shopping supported?",
        a: "The site is built around browsing before visiting. Confirm current shopping details with the store when needed.",
      },
      {
        q: "What neighbourhoods does this page focus on?",
        a: "Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale",
      },
    ],
  },
  {
    slug: "nicotine-vapes-mount-pleasant",
    title: "Nicotine Vapes Near Mount Pleasant | Pleasant Cannabis",
    absoluteTitle: true,
    metaDescription: "Adults 19+: review six nicotine vape product pages from Pleasant Cannabis in Midtown Toronto, then check /items/vapes. Nicotine is addictive.",
    h1: "Nicotine Vapes at Pleasant Cannabis in Midtown Toronto",
    icon: "NV",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroPreview: {
      eyebrow: "PLEASANT CANNABIS • MOUNT PLEASANT / MIDTOWN TORONTO • ADULTS 19+",
      intro: "Searching for nicotine vapes near me around Mount Pleasant or Midtown Toronto? This adult-only Pleasant Cannabis guide features six live-checked VAPE PENS product pages. Compare their supported names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
      products: [
        { name: "ENVI DRIP’N – 5% | 28K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1092-Envi-Dripn-28K.webp", sourceSlug: "envi-dripn-5-28k-puffs" },
        { name: "GEEK PROMAX – 5% | 30K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", sourceSlug: "geek-promax-5-30k-puffs" },
        { name: "GEEK UNIVERSE 25k PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", sourceSlug: "geek-universe-25k-puffs" },
        { name: "NEXA PIX | 30K PUFFS | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp", sourceSlug: "nexa-pix-30k-puffs-many-flavors" },
        { name: "OVNS 10000 – 5% | 10K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", sourceSlug: "ovns-10000-5-10k-puffs" },
        { name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", sourceSlug: "ovns-disposable-5-8ml-many-flavors" },
      ],
      disclosure: "Featured cards are live-checked starting points, not guarantees of current stock, price or availability.",
      theme: "nicotine", menuHref: "/items/vapes", primaryLabel: "Browse Nicotine Vapes", secondaryLabel: "Compare the Six Featured Items", secondaryHref: "#featured-vapes",
      identityStrip: "Pleasant Cannabis | Mount Pleasant / Midtown Toronto | Adults 19+ | Nicotine is addictive.",
      featuredHeading: "Six Live-Checked Pleasant Cannabis Vape Cards",
      featuredIntro: "This shortlist contains six live-checked ENVI, Geek, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current Pleasant Cannabis category listing.",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      { heading: "Read Each Product Format Carefully", body: "One featured page explicitly identifies an OVNS disposable. Keep that description attached only to that product and do not apply the disposable label to another featured item by assumption." },
      { heading: "Puff Counts Identify Listings", body: "Several featured names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority." },
      { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only Pleasant Cannabis guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded." },
      { heading: "Review the Current Mount Pleasant Category", body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability." },
    ],
    faqs: [
      { q: "Where should I check Pleasant Cannabis’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are live-checked starting points while the current category listing controls selection information." },
      { q: "Does every featured item use the same format?", a: "No format should be assumed. One featured page explicitly identifies an OVNS disposable. Read each current product page for its supported format and details." },
      { q: "Does this page include cannabis vapes?", a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
