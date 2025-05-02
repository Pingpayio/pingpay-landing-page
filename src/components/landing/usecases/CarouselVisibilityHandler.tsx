
import { useEffect } from "react";
import { handleVisibilityChange } from "@/utils/carouselUtils";

const CarouselVisibilityHandler = () => {
  // Pause animations when tab is not visible
  useEffect(() => {
    const handleVisibilityChangeEvent = () => {
      const isHidden = document.hidden;
      handleVisibilityChange(isHidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChangeEvent);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChangeEvent);
    };
  }, []);

  // This is just a utility component for side effects, no rendering needed
  return null;
};

export default CarouselVisibilityHandler;
