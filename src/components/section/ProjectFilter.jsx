// Project Filter Component - ProjectFilter.jsx (NEW COMPONENT)
import { useState, useMemo, useEffect } from "react";
import {
  getCategoryLabel,
  getProjectCategoryKeys,
  getVisibleCategoryKeys,
} from "../../utils/projectCategories";

export const ProjectFilter = ({ projects, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState(null);

  // Extract visible categories and years
  const categories = useMemo(() => {
    return getVisibleCategoryKeys(projects);
  }, [projects]);

  const years = useMemo(() => {
    return [...new Set(projects.map((p) => p.year))].sort().reverse();
  }, [projects]);

  // Filter projects
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      // Category filter
      if (selectedCategory !== "all") {
        const hasCategory = getProjectCategoryKeys(p.tech).includes(
          selectedCategory,
        );
        if (!hasCategory) return false;
      }

      // Year filter
      if (selectedYear && p.year !== selectedYear) return false;

      return true;
    });
  }, [projects, selectedCategory, selectedYear]);

  // Trigger parent callback
  useEffect(() => {
    onFilter(filtered);
  }, [filtered, onFilter]);

  const categoryConfig = {
    all: "border-white/30 text-white hover:border-white/50",
    "ux-onderzoek": "border-blue-400/50 text-blue-300 hover:border-blue-400",
    "visual-design": "border-cyan-400/50 text-cyan-300 hover:border-cyan-400",
    development: "border-purple-400/50 text-purple-300 hover:border-purple-400",
    "video-storytelling":
      "border-rose-400/50 text-rose-300 hover:border-rose-400",
    "strategie-concept":
      "border-amber-400/50 text-amber-300 hover:border-amber-400",
  };

  return (
    <div className="space-y-6 mb-8">
      {/* Category Filter */}
      <div>
        <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
          Filteren op Categorie
        </p>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? categoryConfig[cat]
                  : "border-white/20 text-gray-300 hover:border-white/40"
              }`}
            >
              {cat === "all" ? "Alles" : getCategoryLabel(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Year Filter */}
      <div>
        <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
          Filteren op Jaar
        </p>
        <div className="flex flex-wrap gap-3">
          {years.map((year) => (
            <button
              key={year}
              onClick={() =>
                setSelectedYear(selectedYear === year ? null : year)
              }
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                selectedYear === year
                  ? "border-pink-400 text-pink-300 bg-pink-500/10"
                  : "border-white/20 text-gray-300 hover:border-white/40"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <p className="text-sm text-gray-400">
          Toon{" "}
          <span className="text-pink-400 font-semibold">{filtered.length}</span>{" "}
          projecten
          {selectedCategory !== "all" &&
            ` in ${getCategoryLabel(selectedCategory)}`}
          {selectedYear && ` van ${selectedYear}`}
        </p>
        {(selectedCategory !== "all" || selectedYear) && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedYear(null);
            }}
            className="text-xs text-gray-400 hover:text-pink-400 transition-colors duration-300 underline"
          >
            Wis filters
          </button>
        )}
      </div>
    </div>
  );
};
