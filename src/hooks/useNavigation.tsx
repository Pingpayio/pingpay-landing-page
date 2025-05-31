
import { useCallback } from "react";

export const useNavigation = () => {
  /**
   * Scrolls to a section, and optionally aligns the
   * bottom of the navbar with the top of the section.
   * @param id string - section id
   * @param alignNavbarBottom boolean - if true, bottom of navbar aligns with top of section
   */
  const scrollToSection = useCallback((id: string, alignNavbarBottom: boolean = false) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 54;

    if (element) {
      const sectionTop = element.getBoundingClientRect().top + window.scrollY;
      if (alignNavbarBottom) {
        // Scroll so that bottom of navbar coincides with top of section
        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: 'smooth'
        });
      } else {
        // Default: classic smooth scroll but adjust to avoid navbar overlap
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          window.scrollBy({ top: -navbarHeight, behavior: 'instant' as ScrollBehavior });
        }, 400);
      }
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToSection, scrollToTop };
};
