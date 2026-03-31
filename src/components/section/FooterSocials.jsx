import {
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/benji.r22/",
    icon: FaInstagram,
    accent: "hover:border-fuchsia-400/80 hover:text-fuchsia-200",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@benji.r22",
    icon: FaTiktok,
    accent: "hover:border-cyan-300/80 hover:text-cyan-100",
  },
  {
    name: "GitHub",
    href: "https://github.com/NymPhixy",
    icon: FaGithub,
    accent: "hover:border-gray-200/80 hover:text-white",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@RGBJanssenVisuals",
    icon: FaYoutube,
    accent: "hover:border-red-400/80 hover:text-red-200",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rgbjanssen/",
    icon: FaLinkedin,
    accent: "hover:border-blue-400/80 hover:text-blue-200",
  },
];

export const FooterSocials = () => {
  return (
    <footer className="mt-10 pb-24 sm:pb-20 px-4">
      <div className="max-w-5xl mx-auto glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden footer-social-glow">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_30%,rgba(236,72,153,0.14),transparent_34%),radial-gradient(circle_at_80%_65%,rgba(59,130,246,0.14),transparent_32%)]" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1 relative z-10">
            <p className="text-xs uppercase tracking-[0.18em] text-pink-200/90">
              Laten we verbinden
            </p>
            <p className="text-sm sm:text-base text-gray-200">
              Volg mij op mijn platformen
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-3 relative z-10">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    title={link.name}
                    className={`group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-100 transition-all hover:-translate-y-0.5 hover:bg-white/10 ${link.accent} focus:outline-none focus:ring-2 focus:ring-pink-400/80`}
                  >
                    <Icon className="text-lg transition-transform duration-200 group-hover:scale-110" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};
