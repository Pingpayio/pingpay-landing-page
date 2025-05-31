
import { useEffect } from "react";

export const useCardHeightAdjustment = () => {
  useEffect(() => {
    const adjustCardHeights = () => {
      // Reset heights first to get natural heights
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach((card) => {
        (card as HTMLElement).style.height = 'auto';
      });
      
      // Get the tallest card height
      let maxHeight = 0;
      featureCards.forEach((card) => {
        const height = (card as HTMLElement).offsetHeight;
        maxHeight = Math.max(maxHeight, height);
      });
      
      // Set all cards to the height of the tallest card
      if (maxHeight > 0) {
        featureCards.forEach((card) => {
          (card as HTMLElement).style.height = `${maxHeight}px`;
        });
      }
    };
    
    // Adjust heights initially and on window resize
    adjustCardHeights();
    window.addEventListener('resize', adjustCardHeights);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', adjustCardHeights);
    };
  }, []);
};
