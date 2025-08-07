"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All", icon: "🌐" },
  { id: "ai", name: "AI", icon: "🤖" },
  { id: "blockchain", name: "Blockchain", icon: "⛓️" },
  { id: "mobile", name: "Mobile", icon: "📱" },
  { id: "web", name: "Web Dev", icon: "💻" },
  { id: "cybersecurity", name: "Security", icon: "🔒" },
  { id: "hardware", name: "Hardware", icon: "🔧" },
  { id: "startups", name: "Startups", icon: "🚀" },
  { id: "gaming", name: "Gaming", icon: "🎮" }
];

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="py-8 border-b border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={`
              flex items-center gap-2 transition-all duration-300
              ${activeCategory === category.id 
                ? "bg-orange-500 hover:bg-orange-600 text-white" 
                : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-orange-500"
              }
            `}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-slate-400">
        {activeCategory === "all" 
          ? "Showing all articles" 
          : `Showing ${categories.find(c => c.id === activeCategory)?.name} articles`
        }
      </div>
    </section>
  );
}
