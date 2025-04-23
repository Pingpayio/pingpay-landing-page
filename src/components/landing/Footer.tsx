
import React from "react";

// Paths to logo & icons
const PING_LOGO = "/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png";
const X_ICON = "/lovable-uploads/305c55f4-2e66-48de-81d8-26fcf0ac08d7.png";
const GITBOOK_ICON = "/lovable-uploads/b82a9879-1700-4db3-b219-6012eb839715.png";

const Footer: React.FC = () => (
  <footer
    className="w-full flex items-start justify-between px-4 md:px-10 bg-[#100713] border-t border-[#24113d] max-w-[1080px] mx-auto"
    style={{
      minHeight: 120,
      backgroundColor: "#100713",
      paddingTop: 28,
      paddingBottom: 32,
    }}
  >
    {/* Left: Logo & subtext stacked */}
    <div className="flex flex-col gap-2 flex-shrink-0">
      <div className="flex items-center gap-2">
        <img
          src={PING_LOGO}
          alt="Ping Logo"
          className="h-6 select-none"
          style={{ height: 24, width: "auto" }}
          draggable={false}
        />
      </div>
      <div>
        <span className="text-sm text-[#E9DFFC] font-normal select-none block leading-[1.4]">
          The Payment Layer for the Future of Commerce
        </span>
      </div>
    </div>
    {/* Right: Headings + icons with vertical alignment */}
    <div className="flex flex-col h-full justify-between items-end flex-1 pl-8">
      <div className="flex flex-row gap-8">
        <button 
          className="text-white font-medium text-base select-none navbar-button hover:text-[#AB9FF2] transition-all duration-300"
        >
          Brand Kit
        </button>
        <button 
          className="text-white font-medium text-base select-none navbar-button hover:text-[#AB9FF2] transition-all duration-300"
        >
          Privacy Policy
        </button>
        <button 
          className="text-white font-medium text-base select-none navbar-button hover:text-[#AB9FF2] transition-all duration-300"
        >
          Terms &amp; Conditions
        </button>
      </div>
      {/* Social Icons (aligned horizontally w/ subtext) */}
      <div className="flex flex-row gap-4 mt-2 justify-end items-center" style={{ minHeight: 28 }}>
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
            className="h-[20px] w-[20px]"
            style={{ height: 20, width: 20 }}
            draggable={false}
          />
        </a>
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
            className="h-[20px] w-[20px]"
            style={{ height: 20, width: 20 }}
            draggable={false}
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

