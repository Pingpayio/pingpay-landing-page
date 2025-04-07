
import React, { useEffect, useState } from 'react';

interface DiscoverCarouselIndicatorsProps {
  api: any;
  itemCount: number;
}

const DiscoverCarouselIndicators: React.FC<DiscoverCarouselIndicatorsProps> = ({
  api,
  itemCount
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    // Call once to set initial state
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: itemCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => {
            api?.scrollTo(index);
          }}
          className={`w-2 h-2 rounded-full mx-1 transition-all ${
            activeIndex === index
              ? "bg-[rgba(202,234,229,1)] w-4"
              : "bg-[rgba(202,234,229,0.5)]"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default DiscoverCarouselIndicators;
