"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          TechNews
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Stay ahead with the latest technology trends, innovations, and breaking news from the tech world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="Search tech news..." 
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
            />
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
            Search
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {["AI", "Blockchain", "Startups", "Mobile", "Web Dev", "Cybersecurity"].map((tag) => (
            <span key={tag} className="px-3 py-1 glass rounded-full text-slate-200 hover:bg-white/20 cursor-pointer transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}