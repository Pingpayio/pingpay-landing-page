
import React, { useEffect, useState, useRef, useCallback } from "react";
import UseCaseCard, { UseCaseCardProps } from "./UseCaseCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel";

const UseCasesCarousel: React.FC = () => {
  // State to store randomized use cases
  const [useCases, setUseCases] = useState<UseCaseCardProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<number | null>(null);

  // All use cases with consistent background color
  const allUseCases: UseCaseCardProps[] = [
    {
      title: "E-Commerce",
      description: "Accept crypto payments on your online store from any chain, settled instantly.",
      imageSrc: "/lovable-uploads/dc224d9f-ab71-4d25-bbdf-2a8d39dfb720.png",
    },
    {
      title: "IRL Payments",
      description: "Enable fast, wallet-to-wallet crypto payments for in-person purchases anywhere.",
      imageSrc: "/lovable-uploads/bf2c7584-3ae7-4197-a814-36fed986bd64.png",
    },
    {
      title: "Savings Pots",
      description: "Create automated recurring payments to organise and grow your crypto savings.",
      imageSrc: "/lovable-uploads/0943ab13-2c96-4b77-8de0-cb1b123d7c5d.png",
    },
    {
      title: "Digital Services",
      description: "Sell digital goods or services and get paid directly in crypto instantly.",
      imageSrc: "/lovable-uploads/723d566c-634a-449e-acdd-467d35704424.png",
    },
    {
      title: "Bill Splitting",
      description: "Split bills with friends and settle up instantly with crypto, no math needed.",
      imageSrc: "/lovable-uploads/9fc4b611-658a-4925-b1fa-31640038cc6e.png",
    },
    {
      title: "In-app Purchases",
      description: "Let users buy in-game items, features, or credits using any token or wallet.",
      imageSrc: "/lovable-uploads/c1a66de4-1adf-438b-a944-54d5fc1c0a16.png",
    },
    {
      title: "Subscriptions",
      description: "Automate recurring crypto payments for SaaS, creators, or memberships.",
      imageSrc: "/lovable-uploads/adecacb6-2b8d-42b8-83b7-e96ffd927ecc.png",
    },
    {
      title: "Enterprise",
      description: "Custom payment flows and dashboards for teams leveraging crypto.",
      imageSrc: "/lovable-uploads/bbd8fd07-bc11-4018-b211-42785e570fb4.png",
    },
    {
      title: "Event Ticketing",
      description: "Sell, mint, and scan event tickets with crypto through NFT tickets.",
      imageSrc: "/lovable-uploads/63efbc89-1e9e-442d-a1ae-c65a3fbc6846.png",
    },
    {
      title: "AI-commerce",
      description: "Enabling secure agent-to-agent payment flows, to get agents paid.",
      imageSrc: "/lovable-uploads/051f5c43-8963-4df7-b8e0-00f5da2d23b5.png",
    },
    {
      title: "Invoicing",
      description: "Send branded crypto invoices with due dates, itemisation, and checkout.",
      imageSrc: "/lovable-uploads/f3ae69a7-9b8c-44d4-a32d-76c482fe4f70.png",
    }
  ];

  // Randomize use cases on component mount
  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleUseCases = (array: UseCaseCardProps[]): UseCaseCardProps[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Create a repeated array for continuous scrolling effect
    const repeatedUseCases = [...shuffleUseCases(allUseCases), ...shuffleUseCases(allUseCases)];
    setUseCases(repeatedUseCases);
    
    // Set loaded state after a small delay to ensure DOM is ready
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const startAutoScroll = useCallback(() => {
    if (api && autoScrollIntervalRef.current === null && !isPaused) {
      autoScrollIntervalRef.current = window.setInterval(() => {
        api.scrollNext();
      }, 3500); // Scroll every 3.5 seconds (slightly different from crypto carousel for variety)
    }
  }, [api, isPaused]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current !== null) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  // Set up auto-scrolling when API is ready
  useEffect(() => {
    if (api) {
      startAutoScroll();
    }
    
    return () => {
      stopAutoScroll();
    };
  }, [api, startAutoScroll, stopAutoScroll]);

  // Handle mouse interactions
  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoScroll();
  };

  return (
    <div 
      className="px-4 md:px-10 w-full max-w-[1000px] mx-auto overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {isLoaded && (
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
            slidesToScroll: 1
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {useCases.map((useCase, index) => (
              <CarouselItem 
                key={`${useCase.title}-${index}`}
                className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="h-full use-case-card">
                  <UseCaseCard
                    title={useCase.title}
                    description={useCase.description}
                    imageSrc={useCase.imageSrc}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default UseCasesCarousel;
