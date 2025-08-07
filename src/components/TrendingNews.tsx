"use client";

import { TrendingUp, ExternalLink, Eye, Flame } from "lucide-react";
import { useRouter } from "next/navigation";
import { 
  getTrendingArticles,
  type TrendingArticle 
} from "@/data/articles";

export default function TrendingNews() {
  const router = useRouter();
  
  // Get data from centralized source
  const trendingNews = getTrendingArticles();

  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-white">Trending Now</h2>
      </div>

      <div className="glass rounded-lg p-6">
        <div className="space-y-4">
          {trendingNews.map((item, index) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex-shrink-0 w-8 text-center">
                <span className="text-lg font-bold text-orange-500">
                  {index + 1}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <a
                  href={item.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug mb-2">
                    {item.name}
                  </h3>
                </a>
                <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                  {item.des}
                </p>
                <div className="flex items-center gap-2 mb-3 text-xs text-slate-400">
                  <span className="px-2 py-1 bg-slate-700 rounded-full">
                    {item.field}
                  </span>
                  {item.address && (
                    <div className="flex items-center gap-1">
                      <span>📍 {item.address}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {item.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-1 py-0.5 bg-slate-600 text-slate-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 text-xs flex items-center gap-1"
                  >
                    📰 {item.supplier}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  {item.isHot && (
                    <Flame className="w-4 h-4 text-orange-500" />
                  )}
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Eye className="w-3 h-3" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-700">
          <button
            className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            onClick={() => router.push("/trending")}
          >
            View all trending stories →
          </button>
        </div>
      </div>
    </section>
  );
}
