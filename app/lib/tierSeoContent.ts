export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Cannabis Flower Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse top-tier flower category browsing at Pleasant Cannabis near Mount Pleasant and Midtown Toronto. Confirm current strains, prices, and availability before visiting.",
    sections: [
      {
        heading: "Exotic Flower At Pleasant Cannabis",
        body: "Pleasant Cannabis lists Exotic flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain availability, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $20/g",
        body: "The Exotic tier is presented with clear menu pricing and deal context where available. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, serving shoppers around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale.",
      },
    ],
    faqs: [
      {
        q: "What is Exotic flower?",
        a: "Exotic is one of the flower tiers shown on the Pleasant Cannabis menu. It helps shoppers compare category, value, and potency context before visiting.",
      },
      {
        q: "Does this page guarantee current Exotic stock?",
        a: "No. Use the current menu or ask in store for exact availability.",
      },
      {
        q: "Where is the store?",
        a: "758 Mt Pleasant Rd, Toronto, ON M4S 2N6",
      },
    ],
  },

  PREMIUM: {
    seoTitle: "Premium Cannabis Flower Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse premium flower category browsing at Pleasant Cannabis near Mount Pleasant and Midtown Toronto. Confirm current strains, prices, and availability before visiting.",
    sections: [
      {
        heading: "Premium Flower At Pleasant Cannabis",
        body: "Pleasant Cannabis lists Premium flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain availability, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $15/g",
        body: "The Premium tier is presented with clear menu pricing and deal context where available. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, serving shoppers around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale.",
      },
    ],
    faqs: [
      {
        q: "What is Premium flower?",
        a: "Premium is one of the flower tiers shown on the Pleasant Cannabis menu. It helps shoppers compare category, value, and potency context before visiting.",
      },
      {
        q: "Does this page guarantee current Premium stock?",
        a: "No. Use the current menu or ask in store for exact availability.",
      },
      {
        q: "Where is the store?",
        a: "758 Mt Pleasant Rd, Toronto, ON M4S 2N6",
      },
    ],
  },

  "AAA+": {
    seoTitle: "AAA+ Cannabis Flower Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse high-potency value category browsing at Pleasant Cannabis near Mount Pleasant and Midtown Toronto. Confirm current strains, prices, and availability before visiting.",
    sections: [
      {
        heading: "AAA+ Flower At Pleasant Cannabis",
        body: "Pleasant Cannabis lists AAA+ flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain availability, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $10/g",
        body: "The AAA+ tier is presented with clear menu pricing and deal context where available. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, serving shoppers around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale.",
      },
    ],
    faqs: [
      {
        q: "What is AAA+ flower?",
        a: "AAA+ is one of the flower tiers shown on the Pleasant Cannabis menu. It helps shoppers compare category, value, and potency context before visiting.",
      },
      {
        q: "Does this page guarantee current AAA+ stock?",
        a: "No. Use the current menu or ask in store for exact availability.",
      },
      {
        q: "Where is the store?",
        a: "758 Mt Pleasant Rd, Toronto, ON M4S 2N6",
      },
    ],
  },

  AA: {
    seoTitle: "AA Cannabis Flower Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse daily-driver flower category browsing at Pleasant Cannabis near Mount Pleasant and Midtown Toronto. Confirm current strains, prices, and availability before visiting.",
    sections: [
      {
        heading: "AA Flower At Pleasant Cannabis",
        body: "Pleasant Cannabis lists AA flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain availability, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $4/g",
        body: "The AA tier is presented with clear menu pricing and deal context where available. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, serving shoppers around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale.",
      },
    ],
    faqs: [
      {
        q: "What is AA flower?",
        a: "AA is one of the flower tiers shown on the Pleasant Cannabis menu. It helps shoppers compare category, value, and potency context before visiting.",
      },
      {
        q: "Does this page guarantee current AA stock?",
        a: "No. Use the current menu or ask in store for exact availability.",
      },
      {
        q: "Where is the store?",
        a: "758 Mt Pleasant Rd, Toronto, ON M4S 2N6",
      },
    ],
  },

  BUDGET: {
    seoTitle: "Budget Cannabis Toronto | Pleasant Cannabis",
    seoIntro:
      "Browse value flower category browsing at Pleasant Cannabis near Mount Pleasant and Midtown Toronto. Confirm current strains, prices, and availability before visiting.",
    sections: [
      {
        heading: "Budget Flower At Pleasant Cannabis",
        body: "Pleasant Cannabis lists Budget flower as part of its tiered cannabis menu. Use this page for category context, then check the current menu for exact strain availability, THC details, and package pricing.",
      },
      {
        heading: "Pricing Context From $3/g",
        body: "The Budget tier is presented with clear menu pricing and deal context where available. Prices and stock can change, so confirm the current menu or ask in store before purchase.",
      },
      {
        heading: "Local Store Context",
        body: "Pleasant Cannabis is located at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, serving shoppers around Mount Pleasant, Midtown Toronto, Davisville, Yonge and Eglinton, Leaside, Moore Park, Rosedale.",
      },
    ],
    faqs: [
      {
        q: "What is Budget flower?",
        a: "Budget is one of the flower tiers shown on the Pleasant Cannabis menu. It helps shoppers compare category, value, and potency context before visiting.",
      },
      {
        q: "Does this page guarantee current Budget stock?",
        a: "No. Use the current menu or ask in store for exact availability.",
      },
      {
        q: "Where is the store?",
        a: "758 Mt Pleasant Rd, Toronto, ON M4S 2N6",
      },
    ],
  },
};
