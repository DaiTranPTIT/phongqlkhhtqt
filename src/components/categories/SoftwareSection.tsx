"use client";

import CategorySection from "@/components/categories/CategorySection";
import { useArticlesByTag } from "@/lib/categoryUtils";
import { Code } from "lucide-react";

export default function SoftwareSection() {
    const { articles, loading } = useArticlesByTag("software", 6);
  
    if (loading) {
      return <div className="text-slate-400">Đang tải dữ liệu...</div>;
    }
  return (
    <CategorySection
      title="Phát triển phần mềm"
      categorySlug="software"
      articles={articles}
      icon={<Code className="w-6 h-6 text-white" />}
    />
  );
}
