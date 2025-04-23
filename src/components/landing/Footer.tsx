
import React from "react";

// Logo used in header
const PING_LOGO =
  "https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/28094319b78a85233278e4f17a4e3e2b46bcc4fe?placeholderIfAbsent=true";

// Social icon images provided by user
const X_ICON = "/lovable-uploads/f4b8b8db-a261-41d1-ab5f-fecf944c6950.png";
const GITBOOK_ICON = "/lovable-uploads/e3bf95a8-5eb8-4d94-9923-e9d1711b2556.png";

const footerLinks = [
  { heading: "Blog", href: "#blog" },
  { heading: "Brand Kit", href: "#brand-kit" },
  { heading: "Privacy Policy", href: "#privacy-policy" },
  { heading: "Terms and Conditions", href: "#terms-and-conditions" },
];

const SOCIALS = [
  {
    label: "X (formerly Twitter)",
    href: "https://x.com/ping_payments",
    img: X_ICON,
  },
  {
    label: "Gitbook Documentation",
    href: "https://ping.gitbook.io",
    img: GITBOOK_ICON,
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full h-[120px] min-h-[120px] max-h-[120px] bg-[#100713] border-t border-white/10 flex items-center justify-center px-4 md:px-0 text-white"
      style={{ boxSizing: "border-box" }}
    >
      <div className="w-full max-w-[1080px] flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
        {/* Left: Logo & Headings */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
          {/* Ping Logo */}
          <div className="flex items-center gap-2">
            <img
              src={PING_LOGO}
              alt="Ping Logo"
              className="h-9 w-auto rounded-[7px] shadow-md object-contain"
              style={{ background: "transparent" }}
            />
            <span className="font-semibold text-lg tracking-tight text-white">Ping</span>
          </div>
          {/* Headings */}
          <div className="flex flex-wrap items-center gap-2 md:gap-6 mt-2 md:mt-0">
            {footerLinks.map(link => (
              <a
                key={link.heading}
                href={link.href}
                className="text-white/90 hover:text-[#AB9FF2] font-medium text-base transition-colors px-1 py-1"
                style={{ textUnderlineOffset: 3 }}
              >
                {link.heading}
              </a>
            ))}
          </div>
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {SOCIALS.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="transition-transform hover:scale-110 ml-1"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={social.img}
                alt={social.label}
                className="h-6 w-6 object-contain"
                style={{ minWidth: 24, minHeight: 24 }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
