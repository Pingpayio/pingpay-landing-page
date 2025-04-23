
import React, { useState } from "react";
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
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Card className={`h-full border-0 shadow-none ${bgColor} overflow-hidden rounded-3xl`}>
      <CardContent className="py-5 px-4 flex flex-col items-center text-center h-full">
        <div className="rounded-2xl w-full aspect-square mb-4 flex items-center justify-center bg-transparent relative">
          {/* Blurred placeholder while loading */}
          {!imgLoaded && (
            <div
              aria-hidden
              className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-[#cfc0fa77] via-[#ede3ff99] to-[#e8e7fa66] blur-xl"
              style={{
                borderRadius: '1rem',
                transition: "opacity .3s",
                opacity: imgLoaded ? 0 : 1,
              }}
            />
          )}
          <img 
            src={imageSrc}
            alt={title}
            className="w-[95%] h-[95%] object-contain relative z-10"
            width={160}
            height={160}
            loading="lazy"
            style={{
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 0.3s"
            }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(true)}
          />
        </div>
        <h3 className={`text-xl font-semibold ${textColor} mb-1 whitespace-normal break-words`}>{title}</h3>
        <p className="text-[#4A4A4A] text-sm whitespace-normal break-words max-h-[4.5em] line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default UseCaseCard;
