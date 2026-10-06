import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  PCB01: {
    headerImage: "/tv-theme/pcb01/header.webp",
    backgroundImage: "/tv-theme/pcb01/background.webp",
    cornerLeft: "/tv-theme/pcb01/corner-left.png",
    cornerRight: "/tv-theme/pcb01/corner-right.png",
    primary: "#0B4A2C",
    accent: "#C7A44A",
    glow: "rgba(199, 164, 74, 0.42)",
    cardBorder: "rgba(244, 224, 170, 0.92)",
    headerText: "#FFF9EA",
    sloganLeft: "DISCOVER YOUR PLEASANT SIDE",
    sloganRight: "PREMIUM FLOWER · GOOD VIBES",
    footerLeft: "PLEASANT CANNABIS",
    footerRight: "MT PLEASANT · ALWAYS WELCOMING",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}

