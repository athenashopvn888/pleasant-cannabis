"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  isMobileBottomBarHidden,
  MOBILE_BAR_DELIVERY_HREF,
  MOBILE_BAR_HOURS_HREF,
  MOBILE_BAR_MENU_HREF,
} from "../lib/mobileBottomBar";
import { storeDirectionsHref } from "../lib/storeDirections";
import { storeHoursStatus } from "../lib/storeHoursStatus";
import styles from "./MobileBottomBar.module.css";

/**
 * Mobile-only sticky actions. Directions uses the store Google Maps link.
 * Hours copy is computed in America/Toronto from the published opening hours.
 * Hidden on the in-store TV boards.
 */
export default function MobileBottomBar() {
  const pathname = usePathname() || "/";
  const [status, setStatus] = useState(() => storeHoursStatus(new Date()));

  useEffect(() => {
    const update = () => setStatus(storeHoursStatus(new Date()));
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (isMobileBottomBarHidden(pathname)) return null;

  return (
    <nav
      className={styles.bar}
      aria-label="Store actions"
      data-mobile-bottom-bar=""
      data-hours-kind={status.kind}
      suppressHydrationWarning
    >
      <a
        className={`${styles.action} ${styles.directions}`}
        href={storeDirectionsHref()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <Link className={`${styles.action} ${styles.hours}`} href={MOBILE_BAR_HOURS_HREF}>
        <span className={styles.srOnly}>Hours. </span>
        <span className={styles.hoursLabel} suppressHydrationWarning>
          {status.label}
        </span>
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href={MOBILE_BAR_MENU_HREF}>
        Menu
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href={MOBILE_BAR_DELIVERY_HREF}>
        Delivery
      </Link>
    </nav>
  );
}
