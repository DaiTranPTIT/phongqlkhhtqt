import { Metadata } from "next";
import SavedPageClient from "@/components/saved/SavedPageClient";

export const metadata: Metadata = {
  title: "Bài viết đã lưu - TechNews",
  description: "Xem tất cả các bài viết công nghệ bạn đã lưu",
};

export default function SavedPage() {
  return <SavedPageClient />;
}
