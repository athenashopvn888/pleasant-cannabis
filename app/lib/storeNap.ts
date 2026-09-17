/**
 * Pleasant Cannabis NAP source of truth (PCB01).
 * Hours copied from the existing site — do not invent new hours.
 * GBP Website stays the homepage root, never /visit.
 */
export const STORE_NAP = {
  name: "Pleasant Cannabis",
  streetAddress: "758 Mt Pleasant Rd",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M4S 2N6",
  addressCountry: "CA",
  /** FMD / public NAP line */
  addressLine: "758 Mt Pleasant Rd, Toronto ON M4S 2N6",
  phoneDisplay: "+1 289 806 9425",
  phoneIntl: "+12898069425",
  hoursLabel: "Open 24 Hours",
  hoursDetail: "Open 7 Days a Week",
  opens: "00:00",
  closes: "23:59",
  neighborhood: "Mount Pleasant",
  corridor: "Midtown",
  intersection: "Mt Pleasant Rd & Eglinton Ave E",
  latitude: 43.7075699,
  longitude: -79.3901685,
  domain: "www.pleasantcannabis.ca",
  homeUrl: "https://www.pleasantcannabis.ca",
  visitPath: "/visit",
  /** Local unique asset — replaces 403 /wp-content/ 7Clmh.jpg and 46Oi5.jpg */
  imagePath: "/banners/welcome_banner.webp",
  imageUrl: "https://www.pleasantcannabis.ca/banners/welcome_banner.webp",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Pleasant+Cannabis%2C+758+Mt+Pleasant+Rd%2C+Toronto%2C+ON+M4S+2N6",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=758+Mt+Pleasant+Rd,+Toronto,+ON+M4S+2N6&hl=en&z=16&output=embed",
  /** Ops lock: GBP Website field must remain homepage root. */
  gbpWebsite: "https://www.pleasantcannabis.ca/",
} as const;

export const HOME_FAQS = [
  {
    q: "What are the hours for Pleasant Cannabis?",
    a: "Pleasant Cannabis at 758 Mt Pleasant Rd, Toronto is Open 24 Hours a day, 7 days a week. Walk in anytime — no appointment needed.",
  },
  {
    q: "Where is Pleasant Cannabis on Mount Pleasant?",
    a: "We are at 758 Mt Pleasant Rd, Toronto, ON M4S 2N6, on the Mount Pleasant strip in Midtown near Mt Pleasant Rd & Eglinton Ave E. Call +1 289 806 9425 if you need a pin before you leave.",
  },
  {
    q: "Is there parking at Pleasant Cannabis?",
    a: "Street parking is available along Mount Pleasant Road. Free evening street parking is available. Check posted signs on the block around 758 Mt Pleasant Rd.",
  },
  {
    q: "How do I get to Pleasant Cannabis on the TTC?",
    a: "Ride the 74 Mount Pleasant bus along Mt Pleasant Rd, or come east from Eglinton station on Line 1 along Eglinton Avenue. Davisville Village is a short hop south of the shop.",
  },
  {
    q: "Do I need an appointment or ID?",
    a: "Walk-ins are welcome. You must be 19+ with government photo ID to enter Pleasant Cannabis.",
  },
  {
    q: "How is cannabis flower organized at Pleasant Cannabis?",
    a: "Pleasant Cannabis uses five dedicated flower tiers: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed. Each collection is a focused way to browse Cannabis Flower before you walk in.",
  },
] as const;

export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const cannabisStoreJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CannabisStore",
      "@id": `${STORE_NAP.homeUrl}/#store`,
      name: STORE_NAP.name,
      description:
        "Walk-in cannabis dispensary at 758 Mt Pleasant Rd in Midtown Toronto. Flower, pre-rolls, vapes, edibles, and accessories on the Mount Pleasant strip. Open 24 Hours.",
      url: STORE_NAP.homeUrl,
      telephone: STORE_NAP.phoneIntl,
      image: STORE_NAP.imageUrl,
      priceRange: "$3 - $12/g",
      address: {
        "@type": "PostalAddress",
        streetAddress: STORE_NAP.streetAddress,
        addressLocality: STORE_NAP.addressLocality,
        addressRegion: STORE_NAP.addressRegion,
        postalCode: STORE_NAP.postalCode,
        addressCountry: STORE_NAP.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: STORE_NAP.latitude,
        longitude: STORE_NAP.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: STORE_NAP.opens,
          closes: STORE_NAP.closes,
        },
      ],
      sameAs: [STORE_NAP.mapsSearchUrl],
      hasMap: STORE_NAP.mapsSearchUrl,
      areaServed: [
        { "@type": "Neighborhood", name: "Mount Pleasant" },
        { "@type": "Neighborhood", name: "Midtown Toronto" },
        { "@type": "City", name: "Toronto" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${STORE_NAP.homeUrl}/#website`,
      url: `${STORE_NAP.homeUrl}/`,
      name: STORE_NAP.name,
      publisher: { "@id": `${STORE_NAP.homeUrl}/#store` },
    },
  ],
} as const;

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${STORE_NAP.homeUrl}/#faq`,
  url: STORE_NAP.homeUrl,
  isPartOf: { "@id": `${STORE_NAP.homeUrl}/#website` },
  mainEntity: HOME_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
} as const;
