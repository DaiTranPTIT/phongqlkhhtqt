import { NewsArticle } from "@/types/news";

// Extended interfaces for different contexts
export interface SavedArticle extends NewsArticle {
  id: string;
  savedAt: string;
  readTime: string;
  category: string;
  imageUrl?: string;
}

export interface FavoriteArticle extends NewsArticle {
  id: string;
  likes: number;
  imageUrl?: string;
  crawledAt: string;
  rating: number;
  readTime: string;
  views: number;
}

export interface TrendingArticle extends NewsArticle {
  id: string;
  views: number;
  imageUrl?: string;
  readTime: string;
  isHot?: boolean;
  trendingScore: number;
}

export interface NewsGridItem extends NewsArticle {
  id: string;
  imageUrl?: string;
  readTime: string;
  views: number;
  likes: number;
  isLiked?: boolean;
  isSaved?: boolean;
  publishedAt: string;
}

// Base articles data - source of truth
export const baseArticles: NewsArticle[] = [
  {
    name: "Revolutionary Quantum Computer Achieves 1000-Qubit Milestone",
    field: "Trí tuệ nhân tạo",
    des: "Scientists breakthrough in quantum computing with the world's first stable 1000-qubit quantum processor, opening new possibilities for complex calculations and cryptography. This achievement marks a significant step toward practical quantum computing applications.",
    tags: ["Quantum", "Computing", "Science", "Breakthrough", "Technology"],
    supplier: "VietNam Net",
    website: "https://vietnam.net/quantum-computer-1000-qubit",
    contact_info: "science@vietnam.net",
    address: "Hanoi, Vietnam",
    summarize:
      "Các nhà khoa học đã đạt được bước đột phá quan trọng trong lĩnh vực máy tính lượng tử khi phát triển thành công bộ xử lý lượng tử ổn định 1000-qubit đầu tiên trên thế giới. Thành tựu này mở ra khả năng mới cho các phép tính phức tạp và mật mã học, đánh dấu một bước tiến đáng kể hướng tới các ứng dụng máy tính lượng tử thực tế.",
    internalLinks: [
      "/news/quantum-computing-applications",
      "/news/future-of-cryptography",
    ],
    externalLinks: [
      "https://www.nature.com/articles/quantum-computers-2025",
      "https://www.sciencedaily.com/releases/quantum-milestone",
    ],
  },
  {
    name: "Neural Interface Technology Enables Direct Brain-Computer Control",
    field: "Robotic và tự động hóa",
    des: "Breakthrough in brain-computer interface allows paralyzed patients to control devices directly with thoughts, marking a new era in assistive technology and medical innovation. Clinical trials show 95% accuracy in thought-to-action translation.",
    tags: ["BCI", "Neural", "Medical", "Technology", "Innovation"],
    supplier: "VnExpress",
    website: "https://vnexpress.net/neural-interface-breakthrough",
    contact_info: "tech@vnexpress.net",
    address: "Ho Chi Minh City, Vietnam",
    summarize:
      "Công nghệ giao diện thần kinh mới cho phép bệnh nhân bị liệt điều khiển thiết bị trực tiếp bằng ý nghĩ, mở ra kỷ nguyên mới trong công nghệ hỗ trợ và đổi mới y tế. Thử nghiệm lâm sàng cho thấy độ chính xác 95% trong việc chuyển đổi ý nghĩ thành hành động, mang lại hy vọng mới cho những người có vấn đề về vận động.",
    internalLinks: [
      "/news/assistive-technology-2025",
      "/news/medical-innovations",
    ],
    externalLinks: [
      "https://www.medicalnews.com/brain-interface-breakthrough",
      "https://www.techreview.com/neural-technology-future",
    ],
  },
  {
    name: "Space Solar Power Station Successfully Beams Energy to Earth",
    field: "Thông tin hoạt động nghiên cứu khoa học",
    des: "Japan's orbital solar power station achieves first successful wireless power transmission from space to Earth, revolutionizing renewable energy and space exploration. The system generated 10MW of continuous power.",
    tags: ["Space", "Solar", "Energy", "Innovation", "Renewable"],
    supplier: "Thanh Nien",
    website: "https://thanhnien.vn/space-solar-power",
    contact_info: "science@thanhnien.vn",
    address: "Ho Chi Minh City, Vietnam",
    summarize:
      "Trạm năng lượng mặt trời trên quỹ đạo của Nhật Bản đã thành công trong việc truyền năng lượng không dây từ vũ trụ xuống Trái Đất lần đầu tiên, cách mạng hóa năng lượng tái tạo và thám hiểm vũ trụ. Hệ thống đã tạo ra 10MW năng lượng liên tục, chứng minh tính khả thi của công nghệ này cho việc cung cấp năng lượng trong tương lai.",
    internalLinks: [
      "/news/renewable-energy-innovations",
      "/news/space-technology-advancements",
    ],
    externalLinks: [
      "https://www.space.com/japan-orbital-solar-power",
      "https://www.energy-global.com/wireless-power-transmission",
    ],
  },
  {
    name: "AI-Powered Drug Discovery Reduces Development Time by 90%",
    field: "Trí tuệ nhân tạo",
    des: "Artificial intelligence algorithms successfully identify potential drug candidates in weeks instead of years, transforming pharmaceutical research and development. Over 50 compounds are now in clinical trials.",
    tags: ["AI", "Healthcare", "Drug Discovery", "Research", "Medicine"],
    supplier: "Dan Tri",
    website: "https://dantri.com.vn/ai-drug-discovery",
    contact_info: "health@dantri.com.vn",
    address: "Hanoi, Vietnam",
    summarize:
      "Các thuật toán trí tuệ nhân tạo đã thành công trong việc xác định các ứng viên thuốc tiềm năng trong vài tuần thay vì nhiều năm, mang lại sự thay đổi lớn cho ngành nghiên cứu và phát triển dược phẩm. Hiện đã có hơn 50 hợp chất đang trong giai đoạn thử nghiệm lâm sàng, hứa hẹn sẽ đẩy nhanh quá trình phát triển thuốc mới.",
    internalLinks: ["/news/ai-in-healthcare", "/news/pharmaceutical-research"],
    externalLinks: [
      "https://www.medicalresearch.org/ai-drug-discovery",
      "https://www.pharmatech.com/development-breakthroughs",
    ],
  },
  {
    name: "Fusion Reactor Achieves Net Energy Gain for Sustained Period",
    field: "Hoạt động bộ KH&CN",
    des: "Scientists achieve sustained nuclear fusion reaction with net energy gain, bringing clean unlimited energy closer to reality. The reactor maintained fusion for 6 minutes with 150% energy return.",
    tags: ["Fusion", "Energy", "Physics", "Breakthrough", "Clean Energy"],
    supplier: "VietNam Net",
    website: "https://vietnam.net/fusion-energy-breakthrough",
    contact_info: "science@vietnam.net",
    address: "Hanoi, Vietnam",
    summarize:
      "Các nhà khoa học đã đạt được phản ứng nhiệt hạch có lãi năng lượng bền vững, đưa nguồn năng lượng sạch vô hạn đến gần hơn với thực tế. Lò phản ứng đã duy trì quá trình nhiệt hạch trong 6 phút với hiệu suất năng lượng 150%, đánh dấu bước tiến quan trọng trong việc phát triển nguồn năng lượng thay thế không phát thải carbon.",
    internalLinks: ["/news/clean-energy-future", "/news/physics-breakthroughs"],
    externalLinks: [
      "https://www.energy-research.org/fusion-breakthrough",
      "https://www.science-today.com/nuclear-fusion-milestone",
    ],
  },
  {
    name: "Autonomous Vehicles Successfully Navigate Complex City Traffic",
    field: "Robotic và tự động hóa",
    des: "Self-driving cars demonstrate advanced navigation through busy urban environments with 99.9% safety accuracy. The system handles unexpected situations with human-level decision making.",
    tags: ["AI", "Automotive", "Safety", "Urban", "Transportation"],
    supplier: "VnExpress",
    website: "https://vnexpress.net/autonomous-vehicles-city",
    contact_info: "auto@vnexpress.net",
    address: "Ho Chi Minh City, Vietnam",
    summarize:
      "Xe tự lái đã chứng minh khả năng điều hướng nâng cao trong môi trường đô thị đông đúc với độ chính xác an toàn 99,9%. Hệ thống xử lý các tình huống bất ngờ với khả năng ra quyết định ngang tầm con người, đánh dấu bước tiến quan trọng trong việc tích hợp công nghệ tự động vào giao thông đô thị hiện đại.",
    internalLinks: [
      "/news/future-of-transportation",
      "/news/ai-decision-making",
    ],
    externalLinks: [
      "https://www.autonomoustech.com/city-navigation",
      "https://www.transport-future.org/self-driving-milestone",
    ],
  },
  {
    name: "Sustainable Tech: Solar Panel Efficiency Reaches 40%",
    field: "Hoạt động bộ KH&CN",
    des: "New perovskite technology promises to revolutionize renewable energy adoption worldwide. These panels can generate twice the power of traditional silicon panels in the same space.",
    tags: [
      "Solar Energy",
      "Renewable",
      "Sustainability",
      "Green Tech",
      "Innovation",
    ],
    supplier: "Thanh Nien",
    website: "https://thanhnien.vn/solar-panel-efficiency-40",
    contact_info: "tech@thanhnien.vn",
    address: "Ho Chi Minh City, Vietnam",
    summarize:
      "Công nghệ perovskite mới hứa hẹn cách mạng hóa việc áp dụng năng lượng tái tạo trên toàn cầu. Các tấm pin này có thể tạo ra gấp đôi công suất của các tấm pin silicon truyền thống trong cùng một không gian, với hiệu suất đạt tới 40% - một bước đột phá trong lĩnh vực năng lượng mặt trời.",
    internalLinks: [
      "/news/renewable-energy-breakthroughs",
      "/news/solar-technology-advancements",
    ],
    externalLinks: [
      "https://www.greentech.org/perovskite-solar",
      "https://www.sustainable-energy.com/next-gen-panels",
    ],
  },
  {
    name: "Gene Therapy Breakthrough Cures Hereditary Blindness",
    field: "Thông tin hoạt động nghiên cứu khoa học",
    des: "Revolutionary gene editing technique successfully restores sight in patients with inherited blindness. Clinical trials show 85% success rate with lasting results over 2 years.",
    tags: ["Gene Therapy", "Biotechnology", "Medical", "CRISPR", "Innovation"],
    supplier: "Dan Tri",
    website: "https://dantri.com.vn/gene-therapy-blindness",
    contact_info: "health@dantri.com.vn",
    address: "Hanoi, Vietnam",
    summarize:
      "Kỹ thuật chỉnh sửa gen đột phá đã thành công trong việc phục hồi thị lực ở bệnh nhân mắc chứng mù di truyền. Các thử nghiệm lâm sàng cho thấy tỷ lệ thành công 85% với kết quả kéo dài hơn 2 năm, mở ra triển vọng mới cho việc điều trị các bệnh di truyền khác bằng công nghệ chỉnh sửa gen.",
    internalLinks: [
      "/news/genetic-medicine-advancements",
      "/news/blindness-treatment-innovations",
    ],
    externalLinks: [
      "https://www.geneticmedicine.org/blindness-cure",
      "https://www.medical-innovations.com/gene-therapy-success",
    ],
  },
  {
    name: "5G-Advanced Networks Enable Real-Time Holographic Communication",
    field: "Viễn thông và mạng",
    des: "Next-generation 5G technology makes real-time 3D holographic video calls possible. The system requires 1000x faster data processing than current video calls.",
    tags: [
      "5G",
      "Telecommunications",
      "Holography",
      "Communication",
      "Technology",
    ],
    supplier: "VietNam Net",
    website: "https://vietnam.net/5g-holographic-communication",
    contact_info: "tech@vietnam.net",
    address: "Hanoi, Vietnam",
    summarize: "Công nghệ 5G thế hệ tiếp theo cho phép thực hiện các cuộc gọi video holographic 3D theo thời gian thực. Hệ thống này đòi hỏi khả năng xử lý dữ liệu nhanh hơn 1000 lần so với các cuộc gọi video hiện tại, mở ra khả năng giao tiếp từ xa mới hoàn toàn với sự hiện diện ảo gần như thực tế.",
    internalLinks: [
      "/news/future-of-telecommunications",
      "/news/holographic-technology"
    ],
    externalLinks: [
      "https://www.5g-evolution.org/holographic-calls",
      "https://www.telecom-review.com/advanced-communications"
    ]
  },
  {
    name: "Ocean Thermal Energy Conversion Plants Power Remote Islands",
    field: "Thông tin hoạt động nghiên cứu khoa học",
    des: "Innovative ocean thermal energy conversion technology provides sustainable power to remote island communities. The system generates electricity from temperature differences in ocean water.",
    tags: [
      "Ocean Energy",
      "Renewable",
      "Island Power",
      "Sustainable",
      "Innovation",
    ],
    supplier: "Thanh Nien",
    website: "https://thanhnien.vn/ocean-thermal-energy",
    contact_info: "energy@thanhnien.vn",
    address: "Ho Chi Minh City, Vietnam",
    summarize: "Công nghệ chuyển đổi năng lượng nhiệt đại dương đổi mới cung cấp năng lượng bền vững cho các cộng đồng đảo xa. Hệ thống tạo ra điện từ sự chênh lệch nhiệt độ trong nước biển, cung cấp một giải pháp năng lượng sạch, ổn định cho những vùng không thể tiếp cận với lưới điện truyền thống.",
    internalLinks: [
      "/news/renewable-energy-solutions",
      "/news/island-sustainability"
    ],
    externalLinks: [
      "https://www.ocean-energy.org/thermal-conversion",
      "https://www.island-power.com/sustainable-solutions"
    ]
  },
  {
    name: "Advanced Robotic Surgery Reduces Operation Time by 60%",
    field: "Robotic và tự động hóa",
    des: "Next-generation surgical robots with AI assistance perform complex operations with unprecedented precision. The system reduces surgery time and improves patient recovery rates significantly.",
    tags: ["Robotics", "Surgery", "AI", "Medical", "Precision"],
    supplier: "VietNam Net",
    website: "https://vietnam.net/robotic-surgery-advancement",
    contact_info: "medical@vietnam.net",
    address: "Hanoi, Vietnam",
    summarize: "Robot phẫu thuật thế hệ mới với sự hỗ trợ của AI thực hiện các ca phẫu thuật phức tạp với độ chính xác chưa từng có. Hệ thống giảm thời gian phẫu thuật và cải thiện đáng kể tỷ lệ hồi phục của bệnh nhân, với thời gian phẫu thuật giảm tới 60% so với phương pháp truyền thống.",
    internalLinks: [
      "/news/medical-robotics-innovations",
      "/news/ai-in-surgery"
    ],
    externalLinks: [
      "https://www.surgical-robotics.org/next-generation",
      "https://www.medical-innovations.com/robotic-surgery"
    ]
  },
  {
    name: "Smart Cities Use IoT to Reduce Traffic Congestion by 45%",
    field: "Phát triển phần mềm",
    des: "Internet of Things sensors and AI algorithms optimize traffic flow in major cities worldwide. Real-time data processing reduces commute times and air pollution.",
    tags: ["IoT", "Smart Cities", "Traffic", "AI", "Urban Planning"],
    supplier: "VnExpress",
    website: "https://vnexpress.net/smart-city-traffic-solution",
    contact_info: "urban@vnexpress.net",
    address: "Ho Chi Minh City, Vietnam",
  },
  {
    name: "Vertical Farming Technology Increases Crop Yield by 300%",
    field: "Robotic và tự động hóa",
    des: "Revolutionary vertical farming systems using LED technology and hydroponic systems produce fresh vegetables year-round with minimal water usage.",
    tags: [
      "Agriculture",
      "Vertical Farming",
      "Sustainability",
      "LED",
      "Hydroponics",
    ],
    supplier: "Thanh Nien",
    website: "https://thanhnien.vn/vertical-farming-breakthrough",
    contact_info: "agri@thanhnien.vn",
    address: "Ho Chi Minh City, Vietnam",
  },
  {
    name: "Blockchain Voting System Ensures Election Security",
    field: "An toàn thông tin",
    des: "Blockchain-based voting platform guarantees transparent and tamper-proof elections. The system has been successfully tested in multiple pilot programs worldwide.",
    tags: ["Blockchain", "Voting", "Security", "Democracy", "Technology"],
    supplier: "Dan Tri",
    website: "https://dantri.com.vn/blockchain-voting-security",
    contact_info: "tech@dantri.com.vn",
    address: "Hanoi, Vietnam",
  },
  {
    name: "Wearable Health Monitors Predict Heart Attacks 24 Hours Early",
    field: "Phát triển phần mềm",
    des: "Advanced wearable devices with machine learning algorithms can predict cardiovascular events before they occur. Clinical trials show 89% accuracy in early detection.",
    tags: ["Wearables", "Health", "AI", "Prediction", "Cardiovascular"],
    supplier: "VietNam Net",
    website: "https://vietnam.net/wearable-health-prediction",
    contact_info: "health@vietnam.net",
    address: "Hanoi, Vietnam",
  },
  {
    name: "Drone Delivery Networks Revolutionize Rural Healthcare",
    field: "Robotic và tự động hóa",
    des: "Autonomous drone networks deliver medical supplies and medications to remote areas within hours. The system has reduced medical emergency response times by 70%.",
    tags: ["Drones", "Healthcare", "Delivery", "Rural", "Emergency"],
    supplier: "VnExpress",
    website: "https://vnexpress.net/drone-medical-delivery",
    contact_info: "logistics@vnexpress.net",
    address: "Ho Chi Minh City, Vietnam",
  },
  {
    name: "3D Printed Organs Successfully Transplanted in Clinical Trials",
    field: "Thông tin hoạt động nghiên cứu khoa học",
    des: "Bioengineered organs created using 3D printing technology show promising results in human transplant trials. The technique could solve organ shortage crisis.",
    tags: ["3D Printing", "Organs", "Transplant", "Bioengineering", "Medical"],
    supplier: "Thanh Nien",
    website: "https://thanhnien.vn/3d-printed-organs",
    contact_info: "biotech@thanhnien.vn",
    address: "Ho Chi Minh City, Vietnam",
  },
  {
    name: "Quantum Internet Achieves Secure Communication Between Cities",
    field: "An toàn thông tin",
    des: "Quantum entanglement technology enables ultra-secure communication networks between major cities. The system is immune to traditional hacking methods.",
    tags: ["Quantum", "Internet", "Security", "Communication", "Network"],
    supplier: "Dan Tri",
    website: "https://dantri.com.vn/quantum-internet-cities",
    contact_info: "quantum@dantri.com.vn",
    address: "Hanoi, Vietnam",
  },
  {
    name: "Augmented Reality Transforms Education with Immersive Learning",
    field: "Trí tuệ nhân tạo",
    des: "Augmented reality classrooms allow students to interact with 3D models and virtual environments. Learning retention rates increased by 85% in pilot programs.",
    tags: ["AR", "Education", "Learning", "Virtual", "Interactive"],
    supplier: "VietNam Net",
    website: "https://vietnam.net/ar-education-transformation",
    contact_info: "education@vietnam.net",
    address: "Hanoi, Vietnam",
  },
  {
    name: "Magnetic Levitation Trains Reach 600km/h in Commercial Testing",
    field: "Viễn thông và mạng",
    des: "Maglev train technology achieves new speed records while maintaining passenger comfort and safety. Commercial routes are planned for major city connections.",
    tags: ["Maglev", "Trains", "Speed", "Transportation", "Innovation"],
    supplier: "VnExpress",
    website: "https://vnexpress.net/maglev-train-600kmh",
    contact_info: "transport@vnexpress.net",
    address: "Ho Chi Minh City, Vietnam",
  },
];

