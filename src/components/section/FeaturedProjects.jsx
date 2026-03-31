// Featured Projects Section - FeaturedProjects.jsx (NEW COMPONENT)
import { RevealOnScroll } from "./RevealOnScroll";
import { useState } from "react";
import projects from "../../data/provider/projects/projectsData.json";
import dioFinalImage from "../../assets/Projecten/Leerjaar 1/p1/diofinal.jpg";

// Filter to get only featured projects (you can mark them in JSON)
// For now, let's get the best projects from each category
const getFeaturedProjects = () => {
  const featured = [
    projects.find((p) => p.title === "DIO - Driven by Design"),
    projects.find((p) => p.title === "USO - Usability Ontwerp"), // Strong UX project
    projects.find((p) => p.title === "MWE - Mediawijsheid"), // Good frontend showcase
    projects.find((p) => p.title === "OXR - Experience Design in VR/AR"), // Innovative concept
  ].filter(Boolean); // Remove undefined

  return featured.length >= 3 ? featured.slice(0, 3) : projects.slice(0, 3);
};

export const FeaturedProjects = ({ onOpenCaseStudy }) => {
  const featured = getFeaturedProjects();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categoryColors = {
    UX: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    Frontend: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    Concept: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    Design: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    Multimedia: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  };

  const getProjectCategories = (tech) => {
    if (!tech) return ["Design"];
    const categories = [];
    if (tech.some((t) => ["Figma", "UX/UI", "Design"].includes(t)))
      categories.push("UX");
    if (tech.some((t) => ["React", "Frontend", "Web"].includes(t)))
      categories.push("Frontend");
    if (tech.some((t) => ["Concept", "Strategy", "Research"].includes(t)))
      categories.push("Concept");
    return categories.length > 0 ? categories : ["Design"];
  };

  return (
    <section className="min-h-screen flex py-16 sm:py-24 justify-center items-center">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 w-full space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Uitgelichte Werken
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handgeplukte projecten die mijn expertise tonen in concept
              ontwikkeling, UX design en front-end ontwikkeling.
            </p>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, index) => {
              const categories = getProjectCategories(project.tech);
              const previewImage = project.title.includes("DIO")
                ? dioFinalImage
                : project.img.src;
              return (
                <div
                  key={`featured-${index}`}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all duration-500 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                      <img
                        src={previewImage}
                        alt={project.img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col gap-4">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <span
                            key={cat}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[cat] || categoryColors.Design}`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* CTA Button */}
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy?.(project)}
                        className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        Bekijk Case Study
                        <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-2xl pointer-events-none transition-all duration-500 blur-xl" />
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="#Projects"
              className="inline-flex items-center gap-3 px-6 py-3 text-purple-400 hover:text-pink-400 font-semibold border-b-2 border-purple-400/50 hover:border-pink-400 transition-all duration-300"
            >
              Bekijk Alle Projecten
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
