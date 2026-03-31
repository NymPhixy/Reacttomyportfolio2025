import { useEffect, useState } from "react";
import {
  FiAward,
  FiBookOpen,
  FiBox,
  FiCheckCircle,
  FiClipboard,
  FiCompass,
  FiClock,
  FiDownload,
  FiGrid,
  FiLayers,
  FiLayout,
  FiMessageSquare,
  FiSearch,
  FiTarget,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";
import dioFinalImage from "../../assets/Projecten/Leerjaar 1/p1/diofinal.jpg";
import dioLofiImage from "../../assets/Projecten/Leerjaar 1/p1/lofidio.jpg";
import dioMidfiImage from "../../assets/Projecten/Leerjaar 1/p1/midfidio.jpg";
import dioHighfiImage from "../../assets/Projecten/Leerjaar 1/p1/HIGHFIdio.jpg";
import dioDesignDocument from "../../assets/Projecten/Leerjaar 1/p1/Showcase_portfolio-469974-Ruben-Janssen.pdf";
import pofDesignDocument from "../../assets/Projecten/Leerjaar 1/p1/Ontwikkelportfolio Ruben_Janssen_469974 11_10_2024.docx";
import pofMainImage from "../../assets/Projecten/Leerjaar 1/p1/pofmain.jpg";
import pofResearchImage from "../../assets/Projecten/Leerjaar 1/p1/POF foto.jpg";
import pofIdeationImage from "../../assets/Projecten/Leerjaar 1/p1/POF foto2.jpg";
import pofPrototypeImage from "../../assets/Projecten/Leerjaar 1/p1/poffoto3.jpg";
import usoMainImage from "../../assets/Projecten/Leerjaar 1/p2/usomain.jpg";
import usoFoto1Image from "../../assets/Projecten/Leerjaar 1/p2/usofoto1.jpg";
import usoFoto3Image from "../../assets/Projecten/Leerjaar 1/p2/USOfoto3.jpg";
import cvaMainImage from "../../assets/Projecten/Leerjaar 1/p2/cvafotomain.jpg";
import cvafoto2Image from "../../assets/Projecten/Leerjaar 1/p2/cva2.png";
import cvafoto3Image from "../../assets/Projecten/Leerjaar 1/p2/cva3.jpg";
import pstMainImage from "../../assets/Projecten/Leerjaar 1/p2/pstmain.jpg";
import pstFoto2 from "../../assets/Projecten/Leerjaar 1/p2/PST2.jpg";
import pstFoto3 from "../../assets/Projecten/Leerjaar 1/p2/PST3.jpg";
import pstFoto4 from "../../assets/Projecten/Leerjaar 1/p2/pst4.png";
import pstDesignDocument from "../../assets/Projecten/Leerjaar 1/p2/PST_design_document_Ruben_Janssen_469974.pdf";

const disciplineItems = [
  {
    icon: FiAward,
    title: "Branding",
    text: "Visual identity en monogram als herkenbare basis van het merk.",
  },
  {
    icon: FiBookOpen,
    title: "Concepting",
    text: "Ideeën structureren en vertalen naar een duidelijke conceptuele richting.",
  },
  {
    icon: FiMessageSquare,
    title: "Ideation",
    text: "Breed verkennen van oplossingsrichtingen via schetsen, variaties en iteraties.",
  },
  {
    icon: FiGrid,
    title: "Design",
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

const detailTags = [
  "Branding",
  "Concepting",
  "Ideation",
  "Design",
  "Prototyping",
];

const dioPhaseVisuals = {
  LoFi: dioLofiImage,
  MidFi: dioMidfiImage,
  HighFi: dioHighfiImage,
};

const isDioProject = (project) => {
  if (!project?.title) return false;
  return project.title.toLowerCase().includes("dio");
};

const isPofProject = (project) => {
  if (!project?.title) return false;
  const title = project.title.toLowerCase();
  return title.includes("pof") || title.includes("fitbet");
};

const isUsoProject = (project) => {
  if (!project?.title) return false;
  return project.title.toLowerCase().includes("uso");
};

const isCvaProject = (project) => {
  if (!project?.title) return false;
  return project.title.toLowerCase().includes("cva");
};

const isPstProject = (project) => {
  if (!project?.title) return false;
  return project.title.toLowerCase().includes("pst") || project.title.toLowerCase().includes("saganet");
};

const pofTags = [
  "UX Design",
  "Onderzoek",
  "Conceptontwikkeling",
  "Teamwerk",
  "Design Thinking",
];

const pofApproach = [
  {
    icon: FiLayout,
    title: "UX Design",
    text: "Inzicht krijgen in gebruikersbehoeften, motivaties en dagelijkse barrières.",
  },
  {
    icon: FiSearch,
    title: "Onderzoek",
    text: "Interviews en deskresearch om patronen en gedrag te onderbouwen.",
  },
  {
    icon: FiCompass,
    title: "Design Thinking",
    text: "Begrijpen, Observeren, Definiëren, Ideevorming, Prototypen en Testen.",
  },
  {
    icon: FiBookOpen,
    title: "Conceptontwikkeling",
    text: "Inzichten vertalen naar realistische en aansprekende conceptrichtingen.",
  },
  {
    icon: FiUsers,
    title: "Teamwerk",
    text: "Samenwerkingsproces met gedeelde verantwoordelijkheden en heldere rollen.",
  },
];

const pofTimeline = [
  "Begrijpen",
  "Observeren",
  "Definiëren",
  "Ideevorming",
  "Prototypen",
  "Testen",
];

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
  const showPofLayout = isPofProject(project);
  const showUsoLayout = isUsoProject(project);
  const showCvaLayout = isCvaProject(project);
  const showPstLayout = isPstProject(project);

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
                {showDioLayout
                  ? "Driven by Design"
                  : showUsoLayout
                    ? "USO - Usability Ontwerp"
                    : showPstLayout
                      ? "PST – SAGANET Storytelling Campaign"
                      : project.title}
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

          {!showDioLayout &&
            !showPofLayout &&
            !showUsoLayout &&
            !showCvaLayout &&
            !showPstLayout && (
              <div className="space-y-6">
                <p className="text-gray-300">
                  Deze popup is voorbereid voor uitgebreide case studies. Voeg
                  per project extra inhoud toe om dit detailniveau ook daar te
                  tonen.
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

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Design Document
                </h3>
                <p className="text-gray-300 mb-4">
                  Download het volledige showcase designdocument van dit
                  project.
                </p>
                <a
                  href={dioDesignDocument}
                  download="Showcase_portfolio-469974-Ruben-Janssen.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <FiDownload />
                  Download Design Document
                </a>
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

          {showPofLayout && (
            <div className="space-y-8 sm:space-y-10">
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    FitBet - Improving Student Health
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Een Design Thinking project gericht op fysieke en mentale
                    gezondheid van studenten.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {pofTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold border border-pink-400/40 bg-pink-500/15 text-pink-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={pofMainImage}
                    alt={project.img?.alt || "FitBet concept visual"}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                </div>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Projectoverzicht
                </h3>
                <p className="text-gray-300">
                  Uitdaging: "Hoe kunnen we de fysieke en mentale gezondheid van
                  studenten verbeteren?"
                </p>
                <p className="text-gray-300">
                  Opdrachtgever: Hanze University of Applied Sciences
                </p>
                <p className="text-gray-300">
                  Context: Groepsproject met Design Thinking-cycli. De focus lag
                  niet op een eindproduct, maar op onderzoek,
                  conceptontwikkeling, samenwerking en procesdocumentatie.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBookOpen className="text-purple-300" /> Designaanpak
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {pofApproach.map((item) => {
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

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiSearch className="text-cyan-300" /> Onderzoeksfase
                  (Begrijpen en Observeren)
                </h3>
                <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
                  <img
                    src={pofResearchImage}
                    alt="POF onderzoeksfase"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <p className="text-gray-300 mb-3">
                  We interviewden studenten en combineerden bevindingen met
                  deskresearch. Onderwerpen waren voeding, beweging, slaap en
                  sociale interactie.
                </p>
                <p className="text-gray-200 font-semibold">
                  Belangrijk inzicht: Studenten weten wat gezond is, maar vinden
                  het lastig om dit toe te passen in het dagelijks leven.
                </p>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Definieerfase (Point of View)
                </h3>
                <p className="text-gray-300 mb-3">
                  Er zijn persona's opgesteld die verschillende leefstijlen en
                  gezondheidspatronen van studenten representeren.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>- Drukke student</li>
                  <li>- Fastfood-georiënteerde student</li>
                  <li>- Sociaal geïsoleerde student</li>
                </ul>
                <p className="text-gray-300 mt-3">
                  Deze persona's hielpen ons in kaart brengen hoe verschillende
                  leefstijlen fysieke en mentale gezondheid beïnvloeden.
                </p>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">
                  HMW-vragen
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    - Hoe kunnen we studenten bewuster maken van hun gezondheid?
                  </li>
                  <li>- Hoe maken we gezond gedrag aantrekkelijker?</li>
                  <li>- Hoe stimuleren we meer beweging?</li>
                </ul>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Ideefase</h3>
                <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
                  <img
                    src={pofIdeationImage}
                    alt="POF ideefase"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <p className="text-gray-300 mb-3">
                  Gebruikte methoden: Crazy 8, brainstormen en mindmappen.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>- Game-based oplossingen</li>
                  <li>- Infographics</li>
                  <li>- Interactieve ervaringen</li>
                </ul>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Eindconcept - FitBet
                </h3>
                <p className="text-gray-300">
                  FitBet is een sociaal en fysiek spel voor studenten dat
                  challenges, beweging en sociale interactie combineert.
                </p>
                <p className="text-gray-300 mt-3">Spelmechanieken:</p>
                <ul className="space-y-2 text-gray-300 mt-2">
                  <li>- "Wedden dat ik het kan" challenges</li>
                  <li>- Cornhole-style gameplay</li>
                  <li>- Progressiesysteem met levels 1 t/m 6</li>
                </ul>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Prototyping
                </h3>
                <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
                  <img
                    src={pofPrototypeImage}
                    alt="POF prototyping"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <p className="text-gray-300">
                  Mijn rol lag op conceptvisualisatie en ondersteuning bij het
                  maken van spelelementen. Challenge-kaarten zijn ontwikkeld
                  rond voeding, beweging en sociale interactie.
                </p>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Testing</h3>
                <p className="text-gray-300 mb-3">
                  Het concept is getest met echte studenten.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>- Competitief element werkte positief en motiverend</li>
                  <li>- Sociaal element maakte het spel aantrekkelijk</li>
                  <li>
                    - Duidelijke regels maakten het spel makkelijk speelbaar
                  </li>
                </ul>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiUsers className="text-emerald-300" /> Teamwerk
                </h3>
                <p className="text-gray-300">
                  Rollen in het team waren verdeeld over onderzoek, ideevorming,
                  prototyping en testen. We werkten samen via Discord, WhatsApp
                  en Google Docs.
                </p>
                <div className="mt-4 p-4 rounded-lg border border-emerald-400/30 bg-emerald-500/10">
                  <p className="text-emerald-200 font-semibold mb-1">
                    Mijn rol in communicatie en structuur
                  </p>
                  <p className="text-gray-200 text-sm">
                    Ik coördineerde actief de communicatie, maakte
                    vervolgstappen helder en hielp bij het structureren van
                    teamkeuzes. Op cruciale momenten nam ik initiatief om tempo
                    en focus in de groep te houden.
                  </p>
                </div>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiCompass className="text-amber-300" /> Design Thinking
                  Tijdlijn
                </h3>
                <div className="space-y-3 border-l-2 border-purple-400/40 pl-4">
                  {pofTimeline.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/40 text-xs font-bold text-purple-200">
                        {index + 1}
                      </span>
                      <p className="text-gray-200">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Reflectie
                  </h3>
                  <p className="text-gray-200 font-semibold mb-2">Sterktes</p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li>- Communicatie</li>
                    <li>- Leiderschap</li>
                    <li>- Probleeminzicht</li>
                  </ul>
                  <p className="text-gray-200 font-semibold mb-2">Zwaktes</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>- Planning</li>
                    <li>- Gebrek aan structuur in de vroege fase</li>
                    <li>- Minder bijdrage tijdens prototyping door ziekte</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Verbeterpunten
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>- Betere planning met duidelijkere checkpoints</li>
                    <li>- Eerder gebruik van designtools zoals een playbook</li>
                    <li>
                      - Sterkere individuele bijdrage in de creatieve fase
                    </li>
                  </ul>
                </div>
              </section>

              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiClipboard className="text-cyan-300" /> Download
                </h3>
                <p className="text-gray-300 mb-4">
                  Bekijk de volledige procesdocumentatie van dit project.
                </p>
                <a
                  href={pofDesignDocument}
                  download="Ontwikkelportfolio_Ruben_Janssen_469974_11_10_2024.docx"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <FiDownload />
                  Bekijk volledig designprocesdocument
                </a>
              </section>
            </div>
          )}

          {showUsoLayout && (
            <div className="space-y-8 sm:space-y-10">
              {/* Hero Section */}
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={usoMainImage}
                  alt="USO Project Main Visual"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-sm text-purple-300 mb-2">Case Study</p>
                    <h3 className="text-2xl font-bold text-white">
                      Usability Ontwerp - Digno Redesign
                    </h3>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiTarget className="text-blue-300" /> Project Overzicht
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <strong>Doel:</strong> Optimaliseren van de
                    gebruikerservaring van Digno.nl door middel van
                    usability-gericht ontwerp en front-end development.
                  </p>
                  <p>
                    <strong>Methode:</strong> Heuristieke evaluatie,
                    gebruikersonderzoek, iteratief ontwerpen en front-end
                    implementatie.
                  </p>
                  <p>
                    <strong>Rol:</strong> UX Researcher, Designer & Front-End
                    Developer
                  </p>
                </div>
              </section>

              {/* Disciplines */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiLayers className="text-pink-300" /> Disciplines
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-blue-300 font-semibold">UX/UI Design</p>
                    <p className="text-sm text-gray-400">
                      Gebruikerservaring en interface design
                    </p>
                  </div>
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <p className="text-purple-300 font-semibold">
                      Front-End Development
                    </p>
                    <p className="text-sm text-gray-400">
                      HTML, CSS, JavaScript implementatie
                    </p>
                  </div>
                  <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                    <p className="text-pink-300 font-semibold">
                      Usability Testing
                    </p>
                    <p className="text-sm text-gray-400">
                      Think Aloud & user feedback
                    </p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <p className="text-cyan-300 font-semibold">
                      Heuristische Evaluatie
                    </p>
                    <p className="text-sm text-gray-400">
                      Nielsen's 10 usability heuristics
                    </p>
                  </div>
                </div>
              </section>

              {/* Process Visuals */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBox className="text-orange-300" /> Proces & Visualisaties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={usoFoto1Image}
                      alt="USO Process - Fase 1"
                      className="w-full h-48 object-cover"
                    />
                    <p className="p-3 text-sm text-gray-300 bg-black/20">
                      Onderzoeks- en analysefase
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={usoFoto3Image}
                      alt="USO Process - Fase 2"
                      className="w-full h-48 object-cover"
                    />
                    <p className="p-3 text-sm text-gray-300 bg-black/20">
                      Prototype & testing fase
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiCheckCircle className="text-green-300" /> Gerealiseerde
                  Verbeteringen
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      Verbeterde navigatiestructuur gebaseerd op usability
                      findings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      Duidelijkere call-to-action buttons met betere visual
                      hierarchy
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      Werkende front-end implementatie met interactieve
                      elementen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      Gevalideerd door usability testing met echte gebruikers
                    </span>
                  </li>
                </ul>
              </section>

              {/* Download Document */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FiClipboard className="text-cyan-300" /> Download
                </h3>
                <p className="text-gray-300 mb-4">
                  Bekijk het volledige USO designdocument met alle onderzoeks-
                  en designmaterialen.
                </p>
                <a
                  href={project.action?.href}
                  download={project.action?.filename}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <FiDownload />
                  {project.action?.label || "Designdocument downloaden"}
                </a>
              </section>
            </div>
          )}

          {showCvaLayout && (
            <div className="space-y-8 sm:space-y-10">
              {/* Hero Section */}
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={project.img?.src}
                  alt="CVA Project Visual"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-sm text-purple-300 mb-2">Case Study</p>
                    <h3 className="text-2xl font-bold text-white">
                      CVA - Creative Vaardigheden
                    </h3>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBox className="text-orange-300" /> Project Presentatie
                </h3>
                <p className="text-gray-300 mb-4">
                  Bekijk mijn uitleg van dit Creative Vaardigheden project in de
                  YouTube video.
                </p>
                <a
                  href={project.additionalActions?.[0]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <FiBox />
                  {project.additionalActions?.[0]?.label || "Video bekijken 🎥"}
                </a>
              </section>

              {/* Process Visuals */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBox className="text-orange-300" /> Design Creaties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={cvafoto2Image}
                      alt="CVA Design - Creatie 1"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={cvafoto3Image}
                      alt="CVA Design - Creatie 2"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </section>
            </div>
          )}

          {showPstLayout && (
            <div className="space-y-8 sm:space-y-10">
              {/* 1. HERO SECTION */}
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={pstMainImage}
                  alt="PST SAGANET Campaign"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-sm text-purple-300 mb-2">Case Study</p>
                    <h3 className="text-2xl font-bold text-white">
                      SAGANET – Storytelling Campaign
                    </h3>
                  </div>
                </div>
              </div>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2">
                {["Storytelling", "Visual Design", "Social Media", "Concepting", "Video Editing", "Design Thinking"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-purple-400/40 bg-purple-500/15 text-purple-100">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 2. PROJECT OVERVIEW */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiTarget className="text-blue-300" /> Project Overview
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Client:</strong> SAGANET – Platform for game developers</p>
                  <p><strong>Challenge:</strong> Attract more game developers to the platform and strengthen the community</p>
                  <p><strong>Main Problem:</strong> Many potential members do not clearly understand the value of SAGANET</p>
                  <p><strong>Goal:</strong> Create engaging visual content that explains platform value and motivates people to join</p>
                  <p><strong>Approach:</strong> Audiovisual storytelling campaign combining short-form video and social media content</p>
                </div>
              </section>

              {/* 3. MY ROLE */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiUser className="text-cyan-300" /> My Contribution
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Visual design and concept visualisation</li>
                  <li>• Rebranding of social media content strategy</li>
                  <li>• Helping structure and script the campaign video</li>
                  <li>• Video editing and assembly (together with teammate)</li>
                  <li>• Translating abstract ideas into visual outputs</li>
                  <li>• Social media asset design (LinkedIn, Instagram, TikTok)</li>
                </ul>
              </section>

              {/* 4. DESIGN APPROACH */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiLayers className="text-pink-300" /> Design Approach
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <p className="text-purple-300 font-semibold">Storytelling</p>
                    <p className="text-sm text-gray-400">Structuring a clear narrative that resonates with developers</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-blue-300 font-semibold">Visual Design</p>
                    <p className="text-sm text-gray-400">Social posts, layouts, mockups, consistent branding</p>
                  </div>
                  <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                    <p className="text-pink-300 font-semibold">Content Design</p>
                    <p className="text-sm text-gray-400">Translating info into engaging short-form media</p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <p className="text-cyan-300 font-semibold">Design Thinking</p>
                    <p className="text-sm text-gray-400">Empathy, brainstorms, testing, iteration</p>
                  </div>
                </div>
              </section>

              {/* 5. RESEARCH PHASE */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiSearch className="text-cyan-300" /> Research Phase
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    We conducted deep research to understand our target audience:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Empathy mapping</strong> – Understanding developer needs and pain points</li>
                    <li>• <strong>Desk research</strong> – Analyzing game industry trends and developer communities</li>
                    <li>• <strong>Exploratory conversations</strong> – Direct interviews with game developers</li>
                    <li>• <strong>Professional insights</strong> – Insights from experienced game industry professionals</li>
                  </ul>
                  <div className="mt-4 p-4 rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                    <p className="text-cyan-200 font-semibold mb-1">Key Insight</p>
                    <p className="text-gray-300">Beginning game developers need clarity, relevance and visible value before joining a community like SAGANET.</p>
                  </div>
                </div>
              </section>

              {/* 6. PROBLEM DEFINITION */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiClipboard className="text-orange-300" /> Problem Definition
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300"><strong>The Challenge:</strong></p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• Too few new members joining SAGANET</li>
                    <li>• Platform's purpose and benefits not clear enough</li>
                    <li>• Target audience needs stronger communication and more focused messaging</li>
                  </ul>
                  <div className="mt-4 p-3 rounded-lg border border-orange-400/30 bg-orange-500/10">
                    <p className="text-orange-200 font-semibold">HMW Question</p>
                    <p className="text-gray-300 italic">How can we motivate game developers with some knowledge of serious games to join SAGANET and feel encouraged to develop serious games?</p>
                  </div>
                </div>
              </section>

              {/* 7. IDEATION & BRAINSTORM */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiMessageSquare className="text-pink-300" /> Ideation & Brainstorm
                </h3>
                <p className="text-gray-300 mb-4">
                  We explored different content directions through extensive brainstorming and mindmapping sessions. The team used concept exploration techniques to translate diverse ideas into cohesive campaigns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                    <p className="text-pink-300 font-semibold text-sm">Brainstorm Board</p>
                    <p className="text-xs text-gray-400">Multiple campaign directions explored</p>
                  </div>
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <p className="text-purple-300 font-semibold text-sm">Mindmapping</p>
                    <p className="text-xs text-gray-400">Concept mapping and structure</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-blue-300 font-semibold text-sm">Concept Exploration</p>
                    <p className="text-xs text-gray-400">Testing different visual approaches</p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <p className="text-cyan-300 font-semibold text-sm">Iteration</p>
                    <p className="text-xs text-gray-400">Refining ideas through feedback</p>
                  </div>
                </div>
              </section>

              {/* 8. CONCEPT DEVELOPMENT */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiCompass className="text-amber-300" /> Concept Development
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Final Concept Strategy:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Short-form video-first approach</strong> – Designed for mobile platforms</li>
                    <li>• <strong>Social media focus</strong> – TikTok, Instagram Reels, YouTube Shorts optimized</li>
                    <li>• <strong>Content split</strong> – One campaign split into three shorter videos for different platforms</li>
                    <li>• <strong>Clear CTA progression</strong> – Leading viewers toward joining SAGANET</li>
                    <li>• <strong>Focused core message</strong> – "Serious Games. Serious Developers. Serious Community."</li>
                  </ul>
                </div>
              </section>

              {/* 9. STORYBOARD & CONTENT STRUCTURE */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiGrid className="text-green-300" /> Storyboard & Content Structure
                </h3>
                <div className="space-y-3 text-gray-300 text-sm mb-4">
                  <p className="font-semibold text-white">Video Structure:</p>
                  <ol className="ml-4 space-y-2">
                    <li>1. <strong>Opening Hook</strong> – Attention-grabbing statement about serious games</li>
                    <li>2. <strong>Target Audience Intro</strong> – "Are you a developer? Have you heard of serious games?"</li>
                    <li>3. <strong>Serious Games Explanation</strong> – What they are and why they matter</li>
                    <li>4. <strong>SAGANET Introduction</strong> – Meet the community</li>
                    <li>5. <strong>Network & Community Value</strong> – What members get access to</li>
                    <li>6. <strong>Awards & Opportunities</strong> – Tangible benefits and recognition</li>
                    <li>7. <strong>Closing CTA</strong> – "Join the community today"</li>
                  </ol>
                </div>
                <div className="rounded-lg overflow-hidden border border-white/10 bg-black/20 p-3">
                  <p className="text-xs text-gray-400">Storyboard frames available in design document</p>
                </div>
              </section>

              {/* 10. VISUAL DESIGN & REBRANDING */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiLayout className="text-indigo-300" /> Visual Design & Rebranding
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    We redesigned SAGANET's social media presence for stronger brand recognition:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                      <p className="text-indigo-300 font-semibold text-sm">LinkedIn & Instagram</p>
                      <p className="text-xs text-gray-400">Professional campaign assets</p>
                    </div>
                    <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                      <p className="text-pink-300 font-semibold text-sm">TikTok & Shorts</p>
                      <p className="text-xs text-gray-400">Mobile-first video content</p>
                    </div>
                    <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <p className="text-purple-300 font-semibold text-sm">Web Mockups</p>
                      <p className="text-xs text-gray-400">Desktop & mobile designs</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-3">Result: Consistent, modern campaign style with stronger SAGANET brand recognition.</p>
                </div>
              </section>

              {/* Visual Mockups */}
              <section className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img src={pstFoto2} alt="Campaign Visual 1" className="w-full h-48 object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img src={pstFoto3} alt="Campaign Visual 2" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </section>

              {/* 11. VIDEO EDITING */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBox className="text-green-300" /> Video Editing & Production
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Editing Process:</strong></p>
                  <ul className="space-y-2 ml-4 text-sm">
                    <li>• Assembled footage from interviews, stock videos, and storyboard animations</li>
                    <li>• Collaborated with teammate on final video assembly</li>
                    <li>• Applied transitions, pacing optimization, and visual hierarchy</li>
                    <li>• Integrated animations and motion graphics for engagement</li>
                    <li>• Optimized for different platforms (TikTok, Instagram, YouTube)</li>
                  </ul>
                  <div className="mt-3 p-3 rounded-lg border border-yellow-400/30 bg-yellow-500/10">
                    <p className="text-yellow-200 font-semibold text-sm mb-1">Learning Experience</p>
                    <p className="text-gray-300 text-sm">We encountered challenges with stock video selection and narrative structure clarity. This taught important lessons about planning, storyboarding depth, and early iteration cycles.</p>
                  </div>
                </div>
              </section>

              {/* Video/Mockup Section */}
              <section className="rounded-lg overflow-hidden border border-white/10">
                <img src={pstFoto4} alt="Campaign Design" className="w-full h-auto object-cover" />
              </section>

              {/* 12. TESTING & FEEDBACK */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiCheckCircle className="text-green-300" /> Testing & Feedback
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>User Testing:</strong></p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Tested with target audience (beginner to intermediate developers)</li>
                    <li>• Showed short-form videos first, then full campaign</li>
                    <li>• Gathered reactions to messaging clarity and visual appeal</li>
                    <li>• Tested platform preferences (Instagram and TikTok performed best)</li>
                  </ul>
                  <div className="mt-3 p-3 rounded-lg border border-green-400/30 bg-green-500/10">
                    <p className="text-green-200 font-semibold text-sm mb-1">Key Learning</p>
                    <p className="text-gray-300 text-sm">Short, visually strong content resonated well. However, the message needed tighter focus – overloaded information reduced engagement.</p>
                  </div>
                </div>
              </section>

              {/* 13. REFLECTION */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <FiAward className="text-emerald-300" /> Strengths
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Strong visual execution and polish</li>
                    <li>✓ Clear branding work across platforms</li>
                    <li>✓ Meaningful video editing contribution</li>
                    <li>✓ Successfully translated abstract concepts into visuals</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-5 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <FiClock className="text-amber-300" /> Growth Areas
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Earlier participation in concept phase</li>
                    <li>→ Clearer team communication and alignment</li>
                    <li>→ Better planning with iteration checkpoints</li>
                    <li>→ Sharper narrative focus in final deliverable</li>
                  </ul>
                </div>
              </section>

              {/* 14. FINAL TAKEAWAYS */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBookOpen className="text-purple-300" /> Final Takeaways
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  This project significantly strengthened my skills in visual storytelling, campaign strategy, and content design. Most importantly, it taught me that <strong>strong visuals alone are never enough</strong> – a compelling concept needs a clear, focused message that directly resonates with the target audience. The balance between creative ambition and narrative clarity is crucial to campaign success.
                </p>
              </section>

              {/* 15. DOWNLOAD & VIEW SECTION */}
              <section className="glass-card rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiDownload className="text-cyan-300" /> Project Materials
                </h3>
                <div className="space-y-3">
                  <a
                    href={pstDesignDocument}
                    download="PST_design_document_Ruben_Janssen_469974.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 w-full justify-center"
                  >
                    <FiDownload />
                    Download Full Design Document
                  </a>
                  <p className="text-gray-400 text-sm text-center">
                    Complete project documentation including research, concepts, storyboards, and visual assets
                  </p>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
