
import { useEffect } from "react";

export const useIntersectionObserver = () => {
  useEffect(() => {
    // Create an intersection observer to detect when feature cards come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the icon element in the card
            const iconElement = entry.target.querySelector('.feature-icon');
            if (iconElement) {
              // Add animation classes to the icon
              iconElement.classList.add('icon-animate');
            }
            // Stop observing once animation is applied
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    // Observe all feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer.observe(card);
    });

    // Clean up observer on component unmount
    return () => {
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);
};
