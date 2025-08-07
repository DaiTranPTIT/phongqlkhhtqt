"use client";

import { Heart, Clock, Eye, ExternalLink, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getFavoriteArticles, type FavoriteArticle } from "@/data/articles";

export default function Favorites() {
  const router = useRouter();

  // Get data from centralized source
  const favoriteArticles = getFavoriteArticles();

  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">My Favorites</h2>
            <p className="text-slate-400">
              {favoriteArticles.length} articles you loved
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid - 2 rows, 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteArticles.map((article) => (
          <article
            key={article.id}
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Rating Badge */}
              <div className="absolute top-3 left-3">
                <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full">
                  <Star className="w-3 h-3 text-white fill-current" />
                  <span className="text-white text-xs font-medium">
                    {article.rating.toFixed(1)}
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
                  title="Remove from favorites"
                  className="p-2 bg-red-500/80 backdrop-blur-sm rounded-full hover:bg-red-500 transition-colors"
                >
                  <Heart className="w-4 h-4 text-white fill-current" />
                </button>
              </div>

              {/* Views count */}
              <div className="absolute bottom-3 right-3">
                <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md">
                  <Eye className="w-3 h-3 text-white" />
                  <span className="text-white text-xs">
                    {article.views.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <a
                href={article.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-pink-400 transition-colors leading-tight">
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
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-400" />
                    <span>{article.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <span className="text-pink-400 font-medium">
                  {article.field}
                </span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-700">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Favorited {formatDate(article.crawledAt)}</span>
                </div>
                <a
                  href={article.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1"
                >
                  {article.supplier}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <Button
          className="bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:transform hover:scale-105"
          onClick={() => router.push("/favorites")}
        >
          View All My Favorites
          <Heart className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}
