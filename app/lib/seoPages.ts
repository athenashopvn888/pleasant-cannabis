export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
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
        body: "Pleasant Cannabis is open 24 hours. Walk in when the shop is open, check the menu first, or call (437) 427-0758 if you need current in-store details.",
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
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
