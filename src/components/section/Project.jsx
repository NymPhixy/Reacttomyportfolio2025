import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import projects from "../../data/provider/projects/projectsData.json"; // Importing project data from JSON file

export const Project = () => {
  const carouselRefs = useRef({});

  // Helper function to handle portfolio download
  const handleDownloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = "/assets/design_portfolio_ino_rubenjanssen_469974.pdf";
    link.download = "Ruben_Janssen_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper function to handle document downloads
  const handleDownloadDocument = (href, filename) => {
    const link = document.createElement("a");
    link.href = encodeURI(href);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projectsByYear = projects.reduce((acc, project) => {
    const yearKey = project.year || "Overige projecten";
    if (!acc[yearKey]) acc[yearKey] = [];
    acc[yearKey].push(project);
    return acc;
  }, {});

  const yearOrder = [
    "Leerjaar 1",
    "Leerjaar 2",
    "Leerjaar 3",
    "Leerjaar 4",
    "Overige projecten",
  ];
  const orderedYears = [
    ...yearOrder.filter((year) => projectsByYear[year]),
    ...Object.keys(projectsByYear).filter((year) => !yearOrder.includes(year)),
  ];

  const [activeYear, setActiveYear] = useState(orderedYears[0] || null);

  useEffect(() => {
    if (!activeYear && orderedYears.length > 0) {
      setActiveYear(orderedYears[0]);
      return;
    }

    if (activeYear && !orderedYears.includes(activeYear)) {
      setActiveYear(orderedYears[0] || null);
    }
  }, [activeYear, orderedYears]);

  const visibleYears = activeYear ? [activeYear] : orderedYears;

  const scrollCarousel = (year, direction) => {
    const carousel = carouselRefs.current[year];
    if (!carousel) return;
    const scrollAmount = Math.max(carousel.clientWidth * 0.85, 280);
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="Projects"
      className="min-h-screen flex py-10 sm:py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-400 to-pink-400 bg-clip-text leading-tight">
            Projecten
          </h2>

          <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
            {orderedYears.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full border text-sm sm:text-base whitespace-nowrap transition-all ${
                  activeYear === year
                    ? "border-pink-400 text-pink-300 bg-pink-500/10"
                    : "border-white/30 text-white hover:border-pink-300 hover:text-pink-200"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {visibleYears.map((year) => (
              <div key={year}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {year}
                  </h3>
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => scrollCarousel(year, -1)}
                      className="px-3 py-2 rounded-lg border border-white/30 text-white hover:border-pink-400 hover:text-pink-300 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCarousel(year, 1)}
                      className="px-3 py-2 rounded-lg border border-white/30 text-white hover:border-pink-400 hover:text-pink-300 transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div
                  ref={(el) => {
                    carouselRefs.current[year] = el;
                  }}
                  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
                >
                  {projectsByYear[year].map((project, index) => (
                    <div
                      key={`${year}-${project.title}-${index}`}
                      className="glass-card p-6 rounded-2xl border border-white/20 hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300 min-w-[85vw] sm:min-w-[380px] lg:min-w-[420px] max-w-[420px] snap-start"
                    >
                      <h4 className="text-lg sm:text-xl font-bold mb-3">
                        {project.title}
                      </h4>
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={project.img.src}
                          alt={project.img.alt}
                          width="400"
                          height="300"
                          loading="lazy"
                          className="w-full h-48 sm:h-56 object-cover shadow-md hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="skill-badge text-xs sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        {project.action.type === "download" ? (
                          <button
                            onClick={() =>
                              handleDownloadDocument(
                                project.action.href,
                                project.action.filename,
                              )
                            }
                            className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                          >
                            {project.action.label}
                          </button>
                        ) : project.action.type === "link" ? (
                          <a
                            href={project.action.href}
                            className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                            target={project.action.target}
                            rel={project.action.rel}
                          >
                            {project.action.label}
                          </a>
                        ) : (
                          <button
                            onClick={handleDownloadPortfolio}
                            className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                          >
                            {project.action.label}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
