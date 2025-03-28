import { RevealOnScroll } from "./RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen flex py-20 justify-center items-center"
    >
        <RevealOnScroll>
      <div className="max-w-5xl mc-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-tight">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[rgba(201,71,143,0.8)] ">
            <h3 className="text-xl font-bold mb-2">ShoppingUI</h3>
            <p className="text-gray-300 mb-4">
              A simple shopping UI made using HTML/CSS and Javascript
            </p>
            <div className="flex flex-wrap gap-2">
              {["HTML", "Javascript", "CSS"].map((tech, key) => (
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
                href="#"
                className="text-purple-500 hover:text-purple-300 transition-colors"
              >
                View Project ➡️
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[rgba(201,71,143,0.8)] ">
            <h3 className="text-xl font-bold mb-2">My Portfolio website</h3>
            <p className="text-gray-300 mb-4">
              A simple and elegant portfolio website showcasing my skills, projects, and achievements, built with React and Vite.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Node.JS","React", "Javascript", "Tailwindcss", "Vite",].map((tech, key) => (
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
                href="#"
                className="text-purple-500 hover:text-purple-300 transition-colors"
              >
                View Project ➡️
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[rgba(201,71,143,0.8)] ">
            <h3 className="text-xl font-bold mb-2">Coming</h3>
            <p className="text-gray-300 mb-4">
              A simpel scrollstory that makes motorcycle leaners easier the buy the right clothing at MKC
            </p>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Javascript", "CSS", "HTML"].map((tech, key) => (
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
                href="#"
                className="text-purple-500 hover:text-purple-300 transition-colors"
              >
                View Project ➡️
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[rgba(201,71,143,0.8)] ">
            <h3 className="text-xl font-bold mb-2">Coming soon..</h3>
            <p className="text-gray-300 mb-4">
              So far my journey, there is much to add !
            </p>
            <div className="flex flex-wrap gap-2">
              {["Chrome", "Tiktok", "Youtube"].map((tech, key) => (
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
                href="#"
                className="text-purple-500 hover:text-purple-300 transition-colors"
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
