
import React from "react";

interface CarouselImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

/**
 * Basic image component for use in carousels with optimized loading.
 */
const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  style,
}) => (
  <img
    src={src}
    alt={alt}
    className={className}
    width={width}
    height={height}
    loading="lazy"
    style={style}
    draggable={false}
    decoding="async"
    fetchpriority="low"
  />
);

export default CarouselImage;
