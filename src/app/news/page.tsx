import { Metadata } from "next";
import NewsPageClient from "@/components/news/NewsPageClient";

export const metadata: Metadata = {
  title: "All News - TechNews",
  description: "Browse all the latest technology news and updates",
};

export default function NewsPage() {
  return <NewsPageClient />;
}
