
import React from "react";
import TokenImage from "./TokenImage";

interface TokenMaskProps {
  imagePath: string;
  id: string;
}

const TokenMask: React.FC<TokenMaskProps> = ({ imagePath, id }) => {
  // Container style with improved masking
  const containerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    borderRadius: '0'
  };

  // Image container with masking
  const imageContainerStyle: React.CSSProperties = {
    ...containerStyle,
    padding: '0',
    margin: '0',
    background: 'black',
    isolation: 'isolate',
    position: 'relative',
    width: '220px',
    height: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
  };

  return (
    <div 
      className="token-mask"
      style={imageContainerStyle}
    >
      <TokenImage imagePath={imagePath} alt={id} />
    </div>
  );
};

export default TokenMask;
