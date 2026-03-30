import { FaHome, FaBriefcase, FaUser, FaPhone } from "react-icons/fa";

const sectionLinks = [
  { name: "Home", href: "#home", icon: FaHome },
  { name: "Projecten", href: "#Projects", icon: FaBriefcase },
  { name: "Over mij", href: "#about", icon: FaUser },
  { name: "Contact", href: "#Contact", icon: FaPhone },
];

export const SectionDotNav = () => {
  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
      aria-label="Sectienavigatie"
    >
      <ul className="glass-card flex items-center gap-2 px-2 py-2 rounded-full">
        {sectionLinks.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.name}>
              <a
                href={link.href}
                aria-label={link.name}
                title={link.name}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-100 transition-all hover:-translate-y-0.5 hover:border-pink-400/60 hover:text-pink-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400/80"
              >
                <Icon className="text-sm" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
