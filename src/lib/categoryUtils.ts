import { baseArticles, generateArticleId, TrendingArticle } from "@/data/articles";

// Map to convert category slugs to field names
const categoryToFieldMap: Record<string, string> = {
  'ai': 'Trí tuệ nhân tạo',
  'khcn': 'Hoạt động bộ KH&CN',
  'telecom': 'Viễn thông và mạng',
  'robotics': 'Robotic và tự động hóa',
  'software': 'Phát triển phần mềm',
  'security': 'An toàn thông tin',
  'research': 'Thông tin hoạt động nghiên cứu khoa học',
};

// Get field name from category slug
export const getFieldFromCategory = (categorySlug: string): string => {
  return categoryToFieldMap[categorySlug] || '';
};

// Get articles by category
export const getArticlesByCategory = (categorySlug: string): TrendingArticle[] => {
  const fieldName = getFieldFromCategory(categorySlug);
  
  if (!fieldName) return [];
  
  // Filter articles by field
  const filteredArticles = baseArticles.filter(article => article.field === fieldName);
  
  // Transform to TrendingArticle
  return filteredArticles.map(article => ({
    ...article,
    id: generateArticleId(article.name),
    views: Math.floor(Math.random() * 10000),
    imageUrl: `https://picsum.photos/600/400?random=${article.name.length}`,
    readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
    isHot: Math.random() > 0.7,
    trendingScore: Math.floor(Math.random() * 100),
  }));
};
