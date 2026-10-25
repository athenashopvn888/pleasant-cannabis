import { FULL_NAME_NAP } from "./fullNameNap.ts";
import { gbpLocation } from "./gbp-location.ts";
import { STORE_NAP } from "./storeNap.ts";

/**
 * Prefer a maps.app.goo.gl short link or a Google Business Profile pin
 * already stored in config. Otherwise build a directions URL to the
 * published street address.
 */
export function pickStoreDirectionsHref(candidates: readonly string[], address: string): string {
  const urls = candidates.map((value) => value.trim()).filter(Boolean);
  const shortLink = urls.find((url) => url.includes("maps.app.goo.gl"));
  if (shortLink) return shortLink;
  const pin = urls.find((url) => url.includes("place_id:") || url.includes("/maps/place/"));
  if (pin) return pin;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export function storeDirectionsHref(): string {
  const address = `${STORE_NAP.streetAddress}, ${STORE_NAP.addressLocality}, ${STORE_NAP.addressRegion} ${STORE_NAP.postalCode}`;
  return pickStoreDirectionsHref(
    [gbpLocation.directionsUrl, FULL_NAME_NAP.mapsUrl, STORE_NAP.mapsSearchUrl],
    address,
  );
}