// Helper function to generate consistent article IDs
export const generateArticleId = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 50);
};

// Helper function to generate random but consistent data based on article name
const getConsistentRandom = (
  seed: string,
  min: number,
  max: number
): number => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  const normalized = Math.abs(hash) / Math.pow(2, 31);
  return Math.floor(normalized * (max - min + 1)) + min;
};

// Transform base articles for different contexts
export const getSavedArticles = (): SavedArticle[] => {
  // Use fixed base date to avoid hydration issues
  const baseDate = new Date("2024-12-01T10:00:00Z");

  return baseArticles.slice(0, 6).map((article, index) => ({
    ...article,
    id: generateArticleId(article.name),
    savedAt: new Date(
      baseDate.getTime() - (index + 1) * 24 * 60 * 60 * 1000
    ).toISOString(),
    readTime: `${getConsistentRandom(article.name, 3, 12)} min read`,
    category: article.field,
    imageUrl: `https://picsum.photos/400/250?random=${20 + index}`,
  }));
};

export const getFavoriteArticles = (): FavoriteArticle[] => {
  // Use fixed base date to avoid hydration issues
  const baseDate = new Date("2024-12-01T12:00:00Z");

  return baseArticles.slice(1, 7).map((article, index) => ({
    ...article,
    id: generateArticleId(article.name),
    likes: getConsistentRandom(article.name, 500, 2000),
    imageUrl: `https://picsum.photos/400/250?random=${10 + index}`,
    crawledAt: new Date(
      baseDate.getTime() - (index + 1) * 48 * 60 * 60 * 1000
    ).toISOString(),
    rating: 4.5 + getConsistentRandom(article.name, 0, 5) / 10,
    readTime: `${getConsistentRandom(article.name, 5, 15)} min read`,
    views: getConsistentRandom(article.name, 5000, 20000),
  }));
};

