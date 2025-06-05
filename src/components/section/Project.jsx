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
      className="min-h-screen flex py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-tight">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-purple-200/10 backdrop-blur-xl shadow-2xl hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="mb-4">
                  <img
                    src={project.img.src}
                    alt={project.img.alt}
                    className="w-full rounded-lg shadow"
                  />
                </div>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                    >
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
