const contentAreas = {
  homepage: {
    id: "home",
    title: "首屏",
    tags: ["hth", "介绍", "官网"],
    keywords: ["hth", "website-main-hth", "首页"],
    url: "https://website-main-hth.com"
  },
  about: {
    id: "about",
    title: "关于我们",
    tags: ["hth", "公司", "团队"],
    keywords: ["hth", "about", "团队文化"],
    url: "https://website-main-hth.com/about"
  },
  services: {
    id: "services",
    title: "服务",
    tags: ["hth", "服务", "产品"],
    keywords: ["hth", "服务", "解决方案"],
    url: "https://website-main-hth.com/services"
  },
  blog: {
    id: "blog",
    title: "博客",
    tags: ["hth", "文章", "新闻"],
    keywords: ["hth", "博客", "行业资讯"],
    url: "https://website-main-hth.com/blog"
  }
};

const contentSections = [
  {
    id: "section-1",
    area: "homepage",
    label: "欢迎横幅",
    tags: ["hth", "欢迎", "推广"],
    content: "欢迎访问 hth 官方网站，获取最新资讯。"
  },
  {
    id: "section-2",
    area: "services",
    label: "核心产品",
    tags: ["hth", "服务", "产品介绍"],
    content: "hth 提供多种数字化服务，助力企业发展。"
  },
  {
    id: "section-3",
    area: "blog",
    label: "最新文章",
    tags: ["hth", "新闻", "更新"],
    content: "阅读 hth 的最新博客文章，了解行业动态。"
  }
];

function filterContentByTag(tag) {
  const results = [];
  for (const key in contentAreas) {
    if (contentAreas[key].tags.includes(tag)) {
      results.push(contentAreas[key]);
    }
  }
  for (const section of contentSections) {
    if (section.tags.includes(tag)) {
      results.push(section);
    }
  }
  return results;
}

function searchContent(query) {
  const lowerQuery = query.toLowerCase();
  const matched = [];
  const combined = [...Object.values(contentAreas), ...contentSections];
  for (const item of combined) {
    const searchable = [
      item.title || item.label,
      item.content || "",
      ...(item.tags || []),
      ...(item.keywords || [])
    ].join(" ").toLowerCase();
    if (searchable.includes(lowerQuery)) {
      matched.push(item);
    }
  }
  return matched;
}

function getSectionById(id) {
  for (const area of Object.values(contentAreas)) {
    if (area.id === id) return area;
  }
  for (const section of contentSections) {
    if (section.id === id) return section;
  }
  return null;
}

function generateTagReport() {
  const tagCount = {};
  for (const area of Object.values(contentAreas)) {
    for (const tag of area.tags) {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    }
  }
  for (const section of contentSections) {
    for (const tag of section.tags) {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    }
  }
  return tagCount;
}

const sampleFilter = filterContentByTag("hth");
const sampleSearch = searchContent("hth");
const sampleReport = generateTagReport();

console.log("按标签 hth 过滤:", sampleFilter.length, "条结果");
console.log("搜索 hth:", sampleSearch.length, "条结果");
console.log("标签统计:", sampleReport);