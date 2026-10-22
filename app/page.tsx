import type { Metadata } from "next";
import { headers } from "next/headers";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { HOME_TITLE } from "./lib/homeDelivery";
import Papa from "papaparse";
import HomePage, { type Review, type ReviewStats } from "./HomePage";
import { faqPageJsonLd, toJsonLd } from "./lib/storeNap";
import type { FlowerProduct } from "./lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  openGraph: { title: HOME_TITLE },
  twitter: { card: "summary_large_image", title: HOME_TITLE },
};

const REVIEWS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu6iy9W3YKRzBYo_r96rXcbJsAOzlkzn5Rw9QMFnE0NbYSBgPxKX8kPRZNC9QcffZYj57155esmnqH/pub?gid=1555782756&single=true&output=csv";

async function getReviews(): Promise<{ reviews: Review[]; stats: ReviewStats | null }> {
  try {
    const response = await fetch(REVIEWS_URL, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error(`Review feed returned ${response.status}`);
    const rows = Papa.parse<Record<string, string>>(await response.text(), {
      header: true,
      skipEmptyLines: true,
    }).data;
    const reviews: Review[] = [];
    let stats: ReviewStats | null = null;

    for (const row of rows) {
      if (row.StoreKey !== "PCB01") continue;
      if (row.ReviewerName === "__STATS__") {
        const total = Number.parseInt(row.Comment || "", 10);
        const avg = Number.parseFloat(row.CreateTime || "");
        if (Number.isFinite(total) && Number.isFinite(avg)) stats = { total, avg };
        continue;
      }
      if (!row.Comment || row.Comment.length < 10) continue;
      reviews.push({
        name: row.ReviewerName || "Customer",
        comment: row.Comment,
        date: row.CreateTime || "",
      });
    }
    return { reviews: reviews.slice(0, 6), stats };
  } catch (error) {
    console.warn("Reviews fetch failed:", error);
    return { reviews: [], stats: null };
  }
}

async function fetchHomepageFlowers(): Promise<FlowerProduct[]> {
  try {
    const requestHeaders = await headers();
    const host = (requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "").split(",")[0].trim();
    if (!host) return [];
    const protocol = (requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https")).split(",")[0].trim();
    const response = await fetch(`${protocol}://${host}/api/tv-data?type=flowers`, { cache: "no-store" });
    if (!response.ok) return [];
    const data: unknown = await response.json();
    return Array.isArray(data) ? data as FlowerProduct[] : [];
  } catch {
    return [];
  }
}

export default async function Page() {
  const [{ reviews, stats }, flowers, fleet] = await Promise.all([getReviews(), fetchHomepageFlowers(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqPageJsonLd) }}
      />
      <HomePage initialReviews={reviews} initialReviewStats={stats} initialFlowers={flowers} contentBanners={contentBanners} />
    </>
  );
}
