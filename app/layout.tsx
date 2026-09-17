import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import { cannabisStoreJsonLd, STORE_NAP, toJsonLd } from "./lib/storeNap";

export const metadata: Metadata = {
  metadataBase: new URL(STORE_NAP.homeUrl),
  title: {
    default: "24 Hour Mount Pleasant Dispensary | Pleasant Cannabis",
    template: "%s | Pleasant Cannabis",
  },
  description:
    "Pleasant Cannabis is a Midtown Toronto dispensary on Mt Pleasant Rd with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Mount Pleasant, Toronto" />
        <meta name="geo.position" content="43.7075699;-79.3901685" />
        <meta name="ICBM" content="43.7075699, -79.3901685" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(cannabisStoreJsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5STHBE8TXT"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5STHBE8TXT');
            `,
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/weed-delivery-toronto">
          NEW WEED DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
