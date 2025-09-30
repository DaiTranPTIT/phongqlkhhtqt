"use client";

import CategorySection from "@/components/categories/CategorySection";
import { useArticlesByTag } from "@/lib/categoryUtils";
import { Bot } from "lucide-react";

export default function RoboticsSection() {
  const { articles, loading } = useArticlesByTag("robotics", 6);

  if (loading) {
    return <div className="text-slate-400">Đang tải dữ liệu...</div>;
  }
  return (
    <CategorySection
      title="Robotic và tự động hóa"
      categorySlug="robotics"
      articles={articles}
      icon={<Bot className="w-6 h-6 text-white" />}
    />
  );
}
