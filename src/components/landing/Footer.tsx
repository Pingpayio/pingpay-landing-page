
import React from "react";

// Paths to logo & icons
const PING_LOGO = "/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png";
// Replace these with your uploaded X and GitBook images:
const X_ICON = "/lovable-uploads/03381f3c-d4f0-453c-8bd9-7826e24aefcd.png";
const GITBOOK_ICON = "/lovable-uploads/02221691-f97d-47be-9365-e7afe8fdc1c6.png";

const Footer: React.FC = () => (
  <footer
    className="w-full h-[120px] flex items-center justify-between px-4 md:px-10 bg-[#100713] border-t border-[#24113d] max-w-[1080px] mx-auto"
    style={{ minHeight: 120, backgroundColor: "#100713" }}
  >
    {/* Left: Logo & wordmark */}
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-2">
        {/* Ping Logo (same height as in NavBar!) */}
        <img
          src={PING_LOGO}
          alt="Ping Logo"
          className="h-6" // Same as navbar logo height
          style={{ height: 24, width: "auto" }}
          draggable={false}
        />
        <span className="text-xl font-bold text-white ml-2 tracking-wide select-none">
          Ping
        </span>
      </div>
      <span className="text-sm text-[#E9DFFC] font-normal mt-1 ml-0.5">
        The Payment Layer for the Future of Commerce
      </span>
    </div>

    {/* Right: Links and Heading */}
    <div className="flex flex-col items-end gap-2 h-full justify-center">
      <span className="text-white font-medium text-base mb-1.5 select-none">
        Brand Kit
      </span>
      <div className="flex items-center gap-4 mt-1">
        {/* X social */}
        <a
          href="https://x.com/pingpay_io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ping on X"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={X_ICON}
            alt="X Icon"
            className="h-6 w-6"
            style={{ height: 24, width: 24 }}
            draggable={false}
          />
        </a>
        {/* GitBook */}
        <a
          href="https://app.gitbook.com/o/JZWLv0QExumDT4rlFzE4/s/ping"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ping on GitBook"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={GITBOOK_ICON}
            alt="GitBook Icon"
            className="h-6 w-6"
            style={{ height: 24, width: 24 }}
            draggable={false}
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

