import { useEffect, useRef, useState } from "react";
import { FaHome, FaBriefcase, FaUser, FaPhone } from "react-icons/fa";

const OBSERVER_ROOT_MARGIN = "-40% 0px -40% 0px";
const OBSERVER_THRESHOLD = [0.2, 0.45, 0.7];
const SCROLL_SHOW_AT_TOP = 80;
const SCROLL_DELTA_TRIGGER = 6;
const RING_RADIUS = 20;

const labelAnimationFrames = [
  { opacity: 0.5, transform: "translateY(4px) scale(0.98)" },
  { opacity: 1, transform: "translateY(0) scale(1)" },
];

const labelAnimationOptions = {
  duration: 180,
  easing: "ease-out",
};

const dotPulseFrames = [
  { transform: "scale(0.92)", filter: "brightness(1.05)" },
  { transform: "scale(1.06)", filter: "brightness(1.2)" },
  { transform: "scale(1)", filter: "brightness(1)" },
];

const dotPulseOptions = {
  duration: 220,
  easing: "ease-out",
};

const sectionLinks = [
  { id: "home", name: "Start", href: "#home", icon: FaHome },
  { id: "Projects", name: "Projecten", href: "#Projects", icon: FaBriefcase },
  { id: "about", name: "Over mij", href: "#about", icon: FaUser },
  { id: "Contact", name: "Contact", href: "#Contact", icon: FaPhone },
];

export const SectionDotNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeProgress, setActiveProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const labelRef = useRef(null);
  const dotRefs = useRef({});

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
        rootMargin: OBSERVER_ROOT_MARGIN,
        threshold: OBSERVER_THRESHOLD,
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
    let lastScrollY = window.scrollY;

    const updateProgress = () => {
      setActiveProgress(getSectionProgress(activeSection));
      ticking = false;
    };

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY <= SCROLL_SHOW_AT_TOP) {
        setIsVisible(true);
      } else if (scrollDelta > SCROLL_DELTA_TRIGGER) {
        setIsVisible(false);
      } else if (scrollDelta < -SCROLL_DELTA_TRIGGER) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const onScroll = () => {
      updateVisibility();
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

  useEffect(() => {
    if (!labelRef.current) {
      return;
    }

    labelRef.current.animate(labelAnimationFrames, labelAnimationOptions);
  }, [activeSection]);

  useEffect(() => {
    const activeDot = dotRefs.current[activeSection];
    if (!activeDot) {
      return;
    }

    activeDot.animate(dotPulseFrames, dotPulseOptions);
  }, [activeSection]);

  const ringCircumference = 2 * Math.PI * RING_RADIUS;
  const ringOffset = ringCircumference * (1 - activeProgress);
  const activeLink =
    sectionLinks.find((link) => link.id === activeSection) ?? sectionLinks[0];
  const focusActiveSection = () => {
    const section = document.getElementById(activeLink.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 px-3 pb-[max(env(safe-area-inset-bottom),0.15rem)] transition-all duration-250 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-label="Sectienavigatie"
    >
      <div className="mb-2 flex justify-center">
        <button
          ref={labelRef}
          type="button"
          onClick={focusActiveSection}
          className="glass-card inline-flex select-none items-center rounded-full border border-pink-300/45 bg-pink-500/12 px-3 py-1 text-xs font-medium tracking-wide text-pink-100 transition-all duration-150 hover:border-pink-200/70 hover:bg-pink-500/20 active:scale-[0.96] active:border-pink-200 active:bg-pink-400/25 active:text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400/80"
          aria-label={`Ga naar begin van sectie ${activeLink.name}`}
          title={`Ga naar ${activeLink.name}`}
        >
          {activeLink.name}
        </button>
      </div>
      <ul className="glass-card flex items-center gap-1 sm:gap-2 px-2 py-2 rounded-full">
        {sectionLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.id;

          return (
            <li key={link.name}>
              <a
                ref={(el) => {
                  dotRefs.current[link.id] = el;
                }}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={link.name}
                title={link.name}
                className={`group relative flex h-11 w-11 sm:h-10 sm:w-10 select-none items-center justify-center rounded-full border text-gray-100 transition-all duration-150 active:scale-95 active:brightness-110 focus:outline-none focus:ring-2 focus:ring-pink-400/80 ${
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
                      r={RING_RADIUS}
                      fill="none"
                      stroke="rgba(244,114,182,0.28)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r={RING_RADIUS}
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
