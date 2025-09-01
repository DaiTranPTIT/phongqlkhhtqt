"use client";

import CategorySection from "@/components/categories/CategorySection";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { Code } from "lucide-react";

export default function SoftwareSection() {
  const articles = getArticlesByCategory("software");

  return (
    <CategorySection
      title="Phát triển phần mềm"
      categorySlug="software"
      articles={articles}
      icon={<Code className="w-6 h-6 text-white" />}
    />
  );
}
