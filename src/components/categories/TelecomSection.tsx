"use client";

import CategorySection from "@/components/categories/CategorySection";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { Wifi } from "lucide-react";

export default function TelecomSection() {
  const articles = getArticlesByCategory("telecom");

  return (
    <CategorySection
      title="Viễn thông và mạng"
      categorySlug="telecom"
      articles={articles}
      icon={<Wifi className="w-6 h-6 text-white" />}
    />
  );
}
