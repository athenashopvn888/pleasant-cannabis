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
  { href: "/exotic-weed", label: "Weed Exotic" },
  { href: "/premium-weed", label: "Weed Premium" },
  { href: "/aaa-weed", label: "Weed AAA+" },
  { href: "/aa-weed", label: "Weed AA" },
  { href: "/budget-weed", label: "Weed Budget" },
] as const;

export const TIER_COMPARE = {
  heading: "Compare Pleasant Cannabis Weed Flower Collections",
  body: "Explore Weed Exotic, Weed Premium, Weed AAA+, Weed AA and Weed Budget as distinct Cannabis Flower collections, or browse Pleasant Cannabis Weed in Toronto for a wider selection.",
  ownerHref: "/weed-dispensary-toronto/",
  ownerLabel: "Explore Pleasant Cannabis Weed in Toronto",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Weed Exotic & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Weed Exotic Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Weed Exotic & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore the Pleasant Cannabis Weed Exotic collection and compare it with other Cannabis Flower collections.",
    h1: "Weed Exotic & Cannabis Flower in Toronto",
    imageAlt: "Weed Exotic and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore the Weed Exotic Flower Collection",
    seoIntro: "Pleasant Cannabis presents Weed Exotic as one of its dedicated Cannabis Flower collections for shoppers who want to explore this tier alongside the rest of the Pleasant flower range. Browse the collection, compare it with other Weed tiers and use the product information shown with individual items to decide what interests you.",
    sections: [
      { heading: "Explore Weed Exotic at Pleasant Cannabis", body: "Weed Exotic gives Pleasant Cannabis shoppers a distinct Cannabis Flower collection to explore. Browse the products presented within this tier, then compare Weed Exotic with Weed Premium, Weed AAA+, Weed AA or Weed Budget if you want to see other parts of the flower selection." },
      { heading: "Compare Weed Exotic with Other Cannabis Flower Tiers", body: "Pleasant Cannabis organizes flower across several Weed collections so shoppers can explore more than one section before narrowing their browsing. Weed Exotic can be considered alongside the other established flower tiers without implying that one collection is the right choice for every shopper." },
    ],
    faqs: [
      { q: "What is Weed Exotic at Pleasant Cannabis?", a: "Weed Exotic is one of Pleasant Cannabis's dedicated Cannabis Flower collections, giving shoppers a focused section of the flower selection to explore." },
      { q: "Can I compare Weed Exotic with other Pleasant Cannabis flower collections?", a: "Yes. Pleasant Cannabis also organizes flower into Weed Premium, Weed AAA+, Weed AA and Weed Budget, allowing shoppers to explore several collections before deciding what interests them." },
    ],
  },
  PREMIUM: {
    seoTitle: "Weed Premium & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Weed Premium Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Weed Premium & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Browse the Pleasant Cannabis Weed Premium collection within the wider Weed and Cannabis Flower selection.",
    h1: "Weed Premium & Cannabis Flower in Toronto",
    imageAlt: "Weed Premium and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Browse the Weed Premium Flower Collection",
    seoIntro: "Weed Premium is a dedicated Pleasant Cannabis Cannabis Flower collection for shoppers who want to browse this tier within the wider Weed selection. Explore the products presented in the collection and compare Weed Premium with the other Pleasant Cannabis flower tiers as you browse.",
    sections: [
      { heading: "Browse the Weed Premium Collection", body: "Pleasant Cannabis uses Weed Premium as one of its five established Cannabis Flower collections. Shoppers can explore the products presented within this section and use the available product information to learn more about individual items." },
      { heading: "Explore Weed Premium Alongside Other Flower Collections", body: "Weed Premium sits alongside Weed Exotic, Weed AAA+, Weed AA and Weed Budget within the Pleasant Cannabis flower selection. Exploring more than one collection can help shoppers understand the range of sections available without treating any tier as inherently better than another." },
    ],
    faqs: [
      { q: "What can I explore in the Weed Premium collection?", a: "Weed Premium contains the Cannabis Flower products presented within Pleasant Cannabis's Premium tier." },
      { q: "Is Weed Premium the only flower collection at Pleasant Cannabis?", a: "No. Pleasant Cannabis also has Weed Exotic, Weed AAA+, Weed AA and Weed Budget collections for shoppers who want to explore other flower sections." },
    ],
  },
  "AAA+": {
    seoTitle: "Weed AAA+ & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Weed AAA+ Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Weed AAA+ & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore Pleasant Cannabis Weed AAA+ within the broader Weed and Cannabis Flower selection.",
    h1: "Weed AAA+ & Cannabis Flower in Toronto",
    imageAlt: "Weed AAA+ and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore the Weed AAA+ Flower Collection",
    seoIntro: "Pleasant Cannabis Weed AAA+ gives shoppers another dedicated Cannabis Flower collection to explore within the broader Weed selection. Browse the products shown in this tier, compare them with other Pleasant Cannabis flower collections and use the information presented with individual items as you explore.",
    sections: [
      { heading: "Explore the Weed AAA+ Flower Collection", body: "Weed AAA+ is one of Pleasant Cannabis's established flower collections. It provides a focused section for shoppers who want to explore the Cannabis Flower products presented within the AAA+ tier." },
      { heading: "Compare Weed AAA+ with Pleasant Cannabis Flower Tiers", body: "Shoppers can explore Weed AAA+ alongside Weed Exotic, Weed Premium, Weed AA and Weed Budget. Each collection provides a different browsing section within the broader Pleasant Cannabis flower selection without suggesting that one tier is universally preferable." },
    ],
    faqs: [
      { q: "What is Weed AAA+ at Pleasant Cannabis?", a: "Weed AAA+ is a dedicated Cannabis Flower collection within the Pleasant Cannabis Weed selection." },
      { q: "Can I browse other Weed flower tiers after Weed AAA+?", a: "Yes. Pleasant Cannabis also offers Weed Exotic, Weed Premium, Weed AA and Weed Budget collections for shoppers who want to compare other flower sections." },
    ],
  },
  AA: {
    seoTitle: "Weed AA & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Weed AA Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Weed AA & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore the Pleasant Cannabis Weed AA collection within the broader Weed and Cannabis Flower selection.",
    h1: "Weed AA & Cannabis Flower in Toronto",
    imageAlt: "Weed AA and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore Weed AA Cannabis Flower",
    seoIntro: "Weed AA is one of Pleasant Cannabis's dedicated Cannabis Flower collections, giving shoppers a focused way to explore this part of the Weed selection. Browse the collection, review the information presented with individual products and compare Weed AA with the other Pleasant Cannabis flower tiers that interest you.",
    sections: [
      { heading: "Explore Weed AA Cannabis Flower", body: "Pleasant Cannabis organizes Weed AA as a dedicated flower collection within its broader Weed selection. Shoppers can explore the Cannabis Flower products presented within this tier and continue comparing other established collections as they browse." },
      { heading: "Compare Weed AA with Other Pleasant Cannabis Collections", body: "Weed AA can be explored alongside Weed Budget, Weed AAA+, Weed Premium and Weed Exotic. The different collections give shoppers several ways to browse Pleasant Cannabis flower without assigning a universal ranking between tiers." },
    ],
    faqs: [
      { q: "What does the Weed AA collection include?", a: "The Weed AA collection presents the Cannabis Flower products shown within Pleasant Cannabis's AA tier." },
      { q: "What other flower collections can I compare with Weed AA?", a: "You can also explore Weed Budget, Weed AAA+, Weed Premium and Weed Exotic within the Pleasant Cannabis flower selection." },
    ],
  },
  BUDGET: {
    seoTitle: "Weed Budget & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Weed Budget Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Weed Budget & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore Pleasant Cannabis Weed Budget within the broader Weed and Cannabis Flower selection.",
    h1: "Weed Budget & Cannabis Flower in Toronto",
    imageAlt: "Weed Budget and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore the Weed Budget Flower Collection",
    seoIntro: "Pleasant Cannabis Weed Budget is a dedicated Cannabis Flower collection for shoppers who want to explore this part of the broader Weed selection. Browse the products presented within the collection and compare Weed Budget with other Pleasant Cannabis flower tiers based on the information shown while you browse.",
    sections: [
      { heading: "Explore the Weed Budget Flower Collection", body: "Weed Budget gives Pleasant Cannabis shoppers a focused Cannabis Flower collection to explore. Browse the products presented within this tier and learn more from the information displayed with individual items." },
      { heading: "Compare Weed Budget with Other Weed Flower Collections", body: "Pleasant Cannabis also organizes flower into Weed AA, Weed AAA+, Weed Premium and Weed Exotic. Shoppers can explore more than one collection and compare the sections that interest them without assuming that one tier is automatically better for every shopper." },
    ],
    faqs: [
      { q: "What is Weed Budget at Pleasant Cannabis?", a: "Weed Budget is one of Pleasant Cannabis's dedicated Cannabis Flower collections within the broader Weed selection." },
      { q: "Can I compare Weed Budget with other Pleasant Cannabis flower tiers?", a: "Yes. Weed Budget can be explored alongside Weed AA, Weed AAA+, Weed Premium and Weed Exotic." },
    ],
  },
};
