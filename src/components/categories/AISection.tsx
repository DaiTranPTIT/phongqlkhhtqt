"use client";

import CategorySection from "@/components/categories/CategorySection";
import { Brain } from "lucide-react";
import { useArticlesByTag } from "@/lib/categoryUtils";

export default function AISection() {
  const { articles, loading } = useArticlesByTag("ai", 6);

  if (loading) {
    return <div className="text-slate-400">Đang tải dữ liệu...</div>;
  }

  return (
    <CategorySection
      title="Trí tuệ nhân tạo"
      categorySlug="ai"
      articles={articles}
      icon={<Brain className="w-6 h-6 text-white" />}
    />
  );
}
