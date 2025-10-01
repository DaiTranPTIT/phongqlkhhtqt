"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArticlesPageLayout from "@/components/layout/ArticlesPageLayout";
import { useAuth } from "@/lib/auth/AuthContext";
import { getUserInfoApi } from "@/api/user";
import { getPostByTag, Article } from "@/api/posts";

export default function SavedPageClient() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchArticlesByTags(tagIds: string[]) {
    try {
      setLoading(true);
      const allArticles: Article[] = [];

      for (const tagId of tagIds) {
        const res = await getPostByTag(tagId, 1, 3);
        allArticles.push(...res.items);
      }

      allArticles.sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });

      setArticles(allArticles);
    } catch (err) {
      console.error("Error loading articles:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("techNewsToken");
    if (!token) return;

    async function fetchAndLoad() {
      try {
        const userInfo = await getUserInfoApi(token!);
        console.log("User info:", userInfo);


        const tagIds: string[] = userInfo.data.map((item: any) => item.tag);

        if (tagIds.length > 0) {
          await fetchArticlesByTags(tagIds);
        }
      } catch (error: any) {
        console.error("Error fetching user info:", error.message);
      }
    }

    fetchAndLoad();
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isLoading, isAuthenticated, router]);


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
