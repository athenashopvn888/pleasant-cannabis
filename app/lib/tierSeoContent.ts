export interface TierSeoData {
  seoTitle: string;
  metaDescription: string;
  socialTitle: string;
  socialDescription: string;
  h1: string;
  imageAlt: string;
  strainHeading: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_LINKS = [
  { href: "/exotic", label: "Exotic Weed & Flower" },
  { href: "/premium", label: "Premium Weed & Flower" },
  { href: "/aaa", label: "AAA+ Weed & Flower" },
  { href: "/aa", label: "AA Weed & Flower" },
  { href: "/budget", label: "Budget Weed & Flower" },
] as const;

export const TIER_COMPARE = {
  heading: "Compare Pleasant Cannabis Flower Tiers",
  body: "Explore Exotic, Premium, AAA+, AA and Budget as separate cannabis flower categories, or return to the broader Weed page for a wider Pleasant Cannabis overview.",
  ownerHref: "/weed-dispensary-toronto/",
  ownerLabel: "Pleasant Cannabis Weed Dispensary in Toronto",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Exotic weed and cannabis flower tier at Pleasant Cannabis in Midtown Toronto as a dedicated part of its existing flower structure.",
    socialTitle: "Exotic Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "A dedicated Pleasant Cannabis page for the Exotic weed and cannabis flower tier in Toronto.",
    h1: "Exotic Weed & Cannabis Flower in Toronto",
    imageAlt: "Exotic weed and cannabis flower category at Pleasant Cannabis",
    strainHeading: "Explore the Exotic Flower Selection",
    seoIntro: "Pleasant Cannabis keeps Exotic in its own flower category so shoppers can focus on this tier without mixing it into the rest of the flower structure. The page stays narrow while the main Toronto Weed page remains the broader store-level destination.",
    sections: [
      { heading: "A Separate Exotic Flower Category", body: "Exotic has its own place alongside Premium, AAA+, AA and Budget in the Pleasant Cannabis tier structure. Keeping the category separate gives this page a specific purpose without duplicating the site's broader Weed content." },
      { heading: "Exotic Within the Pleasant Cannabis Tier System", body: "The five existing flower tiers provide different browsing paths through the site. Exotic is one of those focused paths rather than a replacement for the broader Weed Dispensary in Toronto page." },
    ],
    faqs: [
      { q: "What is the Exotic tier at Pleasant Cannabis?", a: "Exotic is one of Pleasant Cannabis's dedicated cannabis flower tiers." },
      { q: "Is the Exotic page Pleasant Cannabis's main Weed page?", a: "No. This page is specific to the Exotic tier, while the Weed Dispensary in Toronto page remains the broad Weed owner." },
      { q: "What other flower tiers have separate pages?", a: "Pleasant Cannabis also has dedicated pages for Premium, AAA+, AA and Budget." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Premium weed and cannabis flower tier at Pleasant Cannabis in Toronto through its dedicated flower category page.",
    socialTitle: "Premium Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore the dedicated Premium cannabis flower tier at Pleasant Cannabis in Toronto.",
    h1: "Premium Weed & Cannabis Flower in Toronto",
    imageAlt: "Premium weed and cannabis flower category at Pleasant Cannabis",
    strainHeading: "Browse the Premium Flower Tier",
    seoIntro: "The Premium page gives Pleasant Cannabis a focused destination for Premium weed and cannabis flower. Its role is intentionally narrower than the site's broad Toronto Weed owner and remains specific to this individual tier.",
    sections: [
      { heading: "Premium as Its Own Flower Tier", body: "Premium is organized separately from Exotic, AAA+, AA and Budget so the category has a clear place within the Pleasant Cannabis flower structure." },
      { heading: "How Premium Fits the Pleasant Cannabis Site", body: "Separate tier pages keep each flower category distinct. The Premium page serves that focused role while broader Weed discovery remains with the main Weed page." },
    ],
    faqs: [
      { q: "What is the Premium tier at Pleasant Cannabis?", a: "Premium is one of Pleasant Cannabis's dedicated cannabis flower tiers." },
      { q: "Does Premium mean every Pleasant Cannabis flower tier is premium?", a: "No. Premium is one specific tier within a structure that also includes Exotic, AAA+, AA and Budget." },
      { q: "Does the Premium page replace the broad Weed page?", a: "No. The Premium page is tier-specific and remains subordinate to the Weed Dispensary in Toronto page." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Toronto | Pleasant Cannabis",
    metaDescription: "Explore the AAA+ weed and cannabis flower tier at Pleasant Cannabis in Toronto as a focused part of its flower category structure.",
    socialTitle: "AAA+ Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "A focused Pleasant Cannabis page for the AAA+ cannabis flower tier in Toronto.",
    h1: "AAA+ Weed & Cannabis Flower in Toronto",
    imageAlt: "AAA+ weed and cannabis flower category at Pleasant Cannabis",
    strainHeading: "Explore the AAA+ Flower Tier",
    seoIntro: "Pleasant Cannabis gives AAA+ its own flower page so this tier can be explored independently from the site's other flower categories. The page stays specific to AAA+ rather than competing with the broader Weed owner.",
    sections: [
      { heading: "AAA+ as a Focused Flower Category", body: "AAA+ is separated from Exotic, Premium, AA and Budget within the existing Pleasant Cannabis tier structure. This gives the category a defined role of its own." },
      { heading: "AAA+ Within the Five-Tier Structure", body: "The AAA+ page is one focused part of Pleasant Cannabis's flower architecture. General Weed intent remains with the established broad Weed Dispensary page." },
    ],
    faqs: [
      { q: "What is AAA+ at Pleasant Cannabis?", a: "AAA+ is the name of one of Pleasant Cannabis's dedicated cannabis flower tiers." },
      { q: "Why does AAA+ have its own page?", a: "A separate page keeps AAA+-specific flower browsing distinct from the other Pleasant Cannabis tiers." },
      { q: "Which other flower tiers are separated on the site?", a: "Pleasant Cannabis also has dedicated Exotic, Premium, AA and Budget pages." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Toronto | Pleasant Cannabis",
    metaDescription: "Explore the AA weed and cannabis flower tier at Pleasant Cannabis in Toronto through its dedicated flower category page.",
    socialTitle: "AA Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore the dedicated AA cannabis flower tier at Pleasant Cannabis in Toronto.",
    h1: "AA Weed & Cannabis Flower in Toronto",
    imageAlt: "AA weed and cannabis flower category at Pleasant Cannabis",
    strainHeading: "Browse the AA Flower Tier",
    seoIntro: "The AA page gives Pleasant Cannabis a dedicated destination for the AA cannabis flower tier. It stays focused on that category while the broader Toronto Weed page continues to handle general Weed intent.",
    sections: [
      { heading: "AA as a Dedicated Category", body: "AA is organized separately from Exotic, Premium, AAA+ and Budget. The page therefore serves one specific part of the Pleasant Cannabis flower structure." },
      { heading: "Where AA Fits at Pleasant Cannabis", body: "Pleasant Cannabis uses individual tier pages rather than treating every flower category as the same destination. AA remains one focused route within that architecture." },
    ],
    faqs: [
      { q: "What is the AA tier at Pleasant Cannabis?", a: "AA is one of Pleasant Cannabis's dedicated cannabis flower tiers." },
      { q: "Is the AA page the broad Pleasant Cannabis Weed page?", a: "No. It is specific to the AA tier, while the Weed Dispensary in Toronto page remains the broader Weed owner." },
      { q: "What other tier pages can be explored?", a: "Separate Pleasant Cannabis pages also exist for Exotic, Premium, AAA+ and Budget." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Budget cannabis flower tier at Pleasant Cannabis in Toronto without implying current prices, deals, stock or availability.",
    socialTitle: "Budget Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "A dedicated Pleasant Cannabis page for the Budget cannabis flower tier in Toronto.",
    h1: "Budget Weed & Cannabis Flower in Toronto",
    imageAlt: "Budget weed and cannabis flower category at Pleasant Cannabis",
    strainHeading: "Explore the Budget Flower Tier",
    seoIntro: "Pleasant Cannabis uses Budget as a dedicated cannabis flower tier within its existing category structure. The label identifies the tier only and does not establish a current price, promotion, stock level or availability claim.",
    sections: [
      { heading: "Budget as Its Own Flower Category", body: "Budget is kept separate from Exotic, Premium, AAA+ and AA so this tier has a clear place within the Pleasant Cannabis flower structure." },
      { heading: "Budget Within the Pleasant Cannabis Tier System", body: "The Budget page provides a focused category path without taking over broader Weed intent. The main Weed Dispensary in Toronto page remains the store's broad Weed destination." },
    ],
    faqs: [
      { q: "What is the Budget tier at Pleasant Cannabis?", a: "Budget is the name of one of Pleasant Cannabis's dedicated cannabis flower tiers." },
      { q: "Does the Budget label guarantee a current price or deal?", a: "No. The tier name identifies the category and does not establish a current price, deal, promotion or availability." },
      { q: "What other flower tiers have their own pages?", a: "Pleasant Cannabis also separates Exotic, Premium, AAA+ and AA into dedicated tier pages." },
    ],
  },
};
