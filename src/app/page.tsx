import Hero from "@/components/layout/Hero";
import MainContent from "@/components/MainContent";
import CategoryFilter from "@/components/CategoryFilter";
import Favorites from "@/components/Favorites";
import MySaved from "@/components/MySaved";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        {/* Main 2/3 1/3 Layout */}
        <MainContent />

        {/* Favorites Section */}
        <div className="mt-12">
          <Favorites />
        </div>

        {/* My Saved Articles Section */}
        <div className="mt-12">
          <MySaved />
        </div>
      </div>
    </main>
  );
}
