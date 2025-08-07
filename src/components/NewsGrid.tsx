"use client";

import {
  User,
  ExternalLink,
  Heart,
  Bookmark,
  Tag,
  FileText,
  Clock,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  getNewsGridItems,
  type NewsGridItem 
} from "@/data/articles";

// Data from centralized source
const newsItems = getNewsGridItems();

export default function NewsGrid() {
  const [articles, setArticles] = useState(newsItems);
  const router = useRouter();

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
        <h2 className="text-2xl font-bold text-white">Latest News</h2>
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-800"
          onClick={() => router.push("/news")}
        >
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((article) => (
          <article
            key={article.id}
            className="glass rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="relative overflow-hidden">
              {article.imageUrl && (
                <img
                  src={article.imageUrl}
                  alt={article.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}

              {/* Nếu không có ảnh, hiển thị gradient background với icon */}
              {!article.imageUrl && (
                <div className="w-full h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-slate-600" />
                </div>
              )}

              <div className="absolute top-2 left-2">
                <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded">
                  {article.field}
                </span>
              </div>
            </div>{" "}
            <div className="p-4">
              <a
                href={article.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors leading-tight">
                  {article.name}
                </h3>
              </a>
              <p className="text-slate-300 text-sm mb-3 line-clamp-2 leading-relaxed">
                {article.des}
              </p>{" "}
              {/* Tags - giảm xuống 2 tags để gọn gàng hơn */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full hover:bg-slate-600 transition-colors cursor-pointer"
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
                {article.tags && article.tags.length > 2 && (
                  <span className="px-2 py-1 text-slate-400 text-xs">
                    +{article.tags.length - 2}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <div className="flex items-center gap-4">
                  {article.supplier && (
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{article.supplier}</span>
                    </div>
                  )}
                  {article.address && (
                    <div className="flex items-center gap-1">
                      <span>📍 {article.address}</span>
                    </div>
                  )}
                </div>
              </div>
              {/* Source and Date */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <a
                  href={article.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  📰 {article.supplier}
                </a>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleLike(article.id)}
                    className={`flex items-center gap-1 text-xs transition-colors ${
                      article.isLiked
                        ? "text-red-400"
                        : "text-slate-400 hover:text-red-400"
                    }`}
                  >
                    <Heart
                      className={`w-3 h-3 ${
                        article.isLiked ? "fill-current" : ""
                      }`}
                    />
                    <span>{(article.likes / 1000).toFixed(1)}K</span>
                  </button>
                  <button
                    onClick={() => toggleSave(article.id)}
                    title={article.isSaved ? "Unsave article" : "Save article"}
                    className={`flex items-center gap-1 text-xs transition-colors ${
                      article.isSaved
                        ? "text-blue-400"
                        : "text-slate-400 hover:text-blue-400"
                    }`}
                  >
                    <Bookmark
                      className={`w-3 h-3 ${
                        article.isSaved ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>

                <a
                  href={article.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Read full article"
                  className="text-orange-400 hover:text-orange-300 text-xs transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6"
          onClick={() => router.push("/news")}
        >
          Load More Articles
        </Button>
      </div>
    </section>
  );
}
