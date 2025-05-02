import { useState, useEffect, useRef, RefObject } from 'react';

interface UseCarouselVisibilityProps {
  immediatelyVisible?: boolean;
}

export const useCarouselVisibility = ({ immediatelyVisible = false }: UseCarouselVisibilityProps = {}) => {
  const [isVisible, setIsVisible] = useState(immediatelyVisible);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Set up Intersection Observer to detect when carousel enters viewport
  useEffect(() => {
    // Set visible immediately if we're past the fold
    if (window.innerHeight > 800) {
      setIsVisible(true);
    }

    // Set up Intersection Observer with lower threshold for earlier detection
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to keep observing
          if (carouselRef.current) {
            observer.unobserve(carouselRef.current);
          }
        }
      },
      { threshold: 0.01, rootMargin: "100px" } // Lower threshold, bigger margin
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Force visibility check on mount and window resize
  useEffect(() => {
    const checkVisibility = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    
    checkVisibility();
    window.addEventListener('resize', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    
    // Safeguard - ensure visibility after 1s if still not visible
    const timer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1000);
    
    return () => {
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('scroll', checkVisibility);
      clearTimeout(timer);
    };
  }, [isVisible]);

  return { isVisible, carouselRef };
};
