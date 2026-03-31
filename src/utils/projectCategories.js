const CATEGORY_DEFINITIONS = [
  {
    key: "ux-onderzoek",
    label: "UX & Onderzoek",
    keywords: [
      "ux/ui",
      "ux-ontwerp",
      "ux design",
      "figma",
      "onderzoek",
      "research",
      "usability",
      "serviceontwerp",
      "service design",
      "interactieontwerp",
      "interaction design",
      "belevingsontwerp",
      "inclusief ontwerp",
    ],
  },
  {
    key: "visual-design",
    label: "Visual Design",
    keywords: [
      "design",
      "visueel ontwerp",
      "branding",
      "webontwerp",
      "conceptontwerp",
      "prototyping",
      "adobe xd",
      "mobile design",
      "mobiel ontwerp",
      "responsive",
      "responsief",
    ],
  },
  {
    key: "development",
    label: "Programmering",
    keywords: [
      "react",
      "html",
      "css",
      "javascript",
      "node.js",
      "frontend",
      "web",
      "vite",
      "express",
      "mongodb",
      "firebase",
      "sql",
      "programmering",
      "programmeren",
    ],
  },
  {
    key: "video-storytelling",
    label: "Video & Storytelling",
    keywords: [
      "video",
      "videobewerking",
      "storytelling",
      "social media",
      "campagne",
      "transmediale",
      "multimedia",
    ],
  },
  {
    key: "strategie-concept",
    label: "Strategie & Concept",
    keywords: [
      "strategie",
      "strategy",
      "concept",
      "conceptontwikkeling",
      "designdenken",
      "design thinking",
      "ideevorming",
      "ideation",
      "teamproject",
      "teamwerk",
      "concepting",
    ],
  },
];

const normalize = (value) =>
  String(value || "")
    .toLowerCase()
    .trim();

const hasKeywordMatch = (tech = [], keywords = []) => {
  const normalizedTech = tech.map(normalize);
  return keywords.some((keyword) => {
    const target = normalize(keyword);
    return normalizedTech.some(
      (entry) => entry.includes(target) || target.includes(entry),
    );
  });
};

export const getProjectCategoryKeys = (tech = []) => {
  if (!Array.isArray(tech)) return [];

  const matches = CATEGORY_DEFINITIONS.filter((category) =>
    hasKeywordMatch(tech, category.keywords),
  ).map((category) => category.key);

  return matches.length > 0 ? matches : ["visual-design"];
};

export const getCategoryLabel = (key) => {
  const found = CATEGORY_DEFINITIONS.find((category) => category.key === key);
  return found?.label || key;
};

export const getVisibleCategoryKeys = (projects = []) => {
  const keys = CATEGORY_DEFINITIONS.filter((category) =>
    projects.some((project) =>
      hasKeywordMatch(project.tech || [], category.keywords),
    ),
  ).map((category) => category.key);

  return ["all", ...keys];
};
