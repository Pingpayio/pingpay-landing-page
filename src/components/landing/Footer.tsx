
import React from "react";

// Updated paths to logo & icons
const PING_LOGO = "/lovable-uploads/ee74f7f3-7dd6-4d45-a637-dace4ca34ded.png";
const X_ICON = "/lovable-uploads/305c55f4-2e66-48de-81d8-26fcf0ac08d7.png";

const Footer: React.FC = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer
      className="w-full flex flex-col md:flex-row items-stretch md:items-start justify-between px-4 md:px-10 bg-[#100713] border-t border-[#AB9FF2] max-w-[1080px] mx-auto"
      style={{
        minHeight: 120,
        backgroundColor: "#100713",
        paddingTop: 28,
        paddingBottom: 32,
      }}
    >
      {/* Left: Logo & subtext stacked */}
      <div className="flex flex-row md:flex-col gap-3 md:gap-2 items-center md:items-start justify-between md:justify-start flex-shrink-0 w-full md:w-auto">
        <div className="flex items-center gap-2">
          <button 
            onClick={scrollToTop} 
            className="cursor-pointer transition-transform hover:scale-105"
            aria-label="Scroll to top"
          >
            <img
              src={PING_LOGO}
              alt="Ping Logo"
              className="h-6 md:h-6"
              style={{ height: 24, width: "auto" }}
              draggable={false}
            />
          </button>
        </div>
        <div>
          <span className="text-xs md:text-sm text-white font-medium select-none block leading-[1.4] whitespace-nowrap overflow-hidden text-ellipsis">
            The Payment Layer for the Future of Commerce
          </span>
        </div>
      </div>
      
      {/* Right: Only X icon with proper alignment */}
      <div className="flex md:self-center h-full justify-center md:justify-end items-center w-full md:w-auto pl-0 md:pl-8 mt-4 md:mt-0">
        <div className="flex flex-row justify-center md:justify-end items-center" style={{ minHeight: 28 }}>
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
              className="h-4 w-4 md:h-[18px] md:w-[18px] "
              style={{ height: 16, width: 16 }}
              draggable={false}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
