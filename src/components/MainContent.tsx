"use client";

import NewsGrid from "@/components/NewsGrid";
import TrendingNews from "@/components/TrendingNews";

export default function MainContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Main Content - 2/3 */}
      <div className="lg:col-span-2">
        <NewsGrid />
      </div>

      {/* Sidebar - 1/3 */}
      <div className="lg:col-span-1">
        <TrendingNews />
      </div>
    </div>
  );
}
