import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import "./index.css";
import { Navbar } from "./components/section/Navbar";
import { MobileMenu } from "./components/section/MobileMenu";
import ErrorBoundary from "./components/ErrorBoundary";
import { Home } from "./components/section/Home";

// Lazy load sections for better code splitting
const About = React.lazy(() =>
  import("./components/section/About").then((m) => ({ default: m.About })),
);
const Project = React.lazy(() =>
  import("./components/section/Project").then((m) => ({ default: m.Project })),
);
const Contact = React.lazy(() =>
  import("./components/section/Contact").then((m) => ({ default: m.Contact })),
);

// Loading fallback component
const SectionFallback = () => (
  <section className="min-h-screen flex items-center justify-center">
    <div className="text-gray-300">Loading...</div>
  </section>
);

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDeferredSections, setShowDeferredSections] = useState(false);
  const [showLaunchVideo, setShowLaunchVideo] = useState(true);

  const closeLaunchVideo = () => setShowLaunchVideo(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(
      () => setShowDeferredSections(true),
      1200,
    );
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!showLaunchVideo) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLaunchVideo();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showLaunchVideo]);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen text-gray-100">
        {showLaunchVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-md px-4"
            onClick={closeLaunchVideo}
            role="dialog"
            aria-modal="true"
            aria-label="Introductievideo"
          >
            <div
              className="w-full max-w-4xl rounded-2xl border border-white/20 bg-slate-900/90 shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 px-4 py-3 border-b border-white/10">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-100">
                    Welkom! Kijk eerst deze video
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-gray-300">
                    Optioneel: hierin vertel ik kort wie ik ben.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeLaunchVideo}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-200 hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400/70 transition-colors"
                  aria-label="Sluit video"
                >
                  <span className="text-xl leading-none" aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
              <div className="p-3 sm:p-4">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/Y76GZ1qnth0?autoplay=1&rel=0"
                  title="Introductievideo"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
        {/* Content */}
        <div className="relative z-10">
          <Navbar menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          {showDeferredSections && (
            <>
              <Suspense fallback={<SectionFallback />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Project />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
