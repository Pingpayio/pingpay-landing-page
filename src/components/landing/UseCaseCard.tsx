
import React, { useState, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CarouselImage from "./CarouselImage";

export interface UseCaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor?: string; 
  textColor?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  imageSrc,
  textColor = "text-[#3D315E]"
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Use a consistent gradient background for all cards
  const bgColor = "bg-gradient-to-br from-[#e5deff] to-[#f3eaff]";
  
  return (
    <Card className={`h-full border-0 shadow-none ${bgColor} overflow-hidden rounded-3xl`}>
      <CardContent className="py-4 px-3 md:py-5 md:px-4 flex flex-col items-center text-center h-full">
        <div className="rounded-2xl w-full aspect-square mb-3 md:mb-4 flex items-center justify-center bg-transparent relative min-h-[140px] md:min-h-[160px]">
          <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <CarouselImage
              src={imageSrc}
              alt={title}
              className="w-[95%] h-[95%] object-contain relative z-10"
              width={160}
              height={160}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
        <h3 className={`text-lg md:text-xl font-semibold ${textColor} mb-1 whitespace-normal break-words`}>{title}</h3>
        <p className="text-sm md:text-sm text-[#4A4A4A] whitespace-normal break-words max-h-[4.5em] line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(UseCaseCard);
