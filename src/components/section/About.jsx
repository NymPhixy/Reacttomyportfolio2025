import { RevealOnScroll } from "./RevealOnScroll";
import aboutData from "../../data/provider/about-me/aboutData.json"; // Importing about data from JSON file

export const About = () => {
  const { frontendSkills, backendSkills, education, work } = aboutData;
  const mainSection = Array.isArray(aboutData.main)
    ? aboutData.main[0]
    : { title: "", description: "" };

  return (
    <section
      id="about"
      className="min-h-screen flex py-10 sm:py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-400 to-pink-400 bg-clip-text leading-tight">
            {mainSection.title}
          </h2>
          <div className="glass-card rounded-xl p-6 sm:p-8 hover:-translate-y-1 transition-all shadow-xl">
            <p className="text-gray-200 mb-8 leading-relaxed text-sm sm:text-base">
              {mainSection.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="glass-card rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🎓 Opleiding </h3>
                <ul>
                  {education.map((edu, idx) => (
                    <li key={idx}>
                      <strong>
                        {edu.degree}
                        <p className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]">
                          {edu.period}
                        </p>
                      </strong>
                      {edu.extra && <p>{edu.extra}</p>}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼 Werkervaring </h3>
                <ul>
                  {work.map((job, idx) => (
                    <li key={idx}>
                      <strong>{job.company}</strong>
                      <p>{job.role}</p>
                      <p className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]">
                        {job.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
