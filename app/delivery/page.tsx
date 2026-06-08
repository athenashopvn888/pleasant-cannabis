import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Pleasant Cannabis | Toronto",
  description: "Get notified when Pleasant Cannabis launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://pleasantcannabis.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
