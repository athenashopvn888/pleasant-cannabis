import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { STORE_NAP } from "../lib/storeNap";
import styles from "./visit.module.css";

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Supporting how-to-reach · Adults 19+</p>
        <h1 className={styles.title}>How to reach Pleasant Cannabis on Mount Pleasant</h1>
        <p className={styles.lede}>
          Pleasant Cannabis is the walk-in dispensary at{" "}
          <strong>{STORE_NAP.addressLine}</strong>. Address, hours, and the map
          live on the homepage visit hub. This page is the extra detail for TTC,
          parking, and Midtown landmarks.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href={STORE_NAP.mapsSearchUrl}>
            Open Google Maps
          </a>
          <Link className={styles.secondary} href="/#visit-hub">
            Homepage visit hub
          </Link>
          <a className={styles.secondary} href={`tel:${STORE_NAP.phoneIntl}`}>
            Call {STORE_NAP.phoneDisplay}
          </a>
        </div>
      </section>

      <section className={styles.nap} aria-label="Store name, address, and phone">
        <article>
          <h2>Pleasant Cannabis</h2>
          <address>
            758 Mt Pleasant Rd
            <br />
            Toronto ON M4S 2N6
          </address>
          <p>
            Phone:{" "}
            <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>
          </p>
          <p>
            Hours: {STORE_NAP.hoursLabel} · {STORE_NAP.hoursDetail}
          </p>
          <p>Nearest intersection: {STORE_NAP.intersection}</p>
        </article>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>TTC to Mount Pleasant &amp; Eglinton</h2>
          <p>
            The shop sits on Mount Pleasant Road in Midtown, east of
            Yonge–Eglinton. The 74 Mount Pleasant bus runs along the street and
            is the most direct surface route to 758 Mt Pleasant Rd.
          </p>
          <p>
            From Line 1, leave Eglinton station and head east along Eglinton
            Avenue East to Mount Pleasant Road, then north a short walk to the
            storefront. Davisville Village is just south along the same
            corridor if you are already on the Davisville side of Midtown.
          </p>
        </article>
        <article className={styles.card}>
          <h2>Parking on Mount Pleasant Road</h2>
          <p>
            Street parking is available along Mount Pleasant Road. Free evening
            street parking is available. Read the posted signs on the block
            around 758 Mt Pleasant Rd before you leave the car — Midtown
            restrictions change by side of street and time of day.
          </p>
        </article>
        <article className={styles.card}>
          <h2>Midtown landmarks</h2>
          <p>
            Pin the store on the Mount Pleasant retail strip between Eglinton
            and Davisville. Yonge–Eglinton is a few blocks west. Leaside sits
            east of the ravine; Moore Park and Rosedale are south along the
            same Midtown grid. If a maps app offers “Mount Pleasant and
            Eglinton,” you are on the correct corner before the last half
            block north to 758.
          </p>
        </article>
        <article className={styles.card}>
          <h2>Walk-in, 19+</h2>
          <p>
            No appointment. Bring government photo ID. Pleasant Cannabis is{" "}
            {STORE_NAP.hoursLabel}, so late Line 1 rides and early morning
            Midtown errands can still end at the counter. Call{" "}
            {STORE_NAP.phoneDisplay} if you want the budtender to confirm a
            specific item before you cross Eglinton.
          </p>
        </article>
      </section>

      <section className={styles.mapBlock}>
        <h2>Map to 758 Mt Pleasant Rd</h2>
        <div className={styles.mapWrap}>
          <iframe
            title="Map to Pleasant Cannabis at 758 Mt Pleasant Rd, Toronto"
            src={STORE_NAP.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
