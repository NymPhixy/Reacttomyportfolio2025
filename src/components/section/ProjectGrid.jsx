// Enhanced Project Grid Component - ProjectGrid.jsx (NEW COMPONENT)
import { useEffect, useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const ProjectGrid = ({ projects, filteredProjects }) => {
  const [displayedProjects, setDisplayedProjects] = useState(filteredProjects);

  useEffect(() => {
    setDisplayedProjects(filteredProjects);
  }, [filteredProjects]);

  const categoryColors = {
    UX: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    Frontend: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    Concept: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    Design: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  };

  const getProjectCategories = (tech) => {
    if (!tech) return ["Design"];
    const categories = [];
    if (tech.some((t) => ["Figma", "UX/UI"].includes(t))) categories.push("UX");
    if (tech.some((t) => ["React", "Frontend", "Web"].includes(t)))
      categories.push("Frontend");
    if (tech.some((t) => ["Concept", "Design"].includes(t)))
      categories.push("Concept");
    return categories.length > 0 ? categories : ["Design"];
  };

  if (displayedProjects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-400 text-lg">
          Geen projecten gevonden. Probeer je filters aan te passen.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {displayedProjects.map((project, index) => {
        const categories = getProjectCategories(project.tech);

        return (
          <RevealOnScroll key={`project-${index}`} delay={index * 50}>
            <div className="group h-full">
              <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all duration-500 h-full flex flex-col cursor-pointer hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)]">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <img
                    src={project.img.src}
                    alt={project.img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay with Year Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur text-xs font-semibold text-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.period}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <span
                        key={cat}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryColors[cat] || categoryColors.Design}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded border border-white/10 hover:border-gray-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-4 py-2.5 px-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm">
                    Bekijk Project
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        );
      })}
    </div>
  );
};
