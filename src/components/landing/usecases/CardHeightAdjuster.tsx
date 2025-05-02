
import React, { useEffect } from "react";
import { debounce } from "@/utils/carouselUtils";

interface CardHeightAdjusterProps {
  useCases: any[];
  isVisible: boolean;
}

const CardHeightAdjuster: React.FC<CardHeightAdjusterProps> = ({ useCases, isVisible }) => {
  // Function to ensure all use case cards have the same height
  useEffect(() => {
    const adjustCardHeights = () => {
      // Reset heights first
      const cards = document.querySelectorAll('.use-case-card');
      cards.forEach((card) => {
        (card as HTMLElement).style.height = 'auto';
      });
      
      // Group cards by their container (first/second set)
      const firstSet = document.querySelectorAll('[data-set="first"] .use-case-card');
      const secondSet = document.querySelectorAll('[data-set="second"] .use-case-card');
      
      // Find max height in each set
      let maxHeightFirst = 0;
      firstSet.forEach((card) => {
        maxHeightFirst = Math.max(maxHeightFirst, (card as HTMLElement).offsetHeight);
      });
      
      let maxHeightSecond = 0;
      secondSet.forEach((card) => {
        maxHeightSecond = Math.max(maxHeightSecond, (card as HTMLElement).offsetHeight);
      });
      
      // Use the overall max height for all cards
      const maxHeight = Math.max(maxHeightFirst, maxHeightSecond);
      
      if (maxHeight > 0) {
        cards.forEach((card) => {
          (card as HTMLElement).style.height = `${maxHeight}px`;
        });
      }
    };
    
    // Run the adjustment after cards render
    setTimeout(adjustCardHeights, 200);
    
    // Add resize listener
    const debouncedResize = debounce(adjustCardHeights, 250);
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [useCases, isVisible]);

  // This is just a utility component for side effects, no rendering needed
  return null;
};

export default CardHeightAdjuster;
