
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  comingSoon?: boolean;
  roadmap?: boolean;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  comingSoon,
  roadmap,
  index
}) => {
  return (
    <div 
      className="feature-card bg-white/20 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:bg-white/30 transition-all duration-300 border border-white/30 flex flex-col"
    >
      <div className="flex items-start gap-5 h-full">
        <div className="feature-icon flex-shrink-0">
          {React.cloneElement(icon, {
            className: `h-10 w-10 text-[#AB9FF2] transition-all duration-700 ease-out`,
          })}
        </div>
        <div className="flex-1 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-xl font-semibold text-[#000000]">{title}</h3>
            {comingSoon && (
              <Badge 
                variant="outline" 
                className="bg-[#AB9FF2]/20 text-[#4A3A6A] border-[#AB9FF2]/50 flex items-center gap-1 px-2 py-0.5 text-xs font-medium animate-pulse"
              >
                <Clock className="h-3 w-3" />
                Coming Soon
              </Badge>
            )}
            {roadmap && (
              <Badge 
                variant="outline" 
                className="bg-[#AB9FF2]/20 text-[#4A3A6A] border-[#AB9FF2]/50 flex items-center gap-1 px-2 py-0.5 text-xs font-medium animate-pulse"
              >
                <MapPin className="h-3 w-3" />
                Roadmap
              </Badge>
            )}
          </div>
          <p className="text-[#4A4A4A] text-sm leading-relaxed flex-grow">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
