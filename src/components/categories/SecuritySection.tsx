"use client";

import CategorySection from "@/components/categories/CategorySection";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { Shield } from "lucide-react";

export default function SecuritySection() {
  const articles = getArticlesByCategory("security");

  return (
    <CategorySection
      title="An toàn thông tin"
      categorySlug="security"
      articles={articles}
      icon={<Shield className="w-6 h-6 text-white" />}
    />
  );
}
