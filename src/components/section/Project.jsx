import { RevealOnScroll } from "./RevealOnScroll";

export const Project = () => {
  // Helper function to handle portfolio download
  const handleDownloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = "/assets/design_portfolio_ino_rubenjanssen_469974.pdf";
    link.download = "Ruben_Janssen_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="Projects"
      className="min-h-screen flex py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-tight">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-purple-200/10 backdrop-blur-xl shadow-2xl hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">ShoppingUI</h3>
              <div className="mb-4">
                <img
                  src="/assets/mockupuso.png"
                  alt="ShoppingUI Mockup"
                  className="w-full rounded-lg shadow"
                />
              </div>
              <p className="text-gray-200 mb-4">
                A simple shopping UI made using HTML/CSS and Javascript
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "Javascript", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://delightful-dieffenbachia-8b92e2.netlify.app/"
                  className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-purple-200/10 backdrop-blur-xl shadow-2xl hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">My Portfolio website</h3>
              <div className="mb-4">
                <img
                  src="/assets/laptopmockupportoflio.png"
                  alt="Portfolio Website Mockup"
                  className="w-full rounded-lg shadow"
                />
              </div>
              <p className="text-gray-200 mb-4">
                A simple and elegant portfolio website showcasing my skills,
                projects, and achievements, built with React and Vite.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Node.JS", "React", "Javascript", "Tailwindcss", "Vite"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handleDownloadPortfolio}
                  className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                >
                  View Portfolio⬇️
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-purple-200/10 backdrop-blur-xl shadow-2xl hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">MKC MOTO Scrollstory</h3>
              <div className="mb-4">
                <img
                  src="/assets/mockupino.png"
                  alt="MKC MOTO Scrollstory Mockup"
                  className="w-full rounded-lg shadow"
                />
              </div>
              <p className="text-gray-200 mb-4">
                A simpel scrollstory that makes motorcycle leaners easier the
                buy the right clothing at MKC
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Javascript", "CSS", "HTML"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://super-cranachan-0b0cff.netlify.app/"
                  className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-purple-200/10 backdrop-blur-xl shadow-2xl hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Coming soon..</h3>
              <div className="mb-4">
                <img
                  src="/assets/mockup-comingsoon.png"
                  alt="Coming Soon Mockup"
                  className="w-full rounded-lg shadow"
                />
              </div>
              <p className="text-gray-200 mb-4">
                So far my journey, there is much to add !
              </p>
              <div className="flex flex-wrap gap-2">
                {["Chrome", "Tiktok", "Youtube"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="design_portfolio_ino_rubenjanssen_469974.pdf"
                  target="_blank"
                  className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
