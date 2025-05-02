
import React, { memo } from "react";
import UseCaseCard, { UseCaseCardProps } from "../UseCaseCard";

interface UseCaseCardSetProps {
  useCases: UseCaseCardProps[];
  setId: string;
  isVisible: boolean;
}

const UseCaseCardSet: React.FC<UseCaseCardSetProps> = ({ useCases, setId, isVisible }) => {
  return (
    <div 
      className={`flex ${isVisible ? 'continuous-scroll' : ''}`} 
      data-set={setId}
      style={{ 
        animationDuration: '25s',
        animationPlayState: 'running',
        willChange: 'transform',
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: '1000',
        perspective: '1000'
      }}
      aria-hidden={!isVisible}
    >
      {useCases.map((useCase, index) => (
        <div 
          key={`${setId}-${index}`} 
          className="shrink-0 pl-4 inline-flex flex-col items-center will-change-transform"
          style={{ 
            minWidth: "220px", 
            maxWidth: "240px",
            scrollSnapAlign: "start", // For better mobile scrolling
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full use-case-card">
            <UseCaseCard
              title={useCase.title}
              description={useCase.description}
              imageSrc={useCase.imageSrc}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(UseCaseCardSet);
