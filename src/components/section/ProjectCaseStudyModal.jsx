import { useEffect, useState } from "react";
import {
  FiAward,
  FiBookOpen,
  FiBox,
  FiCheckCircle,
  FiClock,
  FiGrid,
  FiLayers,
  FiLayout,
  FiTarget,
  FiUser,
  FiX,
} from "react-icons/fi";
import dioFinalImage from "../../assets/Projecten/Leerjaar 1/p1/diofinal.jpg";
import dioLofiImage from "../../assets/Projecten/Leerjaar 1/p1/lofidio.jpg";
import dioMidfiImage from "../../assets/Projecten/Leerjaar 1/p1/midfidio.jpg";
import dioHighfiImage from "../../assets/Projecten/Leerjaar 1/p1/HIGHFIdio.jpg";

const disciplineItems = [
  {
    icon: FiAward,
    title: "Branding",
    text: "Visual identity en monogram als herkenbare basis van het merk.",
  },
  {
    icon: FiLayout,
    title: "UX Design",
    text: "Structuur en duidelijkheid in content, navigatie en informatievolgorde.",
  },
  {
    icon: FiGrid,
    title: "Visual Design",
    text: "Compositie, kleurgebruik en hiërarchie voor een krachtige visuele taal.",
  },
  {
    icon: FiUser,
    title: "Storytelling",
    text: "Persoonlijk verhaal van motorsport en identiteit vertaald naar vorm.",
  },
  {
    icon: FiLayers,
    title: "Prototyping",
    text: "Van LoFi naar MidFi en HighFi om stap voor stap te verfijnen.",
  },
];

const processPhases = [
  {
    phase: "LoFi",
    points: [
      "Handschetsen om ideeën snel te verkennen.",
      "Focus op concept boven detail.",
      "Richting kiezen op basis van vorm en betekenis.",
    ],
  },
  {
    phase: "MidFi",
    points: [
      "Digitale verfijning van vormen en compositie.",
      "Kleurtesten met RGB combinaties.",
      "Eerste consistente visuele richting uitgewerkt.",
    ],
  },
  {
    phase: "HighFi",
    points: [
      "Definitieve visual uitgewerkt op detailniveau.",
      "Fysiek prototype uitgevoerd in laser-cut acrylaat.",
      "Toepassing getest in real-world context.",
    ],
  },
];

const detailTags = ["Branding", "UX Design", "Visual Design", "Prototyping"];

const dioPhaseVisuals = {
  LoFi: dioLofiImage,
  MidFi: dioMidfiImage,
  HighFi: dioHighfiImage,
};

const isDioProject = (project) => {
  if (!project?.title) return false;
  return project.title.toLowerCase().includes("dio");
};

export const ProjectCaseStudyModal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!project) return;
    setIsVisible(true);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onEsc = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
        window.setTimeout(onClose, 180);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  const closeModal = () => {
    setIsVisible(false);
    window.setTimeout(onClose, 180);
  };

  const showDioLayout = isDioProject(project);

  return (
    <div
      className={`fixed inset-0 z-[120] transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Project case study"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      />

      <div className="relative h-full w-full p-4 sm:p-6 md:p-10 flex items-center justify-center">
        <div
          className={`w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${isVisible ? "translate-y-0 scale-100" : "translate-y-3 scale-[0.98]"}`}
        >
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-pink-300 mb-2">
                Case Study
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {showDioLayout ? "Driven by Design" : project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="p-2 rounded-lg border border-white/20 text-gray-200 hover:text-white hover:border-pink-400/50 transition-colors"
              aria-label="Close case study"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {!showDioLayout && (
            <div className="space-y-6">
              <p className="text-gray-300">
                Deze popup is voorbereid voor uitgebreide case studies. Voeg per
                project extra inhoud toe om dit detailniveau ook daar te tonen.
              </p>
              <img
                src={project.img?.src}
                alt={project.img?.alt || project.title}
                className="w-full h-64 object-cover rounded-xl border border-white/10"
              />
            </div>
          )}

          {showDioLayout && (
            <div className="space-y-8 sm:space-y-10">
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-5">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    A personal visual identity project combining branding,
                    storytelling and digital design.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {detailTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold border border-purple-400/40 bg-purple-500/15 text-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={dioFinalImage}
                    alt="DIO final calling card"
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                </div>
              </section>

              <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <FiTarget className="text-pink-400" /> Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Doel van dit project was het creëren van een persoonlijke
                    visuele identiteit die mijn motorsportpassie koppelt aan
                    digitale designvaardigheden.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <FiBox className="text-cyan-400" /> Opgeleverd
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>- Monogram</li>
                    <li>- Avatar</li>
                    <li>- Cover design</li>
                    <li>- HTML/CSS website</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBookOpen className="text-purple-300" /> Design Approach
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {disciplineItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="glass-card rounded-xl p-4 border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="text-pink-300" />
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-300">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">Process</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {processPhases.map((phase) => (
                    <article
                      key={phase.phase}
                      className="glass-card rounded-xl p-4 border border-white/10"
                    >
                      <h4 className="text-lg font-bold text-pink-300 mb-3">
                        {phase.phase}
                      </h4>
                      <div className="rounded-lg overflow-hidden border border-white/10 mb-3">
                        <img
                          src={dioPhaseVisuals[phase.phase] || project.img?.src}
                          alt={`${phase.phase} visual`}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {phase.points.map((point) => (
                          <li key={point}>- {point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Key Design Choices
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                  <p>
                    - RGB kleuren voor een digitale en energieke uitstraling.
                  </p>
                  <p>
                    - Gestalt principes: balans, figure-ground en symmetrie.
                  </p>
                  <p>- Gelaagdheid toegepast voor diepte en 3D-effect.</p>
                  <p>- Heldere visuele hiërarchie in vorm, kleur en schaal.</p>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-300" /> Result
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      - Sterke visuele identiteit met herkenbaar karakter.
                    </li>
                    <li>
                      - Combinatie van digitale en fysieke ontwerpuitwerking.
                    </li>
                    <li>- Duidelijke koppeling met persoonlijk merkverhaal.</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <FiClock className="text-amber-300" /> Reflection
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      - Te laat gestart, planning wordt volgend project
                      strakker.
                    </li>
                    <li>- Weinig feedbackmomenten, dit wordt een focuspunt.</li>
                    <li>
                      - Zichtbare groei in design thinking en besluitvorming.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Future Improvements
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                  <li>- Meer iteraties in vroege en middenfase.</li>
                  <li>- Meer feedback loops met peers en begeleiders.</li>
                  <li>- Betere planning met vaste reviewmomenten.</li>
                  <li>
                    - Sterkere integratie tussen visuele identiteit en
                    webuitwerking.
                  </li>
                </ul>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
