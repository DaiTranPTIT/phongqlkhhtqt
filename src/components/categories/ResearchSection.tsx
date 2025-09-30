"use client";

import CategorySection from "@/components/categories/CategorySection";
import { useArticlesByTag } from "@/lib/categoryUtils";
import { Microscope } from "lucide-react";

export default function ResearchSection() {
  const { articles, loading } = useArticlesByTag("research", 6);
  
    if (loading) {
      return <div className="text-slate-400">Đang tải dữ liệu...</div>;
    }
  return (
    <CategorySection
      title="Thông tin hoạt động nghiên cứu khoa học"
      categorySlug="research"
      articles={articles}
      icon={<Microscope className="w-6 h-6 text-white" />}
    />
  );
}
