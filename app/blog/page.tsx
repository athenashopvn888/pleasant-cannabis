import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Pleasant Cannabis Blog | Cannabis Menu Guides",
  description: "Read Pleasant Cannabis cannabis menu guides, flower tier notes, and local store checks for Toronto shoppers.",
  alternates: {
    canonical: "https://www.pleasantcannabis.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
