// Interface chung cho tất cả các bài báo được crawl
export interface NewsArticle {
  id?: string; // Thêm ID để quản lý trong UI
  name: string;
  field: string;
  des: string;
  tags?: string[];
  supplier: string;
  website?: string;
  contact_info?: string;
  address?: string;
  summarize?: string; // AI tóm tắt
  internalLinks?: string[]; // Các liên kết nội bộ
  externalLinks?: string[]; // Các liên kết ngoại bộ
}

// Interface cho trending với trạng thái trend
export interface TrendingArticle extends NewsArticle {
  id: string; // Required cho trending
  trend: "up" | "down" | "stable";
}
