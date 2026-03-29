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
  import("./components/section/contact").then((m) => ({ default: m.Contact })),
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

  useEffect(() => {
    const timeoutId = window.setTimeout(
      () => setShowDeferredSections(true),
      1200,
    );
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen text-gray-100">
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
