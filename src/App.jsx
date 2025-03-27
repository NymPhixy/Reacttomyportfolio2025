import { useState } from "react";
import "./App.css";
import { Loadingscreen } from "./components/section/loadingscreen";
import "./index.css";
import { Navbar } from "./components/section/navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar />
      </div>
    </>
  );
}

export default App;
