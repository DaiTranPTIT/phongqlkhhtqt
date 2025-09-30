"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ArticlesPageLayout from "@/components/layout/ArticlesPageLayout";
import { getAllPosts, getPostByTag, Article } from "@/api/posts";
import { getAllTags, Tag } from "@/api/tag";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsPageClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [articles, setArticles] = useState<Article[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [categoryTitle, setCategoryTitle] = useState("Tech News");
  const [categoryDescription, setCategoryDescription] = useState(
    "Stay updated with the latest technology news, trends, and insights from around the world"
  );

  async function loadArticles(reset = false, customPage?: number) {
  if (loading) return;
  setLoading(true);

  try {
    const targetPage = customPage ?? (reset ? 1 : page);

    let data: { items: Article[] };

    if (categoryParam) {
      // Nếu có categoryParam -> giữ nguyên
      const tag = tags.find(
        (t) => t.name.toLowerCase() === categoryParam.toLowerCase()
      );
      if (tag) {
        data = await getPostByTag(tag.id, targetPage, 5);
        if (reset) {
          setCategoryTitle("Danh mục");
          setCategoryDescription(`Bài viết mới nhất về ${tag.name}`);
        }
      } else {
        data = { items: [] };
        if (reset) {
          setCategoryTitle("Không tìm thấy danh mục");
          setCategoryDescription(
            `Không có bài viết nào cho danh mục ${categoryParam}.`
          );
        }
      }
    } else {
      const fixedTags = [
        "ai",
        "khcn",
        "telecom",
        "robotics",
        "software",
        "security",
        "research",
      ];

      const targetTags = tags.filter((t) =>
        fixedTags.includes(t.name.toLowerCase())
      );

      const results = await Promise.all(
        targetTags.map((t) => getPostByTag(t.id, targetPage, 5))
      );

      const merged = results.flatMap((r) => r.items);

      // Sắp xếp theo ngày mới nhất (ưu tiên publishedAt, fallback createdAt)
      merged.sort((a, b) => {
        const dateA = new Date(a.publishedAt || 0).getTime();
        const dateB = new Date(b.publishedAt || 0).getTime();
        return dateB - dateA; // mới nhất lên đầu
      });


      data = { items: merged };
      if (reset) {
        setCategoryTitle("Tin tức công nghệ");
        setCategoryDescription(
          "Tổng hợp bài viết từ nhiều chủ đề công nghệ quan trọng"
        );
      }
    }
    setArticles(data.items);
    setPage(targetPage);
    setHasMore(data.items.length > 0);
  } catch (err) {
    console.error("Error loading posts:", err);
  } finally {
    setLoading(false);
  }
}
  useEffect(() => {
  async function fetchTags() {
    try {
      const tagRes = await getAllTags();
      setTags(tagRes.items);
    } catch (err) {
      console.error("Error loading tags:", err);
    }
  }
  fetchTags();
}, []);

useEffect(() => {
  if (tags.length > 0) {
    loadArticles(true, 1);
  }
}, [tags, categoryParam]);

  
  useEffect(() => {
    async function init() {
      const tagRes = await getAllTags();
      setTags(tagRes.items);
      await loadArticles(true, 1);
    }
    init();
  }, [categoryParam]);

  return (
    <div>
      <ArticlesPageLayout
        title={categoryTitle}
        description={categoryDescription}
        icon="news"
        articles={articles}
        variant="news"
        categoryParam={categoryParam}
        paginationControls={
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                if (page > 1) {
                  await loadArticles(true, page - 1);
                }
              }}
              disabled={page <= 1 || loading}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            {/* Next */}
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                if (hasMore) {
                  await loadArticles(true, page + 1);
                }
              }}
              disabled={!hasMore || loading}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        }
      />
    </div>
  );
}
