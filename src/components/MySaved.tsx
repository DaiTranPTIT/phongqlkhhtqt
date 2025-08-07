"use client";

import {
  Bookmark,
  Clock,
  ExternalLink,
  Tag,
  Filter,
  Search,
  Grid,
  List,
  MoreHorizontal,
  Trash2,
  Share2,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  getSavedArticles,
  getAvailableCategories,
  filterArticlesByCategory,
  searchArticles,
  type SavedArticle,
} from "@/data/articles";

export default function MySaved() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get data from centralized source
  const allSavedArticles = getSavedArticles();
  const categories = getAvailableCategories();

  const filteredArticles = searchArticles(
    filterArticlesByCategory(allSavedArticles, selectedCategory),
    searchTerm
  );

  return (
    <section className="py-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Bookmark className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">My Saved Articles</h2>
            <p className="text-slate-400">
              {allSavedArticles.length} articles saved
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
            onClick={() => router.push("/saved")}
          >
            View All Saved
          </Button>
        </div>
      </div>

      {/* Articles Grid/List */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <Bookmark className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            No saved articles found
          </h3>
          <p className="text-slate-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  {article.imageUrl ? (
                    <img
                      src={article.imageUrl}
                      alt={article.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                      <Bookmark className="w-12 h-12 text-slate-600" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      title="Share article"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                    <button
                      title="Remove from saved"
                      className="p-2 bg-red-500/80 backdrop-blur-sm rounded-full hover:bg-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <a
                    href={article.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">
                      {article.name}
                    </h3>
                  </a>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.des}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags?.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/70 text-slate-300 text-xs rounded-md hover:bg-slate-600 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags && article.tags.length > 3 && (
                      <span className="px-2 py-1 text-slate-400 text-xs">
                        +{article.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatDate(article.savedAt)}</span>
                      </div>
                      {article.readTime && (
                        <div className="flex items-center gap-1">
                          <span>📖 {article.readTime}</span>
                        </div>
                      )}
                    </div>
                    <a
                      href={article.website || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      {article.supplier}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {/* Load More Button */}
      <div className="text-center mt-8">
        <Button
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:transform hover:scale-105"
          onClick={() => router.push("/saved")}
        >
          View All Saved Articles
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}
