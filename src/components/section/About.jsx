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
      className="min-h-screen flex py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-tight">
            {mainSection.title}
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-md shadow-xl">
            <p className="text-gray-300 mb-6">{mainSection.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all bg-white/10 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all bg-white/10 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-4">🎓 Education </h3>
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
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-4">💼 Work experiences </h3>
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
