"use client";

import CategorySection from "@/components/categories/CategorySection";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { Brain } from "lucide-react";

export default function AISection() {
  const articles = getArticlesByCategory("ai");

  return (
    <CategorySection
      title="Trí tuệ nhân tạo"
      categorySlug="ai"
      articles={articles}
      icon={<Brain className="w-6 h-6 text-white" />}
    />
  );
}
