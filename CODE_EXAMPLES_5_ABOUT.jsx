// Enhanced About Section - About.jsx (IMPROVED VERSION)
import { RevealOnScroll } from "./RevealOnScroll";
import aboutData from "../../data/provider/about-me/aboutData.json";

export const About = () => {
  const { frontendSkills, backendSkills, education, work } = aboutData;

  return (
    <section
      id="about"
      className="min-h-screen flex py-16 sm:py-24 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know my background, skills, and what drives me as a
              designer and developer.
            </p>
          </div>

          {/* Personal Statement */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed font-light">
              Hi! I'm Ruben, a UX Designer and Front-end Developer passionate
              about creating digital experiences that solve real problems. I
              combine user research, visual design thinking, and modern
              development practices to build products that are
              <span className="text-pink-400 font-semibold">
                {" "}
                beautiful, intuitive, and functional
              </span>
              .
            </p>
            <p className="mt-6 text-gray-300">
              My approach is collaborative, I believe the best solutions come
              from understanding users deeply, iterating based on feedback, and
              bringing teams together around a shared vision.
            </p>
          </div>

          {/* Background Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              My Journey
            </h3>

            <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-2" />
                  <div className="w-1 h-20 bg-gradient-to-b from-purple-500 to-pink-500 my-2" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    VMBO → MBO Journey
                  </h4>
                  <p className="text-gray-300">
                    Started with sports management at MBO level. Developed
                    strong discipline, teamwork, and leadership skills through
                    Reddingszwemmer (rescue swimming) certifications and
                    coaching experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-1 h-20 bg-gradient-to-b from-pink-500 to-cyan-500 my-2" />
                  <div className="w-4 h-4 bg-cyan-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Discovery of Design & Code
                  </h4>
                  <p className="text-gray-300">
                    Transitioned to HBO Communication & Multimedia Design.
                    Discovered passion for bridging design thinking with
                    technology. Learned that I thrive at the intersection of
                    creativity and logic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="flex flex-col items-center">
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-purple-500 my-2" />
                  <div className="w-4 h-4 bg-purple-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Now: Designing & Building
                  </h4>
                  <p className="text-gray-300">
                    Currently in Year 2 of my studies, focused on projects
                    combining UX research, visual design, and front-end
                    development. Working at MKC MOTO while building my
                    portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Core Strengths
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🎯",
                  title: "User-Centered Design",
                  desc: "I prioritize understanding user needs and pain points",
                },
                {
                  icon: "🔄",
                  title: "Iterative Problem-Solving",
                  desc: "I embrace iteration and learn from feedback",
                },
                {
                  icon: "👥",
                  title: "Team Collaboration",
                  desc: "I thrive in collaborative environments",
                },
                {
                  icon: "🎨",
                  title: "Attention to Detail",
                  desc: "I care deeply about craft and polish",
                },
                {
                  icon: "💪",
                  title: "Discipline & Drive",
                  desc: "I'm committed to continuous growth",
                },
                {
                  icon: "⚡",
                  title: "Quick Learner",
                  desc: "I quickly adapt to new tools and technologies",
                },
              ].map((strength, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-5 sm:p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{strength.icon}</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {strength.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{strength.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Skills & Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold mb-6 text-purple-400">
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-100 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold mb-6 text-pink-400">
                  Backend & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm font-semibold bg-pink-500/20 border border-pink-500/40 text-pink-100 hover:bg-pink-500/30 hover:border-pink-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-2xl">🎓</span> Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-cyan-500/30 pl-4 pb-4"
                  >
                    <p className="font-bold text-white text-sm sm:text-base">
                      {edu.degree}
                    </p>
                    {edu.extra && (
                      <p className="text-gray-400 text-sm">{edu.extra}</p>
                    )}
                    <p className="inline-block mt-2 px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-semibold rounded-full">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-2xl">💼</span> Experience
              </h4>
              <div className="space-y-4">
                {work.map((job, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-amber-500/30 pl-4 pb-4"
                  >
                    <p className="font-bold text-white text-sm sm:text-base">
                      {job.company}
                    </p>
                    <p className="text-gray-400 text-sm">{job.role}</p>
                    <p className="inline-block mt-2 px-3 py-1 bg-amber-500/10 text-amber-300 text-xs font-semibold rounded-full">
                      {job.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-gray-400 mb-6">
              Interested in working together or have questions?
            </p>
            <a
              href="#Contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
            >
              Get in Touch
              <span>→</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
