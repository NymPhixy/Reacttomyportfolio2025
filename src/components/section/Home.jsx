import { RevealOnScroll } from "./RevealOnScroll";
import image from "../../assets/me.jpg"; // <-- use relative path
import cvFile from "../../assets/Ruben_Janssen_CV.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex relative justify-center items-center py-10 sm:py-20"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* Main Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-4xl w-full">
            {/* Afbeelding - responsive sizing */}
            <div className="flex-shrink-0 flex justify-center">
              <img
                src={image}
                alt="Ruben"
                width="240"
                height="400"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-48 sm:w-60 h-auto object-cover rounded-full shadow-lg border-4 border-purple-400/30"
              />
            </div>
            {/* Tekst rechts van de afbeelding */}
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r text-transparent from-purple-400 to-pink-400 bg-clip-text">
                Hoi, ik ben Ruben
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8 leading-relaxed">
                Ik ben een tweedejaarsstudent Communication & Multimedia Design
                aan de Hanzehogeschool in Groningen. Ik werk op het snijvlak van
                conceptontwikkeling, user experience en front-end development,
                met een focus op het vertalen van ideeen naar intuitieve en
                interactieve digitale producten.
              </p>
              <div className="button-group justify-center sm:justify-start">
                <a
                  href="#Projects"
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  Projecten bekijken
                </a>
                <a
                  href="#Contact"
                  className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                >
                  Neem contact op
                </a>
                <a
                  href={cvFile}
                  download
                  className="bg-white/20 hover:bg-white/30 border border-white/40 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  CV downloaden
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm sm:text-base text-gray-200 mb-3">
                  Wie ben ik? Bekijk de korte introductievideo:
                </p>
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/Y76GZ1qnth0?rel=0"
                    title="Introductievideo van Ruben"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
