"use client";

import CategorySection from "@/components/categories/CategorySection";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { Microscope } from "lucide-react";

export default function ResearchSection() {
  const articles = getArticlesByCategory("research");

  return (
    <CategorySection
      title="Thông tin hoạt động nghiên cứu khoa học"
      categorySlug="research"
      articles={articles}
      icon={<Microscope className="w-6 h-6 text-white" />}
    />
  );
}
