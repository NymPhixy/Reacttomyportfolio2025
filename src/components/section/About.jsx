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
          <div className="text-center space-y-6 pt-4 sm:pt-8">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-normal leading-[1.2] pb-1 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Over Mij
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Leer meer over mijn achtergrond, vaardigheden en wat me drijft als
              designer en developer.
            </p>
          </div>

          {/* Personal Statement */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 hover:border-pink-400/30 transition-all duration-300 mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed font-light">
              Hoi! Ik ben Ruben, een UX Designer en Front-end Developer die
              gepassioneerd is over het creëren van digitale ervaringen die
              echte problemen oplossen. Ik combineer gebruikersonderzoek, visual
              design denken en moderne ontwikkelingspraktijken om producten te
              bouwen die
              <span className="text-pink-400 font-semibold">
                {" "}
                mooi, intuïtief en functioneel
              </span>{" "}
              zijn.
            </p>
            <p className="mt-6 text-gray-300">
              Mijn aanpak is collaboratief, ik geloof dat de beste oplossingen
              voortkomen uit diep begrip van gebruikers, iteratie op basis van
              feedback, en teams samenbrengen rond een gedeelde visie.
            </p>
          </div>

          {/* Background Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Mijn Reis
            </h3>

            <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-2" />
                  <div className="w-1 h-20 bg-gradient-to-b from-purple-500 to-pink-500 my-2" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">VMBO → MBO Reis</h4>
                  <p className="text-gray-300">
                    Begonnen met sportmanagement op MBO-niveau. Ontwikkelde
                    sterke discipline, teamwerk en leiderschapsvaardigheden door
                    Reddingszwemmer-certificering en coachingervaring.
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
                    Ontdekking van Design & Code
                  </h4>
                  <p className="text-gray-300">
                    Overgegaan naar HBO Communication & Multimedia Design.
                    Ontdekte passie voor het verbinden van design thinking met
                    technologie. Leerde dat ik floreer op het kruispunt van
                    creativiteit en logica.
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
                    Nu: Ontwerpen & Bouwen
                  </h4>
                  <p className="text-gray-300">
                    Momenteel in Jaar 2 van mijn studies, gericht op projecten
                    die UX onderzoek, visual design en front-end ontwikkeling
                    combineren. Werkzaam bij MKC MOTO terwijl ik mijn portfolio
                    uitbouw.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Kernkrachten
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🎯",
                  title: "Gebruiker Gericht Design",
                  desc: "Ik focus op begrijpen van gebruikersbehoeften en pijnpunten",
                },
                {
                  icon: "🔄",
                  title: "Iteratieve Probleemoplossing",
                  desc: "Ik omarmt iteratie en leer van feedback",
                },
                {
                  icon: "👥",
                  title: "Teamwerk",
                  desc: "Ik floreert in collaboratieve omgevingen",
                },
                {
                  icon: "🎨",
                  title: "Aandacht voor Detail",
                  desc: "Ik zorg om craftsmanship en pool",
                },
                {
                  icon: "💪",
                  title: "Discipline & Doorzettingsvermogen",
                  desc: "Ik zet me in voor continue groei",
                },
                {
                  icon: "⚡",
                  title: "Snelle Leerder",
                  desc: "Ik pas snel aan aan nieuwe tools en technologieën",
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
              Vaardigheden & Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold mb-6 text-purple-400">
                  Frontend Ontwikkeling
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
                  Backend & Hulpmiddelen
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
                <span className="text-2xl">🎓</span> Opleiding
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
                <span className="text-2xl">💼</span> Werkervaring
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
              Geïnteresseerd in samenwerken of heb je vragen?
            </p>
            <a
              href="#Contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
            >
              Neem Contact Op
              <span>→</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
