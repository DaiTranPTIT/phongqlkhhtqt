"use client";

import CategorySection from "@/components/categories/CategorySection";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { Bot } from "lucide-react";

export default function RoboticsSection() {
  const articles = getArticlesByCategory("robotics");

  return (
    <CategorySection
      title="Robotic và tự động hóa"
      categorySlug="robotics"
      articles={articles}
      icon={<Bot className="w-6 h-6 text-white" />}
    />
  );
}
