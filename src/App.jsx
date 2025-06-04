import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { Loadingscreen } from "./components/section/loadingscreen";
import { Navbar } from "./components/section/Navbar";
import { MobileMenu } from "./components/section/MobileMenu";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Project } from "./components/section/Project";
import { Contact } from "./components/section/Contact";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <ErrorBoundary>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`relative min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
        {/* Content */}
        <div className="relative z-10">
          <Navbar menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
