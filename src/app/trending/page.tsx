import { Metadata } from "next";
import TrendingNews from "@/components/TrendingNews";

export const metadata: Metadata = {
  title: "Trending News - TechNews",
  description: "Discover the most trending technology stories right now",
};

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🔥 Trending Stories
          </h1>
          <p className="text-slate-300 text-lg">
            The hottest technology stories that everyone is talking about
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <TrendingNews />
          </div>
          <div className="lg:col-span-1">
            <TrendingNews />
          </div>
        </div>
      </main>
    </div>
  );
}
