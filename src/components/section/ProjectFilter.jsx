// Project Filter Component - ProjectFilter.jsx (NEW COMPONENT)
import { useState, useMemo } from "react";

export const ProjectFilter = ({ projects, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState(null);

  // Extract unique categories and years
  const categories = useMemo(() => {
    const cats = new Set(["All"]);
    projects.forEach((p) => {
      if (Array.isArray(p.tech)) {
        // Map tech to categories
        if (p.tech.some((t) => ["Figma", "UX/UI", "Design"].includes(t)))
          cats.add("UX");
        if (p.tech.some((t) => ["React", "Frontend", "Web"].includes(t)))
          cats.add("Frontend");
        if (p.tech.some((t) => ["Concept", "Strategy"].includes(t)))
          cats.add("Concept");
      }
    });
    return Array.from(cats);
  }, [projects]);

  const years = useMemo(() => {
    return [...new Set(projects.map((p) => p.year))].sort().reverse();
  }, [projects]);

  // Filter projects
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      // Category filter
      if (selectedCategory !== "All") {
        const hasCategory =
          Array.isArray(p.tech) &&
          ((selectedCategory === "UX" &&
            p.tech.some((t) => ["Figma", "UX/UI"].includes(t))) ||
            (selectedCategory === "Frontend" &&
              p.tech.some((t) => ["React", "Web"].includes(t))) ||
            (selectedCategory === "Concept" &&
              p.tech.some((t) => ["Design", "Concept"].includes(t))));
        if (!hasCategory) return false;
      }

      // Year filter
      if (selectedYear && p.year !== selectedYear) return false;

      return true;
    });
  }, [projects, selectedCategory, selectedYear]);

  // Trigger parent callback
  useMemo(() => {
    onFilter(filtered);
  }, [filtered, onFilter]);

  const categoryConfig = {
    All: "border-white/30 text-white hover:border-white/50",
    UX: "border-blue-400/50 text-blue-300 hover:border-blue-400",
    Frontend: "border-purple-400/50 text-purple-300 hover:border-purple-400",
    Concept: "border-pink-400/50 text-pink-300 hover:border-pink-400",
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
                setSelectedYear(null); // Reset year filter when changing category
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? categoryConfig[cat]
                  : "border-white/20 text-gray-300 hover:border-white/40"
              }`}
            >
              {cat}
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
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {selectedYear && ` van ${selectedYear}`}
        </p>
        {(selectedCategory !== "All" || selectedYear) && (
          <button
            onClick={() => {
              setSelectedCategory("All");
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
