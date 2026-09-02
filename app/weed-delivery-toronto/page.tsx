import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
import menu from "../delivery/delivery-menu.json";

const canonical = "https://www.pleasantcannabis.ca/weed-delivery-toronto";

export const metadata: Metadata = {
  title: { absolute: "Weed Delivery Toronto | Pleasant Cannabis" },
  description: "Browse the Pleasant Cannabis Weed Delivery catalog and compare the listed flower choices.",
  alternates: { canonical },
};

export default function WeedDeliveryTorontoPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Pleasant Cannabis Weed Delivery", url: canonical, mainEntity: { "@type": "ItemList", numberOfItems: menu.products.length, itemListElement: menu.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name })) } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><DeliveryContent /></>;
}
