"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ArticleList from "@/components/ArticleList";
import { getNewsGridItems } from "@/data/articles";

export default function NewsPreview() {
  const router = useRouter();
  const [articles, setArticles] = useState(getNewsGridItems());

  const toggleLike = (id: string) => {
    setArticles(
      articles.map((article) =>
        article.id === id
          ? {
              ...article,
              isLiked: !article.isLiked,
              likes: article.isLiked ? article.likes - 1 : article.likes + 1,
            }
          : article
      )
    );
  };

  const toggleSave = (id: string) => {
    setArticles(
      articles.map((article) =>
        article.id === id ? { ...article, isSaved: !article.isSaved } : article
      )
    );
  };

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Tin tức mới nhất</h2>
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-800"
          onClick={() => router.push("/news")}
        >
          Xem tất cả
        </Button>
      </div>

      {/* Articles Grid */}
      <ArticleList
        articles={articles}
        layout="grid"
        variant="news"
        limit={6}
        enablePagination={false}
        onLike={toggleLike}
        onSave={toggleSave}
        showActions={true}
      />

      <div className="text-center mt-6">
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6"
          onClick={() => router.push("/news")}
        >
          Xem thêm bài viết
        </Button>
      </div>
    </section>
  );
}
