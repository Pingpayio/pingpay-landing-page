
import React from "react";

interface TokenImageProps {
  imagePath: string;
  alt: string;
}

const TokenImage: React.FC<TokenImageProps> = ({ imagePath, alt }) => {
  // Image styling for consistent sizing
  const imageStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    width: '65%',
    height: '65%',
    objectFit: 'contain',
    display: 'block',
    mixBlendMode: 'normal',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <img 
      src={imagePath}
      alt={alt}
      className="token-image"
      style={imageStyle}
      loading="lazy"
    />
  );
};

export default TokenImage;
