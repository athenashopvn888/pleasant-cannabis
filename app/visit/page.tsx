import type { Metadata } from "next";
import VisitContent from "./VisitContent";
import { STORE_NAP } from "../lib/storeNap";

/**
 * Supporting how-to-reach page only.
 * Schema, canonical, and Open Graph stay on the homepage visit hub.
 * GBP Website remains https://www.pleasantcannabis.ca/ — never this path.
 */
export const metadata: Metadata = {
  title: "How to Visit Pleasant Cannabis on Mount Pleasant",
  description:
    "TTC, parking, and landmarks for Pleasant Cannabis at 758 Mt Pleasant Rd, Toronto ON M4S 2N6. Open 24 Hours. Call +1 289 806 9425.",
  alternates: {
    canonical: STORE_NAP.homeUrl,
  },
  openGraph: {
    url: STORE_NAP.homeUrl,
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
};

export default function VisitPage() {
  return <VisitContent />;
}
