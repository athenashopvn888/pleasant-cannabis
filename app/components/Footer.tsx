import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>PLEASANT CANNABIS</div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 758 Mt Pleasant Rd, Toronto.
              Visit Pleasant Cannabis For Premium Flower, Edibles, Vapes &amp;
              More. Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <a href="tel:+12898069425" className={styles.btnPrimary}>
                Call Now
              </a>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>758 Mt Pleasant Rd</span>
              <span>Toronto, ON M4S 2N6</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+12898069425" style={{ color: "inherit" }}>
                  +1 (289) 806-9425
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Nicotine Vape</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">DELIVERY MENU</Link>
              <Link href="/info/mount-pleasant-weed-dispensary">
                Mount Pleasant Dispensary
              </Link>
              <Link href="/info/cheap-weed-mount-pleasant">
                Cheap Weed Mount Pleasant
              </Link>
              <Link href="/info/native-cigarettes-mount-pleasant">
                Native Cigarettes
              </Link>
              <Link href="/info/nicotine-vapes-mount-pleasant">
                Nicotine Vapes Mount Pleasant
              </Link>
              <Link href="/info/weed-store-near-midtown-toronto">
                Weed Store Near Mount Pleasant
              </Link>
              <Link href="/weed-dispensary-toronto/">
                Pleasant Cannabis Weed Dispensary in Toronto
              </Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/weed-resources">Weed Resources</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            (c) {new Date().getFullYear()} Pleasant Cannabis. Must be 19+ to
            enter. Please follow applicable laws and product labels.
          </p>
        </div>
      </div>
    </footer>
  );
}
