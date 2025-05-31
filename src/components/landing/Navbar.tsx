
import React, { useState } from "react";
import WaitlistModal from "./WaitlistModal";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useNavigation } from "@/hooks/useNavigation";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopMenu from "./navbar/DesktopMenu";
import NavbarActions from "./navbar/NavbarActions";
import MobileMenu from "./navbar/MobileMenu";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const { isNavScrolled } = useNavbarScroll();
  const { scrollToSection, scrollToTop } = useNavigation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const handleScrollToTop = () => {
    scrollToTop();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleScrollToSection = (id: string, alignNavbarBottom?: boolean) => {
    setMobileMenuOpen(false); // Close mobile menu after clicking
    scrollToSection(id, alignNavbarBottom);
  };

  return (
    <>
      <nav 
        className={`fixed z-50 w-full transition-all duration-700 ease-in-out ${
          isNavScrolled 
            ? "top-0 bg-[#100713]" 
            : "top-[20px] md:top-[38px] bg-transparent flex justify-center"
        }`}
      >
        <div 
          className={`flex items-center h-[54px] ${
            isNavScrolled 
              ? "w-full transition-all duration-1000 ease-in-out" 
              : "w-full max-w-[1080px] rounded-full transition-all duration-700 ease-in-out"
          } bg-[#100713] px-4 md:px-8`}
        >
          <div className="flex items-center justify-between w-full">
            <NavbarLogo onScrollToTop={handleScrollToTop} />
            <DesktopMenu onScrollToSection={handleScrollToSection} />
            <NavbarActions 
              onOpenWaitlist={openWaitlistModal}
              mobileMenuOpen={mobileMenuOpen}
              onToggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onScrollToSection={handleScrollToSection}
      />
      
      <WaitlistModal isOpen={isWaitlistModalOpen} setIsOpen={setIsWaitlistModalOpen} />
    </>
  );
};

export default Navbar;
