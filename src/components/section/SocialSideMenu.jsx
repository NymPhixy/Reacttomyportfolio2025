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

export const SocialSideMenu = () => {
  return (
    <aside className="fixed left-3 top-1/2 -translate-y-1/2 z-30 hidden md:block">
      <div className="glass-card px-2 py-3 rounded-2xl">
        <ul className="flex flex-col gap-2">
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
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-gray-100 transition-all hover:-translate-y-0.5 hover:border-pink-400/60 hover:text-pink-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400/80"
                >
                  <Icon className="text-xl" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
