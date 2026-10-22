import { cache } from "react";
import { SHOW_CIGARETTES } from "./siteConfig";

/** Coded cigarette gate. Sheet rows do not replace the existing route redirects. */
export type CigaretteSnapshot = {
  web: { show: boolean };
  tv: { show: boolean };
  guides: { show: boolean };
};

function readCigaretteFeed(): CigaretteSnapshot {
  const show = SHOW_CIGARETTES;
  return {
    web: { show },
    tv: { show },
    guides: { show },
  };
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);
