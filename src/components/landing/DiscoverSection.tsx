
import React, { useEffect, useState } from "react";
import SupplyBorrowTabs from "./SupplyBorrowTabs";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import DiscoverCarouselIndicators from "./DiscoverCarouselIndicators";

const DiscoverSection: React.FC = () => {
  const [api, setApi] = useState<any>(null);

  // Auto-advance carousel effect
  useEffect(() => {
    if (!api) return;

    // Function to advance to next slide
    const autoPlay = () => {
      api.scrollNext();
    };

    // Set interval for auto-advancement (5 seconds)
    const interval = setInterval(autoPlay, 5000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [api]);

  // Images for the carousel
  const featureImages = [
    "https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/e645f633500c3d6f5658dd477ec92eb681c57003?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/e645f633500c3d6f5658dd477ec92eb681c57003?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/e645f633500c3d6f5658dd477ec92eb681c57003?placeholderIfAbsent=true"
  ];

  return (
    <section className="bg-[#100713] self-stretch flex w-full flex-col items-center pt-16 pb-40 md:pt-20 md:pb-80 px-4 md:px-10 max-w-full">
      <div className="flex mb-8 md:mb-12 w-full max-w-[777px] flex-col items-center">
        <h2 className="text-[rgba(202,234,229,1)] text-2xl md:text-4xl font-bold leading-relaxed text-center max-w-full">
          Discover HyperLend
        </h2>
        <p className="text-[rgba(202,234,229,1)] text-base md:text-xl font-normal leading-normal md:leading-none text-center mt-2 max-w-full px-4">
          Grow your assets. Access flexible borrowing.
        </p>
        <div className="w-full px-4 md:px-0 mt-8 md:mt-16">
          <Carousel
            setApi={setApi}
            opts={{ 
              loop: true,
              align: "center",
              skipSnaps: false
            }}
            className="w-full"
          >
            <CarouselContent>
              {featureImages.map((image, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`HyperLend Feature ${index + 1}`}
                    className="aspect-[4.98] object-contain w-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {api && <DiscoverCarouselIndicators api={api} itemCount={featureImages.length} />}
          </Carousel>
        </div>
        <SupplyBorrowTabs />
      </div>
    </section>
  );
};

export default DiscoverSection;
