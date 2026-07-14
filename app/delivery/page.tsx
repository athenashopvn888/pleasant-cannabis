import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon Pleasant Cannabis | Toronto",
  description:
    "Get notified when Pleasant Cannabis prepares delivery updates for Mount Pleasant and Midtown Toronto, Midtown Toronto, and nearby local areas.",
  alternates: {
    canonical: "https://pleasantcannabis.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
