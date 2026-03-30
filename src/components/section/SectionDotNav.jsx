import { useEffect, useState } from "react";
import { FaHome, FaBriefcase, FaUser, FaPhone } from "react-icons/fa";

const sectionLinks = [
  { id: "home", name: "Home", href: "#home", icon: FaHome },
  { id: "Projects", name: "Projecten", href: "#Projects", icon: FaBriefcase },
  { id: "about", name: "Over mij", href: "#about", icon: FaUser },
  { id: "Contact", name: "Contact", href: "#Contact", icon: FaPhone },
];

export const SectionDotNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeProgress, setActiveProgress] = useState(0);

  const getSectionProgress = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return 0;
    }

    const sectionRect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const sectionTop = sectionRect.top + window.scrollY;
    const start = sectionTop - viewportHeight * 0.35;
    const distance = Math.max(section.offsetHeight + viewportHeight * 0.35, 1);
    const rawProgress = (window.scrollY - start) / distance;

    return Math.min(1, Math.max(0, rawProgress));
  };

  useEffect(() => {
    const sectionElements = sectionLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    const updateFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId) {
        setActiveSection(hashId);
      }
    };

    window.addEventListener("hashchange", updateFromHash);
    updateFromHash();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      setActiveProgress(getSectionProgress(activeSection));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeSection]);

  const ringRadius = 20;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringOffset = ringCircumference * (1 - activeProgress);

  return (
    <nav
      className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 px-3"
      aria-label="Sectienavigatie"
    >
      <ul className="glass-card flex items-center gap-1 sm:gap-2 px-2 py-2 rounded-full">
        {sectionLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.id;

          return (
            <li key={link.name}>
              <a
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={link.name}
                title={link.name}
                className={`group relative flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full border text-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-pink-400/80 ${
                  isActive
                    ? "border-pink-300/80 bg-pink-500/20 text-pink-200 shadow-[0_0_0_1px_rgba(244,114,182,0.25)]"
                    : "border-white/20 bg-white/5 hover:-translate-y-0.5 hover:border-pink-400/60 hover:text-pink-300 hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <svg
                    className="pointer-events-none absolute inset-0 -rotate-90"
                    viewBox="0 0 44 44"
                    aria-hidden="true"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r={ringRadius}
                      fill="none"
                      stroke="rgba(244,114,182,0.28)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r={ringRadius}
                      fill="none"
                      stroke="rgba(244,114,182,0.95)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={ringCircumference}
                      strokeDashoffset={ringOffset}
                      className="transition-[stroke-dashoffset] duration-200 ease-linear"
                    />
                  </svg>
                )}
                <Icon className="relative z-10 text-sm" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
