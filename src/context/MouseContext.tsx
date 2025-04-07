
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface MouseContextType {
  cursorPosition: {
    x: number;
    y: number;
  };
}

export const MouseContext = createContext<MouseContextType>({
  cursorPosition: { x: 0, y: 0 },
});

interface MouseProviderProps {
  children: ReactNode;
}

export const MouseProvider: React.FC<MouseProviderProps> = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ cursorPosition }}>
      {children}
    </MouseContext.Provider>
  );
};
