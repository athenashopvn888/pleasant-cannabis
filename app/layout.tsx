import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://pleasantcannabis.ca"),
  title: {
    default: "Pleasant Cannabis — Premium Cannabis Dispensary, Toronto",
    template: "%s | Pleasant Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at Pleasant Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Toronto's uplifting dispensary at 758 Mt Pleasant Rd. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "premium cannabis",
    "Pleasant Cannabis",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://pleasantcannabis.ca",
    siteName: "Pleasant Cannabis",
    title: "Pleasant Cannabis — Premium Toronto Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Toronto's uplifting dispensary at 758 Mt Pleasant Rd. Open 24 Hours.",
    images: [
      {
        url: "https://pleasantcannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Pleasant Cannabis — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pleasant Cannabis — Toronto's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open 24 Hours at 758 Mt Pleasant Rd, Toronto.",
    images: ["https://pleasantcannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://pleasantcannabis.ca",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://pleasantcannabis.ca",
  name: "Pleasant Cannabis",
  description: "Cannabis dispensary at 758 Mt Pleasant Rd in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://pleasantcannabis.ca",
  telephone: "+14374270758",
  image: "https://pleasantcannabis.ca/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "758 Mt Pleasant Rd",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M4S 2N6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7045,
    longitude: -79.3915,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://maps.google.com/?q=758+Mt+Pleasant+Rd,+Toronto,+ON+M4S+2N6",
    "https://maps.google.com/?q=758+Mt+Pleasant+Rd,+Toronto,+ON+M4S+2N6",
  ],
  hasMap: "https://maps.google.com/?q=758+Mt+Pleasant+Rd,+Toronto,+ON+M4S+2N6",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.7045;-79.3915" />
        <meta name="ICBM" content="43.7045, -79.3915" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
