import { Metadata } from "next";
import { Newspaper } from "lucide-react";
import AllArticles from "@/components/AllArticles";

export const metadata: Metadata = {
  title: "All News - TechNews",
  description: "Browse all the latest technology news and updates",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="w-12 h-12 text-emerald-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Tech News
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Stay updated with the latest technology news, trends, and insights
            from around the world
          </p>
        </div>

        {/* Advanced Filters & Controls */}
        <section className="mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 max-w-3xl mx-auto p-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Category
                </label>
                <select
                  title="Filter by category"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option>All Categories</option>
                  <option>AI & Machine Learning</option>
                  <option>Web Development</option>
                  <option>Mobile Apps</option>
                  <option>Cloud Computing</option>
                  <option>Security</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Sort By
                </label>
                <select
                  title="Sort articles"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option>Latest</option>
                  <option>Most Popular</option>
                  <option>Most Viewed</option>
                  <option>Trending</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Time Range
                </label>
                <select
                  title="Select time range"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option>All Time</option>
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <AllArticles />
      </main>
    </div>
  );
}
