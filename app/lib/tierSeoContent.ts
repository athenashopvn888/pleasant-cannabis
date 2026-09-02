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
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;

export const TIER_COMPARE = {
  heading: "Compare Pleasant Cannabis Weed Flower Collections",
  body: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed as distinct Cannabis Flower collections, or browse Pleasant Cannabis Weed in Toronto for a wider selection.",
  ownerHref: "/weed-dispensary-toronto/",
  ownerLabel: "Explore Pleasant Cannabis Weed in Toronto",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Exotic Weed Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Exotic Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore the Pleasant Cannabis Exotic Weed collection and compare it with other Cannabis Flower collections.",
    h1: "Exotic Weed & Cannabis Flower in Toronto",
    imageAlt: "Exotic Weed and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore the Exotic Weed Flower Collection",
    seoIntro: "Pleasant Cannabis presents Exotic Weed as one of its dedicated Cannabis Flower collections for shoppers who want to explore this tier alongside the rest of the Pleasant flower range. Browse the collection, compare it with other Weed tiers and use the product information shown with individual items to decide what interests you.",
    sections: [
      { heading: "Explore Exotic Weed at Pleasant Cannabis", body: "Exotic Weed gives Pleasant Cannabis shoppers a distinct Cannabis Flower collection to explore. Browse the products presented within this tier, then compare Exotic Weed with Premium Weed, AAA+ Weed, AA Weed or Budget Weed if you want to see other parts of the flower selection." },
      { heading: "Compare Exotic Weed with Other Cannabis Flower Tiers", body: "Pleasant Cannabis organizes flower across several Weed collections so shoppers can explore more than one section before narrowing their browsing. Exotic Weed can be considered alongside the other established flower tiers without implying that one collection is the right choice for every shopper." },
    ],
    faqs: [
      { q: "What is Exotic Weed at Pleasant Cannabis?", a: "Exotic Weed is one of Pleasant Cannabis's dedicated Cannabis Flower collections, giving shoppers a focused section of the flower selection to explore." },
      { q: "Can I compare Exotic Weed with other Pleasant Cannabis flower collections?", a: "Yes. Pleasant Cannabis also organizes flower into Premium Weed, AAA+ Weed, AA Weed and Budget Weed, allowing shoppers to explore several collections before deciding what interests them." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Premium Weed Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Premium Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Browse the Pleasant Cannabis Premium Weed collection within the wider Weed and Cannabis Flower selection.",
    h1: "Premium Weed & Cannabis Flower in Toronto",
    imageAlt: "Premium Weed and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Browse the Premium Weed Flower Collection",
    seoIntro: "Premium Weed is a dedicated Pleasant Cannabis Cannabis Flower collection for shoppers who want to browse this tier within the wider Weed selection. Explore the products presented in the collection and compare Premium Weed with the other Pleasant Cannabis flower tiers as you browse.",
    sections: [
      { heading: "Browse the Premium Weed Collection", body: "Pleasant Cannabis uses Premium Weed as one of its five established Cannabis Flower collections. Shoppers can explore the products presented within this section and use the available product information to learn more about individual items." },
      { heading: "Explore Premium Weed Alongside Other Flower Collections", body: "Premium Weed sits alongside Exotic Weed, AAA+ Weed, AA Weed and Budget Weed within the Pleasant Cannabis flower selection. Exploring more than one collection can help shoppers understand the range of sections available without treating any tier as inherently better than another." },
    ],
    faqs: [
      { q: "What can I explore in the Premium Weed collection?", a: "Premium Weed contains the Cannabis Flower products presented within Pleasant Cannabis's Premium tier." },
      { q: "Is Premium Weed the only flower collection at Pleasant Cannabis?", a: "No. Pleasant Cannabis also has Exotic Weed, AAA+ Weed, AA Weed and Budget Weed collections for shoppers who want to explore other flower sections." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the AAA+ Weed Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "AAA+ Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore Pleasant Cannabis AAA+ Weed within the broader Weed and Cannabis Flower selection.",
    h1: "AAA+ Weed & Cannabis Flower in Toronto",
    imageAlt: "AAA+ Weed and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore the AAA+ Weed Flower Collection",
    seoIntro: "Pleasant Cannabis AAA+ Weed gives shoppers another dedicated Cannabis Flower collection to explore within the broader Weed selection. Browse the products shown in this tier, compare them with other Pleasant Cannabis flower collections and use the information presented with individual items as you explore.",
    sections: [
      { heading: "Explore the AAA+ Weed Flower Collection", body: "AAA+ Weed is one of Pleasant Cannabis's established flower collections. It provides a focused section for shoppers who want to explore the Cannabis Flower products presented within the AAA+ tier." },
      { heading: "Compare AAA+ Weed with Pleasant Cannabis Flower Tiers", body: "Shoppers can explore AAA+ Weed alongside Exotic Weed, Premium Weed, AA Weed and Budget Weed. Each collection provides a different browsing section within the broader Pleasant Cannabis flower selection without suggesting that one tier is universally preferable." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at Pleasant Cannabis?", a: "AAA+ Weed is a dedicated Cannabis Flower collection within the Pleasant Cannabis Weed selection." },
      { q: "Can I browse other Weed flower tiers after AAA+ Weed?", a: "Yes. Pleasant Cannabis also offers Exotic Weed, Premium Weed, AA Weed and Budget Weed collections for shoppers who want to compare other flower sections." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the AA Weed Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "AA Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore the Pleasant Cannabis AA Weed collection within the broader Weed and Cannabis Flower selection.",
    h1: "AA Weed & Cannabis Flower in Toronto",
    imageAlt: "AA Weed and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore AA Weed Cannabis Flower",
    seoIntro: "AA Weed is one of Pleasant Cannabis's dedicated Cannabis Flower collections, giving shoppers a focused way to explore this part of the Weed selection. Browse the collection, review the information presented with individual products and compare AA Weed with the other Pleasant Cannabis flower tiers that interest you.",
    sections: [
      { heading: "Explore AA Weed Cannabis Flower", body: "Pleasant Cannabis organizes AA Weed as a dedicated flower collection within its broader Weed selection. Shoppers can explore the Cannabis Flower products presented within this tier and continue comparing other established collections as they browse." },
      { heading: "Compare AA Weed with Other Pleasant Cannabis Collections", body: "AA Weed can be explored alongside Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed. The different collections give shoppers several ways to browse Pleasant Cannabis flower without assigning a universal ranking between tiers." },
    ],
    faqs: [
      { q: "What does the AA Weed collection include?", a: "The AA Weed collection presents the Cannabis Flower products shown within Pleasant Cannabis's AA tier." },
      { q: "What other flower collections can I compare with AA Weed?", a: "You can also explore Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed within the Pleasant Cannabis flower selection." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower Toronto | Pleasant Cannabis",
    metaDescription: "Explore the Budget Weed Cannabis Flower collection at Pleasant Cannabis in Toronto and compare it with four other dedicated Weed flower collections.",
    socialTitle: "Budget Weed & Cannabis Flower | Pleasant Cannabis",
    socialDescription: "Explore Pleasant Cannabis Budget Weed within the broader Weed and Cannabis Flower selection.",
    h1: "Budget Weed & Cannabis Flower in Toronto",
    imageAlt: "Budget Weed and Cannabis Flower collection at Pleasant Cannabis",
    strainHeading: "Explore the Budget Weed Flower Collection",
    seoIntro: "Pleasant Cannabis Budget Weed is a dedicated Cannabis Flower collection for shoppers who want to explore this part of the broader Weed selection. Browse the products presented within the collection and compare Budget Weed with other Pleasant Cannabis flower tiers based on the information shown while you browse.",
    sections: [
      { heading: "Explore the Budget Weed Flower Collection", body: "Budget Weed gives Pleasant Cannabis shoppers a focused Cannabis Flower collection to explore. Browse the products presented within this tier and learn more from the information displayed with individual items." },
      { heading: "Compare Budget Weed with Other Weed Flower Collections", body: "Pleasant Cannabis also organizes flower into AA Weed, AAA+ Weed, Premium Weed and Exotic Weed. Shoppers can explore more than one collection and compare the sections that interest them without assuming that one tier is automatically better for every shopper." },
    ],
    faqs: [
      { q: "What is Budget Weed at Pleasant Cannabis?", a: "Budget Weed is one of Pleasant Cannabis's dedicated Cannabis Flower collections within the broader Weed selection." },
      { q: "Can I compare Budget Weed with other Pleasant Cannabis flower tiers?", a: "Yes. Budget Weed can be explored alongside AA Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
    ],
  },
};
