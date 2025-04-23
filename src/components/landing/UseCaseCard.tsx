
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
  // Use a consistent gradient background for all cards
  const bgColor = "bg-gradient-to-br from-[#e5deff] to-[#f3eaff]";
  
  return (
    <Card className={`h-full border-0 shadow-none ${bgColor} overflow-hidden rounded-3xl`}>
      <CardContent className="py-3 px-3 md:py-5 md:px-4 flex flex-col items-center text-center h-full">
        <div className="rounded-2xl w-full aspect-square mb-2 md:mb-4 flex items-center justify-center bg-transparent">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-[90%] h-[90%] md:w-[95%] md:h-[95%] object-contain" 
            loading="lazy"
          />
        </div>
        <h3 className={`text-lg md:text-xl font-semibold ${textColor} mb-1 whitespace-normal break-words`}>{title}</h3>
        <p className="text-xs md:text-sm text-[#4A4A4A] whitespace-normal break-words max-h-[4.5em] line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default UseCaseCard;
