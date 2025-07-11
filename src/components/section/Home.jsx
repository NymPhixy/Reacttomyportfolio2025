import { RevealOnScroll } from "./RevealOnScroll";
import image from "../../assets/profielpik.jpg"; // <-- use relative path

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex relative justify-center items-center"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 flex flex-row items-center justify-center gap-10">
          {/* Glassmorphic Card */}
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-10 flex flex-row items-center gap-10 max-w-4xl w-full">
            {/* Afbeelding links van de tekst */}
            <div className="flex-shrink-0">
              <img
                src={image}
                alt="Ruben"
                className="w-60 h-100 object-cover rounded-full shadow-lg"
              />
            </div>
            {/* Tekst rechts van de afbeelding */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-right">
                {" "}
                Hi, I'm Ruben{" "}
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto">
                I'm first-year UI/UX designer studying at Hanze in Groningen. I am
                currently developing my expertise in software engineering and
                UI/UX design, with a strong focus on creating intuitive and
                visually engaging digital experiences. As a passionate motorcycle
                enthusiast, I love combining my passion for motorcycles with the
                digital world. My goal is to merge technology and design to craft
                user-friendly and immersive experiences.
              </p>
              <div className="justify-center flex space-x-4">
                <a
                  href="#Projects"
                  className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Projects
                </a>
                <a
                  href="#Contact"
                  className="bg-pink-300 border-purple-500/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,38,92,0.8)]"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
