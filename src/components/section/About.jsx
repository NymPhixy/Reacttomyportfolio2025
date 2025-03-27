export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Figma",
    "Adobe XD",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase", "SQL"];

return (
    <section
        id="about"
        className="min-h-screen flex py-20 justify-center items-center"
    >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-700 to-pink-400 bg-clip-text leading-tight">
                About me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am passionate about crafting intuitive and visually appealing user
                    interfaces that enhance user experiences. With a keen eye for detail
                    and a love for design, I strive to create seamless interactions that
                    leave a lasting impression.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-purple-500/10 text-pink-200 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[rgba(201,71,143,0.8)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🎓 Education </h3>
                        <ul>
                            <li>
                                <strong>
                                🎨BA Communication Multimedia and design
                                    <p>2024-Present</p>
                                </strong>
                                <strong>🎓 MBO 4 Sport management</strong>
                                <p>⚽KNVB TC3</p>
                                <p>2022-2023</p>
                                <strong>🎓 MBO 3 Sport and Movement</strong>
                                <p>⚽Juniors and Pupils</p>
                                <p>2019-2022</p>
                                <strong>🎓 MBO 2 Sport and Recreation</strong>
                                <p>🏊‍♂️ Lifeguard</p>
                                <p>2017-2019</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work experiences </h3>
                        <ul>
                            <li>
                            <strong>🏍️ MKC MOTO</strong>
                                <p>Sales-Specialist</p>
                                <p>2024-Present</p>
                            <strong>Jumbo Supermarkets</strong>
                                <p>Shelf-Stacker</p>
                                <p>2016-2020</p>
                                <strong>🍽️ Paviljoen Appelberge</strong>
                                <p>Waiter</p>
                                <p>2016-2024</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};
