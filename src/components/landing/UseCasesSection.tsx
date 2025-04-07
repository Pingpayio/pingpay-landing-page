import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShoppingCart, Ticket, Repeat, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  title, 
  description, 
  icon, 
  bgColor,
  textColor = "text-[#3D315E]" 
}) => {
  return (
    <Card className={`h-full border-0 shadow-none ${bgColor} overflow-hidden rounded-3xl`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl w-full aspect-square mb-6 flex items-center justify-center">
          {icon}
        </div>
        <h3 className={`text-xl font-semibold ${textColor} mb-2`}>{title}</h3>
        <p className="text-[#4A4A4A] text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const UseCasesSection: React.FC = () => {
  const useCases: UseCaseCardProps[] = [
    {
      title: "E-Commerce",
      description: "Accept crypto payments for any product or digital assets. Instant settlement to your account from any chain.",
      icon: <ShoppingCart className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Event Ticketing",
      description: "Sell tickets for events with instant crypto payments and the option to issue NFTs as tickets.",
      icon: <Ticket className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Subscriptions",
      description: "Enable recurring crypto payments from any chain for subscriptions to your products or services.",
      icon: <Repeat className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Pre-Sales",
      description: "Launch a Pre-Sale campaign for your NFT, token, or product ahead of your launch.",
      icon: <Rocket className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="bg-white self-stretch flex w-full flex-col items-center pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-10 max-w-full">
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#100713] text-2xl md:text-4xl font-bold leading-relaxed text-center max-w-full">
            Payments for All Use Cases
          </h2>
        </div>
        
        <div className="px-4 md:px-10 w-full max-w-[1000px] mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-6 md:-ml-8">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-6 md:pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <UseCaseCard
                      title={useCase.title}
                      description={useCase.description}
                      icon={useCase.icon}
                      bgColor={useCase.bgColor}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="bg-[#AB9FF2] hover:bg-[#9B87F5] text-white px-8 py-2 rounded-full text-sm font-medium transition-colors">
            See all use cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
