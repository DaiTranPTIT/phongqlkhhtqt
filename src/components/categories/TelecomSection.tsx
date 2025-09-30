"use client";

import CategorySection from "@/components/categories/CategorySection";
import { useArticlesByTag } from "@/lib/categoryUtils";
import { Wifi } from "lucide-react";

export default function TelecomSection() {
    const { articles, loading } = useArticlesByTag("telecom", 6);
  
    if (loading) {
      return <div className="text-slate-400">Đang tải dữ liệu...</div>;
    }
  return (
    <CategorySection
      title="Viễn thông và mạng"
      categorySlug="telecom"
      articles={articles}
      icon={<Wifi className="w-6 h-6 text-white" />}
    />
  );
}
