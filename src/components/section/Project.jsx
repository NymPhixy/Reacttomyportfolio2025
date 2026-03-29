import { RevealOnScroll } from "./RevealOnScroll";
import projects from "../../data/provider/projects/projectsData.json"; // Importing project data from JSON file

export const Project = () => {
  // Helper function to handle portfolio download
  const handleDownloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = "/assets/design_portfolio_ino_rubenjanssen_469974.pdf";
    link.download = "Ruben_Janssen_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="Projects"
      className="min-h-screen flex py-10 sm:py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-400 to-pink-400 bg-clip-text leading-tight">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card p-6 rounded-2xl border border-white/20 hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3">
                  {project.title}
                </h3>
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
                    <span key={tech} className="skill-badge text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  {project.action.type === "link" ? (
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
      </RevealOnScroll>
    </section>
  );
};
