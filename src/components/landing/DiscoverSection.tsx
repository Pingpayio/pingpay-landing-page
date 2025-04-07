
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

  // Content for the carousel - images and text
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=300",
      title: "Earn Passive Income",
      description: "Supply assets and earn attractive yields from borrowers."
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=300",
      title: "Flexible Borrowing",
      description: "Access liquidity with your crypto as collateral."
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=300",
      title: "Low Transaction Fees",
      description: "Enjoy minimal gas fees on our optimized protocol."
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=300",
      title: "Secure Protocol",
      description: "Built with enterprise-grade security and fully audited."
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=300",
      title: "Multi-Chain Support",
      description: "Use your preferred blockchain network seamlessly."
    }
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
              skipSnaps: false,
              dragFree: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="flex justify-center flex-col">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={`HyperLend Feature ${index + 1}`}
                      className="aspect-[4.98] object-cover w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(16,7,19,0.8)] flex flex-col justify-end p-6">
                      <h3 className="text-[rgba(202,234,229,1)] text-xl md:text-2xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[rgba(202,234,229,0.8)] text-sm md:text-base mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {api && <DiscoverCarouselIndicators api={api} itemCount={carouselItems.length} />}
          </Carousel>
        </div>
        <SupplyBorrowTabs />
      </div>
    </section>
  );
};

export default DiscoverSection;
