"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import FleetAnnouncementBanner from "./components/FleetAnnouncementBanner";
import Navbar from "./components/Navbar";
import HiringCallout from "./components/HiringCallout";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import { WeedDiscoveryModule } from "./components/WeedDiscoveryModule";
import { allFlowers } from "./lib/products";
import { HOME_FAQS, STORE_NAP } from "./lib/storeNap";
import Papa from "papaparse";

/* ── Bento Mosaic Config ── */
const BENTO_TIERS = [
  {
    name: "EXOTIC WEED",
    slug: "exotic-weed",
    price: "$10-$12/g",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM WEED",
    slug: "premium-weed",
    price: "$7-$10/g",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    name: "AAA+ WEED",
    slug: "aaa-weed",
    price: "$5-$6/g",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA WEED",
    slug: "aa-weed",
    price: "$4/g",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET WEED",
    slug: "budget-weed",
    price: "$3/g",
    banner: "/banners/budget_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "EDIBLES • PREROLLS • MORE",
    slug: "items/edibles",
    price: "Shop Tiers",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    className: styles.bentoEdibles,
  },
];

/* ── Explore Categories Config (New Banners) ── */
const EXPLORE_CATEGORIES = [
  { name: "Nicotine Vapes", slug: "items/vapes", banner: "/banners/01_Vape_Pens.webp", icon: "💨" },
  { name: "THC Vapes", slug: "items/vape-disposables", banner: "/banners/02_Vape_Disposable.webp", icon: "💨" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/03_Concentrates.webp", icon: "💎" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/04_Pre_Rolls.webp", icon: "🚬" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/05_Accessories.webp", icon: "➕" },
  { name: "Cigarettes", slug: "items/cigarettes", banner: "/banners/native-cigarette-offer-20260822.webp", icon: "🏷️" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/09_Magic_Stuff.webp", icon: "🍄" },
];


interface Review {
  name: string;
  comment: string;
  date: string;
}

interface ReviewStats {
  total: number;
  avg: number;
}

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  /* ── 1. Fetch Client-Side Google Reviews ── */
  useEffect(() => {
    const STORE_KEY = "PCB01";
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu6iy9W3YKRzBYo_r96rXcbJsAOzlkzn5Rw9QMFnE0NbYSBgPxKX8kPRZNC9QcffZYj57155esmnqH/pub?gid=1555782756&single=true&output=csv";

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Review feed returned ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        const rows = Papa.parse<Record<string, string>>(raw, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const reviewsPool: Review[] = [];
        let totalVal: number | null = null;
        let avgVal: number | null = null;
        let hasStats = false;

        rows.forEach((row) => {
          if (row.StoreKey !== STORE_KEY) return;

          const rn = row.ReviewerName || "";
          if (rn === "__STATS__") {
            const parsedTotal = parseInt(row.Comment || "", 10);
            const parsedAvg = parseFloat(row.CreateTime || "");
            if (Number.isFinite(parsedTotal) && Number.isFinite(parsedAvg)) {
              totalVal = parsedTotal;
              avgVal = parsedAvg;
              hasStats = true;
            }
            return;
          }

          const comment = row.Comment || "";
          if (!comment || comment.length < 10) return;
          const name = rn || "Customer";
          const dateStr = row.CreateTime || "";
          reviewsPool.push({ name, comment, date: dateStr });
        });

        setReviews(reviewsPool.slice(0, 6));
        if (hasStats && totalVal !== null && avgVal !== null) {
          setReviewsStats({ total: totalVal, avg: avgVal });
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.warn("Reviews fetch failed:", err);
        setReviewsLoading(false);
      });
  }, []);

  /* ── 2. Build Featured Strains ── */
  useEffect(() => {
    const pool = [...allFlowers].filter((f) => f.image);
    // Shuffle pool securely
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const picked: typeof pool = [];
    const tierCounts: Record<string, number> = {};

    for (const f of pool) {
      if (picked.length >= 8) break;
      const tc = tierCounts[f.tier] || 0;
      if (tc >= 2) continue; // max 2 per tier
      if (picked.some((p) => p.name === f.name)) continue; // avoid exact duplicates
      picked.push(f);
      tierCounts[f.tier] = tc + 1;
    }

    setFeaturedStrains(picked);
  }, []);

  return (
    <main className={styles.main}>
      <FleetAnnouncementBanner />
      {/* ── NAVBAR ── */}
      <Navbar />
      <HiringCallout />

      {/* ── WELCOME BANNER ── */}
      <section className={styles.welcomeBannerSection}>
        <div className={styles.welcomeBannerContainer}>
          <img
            src="/banners/welcome_banner.webp"
            alt="Welcome to Pleasant Cannabis — Premium Toronto Cannabis Dispensary"
            className={styles.welcomeBannerImg}
          />
        </div>
      </section>

      {/* ── BENTO MOSAIC HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars} />

        <div className={styles.heroContent}>
          {/* Brand branding */}
          <div className={styles.brandBlock}>
            <img src="/storeFavicon.webp" alt="Pleasant Cannabis Icon" style={{ height: "60px", width: "60px", objectFit: "contain", borderRadius: "8px", marginBottom: "8px" }} />
            <h1 className={styles.brandTitle}>PLEASANT CANNABIS</h1>
            <p className={styles.brandSub}>Mount Pleasant / Midtown walk-in</p>
            <div className={styles.brandBadge}>Open 24 Hours</div>
          </div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={`${styles.bentoTile} ${tier.className}`}
              >
                <div
                  className={styles.bentoTileBg}
                  style={{ backgroundImage: `url('${tier.banner}')` }}
                />
                <div className={styles.bentoTileOverlay} />
                <div className={styles.bentoTileContent}>
                  <span className={styles.bentoLabel}>{tier.name}</span>
                  <span className={styles.bentoPrice}>{tier.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE CATEGORIES ── */}
      <section className={styles.categoriesSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <p className={styles.sectionSubtitle}>
              From custom disposable vapes and concentrates to accessories and cigarettes.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryCardBg}
                  style={{ backgroundImage: `url('${cat.banner}')` }}
                />
                <div className={styles.categoryCardOverlay} />
                <div className={styles.categoryCardContent}>
                  <h3 className={styles.categoryCardName}>
                    {cat.icon} {cat.name} <span className={styles.categoryCardArrow}>→</span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WeedDiscoveryModule />

      {/* ── FEATURED PRODUCTS ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              A rotating sample from the current flower menu.
            </p>
          </div>

          <div className={styles.featuredScroll}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.scrollItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO PANEL WRITE-UP ── */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoPanel}>
            <h2 className={styles.seoPanelTitle}>Mount Pleasant walk-in dispensary at 758 Mt Pleasant Rd — Open 24 Hours</h2>
            <p className={styles.seoPanelText}>
              <strong>Pleasant Cannabis</strong> is the Midtown walk-in shop on the Mount Pleasant retail strip, at 758 Mt Pleasant Rd between Eglinton and Davisville. Flower is sorted into Exotic, Premium, AAA+, AA, and Budget collections so you can compare the counter without treating the whole city as the search.
            </p>
            <p className={styles.seoPanelText}>
              The storefront faces Mount Pleasant Road, a few blocks east of Yonge–Eglinton. Ride the 74 Mount Pleasant bus, walk east from Eglinton station along Eglinton Avenue East, or park on the street and check the signs. Pleasant Cannabis is Open 24 Hours — late Line 1 rides and early Midtown errands still land at the same door.
            </p>
            <p className={styles.seoPanelText}>
              Bring government photo ID if you are 19+. Call {STORE_NAP.phoneDisplay} for a pin to {STORE_NAP.addressLine}, or use the{" "}
              <Link href="/visit">Mount Pleasant how-to-reach page</Link> for TTC, parking, and landmark notes. The homepage is the visit hub for address, hours, and directions.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLIENT-SIDE GOOGLE REVIEWS SHOWCASE ── */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
            {reviewsStats && (
              <div className={styles.reviewsStarsSummary}>
                <span className={styles.reviewsStars}>★★★★★</span>
                <span className={styles.reviewsAvg}>
                  {reviewsStats.avg.toFixed(1)}
                </span>
                <span className={styles.reviewsCount}>
                  ({reviewsStats.total} Google reviews)
                </span>
              </div>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsLoading ? (
              <div className={styles.reviewsLoading}>Loading reviews...</div>
            ) : reviews.length === 0 ? (
              <div className={styles.reviewsLoading}>
                Reviews are not available right now.
              </div>
            ) : (
              reviews.map((rv, idx) => (
                <div key={idx} className={styles.rvCard}>
                  <div className={styles.rvTop}>
                    <div className={styles.rvAvatar}>
                      {rv.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.rvMeta}>
                      <span className={styles.rvName}>{rv.name}</span>
                      {rv.date && (
                        <span className={styles.rvDate}>
                          {new Date(rv.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      )}
                    </div>
                    <span className={styles.rvStars}>★★★★★</span>
                  </div>
                  <p className={styles.rvText}>
                    {rv.comment.length > 180 ? `${rv.comment.substring(0, 177)}...` : rv.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className={styles.reviewCtaRow}>
          </div>
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions
          </h2>
          {HOME_FAQS.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── HOMEPAGE VISIT HUB (NAP / hours / map / directions) ── */}
      <section className={styles.storeSection} id="visit-hub">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Visit Pleasant Cannabis on Mount Pleasant</h2>
            <p className={styles.sectionSubtitle}>
              Address, hours, map, and directions live here.{" "}
              <Link href="/visit" className={styles.storeLink}>
                TTC, parking, and landmark notes
              </Link>{" "}
              are on the supporting how-to-reach page.
            </p>
          </div>
          <div className={styles.storeGrid} id="contact">
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>📍</span>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                Pleasant Cannabis
                <br />
                758 Mt Pleasant Rd
                <br />
                Toronto ON M4S 2N6
                <br />
                <span className={styles.storeHighlight}>{STORE_NAP.intersection}</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>🕒</span>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                {STORE_NAP.hoursDetail}
                <br />
                <span className={styles.storeHighlight}>{STORE_NAP.hoursLabel}</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>📞</span>
              <h3 className={styles.storeCardTitle}>Phone</h3>
              <p className={styles.storeCardText}>
                <a className={styles.storeLink} href={`tel:${STORE_NAP.phoneIntl}`}>
                  {STORE_NAP.phoneDisplay}
                </a>
                <br />
                Adults 19+ · walk-in
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>🔥</span>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>Mount Pleasant / Midtown</span>
              </p>
            </div>
          </div>

          <p className={styles.visitHubNotes}>
            Street parking is available along Mount Pleasant Road. Free evening street parking is available — check posted signs. The 74 Mount Pleasant bus runs the corridor; Eglinton station on Line 1 is the closest subway, then east along Eglinton Avenue East.
          </p>
          <div className={styles.visitHubActions}>
            <a className={styles.visitHubPrimary} href={STORE_NAP.mapsSearchUrl}>
              Directions to 758 Mt Pleasant Rd
            </a>
            <Link className={styles.visitHubSecondary} href="/visit">
              How to get here
            </Link>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              title="Map to Pleasant Cannabis at 758 Mt Pleasant Rd, Toronto"
              src={STORE_NAP.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
