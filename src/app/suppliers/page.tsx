import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suppliers - TechNews",
  description: "News suppliers and sources",
};

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">News Suppliers</h1>
          <p className="text-slate-300">Coming soon...</p>
        </div>
      </main>
    </div>
  );
}
