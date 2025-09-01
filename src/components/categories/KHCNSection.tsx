"use client";

import CategorySection from "@/components/categories/CategorySection";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { Building2 } from "lucide-react";

export default function KHCNSection() {
  const articles = getArticlesByCategory('khcn');
  
  return (
    <CategorySection 
      title="Hoạt động bộ KH&CN" 
      categorySlug="khcn" 
      articles={articles}
      icon={<Building2 className="w-6 h-6 text-white" />}
    />
  );
}
