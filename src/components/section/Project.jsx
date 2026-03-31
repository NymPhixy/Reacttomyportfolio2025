// Updated Projects Section Using New Components - Project.jsx (IMPROVED VERSION)
import { useState, useCallback } from "react";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectGrid } from "./ProjectGrid";
import { RevealOnScroll } from "./RevealOnScroll";
import projects from "../../data/provider/projects/projectsData.json";

export const Project = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = useCallback((filtered) => {
    setFilteredProjects(filtered);
  }, []);

  return (
    <section
      id="Projects"
      className="min-h-screen flex py-16 sm:py-24 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 w-full space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Mijn Projecten
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Een verzameling van mijn recente werk in UX design, front-end
              ontwikkeling en concept creatie.
            </p>
          </div>

          {/* Filter Component */}
          <ProjectFilter projects={projects} onFilter={handleFilter} />

          {/* Projects Grid */}
          <ProjectGrid
            projects={projects}
            filteredProjects={filteredProjects}
          />

          {/* No Results State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">
                Geen projecten komen overeen met je filters.
              </p>
              <button
                onClick={() => setFilteredProjects(projects)}
                className="text-pink-400 hover:text-pink-300 font-semibold underline"
              >
                Wis alle filters
              </button>
            </div>
          )}

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12 sm:pt-16 border-t border-white/10">
            {[
              { label: "Afgeronde Projecten", value: projects.length },
              { label: "Jaren Ervaring", value: "2+" },
              { label: "Design Tools", value: "5+" },
              { label: "Technologiën", value: "10+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
