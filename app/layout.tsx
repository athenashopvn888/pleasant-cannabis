import FleetContentProvider from "./components/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { getFleetContent } from "./lib/fleetContent";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Outfit, Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";
import { cannabisStoreJsonLd, STORE_NAP, toJsonLd } from "./lib/storeNap";

const outfit = Outfit({ subsets: ["latin"], display: "swap", variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-playfair" });
const quicksand = Quicksand({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-quicksand" });

const ROOT_METADATA: Metadata = {
  metadataBase: new URL(STORE_NAP.homeUrl),
  title: {
    default: "Open 24 Hours in Midtown | Pleasant Cannabis",
    template: "%s | Pleasant Cannabis",
  },
  description:
    "Open 24 hours, 7 days a week. Visit Pleasant Cannabis at 758 Mt Pleasant Rd in Midtown Toronto, near Mount Pleasant and Eglinton. Adults 19+.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: STORE_NAP.homeUrl,
    siteName: "Pleasant Cannabis",
    title: "24 Hour Mount Pleasant Dispensary | Pleasant Cannabis",
    description:
      "Pleasant Cannabis is a Midtown Toronto dispensary on Mt Pleasant Rd with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
    images: [
      {
        url: STORE_NAP.imageUrl,
        width: 1200,
        height: 630,
        alt: "Pleasant Cannabis — Mount Pleasant dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Hour Mount Pleasant Dispensary | Pleasant Cannabis",
    description:
      "Pleasant Cannabis is a Midtown Toronto dispensary on Mt Pleasant Rd with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
    images: [STORE_NAP.imageUrl],
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
    canonical: STORE_NAP.homeUrl,
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fleet = await getFleetContent();
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Mount Pleasant, Toronto" />
        <meta name="geo.position" content="43.7075699;-79.3901685" />
        <meta name="ICBM" content="43.7075699, -79.3901685" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(cannabisStoreJsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} ${quicksand.variable}`}>
        <Link className="deliveryAnnouncement" href="/weed-delivery-toronto">
          NEW WEED DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          {children}
          <FullNameNap />
          <PinnedNavClearance />
        </FleetContentProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5STHBE8TXT" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-5STHBE8TXT');`}
        </Script>
      </body>
    </html>
  );
}
