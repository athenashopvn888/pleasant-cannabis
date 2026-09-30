import type { Metadata } from "next";
import { HOME_TITLE } from "./lib/homeDelivery";
import Papa from "papaparse";
import HomePage, { type Review, type ReviewStats } from "./HomePage";
import FleetAnnouncementBanner from "./components/FleetAnnouncementBanner";
import { faqPageJsonLd, toJsonLd } from "./lib/storeNap";

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

export default async function Page() {
  const { reviews, stats } = await getReviews();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqPageJsonLd) }}
      />
      <FleetAnnouncementBanner holidayOnly />
      <HomePage initialReviews={reviews} initialReviewStats={stats} />
    </>
  );
}
