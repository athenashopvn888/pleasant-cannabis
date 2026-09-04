export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Weed & Cannabis Resources from Pleasant Cannabis",
    seoTitle: "Weed & Cannabis Resources Toronto | Pleasant Cannabis",
    description: "Explore Pleasant Cannabis Weed resources for flower tiers, menu browsing and value-focused shopping, with direct paths to the Toronto Weed selection and five flower collections.",
    eyebrow: "Pleasant Cannabis Weed Resources",
    intro: "Pleasant Cannabis brings together practical guides for shoppers exploring Weed and cannabis in Midtown Toronto. Compare the five flower collections, get familiar with different parts of the menu, or explore broader Weed options before narrowing your selection.",
    cards: [
      { title: "Pleasant Cannabis Weed in Toronto", href: "/weed-dispensary-toronto/", text: "Start with the broader Pleasant Cannabis Weed selection before narrowing your browsing." },
      { title: "Cannabis Dispensary vs. Weed Dispensary", href: "/resources/cannabis-dispensary-vs-weed-dispensary", text: "They use whichever words feel natural: cannabis, weed, cannabis store, weed dispensary, or simply dispensary." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed in one concise flower guide." },
      { title: "Weed Value Guide", href: "/resources/weed-value-guide", text: "Compare Weed flower collections using the information presented while you browse." },
      { title: "Weed Menu Guide", href: "/resources/weed-menu-guide", text: "Explore the broad Weed selection, individual flower collections and supporting Pleasant Cannabis guides." }
    ],
    sections: [
      {
        heading: "Explore Pleasant Cannabis Weed Flower Collections",
        body: "Each collection gives shoppers a focused place to explore one part of the Pleasant Cannabis flower selection.",
        bullets: ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]
      },
      {
        heading: "Start Broad or Explore One Collection",
        body: "If you have a particular flower collection in mind, go directly to it. If you want to browse more broadly first, start with Pleasant Cannabis Weed in Toronto and narrow your selection from there."
      }
    ],
  },
  {
    slug: "mount-pleasant-midtown-visit-guide",
    title: "Mount Pleasant And Midtown Toronto Weed Dispensary Visit Guide",
    seoTitle: "Mount Pleasant And Midtown Toronto Weed Dispensary Visit Guide | Pleasant Cannabis",
    description: "Local visit planning for Pleasant Cannabis at 758 Mt Pleasant Rd, with Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale, and TTC routes context, menu shortcuts, hours, and category paths.",
    eyebrow: "Visit Guide",
    intro: "Use this page when the search starts local: weed dispensary near Mount Pleasant / Midtown Toronto, cannabis store near 758 Mt Pleasant Rd, or a quick menu check before visiting from Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale, and TTC routes.",
    cards: [
      { title: "Store Visit Page", href: "/weed-dispensary-toronto", text: "Use the main store visit page for address, directions, hours, and store details." },
      { title: "Weed Menu Guide", href: "/resources/weed-menu-guide", text: "Explore the broad Weed selection, five flower collections and supporting guides." },
      { title: "Weed Value Guide", href: "/resources/weed-value-guide", text: "Compare Weed flower collections using the information presented while browsing." }
    ],
    sections: [
      {
        heading: "Address Anchor",
        body: "Pleasant Cannabis is listed at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6. Keep that address as the local anchor, then use the resource pages to decide whether the trip is about flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes."
      },
      {
        heading: "Neighborhood Shopping Notes",
        body: "Midtown shoppers often describe the same trip as Mount Pleasant, Davisville, Yonge and Eglinton, Leaside, Moore Park, or Rosedale, so the resource pages tie those searches back to one clean menu section.",
        bullets: ["Mount Pleasant cannabis store shopping note", "Midtown Toronto cannabis store shopping note", "Davisville cannabis store shopping note", "Yonge and Eglinton cannabis store shopping note", "Leaside cannabis store shopping note", "Moore Park cannabis store shopping note", "Rosedale cannabis store shopping note", "TTC cannabis store shopping note"]
      },
      {
        heading: "Best First Click",
        body: "If you need store details, start with /weed-dispensary-toronto. If you are comparing product types, start with the menu guide. If the trip is about Native smokes or cigarettes, start with the Native smokes page and then confirm the current category page."
      }
    ],
  },
  {
    slug: "weed-menu-guide",
    title: "Pleasant Cannabis Weed Menu Guide",
    seoTitle: "Weed Menu Guide Toronto | Pleasant Cannabis",
    description: "Explore the Pleasant Cannabis Weed menu through the broad Toronto Weed selection, five flower collections and supporting shopping guides.",
    eyebrow: "Pleasant Cannabis Weed Menu",
    intro: "Pleasant Cannabis offers several ways to explore Weed and cannabis in Midtown Toronto. Start with the broader Weed selection, choose one of five flower collections, or use a supporting guide when you want to compare your options first.",
    cards: [
      { title: "Pleasant Cannabis Weed in Toronto", href: "/weed-dispensary-toronto/", text: "Begin with the broader Pleasant Cannabis Weed selection." },
      { title: "Exotic Weed", href: "/exotic-weed", text: "Explore the dedicated Exotic Weed Cannabis Flower collection." },
      { title: "Premium Weed", href: "/premium-weed", text: "Browse the dedicated Premium Weed Cannabis Flower collection." },
      { title: "AAA+ Weed", href: "/aaa-weed", text: "Explore the dedicated AAA+ Weed Cannabis Flower collection." },
      { title: "AA Weed", href: "/aa-weed", text: "Browse the dedicated AA Weed Cannabis Flower collection." },
      { title: "Budget Weed", href: "/budget-weed", text: "Explore the dedicated Budget Weed Cannabis Flower collection." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "See all five flower collections together before exploring one." },
      { title: "Weed Value Guide", href: "/resources/weed-value-guide", text: "Use a simple framework for comparing what you see while browsing." }
    ],
    sections: [
      {
        heading: "Compare Weed Flower Collections",
        body: "If you want to see the five flower collections together before exploring one, use the Pleasant Cannabis Weed Flower Guide."
      },
      {
        heading: "Explore Weed with Value in Mind",
        body: "If you want a simple framework for comparing the information presented while you browse, use the Pleasant Cannabis Weed Value Guide."
      }
    ],
  },
  {
    slug: "weed-flower-guide",
    title: "Pleasant Cannabis Weed Flower Guide",
    seoTitle: "Weed Flower Guide Toronto | Pleasant Cannabis",
    description: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed at Pleasant Cannabis and compare the five dedicated flower collections.",
    eyebrow: "Pleasant Cannabis Weed Flower",
    intro: "Pleasant Cannabis organizes flower browsing across five Weed collections: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Explore each collection individually or compare several before deciding where you want to browse next.",
    cards: [
      { title: "Pleasant Cannabis Weed in Toronto", href: "/weed-dispensary-toronto/", text: "Start with the broader Pleasant Cannabis Weed selection." },
      { title: "Exotic Weed", href: "/exotic-weed", text: "Explore the Pleasant Cannabis Exotic Weed flower collection." },
      { title: "Premium Weed", href: "/premium-weed", text: "Browse the dedicated Premium Weed flower collection." },
      { title: "AAA+ Weed", href: "/aaa-weed", text: "Explore AAA+ Weed through its dedicated Pleasant Cannabis flower collection." },
      { title: "AA Weed", href: "/aa-weed", text: "Browse the dedicated AA Weed flower collection." },
      { title: "Budget Weed", href: "/budget-weed", text: "Explore the Pleasant Cannabis Budget Weed flower collection." }
    ],
    sections: [
      {
        heading: "Compare Five Weed Flower Collections",
        body: "The five collections give you different parts of the Pleasant Cannabis flower selection to explore. Start with one that interests you or move between several while comparing the information presented with each collection."
      },
      {
        heading: "Weed, Cannabis and Flower at Pleasant Cannabis",
        body: "Weed, cannabis, bud and flower are common terms shoppers use while browsing dispensary selections. Pleasant Cannabis uses those terms naturally while keeping each flower collection easy to distinguish."
      },
      {
        heading: "Explore More Than One Flower Collection",
        body: "Move between Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed while deciding which sections you want to explore further, or start with Pleasant Cannabis Weed in Toronto for broader browsing."
      }
    ],
  },
  {
    slug: "weed-value-guide",
    title: "Pleasant Cannabis Weed Value Guide",
    seoTitle: "Weed Value Guide Toronto | Pleasant Cannabis",
    description: "Use the Pleasant Cannabis Weed Value Guide to compare flower collections and menu information while exploring Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed.",
    eyebrow: "Pleasant Cannabis Weed Value",
    intro: "Different Pleasant Cannabis shoppers may value different things when exploring Weed flower. This guide provides a simple way to compare the five collections and the information shown with them without relying on fixed prices, temporary promotions or assumptions about which collection is right for everyone.",
    cards: [
      { title: "Budget Weed", href: "/budget-weed", text: "Explore the dedicated Budget Weed Cannabis Flower collection." },
      { title: "AA Weed", href: "/aa-weed", text: "Browse the dedicated AA Weed Cannabis Flower collection." },
      { title: "AAA+ Weed", href: "/aaa-weed", text: "Explore the dedicated AAA+ Weed Cannabis Flower collection." },
      { title: "Premium Weed", href: "/premium-weed", text: "Browse the dedicated Premium Weed Cannabis Flower collection." },
      { title: "Exotic Weed", href: "/exotic-weed", text: "Explore the dedicated Exotic Weed Cannabis Flower collection." },
      { title: "Pleasant Cannabis Weed in Toronto", href: "/weed-dispensary-toronto/", text: "Browse more broadly before choosing one flower collection." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "See all five Pleasant Cannabis Weed flower collections together." }
    ],
    sections: [
      {
        heading: "Compare What You See While You Browse",
        body: "When exploring different Weed flower collections, look at the product information presented with the items that interest you and compare another collection whenever useful.",
        bullets: ["The Weed flower collection you are browsing", "Product information presented with individual items", "Other collections you want to explore", "Whether broader Weed browsing would be more useful"]
      },
      {
        heading: "Explore Pleasant Cannabis More Broadly",
        body: "If you do not want to start with one specific flower collection, browse Pleasant Cannabis Weed in Toronto or use the Weed Flower Guide for an introduction to all five collections."
      }
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "Pleasant Cannabis Pre-Roll And Quick Trip Guide",
    seoTitle: "Pleasant Cannabis Pre-Roll Guide | Ready-To-Smoke Menu Tips",
    description: "A pre-roll guide for Pleasant Cannabis, with quick-trip tips for ready-to-smoke options, flower cross-shopping, edibles, vapes, concentrates, and accessories.",
    eyebrow: "Pre-Roll Guide",
    intro: "Pre-roll shoppers usually want a faster path than loose flower shoppers. Use this page when the goal is ready-to-smoke options, a quick stop, or a small add-on beside another category.",
    cards: [
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Open the current pre-roll category." },
      { title: "Flower Tiers", href: "/resources/weed-flower-guide", text: "Switch here if the visit turns into loose flower." },
      { title: "Menu Guide", href: "/resources/weed-menu-guide", text: "Use this if the stop includes edibles, vapes, concentrates, or accessories." }
    ],
    sections: [
      {
        heading: "Keep Pre-Rolls In Their Own Lane",
        body: "Pre-rolls should be compared by format, pack size, posted notes, and current price. Do not force loose-flower tier logic onto pre-roll shopping unless the visit actually changes categories."
      },
      {
        heading: "Useful For Local Quick Stops",
        body: "For Mount Pleasant and Midtown Toronto shoppers, pre-rolls offer a direct category to check before heading through Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale, and TTC routes. Use the current category page for current details."
      }
    ],
  },
  {
    slug: "native-smokes",
    title: "Pleasant Cannabis Native Smokes Price Guide",
    seoTitle: "Pleasant Cannabis Native Smokes Prices | Cigarettes, Backwoods And Grabba",
    description: "Pleasant Cannabis Native smokes resource with cigarette brands and listed prices for Canadian, Putters, Canadian Goose, Nexus, Time, Backwoods, grabba, pouches, and mixed smoke items where shown.",
    eyebrow: "Native Smokes",
    intro: "This page gives cigarette shoppers a real starting point instead of a vague category page. Use it for Native cigarettes, Canadian brands, Backwoods, grabba, nicotine pouches, and mixed smoke item price checks at Pleasant Cannabis.",
    cards: [
      { title: "$25 Cigarette Brands", href: "/items/cigarettes", text: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown." },
      { title: "Backwoods And Grabba", href: "/items/cigarettes", text: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3" },
      { title: "Native Cigarettes Guide", href: "/resources/native-smokes/native-cigarettes-guide", text: "A fuller brand and price breakdown for cigarette shoppers." }
    ],
    sections: [
      {
        heading: "$25 Cigarette Brand List",
        body: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown.",
        bullets: ["CANADIAN LIGHTS - $25", "CANADIAN FULL - $25", "PUTTERS - $25", "CANADIAN GOOSE FULL - $25", "CANADIAN GOOSE LIGHTS - $25", "CANADIAN MENTHOL - $25", "CANADIAN CLASSICS ORIGINAL - $25", "CANADIAN CLASSICS SILVER - $25", "ROLLED GOLD LIGHTS - $25", "NEXUS FULL - $25", "NEXUS LIGHTS - $25", "TIME FULL - $25"]
      },
      {
        heading: "Backwoods, Grabba, Pouches, And Mix Items",
        body: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3"
      },
      {
        heading: "Confirm The Current Shelf",
        body: "Cigarette inventory, flavors, and brand mix can change. Use the cigarette category for the current public list, then confirm in store when one exact brand, full/light/menthol style, pouch, grabba, or Backwoods flavor matters."
      }
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "Pleasant Cannabis Native Cigarettes Brand Guide",
    seoTitle: "Pleasant Cannabis Native Cigarettes Guide | Brand And Price List",
    description: "A detailed Native cigarettes brand guide for Pleasant Cannabis, including $25 cigarette listings and smoke add-on prices where shown.",
    eyebrow: "Native Cigarettes",
    intro: "If the trip includes cigarettes, start with brand and price first. This guide keeps Native cigarettes, Backwoods, grabba, pouches, and mixed smoke items separate from flower, pre-rolls, edibles, THC vapes, and concentrates.",
    cards: [
      { title: "Cigarette Category", href: "/items/cigarettes", text: "Open the current cigarette category." },
      { title: "Native Smokes Overview", href: "/resources/native-smokes", text: "Return to the shorter price guide." },
      { title: "Local Visit Guide", href: "/resources/mount-pleasant-midtown-visit-guide", text: "Plan the store stop around the local area." }
    ],
    sections: [
      {
        heading: "Brand Names To Check",
        body: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown.",
        bullets: ["CANADIAN LIGHTS - $25", "CANADIAN FULL - $25", "PUTTERS - $25", "CANADIAN GOOSE FULL - $25", "CANADIAN GOOSE LIGHTS - $25", "CANADIAN MENTHOL - $25", "CANADIAN CLASSICS ORIGINAL - $25", "CANADIAN CLASSICS SILVER - $25", "ROLLED GOLD LIGHTS - $25", "NEXUS FULL - $25", "NEXUS LIGHTS - $25", "TIME FULL - $25"]
      },
      {
        heading: "Smoke Category Add-Ons",
        body: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3"
      },
      {
        heading: "Separate The Smoke Shelf From Cannabis Shopping",
        body: "When the same visit includes flower, pre-rolls, edibles, THC vapes, concentrates, or accessories, keep cigarettes as their own lane. It makes the category easier for both cannabis shoppers and Native smokes shoppers."
      }
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "Pleasant Cannabis Resource Guide Refresh",
    seoTitle: "Pleasant Cannabis Resource Guide Refresh | Local Menu Guides",
    description: "Pleasant Cannabis resource guide refresh with local visit planning, menu guide pages, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "Resource Update",
    intro: "The resource centre has been rebuilt around real shopping trips: local visit planning, category-guided browsing, flower tier math, value shopping, pre-roll shortcuts, and cigarette price notes.",
    cards: [
      { title: "Resource Home", href: "/weed-resources", text: "Start at the main resource hub." },
      { title: "Local Visit Guide", href: "/resources/mount-pleasant-midtown-visit-guide", text: "Plan around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale, and TTC routes." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Compare five dedicated Weed flower collections." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Check brand and price notes." }
    ],
    sections: [
      {
        heading: "What Changed",
        body: "The resources now sound like Pleasant Cannabis and Mount Pleasant / Midtown Toronto, not a copied store template. Each page supports a specific shopper task and points back to the best category or store visit page."
      },
      {
        heading: "What Stayed Protected",
        body: "The important SEO paths stay intact: /weed-dispensary-toronto, /resources, /resources/menu-guide, /resources/flower-guide, /resources/value-guide, /resources/pre-roll-guide, /resources/native-smokes, and /resources/native-smokes/native-cigarettes-guide."
      }
    ],
  }
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
