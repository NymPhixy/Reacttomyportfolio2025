// Enhanced Hero Section - Home.jsx (IMPROVED VERSION)
import { RevealOnScroll } from "./RevealOnScroll";
import image from "../../assets/me.jpg";
import cvFile from "../../assets/Ruben_Janssen_CV.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex relative justify-center items-center py-10 sm:py-20"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 w-full flex flex-col items-center justify-center gap-6 sm:gap-12 max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <img
                src={image}
                alt="Ruben Janssen"
                width="240"
                height="300"
                loading="eager"
                fetchPriority="high"
                className="relative w-48 sm:w-56 h-auto object-cover rounded-full shadow-2xl border-4 border-purple-400/50 group-hover:border-pink-400/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Professional Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text leading-tight">
                UX Designer & Front-end Developer
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
              Ideeën transformeren naar intuitieve, aantrekkelijke digitale
              ervaringen die echte problemen oplossen.
            </p>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ik combineer UX onderzoek, visual design en moderne front-end
              ontwikkeling om digitale producten te maken waar gebruikers van
              houden. Momenteel studeer ik Communication & Multimedia Design aan
              Hanze Groningen.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#Projects"
                className="group relative min-w-48 py-3 px-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                Bekijk Mijn Werk
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <a
                href="#Contact"
                className="group relative min-w-48 py-3 px-8 border-2 border-pink-400/50 hover:border-pink-400 text-white font-bold rounded-lg transition-all duration-300 hover:bg-pink-400/10 flex items-center justify-center gap-2"
              >
                Neem Contact Op
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>

            {/* Secondary CTA */}
            <div>
              <a
                href={cvFile}
                download
                className="inline-flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 font-semibold border-b border-gray-300 hover:border-pink-400"
              >
                Download Mijn CV
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full pt-8 sm:pt-12">
            <p className="text-center text-sm sm:text-base text-gray-300 mb-4">
              Maak kennis met mij in deze korte inleiding:
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-pink-500/20 transition-shadow duration-300 max-w-2xl mx-auto">
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
      </RevealOnScroll>
    </section>
  );
};
