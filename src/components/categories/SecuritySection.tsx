"use client";

import CategorySection from "@/components/categories/CategorySection";
import { useArticlesByTag } from "@/lib/categoryUtils";
import { Shield } from "lucide-react";

export default function SecuritySection() {
    const { articles, loading } = useArticlesByTag("security", 6);
  
    if (loading) {
      return <div className="text-slate-400">Đang tải dữ liệu...</div>;
    }
  return (
    <CategorySection
      title="An toàn thông tin"
      categorySlug="security"
      articles={articles}
      icon={<Shield className="w-6 h-6 text-white" />}
    />
  );
}