// Get all favorite articles for the full favorites page with pagination
export const getAllFavoriteArticles = (): FavoriteArticle[] => {
  // Use fixed base date to avoid hydration issues
  const baseDate = new Date("2024-12-01T14:00:00Z");

  return baseArticles.slice(0, 12).map((article, index) => ({
    ...article,
    id: generateArticleId(article.name),
    likes: getConsistentRandom(article.name, 500, 2000),
    imageUrl: `https://picsum.photos/400/250?random=${20 + index}`,
    crawledAt: new Date(
      baseDate.getTime() - (index + 1) * 12 * 60 * 60 * 1000
    ).toISOString(),
    rating: 4.0 + getConsistentRandom(article.name, 0, 10) / 10,
    readTime: `${getConsistentRandom(article.name, 5, 15)} min read`,
    views: getConsistentRandom(article.name, 5000, 20000),
  }));
};

export const getTrendingArticles = (): TrendingArticle[] => {
  return baseArticles.slice(2, 8).map((article, index) => ({
    ...article,
    id: generateArticleId(article.name),
    views: getConsistentRandom(article.name, 10000, 50000),
    imageUrl: `https://picsum.photos/400/250?random=${30 + index}`,
    readTime: `${getConsistentRandom(article.name, 4, 10)} min read`,
    isHot: index < 2,
    trendingScore: getConsistentRandom(article.name, 70, 100),
  }));
};

