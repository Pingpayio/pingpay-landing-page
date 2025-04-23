
import React from 'react';

// CSS styles for the carousel
export const CarouselStyles: React.FC = () => (
  <style>
    {`
      @media (max-width: 768px) {
        .carousel-item, .carousel-item img {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        .token-mask, .token-image {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      }
      
      .carousel-item, .carousel-item img {
        background-color: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        display: flex !important;
        min-height: 180px !important;
      }
      
      img {
        background-color: transparent !important;
        mix-blend-mode: normal !important;
      }
      
      .token-mask {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        overflow: hidden;
        display: flex !important;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        position: relative;
        visibility: visible !important;
        opacity: 1 !important;
      }

      /* Inner mask to ensure no purple lines are visible */
      .token-mask::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #000; /* Black shadow to cover any lines */
        pointer-events: none;
      }
      
      /* Ensure all token images have consistent size */
      .token-image {
        width: 75% !important;
        height: 75% !important;
        max-width: 75% !important;
        max-height: 75% !important;
        object-fit: contain !important;
        position: absolute !important;
        left: 50% !important;
        top: 50% !important;
        transform: translate(-50%, -50%) !important;
        visibility: visible !important;
        opacity: 1 !important;
        display: block !important;
      }
    `}
  </style>
);

// Container styles for transparent elements
export const containerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  borderRadius: '0',
  display: 'flex',
  visibility: 'visible',
  opacity: 1
};

// Standardized container size for all tokens
export const imageContainerStyle: React.CSSProperties = {
  ...containerStyle,
  padding: '0',
  margin: '0',
  background: 'transparent',
  isolation: 'isolate',
  position: 'relative',
  width: '180px',
  height: '180px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: '50%', // Circular mask
  visibility: 'visible',
  opacity: 1
};

// Standardized image style for consistent appearance
export const imageStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  width: '75%', // Fixed percentage for all images
  height: '75%', // Fixed percentage for all images
  objectFit: 'contain',
  display: 'block',
  mixBlendMode: 'normal',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
  visibility: 'visible',
  opacity: 1
};
