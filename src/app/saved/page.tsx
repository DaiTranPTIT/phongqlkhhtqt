import { Metadata } from "next";
import {
  Bookmark,
  TrendingUp,
  Clock,
  Filter,
  Search,
  Grid,
  List,
  SortAsc,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AllSaved from "@/components/AllSaved";
import { getSavedArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "My Saved Articles - TechNews",
  description: "View all your saved technology news articles",
};

export default function SavedPage() {
  const allSaved = getSavedArticles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <Bookmark className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Saved Articles
            </h1>
          </div>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Your personal collection of technology news and insights
          </p>
        </div>

        {/* Advanced Filters & Controls */}
        <div className="max-w-3xl mx-auto bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 p-3 mb-6">
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <select
                title="Filter by category"
                className="px-2.5 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              >
                <option>All Categories</option>
                <option>Quantum Computing</option>
                <option>AI Healthcare</option>
                <option>Space Technology</option>
                <option>Nuclear Fusion</option>
                <option>Green Tech</option>
                <option>Biotechnology</option>
              </select>

              <select
                title="Sort articles"
                className="px-2.5 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              >
                <option>Most Recent</option>
                <option>Most Liked</option>
                <option>Alphabetical</option>
                <option>By Reading Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Saved Articles Component */}
        <div className="max-w-6xl mx-auto">
          <AllSaved />
        </div>
      </main>
    </div>
  );
}
