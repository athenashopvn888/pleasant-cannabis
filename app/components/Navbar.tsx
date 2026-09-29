"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ALL_LINKS = [
  { href: "/careers/budtender", label: "Join Team" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
  { href: "/items/edibles", label: "Edibles" },
  { href: "/items/prerolls", label: "Pre-Rolls" },
  { href: "/items/vapes", label: "Nicotine Vape" },
  { href: "/items/vape-disposables", label: "THC Vape" },
  { href: "/items/concentrates", label: "Concentrates" },
  { href: "/items/magic", label: "Magic Stuff" },
  { href: "/items/cigarettes", label: "Cigarettes" },
  { href: "/items/add-ons", label: "Accessories" },
  { href: "/weed-delivery-toronto", label: "WEED DELIVERY" },
  { href: "/faq", label: "FAQ" },
  { href: "/visit", label: "Visit" },
  { href: "/weed-resources", label: "Weed Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const [canAdvance, setCanAdvance] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const updateScrollState = useCallback(() => { const scrollBar = scrollBarRef.current; if (!scrollBar) return; setCanAdvance(scrollBar.scrollWidth - scrollBar.clientWidth - scrollBar.scrollLeft > 2); }, []);
  useEffect(() => { const scrollBar = scrollBarRef.current; if (!scrollBar) return; updateScrollState(); scrollBar.addEventListener("scroll", updateScrollState, { passive: true }); window.addEventListener("resize", updateScrollState); const resizeObserver = new ResizeObserver(updateScrollState); resizeObserver.observe(scrollBar); if (scrollBar.firstElementChild) resizeObserver.observe(scrollBar.firstElementChild); return () => { scrollBar.removeEventListener("scroll", updateScrollState); window.removeEventListener("resize", updateScrollState); resizeObserver.disconnect(); }; }, [pathname, updateScrollState]);
  const advanceScrollBar = () => { const scrollBar = scrollBarRef.current; if (!scrollBar) return; const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; scrollBar.scrollBy({ left: Math.max(180, scrollBar.clientWidth * 0.75), behavior: reduceMotion ? "auto" : "smooth" }); };

  return (
    <nav className={styles.navbar} id="main-nav">
      {/* Top bar — logo + open now */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo} style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <Image src="/brand-logo-small.webp" alt="Pleasant Cannabis Logo" width={30} height={30} loading="lazy" style={{ objectFit: "contain", borderRadius: "4px" }} />
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "18px",
            letterSpacing: "0.04em",
            color: "white",
            textShadow: "0 0 12px rgba(255,255,255,0.2)"
          }}>
            PLEASANT CANNABIS
          </span>
        </Link>
        <div className={styles.topBarRight}>
          <Link href="/weed-delivery-toronto" className={styles.gamesBtn}>
            WEED DELIVERY
          </Link>
          <span className={styles.open}>
            <span className={styles.dot}></span>
            Open Now
          </span>
          <button type="button" className={styles.menuButton} aria-label={mobileOpen ? "Close store navigation" : "Open store navigation"} aria-expanded={mobileOpen} aria-controls="mobile-store-navigation" onClick={() => setMobileOpen((open) => !open)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={mobileOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
          </button>
        </div>
      </div>

      <div id="mobile-store-navigation" className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}>
        {ALL_LINKS.map((link) => <Link key={`mobile-${link.href}`} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>)}
      </div>

      {/* Scrollable link bar */}
      <div className={styles.scrollShell}>
        <div ref={scrollBarRef} id="store-menu-scrollbar" className={styles.scrollBar}>
          <div className={styles.scrollInner}>
          {ALL_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          </div>
        </div>
        {canAdvance && <button type="button" className={styles.scrollAdvance} aria-label="Show more navigation links" aria-controls="store-menu-scrollbar" onClick={advanceScrollBar}><span aria-hidden="true">›</span></button>}
      </div>
    </nav>
  );
}
