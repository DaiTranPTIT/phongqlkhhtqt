"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ArticlesPageLayout from "@/components/layout/ArticlesPageLayout";
import { getNewsGridItems, NewsGridItem } from "@/data/articles";
import { getArticlesByCategory } from "@/lib/categoryUtils";
import { getFieldFromCategory } from "@/lib/categoryUtils";

export default function NewsPageClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [articles, setArticles] = useState<any[]>([]);
  const [categoryTitle, setCategoryTitle] = useState("Tech News");
  const [categoryDescription, setCategoryDescription] = useState(
    "Stay updated with the latest technology news, trends, and insights from around the world"
  );

  useEffect(() => {
    if (categoryParam) {
      // Lấy bài viết theo danh mục
      const categoryArticles = getArticlesByCategory(categoryParam);
      setArticles(categoryArticles);

      // Cập nhật tiêu đề và mô tả dựa trên danh mục
      const fieldName = getFieldFromCategory(categoryParam);
      if (fieldName) {
        setCategoryTitle(fieldName);
        setCategoryDescription(
          `Bài viết mới nhất về ${fieldName.toLowerCase()}`
        );
      }
    } else {
      // Nếu không có tham số danh mục, hiển thị tất cả bài viết
      setArticles(getNewsGridItems());
      setCategoryTitle("Tech News");
      setCategoryDescription(
        "Stay updated with the latest technology news, trends, and insights from around the world"
      );
    }
  }, [categoryParam]);

  return (
    <ArticlesPageLayout
      title={categoryTitle}
      description={categoryDescription}
      icon="news"
      articles={articles}
      variant="news"
      categoryParam={categoryParam}
    />
  );
}
