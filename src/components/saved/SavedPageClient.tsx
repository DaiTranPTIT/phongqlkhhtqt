"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ArticlesPageLayout from "@/components/layout/ArticlesPageLayout";
import { getSavedArticles } from "@/data/articles";
import { useAuth } from "@/lib/auth/AuthContext";

export default function SavedPageClient() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const articles = getSavedArticles();

  useEffect(() => {
    // Sau khi đã tải xong và không được xác thực, chuyển hướng về trang chủ
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isLoading, isAuthenticated, router]);

  // Nếu đang tải hoặc không được xác thực, không hiển thị gì
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Đang tải...</div>
      </div>
    );
  }

  return (
    <ArticlesPageLayout
      title="Bài viết đã lưu"
      description="Xem và quản lý các bài viết công nghệ bạn đã lưu"
      icon="saved"
      articles={articles}
      variant="saved"
    />
  );
}
