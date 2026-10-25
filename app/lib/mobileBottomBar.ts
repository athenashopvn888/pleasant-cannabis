import { HOME_MENU_HREF } from "./homeDelivery.ts";

/** Flower catalog the rest of the site already calls the store menu. */
export const MOBILE_BAR_MENU_HREF = HOME_MENU_HREF;

/**
 * Rendered delivery catalog. `/delivery` is a permanent redirect to this
 * path in next.config.ts, so the bar links to the page that answers.
 */
export const MOBILE_BAR_DELIVERY_HREF = "/weed-delivery-toronto";

export const MOBILE_BAR_HOURS_HREF = "/hours";

/** In-store boards. The bar is omitted so it never sits on the TV canvas. */
export function isMobileBottomBarHidden(pathname: string) {
  return pathname === "/tv" || pathname === "/tv2" || pathname.startsWith("/tv/") || pathname.startsWith("/tv2/");
}
