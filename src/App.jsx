import React from "react";
import { useState } from "react";
import "./App.css";
import { Loadingscreen } from "./components/section/loadingscreen";
import "./index.css";
import { Navbar } from "./components/section/navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import { MobileMenu } from "./components/section/MobileMenu";
import { Home } from "./components/section/Home";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <ErrorBoundary>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Home />
      </div>
    </ErrorBoundary>
  );
}

export default App;
