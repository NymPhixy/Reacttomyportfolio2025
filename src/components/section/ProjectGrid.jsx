// Enhanced Project Grid Component - ProjectGrid.jsx (NEW COMPONENT)
import { useEffect, useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import dioFinalImage from "../../assets/Projecten/Leerjaar 1/p1/diofinal.jpg";
import pofMainImage from "../../assets/Projecten/Leerjaar 1/p1/pofmain.jpg";
import usoMainImage from "../../assets/Projecten/Leerjaar 1/p2/usomain.jpg";
import cvaMainImage from "../../assets/Projecten/Leerjaar 1/p2/cvafotomain.jpg";
import pstMainImage from "../../assets/Projecten/Leerjaar 1/p2/pstmain.jpg";
import inoMainImage from "../../assets/Projecten/Leerjaar 1/P3/inomain.png";
import piaMainImage from "../../assets/Projecten/Leerjaar 1/P3/piamain.jpg";
import iniMainImage from "../../assets/Projecten/Leerjaar 1/p4/inimain.jpg";
import pedMainImage from "../../assets/Projecten/Leerjaar 1/p4/pedmain.jpg";
import oweMainImage from "../../assets/Projecten/Leerjaar 1/p4/owemain.jpg";
import {
  getCategoryLabel,
  getProjectCategoryKeys,
} from "../../utils/projectCategories";

export const ProjectGrid = ({
  projects,
  filteredProjects,
  onOpenCaseStudy,
}) => {
  const [displayedProjects, setDisplayedProjects] = useState(filteredProjects);

  useEffect(() => {
    setDisplayedProjects(filteredProjects);
  }, [filteredProjects]);

  const categoryColors = {
    "ux-onderzoek": "text-blue-400 bg-blue-500/10 border-blue-500/30",
    "visual-design": "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    development: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    "video-storytelling": "text-rose-400 bg-rose-500/10 border-rose-500/30",
    "strategie-concept": "text-amber-400 bg-amber-500/10 border-amber-500/30",
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
        const categories = getProjectCategoryKeys(project.tech).slice(0, 3);
        const previewImage = project.title.includes("DIO")
          ? dioFinalImage
          : project.title.includes("POF")
            ? pofMainImage
            : project.title.includes("USO")
              ? usoMainImage
              : project.title.includes("CVA")
                ? cvaMainImage
                : project.title.includes("MKC MOTO") ||
                    project.title.includes("Interactive Gear Selection") ||
                    project.title.includes("INO - Interactief Ontwerp")
                  ? inoMainImage
                  : project.title.includes("See What You") ||
                      project.title.includes("Hear What You") ||
                      project.title.includes("INI - Interactieve Interface")
                    ? iniMainImage
                    : project.title.includes("PED") ||
                        project.title.includes("Hanze Glasses")
                      ? pedMainImage
                      : project.title.toLowerCase().includes("owe")
                        ? oweMainImage
                        : project.title.toLowerCase().includes("pia")
                          ? piaMainImage
                          : project.title.toLowerCase().includes("pst") ||
                              project.title.toLowerCase().includes("saganet")
                            ? pstMainImage
                            : project.img.src;

        return (
          <RevealOnScroll key={`project-${index}`} delay={index * 50}>
            <div className="group h-full">
              <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all duration-500 h-full flex flex-col cursor-pointer hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)]">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <img
                    src={previewImage}
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
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryColors[cat] || categoryColors["visual-design"]}`}
                      >
                        {getCategoryLabel(cat)}
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
                  <button
                    type="button"
                    onClick={() => {
                      if (project.action?.type === "video") {
                        window.open(project.action?.href, "_blank");
                      } else {
                        onOpenCaseStudy?.(project);
                      }
                    }}
                    className="w-full mt-4 py-2.5 px-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm"
                  >
                    {project.action?.type === "video"
                      ? "Video bekijken"
                      : "Bekijk casestudy"}
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
