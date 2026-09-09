import Link from "next/link";

const areas = ["Toronto", "North York", "East York", "Scarborough", "Etobicoke", "Vaughan"];

export function DeliveryCoverage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.pleasantcannabis.ca/weed-dispensary-toronto#delivery-service",
    name: "Pleasant Cannabis delivery coverage",
    serviceType: "Cannabis delivery information",
    provider: { "@id": "https://www.pleasantcannabis.ca/#store" },
    url: "https://www.pleasantcannabis.ca/weed-delivery-toronto",
    areaServed: [
      { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.7075699, longitude: -79.3901685 }, geoRadius: 50000 },
      ...areas.map((name) => ({ "@type": "City", name })),
    ],
  };

  return <section style={{ maxWidth: 1040, margin: "0 auto", padding: "24px 24px 64px" }}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <h2>Delivery Coverage from Pleasant Cannabis</h2>
    <p>Delivery is coordinated from the Mount Pleasant Road store and confirmed when an order is placed. A practical planning area is approximately 50 km from Midtown Toronto, including Toronto, North York, East York, Scarborough, Etobicoke and Vaughan.</p>
    <p>Longer trips toward Barrie, Kitchener or Hamilton may be available when a driver is already positioned in that area. Extended coverage is not guaranteed, so confirm the destination and timing with the dispatcher before relying on delivery.</p>
    <p><Link href="/weed-delivery-toronto">Check current Toronto delivery information</Link></p>
  </section>;
}
