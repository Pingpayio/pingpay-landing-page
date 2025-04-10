
import React from 'react';

const CarouselStyles: React.FC = () => {
  return (
    <style>
      {`
        .carousel-item, .carousel-item img {
          background-color: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        img {
          background-color: transparent !important;
          mix-blend-mode: normal !important;
        }
        
        .token-mask {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000 !important;
          position: relative;
          isolation: isolate;
        }

        /* Enhanced inner mask with much thicker shadow to ensure no purple lines are visible */
        .token-mask::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          box-shadow: 0 0 0 15px #000;
          pointer-events: none;
          opacity: 1;
          z-index: 5;
        }
        
        /* Further reduced token image size */
        .token-image {
          width: 65% !important;
          height: 65% !important;
          max-width: 65% !important;
          max-height: 65% !important;
          object-fit: contain !important;
          position: absolute !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          z-index: 1;
          background-color: transparent !important;
          mix-blend-mode: normal !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        /* Additional wrapper with increased padding to prevent any bleeding */
        .carousel-item-wrapper {
          padding: 20px;
          background-color: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        /* Ensure the outer container is fully transparent too */
        .crypto-carousel-container {
          background-color: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
      `}
    </style>
  );
};

export default CarouselStyles;