export const getNewsGridItems = (): NewsGridItem[] => {
  // Use fixed base date to avoid hydration issues
  const baseDate = new Date("2024-12-01T16:00:00Z");

  return baseArticles.map((article, index) => ({
    ...article,
    id: generateArticleId(article.name),
    imageUrl: `https://picsum.photos/400/250?random=${40 + index}`,
    readTime: `${getConsistentRandom(article.name, 3, 12)} min read`,
    views: getConsistentRandom(article.name, 1000, 25000),
    likes: getConsistentRandom(article.name, 100, 1500),
    isLiked: index % 3 === 0,
    isSaved: index % 4 === 0,
    publishedAt: new Date(
      baseDate.getTime() - (index + 1) * 12 * 60 * 60 * 1000
    ).toISOString(),
  }));
};

// Helper functions for filtering and searching
export const filterArticlesByCategory = <T extends { field: string }>(
  articles: T[],
  category: string
): T[] => {
  if (category === "All") return articles;
  return articles.filter((article) => article.field === category);
};

export const searchArticles = <T extends { name: string; des: string }>(
  articles: T[],
  searchTerm: string
): T[] => {
  if (!searchTerm.trim()) return articles;
  const term = searchTerm.toLowerCase();
  return articles.filter(
    (article) =>
      article.name.toLowerCase().includes(term) ||
      article.des.toLowerCase().includes(term)
  );
};

export const sortArticlesByDate = <
  T extends { crawledAt?: string; savedAt?: string; publishedAt?: string }
>(
  articles: T[],
  order: "asc" | "desc" = "desc"
): T[] => {
  return [...articles].sort((a, b) => {
    const dateA = new Date(a.crawledAt || a.savedAt || a.publishedAt || 0);
    const dateB = new Date(b.crawledAt || b.savedAt || b.publishedAt || 0);
    return order === "desc"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });
};

// Get all available categories from base articles
export const getAvailableCategories = (): string[] => {
  const categories = [...new Set(baseArticles.map((article) => article.field))];
  return ["All", ...categories.sort()];
};
