// Project Detail Page Template - ProjectDetail.jsx (NEW COMPONENT)
import { useParams, useNavigate } from "react-router-dom";
import { RevealOnScroll } from "./RevealOnScroll";
import projects from "../../data/provider/projects/projectsData.json";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // In a real app, you'd fetch this from API or have it in your data
  // For now, find the project from the array
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectId,
  );

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
          <p className="text-gray-400">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/#Projects")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            ← Back to Projects
          </button>
        </div>
      </section>
    );
  }

  const projectIndex = projects.indexOf(project);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-fixed">
      <RevealOnScroll>
        {/* Header */}
        <section className="py-12 sm:py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate("/#Projects")}
              className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold"
            >
              ← Back to Projects
            </button>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/40">
                  {project.year}
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-semibold border border-pink-500/40">
                  {project.period}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white">
                {project.title}
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={project.img.src}
                alt={project.img.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* The Challenge */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                The Challenge
              </h2>
              <div className="glass-card rounded-xl p-8 border border-white/10 space-y-4">
                <p className="text-lg text-gray-200 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-300">
                  This project aimed to explore interaction design principles
                  while creating a solution that directly addressed user needs.
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                The Solution
              </h2>
              <div className="glass-card rounded-xl p-8 border border-white/10 space-y-4">
                <p className="text-lg text-gray-200 leading-relaxed">
                  Through careful research and iterative design, I developed a
                  solution that combined:
                </p>
                <ul className="space-y-2 text-gray-300">
                  {project.tech.map((tech, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-pink-400 font-bold mt-1">→</span>
                      <span>{tech} implementation</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Process & Methodology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "01",
                    title: "Research",
                    desc: "Understanding user needs and pain points",
                  },
                  {
                    step: "02",
                    title: "Ideation",
                    desc: "Brainstorming and concept development",
                  },
                  {
                    step: "03",
                    title: "Design",
                    desc: "Wireframing and visual design",
                  },
                  {
                    step: "04",
                    title: "Development",
                    desc: "Building and optimization",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300"
                  >
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                      {item.step}
                    </p>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-purple-200 hover:border-pink-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Results & Learnings
              </h2>
              <div className="glass-card rounded-xl p-8 border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10 space-y-4">
                <p className="text-lg text-gray-200 leading-relaxed">
                  This project taught me valuable lessons about iterative
                  design, user testing, and the importance of bridging design
                  and development.
                </p>
                <p className="text-gray-300">
                  Key takeaway: The best solutions emerge when design thinking
                  meets technical implementation with genuine user
                  understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject && (
                <button
                  onClick={() =>
                    navigate(
                      `/project/${prevProject.title.toLowerCase().replace(/\s+/g, "-")}`,
                    )
                  }
                  className="group glass-card rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 text-left"
                >
                  <p className="text-sm text-gray-400 mb-2">
                    ← Previous Project
                  </p>
                  <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                    {prevProject.title}
                  </h3>
                </button>
              )}

              {nextProject && (
                <button
                  onClick={() =>
                    navigate(
                      `/project/${nextProject.title.toLowerCase().replace(/\s+/g, "-")}`,
                    )
                  }
                  className="group glass-card rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 text-right md:text-left"
                >
                  <p className="text-sm text-gray-400 mb-2">Next Project →</p>
                  <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                    {nextProject.title}
                  </h3>
                </button>
              )}
            </div>

            {/* Back to All Projects */}
            <div className="text-center mt-12">
              <a
                href="/#Projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-pink-400/50 hover:border-pink-400 text-pink-300 hover:text-pink-200 font-bold rounded-lg transition-all duration-300"
              >
                ← Back to All Projects
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
};
