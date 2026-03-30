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
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@benji.r22",
    icon: FaTiktok,
  },
  {
    name: "GitHub",
    href: "https://github.com/NymPhixy",
    icon: FaGithub,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@RGBJanssenVisuals",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rgbjanssen/",
    icon: FaLinkedin,
  },
];

export const FooterSocials = () => {
  return (
    <footer className="mt-8 pb-24 sm:pb-20 px-4">
      <div className="max-w-5xl mx-auto glass-card rounded-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-300">Volg mij op mijn platformen</p>
          <ul className="flex flex-wrap items-center gap-3">
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
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-100 transition-all hover:-translate-y-0.5 hover:border-pink-400/60 hover:text-pink-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400/80"
                  >
                    <Icon className="text-lg" />
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
