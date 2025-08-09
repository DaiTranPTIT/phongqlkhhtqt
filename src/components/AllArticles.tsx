"use client";

import { useState } from "react";
import {
  Heart,
  Clock,
  Eye,
  ExternalLink,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { getNewsGridItems, type NewsGridItem } from "@/data/articles";

const ITEMS_PER_PAGE = 10;

export default function AllArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const allArticles = getNewsGridItems();

  // Calculate pagination
  const totalPages = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = allArticles.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8">
      {/* Articles List */}
      <div className="space-y-4">
        {currentArticles.map((article) => (
          <article
            key={article.id}
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-40 lg:flex-shrink-0">
                <div className="relative overflow-hidden h-32 lg:h-full">
                  <img
                    src={article.imageUrl}
                    alt={article.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full">
                      <Eye className="w-3 h-3 text-white fill-current" />
                      <span className="text-white text-xs font-medium">
                        {article.views.toLocaleString()}
                      </span>
                    </div>
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
                      title="Save article"
                      className="p-2 bg-blue-500/80 backdrop-blur-sm rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>
                    <button
                      title="Like article"
                      className="p-2 bg-red-500/80 backdrop-blur-sm rounded-full hover:bg-red-500 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <a
                    href={article.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block flex-1"
                  >
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors leading-tight">
                      {article.name}
                    </h3>
                  </a>
                  <span className="text-green-400 font-medium text-xs bg-green-500/10 px-2 py-1 rounded-full flex-shrink-0">
                    {article.field}
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                  {article.des}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {article.tags?.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/70 text-slate-300 text-xs rounded-md hover:bg-slate-600 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{article.likes.toLocaleString()} likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Published {formatDate(article.publishedAt)}</span>
                  </div>
                  <a
                    href={article.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
                  >
                    {article.supplier}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {/* Show first page */}
            {currentPage > 3 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(1)}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  1
                </Button>
                {currentPage > 4 && (
                  <span className="text-slate-400 px-2">...</span>
                )}
              </>
            )}

            {/* Show pages around current page */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => {
                return (
                  page === currentPage ||
                  page === currentPage - 1 ||
                  page === currentPage + 1 ||
                  (currentPage <= 2 && page <= 3) ||
                  (currentPage >= totalPages - 1 && page >= totalPages - 2)
                );
              })
              .map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className={
                    currentPage === page
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "border-slate-600 text-slate-300 hover:bg-slate-800"
                  }
                >
                  {page}
                </Button>
              ))}

            {/* Show last page */}
            {currentPage < totalPages - 2 && (
              <>
                {currentPage < totalPages - 3 && (
                  <span className="text-slate-400 px-2">...</span>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(totalPages)}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  {totalPages}
                </Button>
              </>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}
    </section>
  );
}
