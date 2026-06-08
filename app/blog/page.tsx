import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Pleasant Cannabis | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Pleasant Cannabis in Toronto.",
  alternates: {
    canonical: "https://pleasantcannabis.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
