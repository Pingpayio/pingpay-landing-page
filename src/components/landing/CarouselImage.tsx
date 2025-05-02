
import React from "react";

interface CarouselImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  onLoad?: () => void;
}

/**
 * Optimized image component for use in carousels with lazy loading and WebP support.
 */
const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  style,
  onLoad,
}) => {
  // Function to get WebP version if available
  const getOptimizedImageSrc = (src: string) => {
    // If already a WebP or SVG, use as is
    if (src.endsWith('.webp') || src.endsWith('.svg')) return src;
    
    // Check if this is a CDN URL that supports WebP conversion
    if (src.includes('cdn.builder.io') && !src.includes('format=webp')) {
      // Append format=webp parameter if not already present
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}format=webp`;
    }
    
    return src;
  };

  const optimizedSrc = getOptimizedImageSrc(src);

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      style={{
        ...style,
        backgroundColor: 'transparent',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        mixBlendMode: 'normal',
        transform: 'translate3d(0, 0, 0)',
        imageRendering: 'auto',
        backfaceVisibility: 'hidden',
        padding: 0,
        margin: 0,
        filter: 'none',
        WebkitFilter: 'none',
        WebkitMaskImage: 'none',
      }}
      draggable={false}
      decoding="async"
      fetchPriority="low"
      onLoad={onLoad}
    />
  );
};

export default CarouselImage;
