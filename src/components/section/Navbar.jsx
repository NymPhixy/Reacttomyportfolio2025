import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="flex justify-between items-center h-16">
          <a
            href="#Home"
            className="font-mono text-xl font-bold  bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-right"
          >
            RGB
            <span className=" bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-right">
              .
            </span>
            visuals
          </a>
        </div>
        <div>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className=" hover:text-white transition-colors font-bold text-pink-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
