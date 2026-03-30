import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import projects from "../../data/provider/projects/projectsData.json"; // Importing project data from JSON file

export const Project = () => {
  const carouselRefs = useRef({});
  const [scrollProgress, setScrollProgress] = useState({});
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState("Projectvideo");

  const closeVideoModal = () => {
    setActiveVideoUrl(null);
    setActiveVideoTitle("Projectvideo");
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";

    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace("www.", "");

      if (host === "youtu.be") {
        const videoId = parsed.pathname.slice(1);
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }

      if (host === "youtube.com" || host === "m.youtube.com") {
        const videoId = parsed.searchParams.get("v");
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
      }
    } catch {
      return "";
    }

    return "";
  };

  // Helper function to handle portfolio download
  const handleDownloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = "/assets/design_portfolio_ino_rubenjanssen_469974.pdf";
    link.download = "Ruben_Janssen_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper function to handle document downloads
  const handleDownloadDocument = (href, filename) => {
    const link = document.createElement("a");
    link.href = encodeURI(href);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projectsByYear = projects.reduce((acc, project) => {
    const yearKey = project.year || "Overige projecten";
    if (!acc[yearKey]) acc[yearKey] = [];
    acc[yearKey].push(project);
    return acc;
  }, {});

  const yearOrder = [
    "Leerjaar 1",
    "Leerjaar 2",
    "Leerjaar 3",
    "Leerjaar 4",
    "Overige projecten",
  ];
  const orderedYears = [
    ...yearOrder.filter((year) => projectsByYear[year]),
    ...Object.keys(projectsByYear).filter((year) => !yearOrder.includes(year)),
  ];

  const [activeYear, setActiveYear] = useState(orderedYears[0] || null);

  useEffect(() => {
    if (!activeYear && orderedYears.length > 0) {
      setActiveYear(orderedYears[0]);
      return;
    }

    if (activeYear && !orderedYears.includes(activeYear)) {
      setActiveYear(orderedYears[0] || null);
    }
  }, [activeYear, orderedYears]);

  const visibleYears = activeYear ? [activeYear] : orderedYears;

  const scrollCarousel = (year, direction) => {
    const carousel = carouselRefs.current[year];
    if (!carousel) return;
    const scrollAmount = Math.max(carousel.clientWidth * 0.85, 280);
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  const updateScrollProgress = (year) => {
    const carousel = carouselRefs.current[year];
    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const progress =
      maxScroll > 0 ? Math.min(carousel.scrollLeft / maxScroll, 1) : 0;

    setScrollProgress((prev) => ({
      ...prev,
      [year]: progress,
    }));
  };

  const handleProgressBarClick = (year, event) => {
    const carousel = carouselRefs.current[year];
    if (!carousel) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const target = Math.max(0, Math.min(1, ratio));
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    carousel.scrollTo({
      left: maxScroll * target,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    visibleYears.forEach((year) => updateScrollProgress(year));
  }, [activeYear]);

  useEffect(() => {
    if (!activeVideoUrl) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideoModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideoUrl]);

  return (
    <section
      id="Projects"
      className="min-h-screen flex py-10 sm:py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-400 to-pink-400 bg-clip-text leading-tight">
            Projecten
          </h2>

          <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
            {orderedYears.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full border text-sm sm:text-base whitespace-nowrap transition-all ${
                  activeYear === year
                    ? "border-pink-400 text-pink-300 bg-pink-500/10"
                    : "border-white/30 text-white hover:border-pink-300 hover:text-pink-200"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {visibleYears.map((year) => (
              <div key={year}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {year}
                  </h3>
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => scrollCarousel(year, -1)}
                      className="px-3 py-2 rounded-lg border border-white/30 text-white hover:border-pink-400 hover:text-pink-300 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCarousel(year, 1)}
                      className="px-3 py-2 rounded-lg border border-white/30 text-white hover:border-pink-400 hover:text-pink-300 transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div
                  ref={(el) => {
                    carouselRefs.current[year] = el;
                    if (el) {
                      requestAnimationFrame(() => updateScrollProgress(year));
                    }
                  }}
                  onScroll={() => updateScrollProgress(year)}
                  className="carousel-scroll flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
                >
                  {projectsByYear[year].map((project, index) => (
                    <div
                      key={`${year}-${project.title}-${index}`}
                      className="glass-card p-6 rounded-2xl border border-white/20 hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_8px_32px_0_rgba(201,71,143,0.25)] transition-all duration-300 min-w-[85vw] sm:min-w-[380px] lg:min-w-[420px] max-w-[420px] snap-start"
                    >
                      <h4 className="text-lg sm:text-xl font-bold mb-3">
                        {project.title}
                      </h4>
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={project.img.src}
                          alt={project.img.alt}
                          width="400"
                          height="300"
                          loading="lazy"
                          className="w-full h-48 sm:h-56 object-cover shadow-md hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="skill-badge text-xs sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3 mt-4">
                        {project.action.type === "download" ? (
                          <button
                            onClick={() =>
                              handleDownloadDocument(
                                project.action.href,
                                project.action.filename,
                              )
                            }
                            className="text-purple-400 hover:text-pink-400 transition-colors font-semibold text-left"
                          >
                            {project.action.label}
                          </button>
                        ) : project.action.type === "link" ? (
                          <a
                            href={project.action.href}
                            className="text-purple-400 hover:text-pink-400 transition-colors font-semibold"
                            target={project.action.target}
                            rel={project.action.rel}
                          >
                            {project.action.label}
                          </a>
                        ) : (
                          <button
                            onClick={handleDownloadPortfolio}
                            className="text-purple-400 hover:text-pink-400 transition-colors font-semibold text-left"
                          >
                            {project.action.label}
                          </button>
                        )}
                        {project.additionalActions &&
                          project.additionalActions.map(
                            (additionalAction, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  if (additionalAction.type === "video") {
                                    setActiveVideoTitle(
                                      `${project.title} video`,
                                    );
                                    setActiveVideoUrl(
                                      getYouTubeEmbedUrl(additionalAction.href),
                                    );
                                    return;
                                  }

                                  handleDownloadDocument(
                                    additionalAction.href,
                                    additionalAction.filename,
                                  );
                                }}
                                className="text-purple-400 hover:text-pink-400 transition-colors font-semibold text-left"
                              >
                                {additionalAction.label}
                              </button>
                            ),
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeVideoUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-md px-4"
            onClick={closeVideoModal}
            role="dialog"
            aria-modal="true"
            aria-label="Projectvideo"
          >
            <div
              className="w-full max-w-4xl rounded-2xl border border-white/20 bg-slate-900/90 shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 px-4 py-3 border-b border-white/10">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-100">
                    {activeVideoTitle}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={closeVideoModal}
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
                  src={activeVideoUrl}
                  title={activeVideoTitle}
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
};
