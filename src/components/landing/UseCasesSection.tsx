
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface UseCaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  textColor?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  bgColor,
  textColor = "text-[#3D315E]" 
}) => {
  return (
    <Card className={`h-full border-0 shadow-none ${bgColor} overflow-hidden rounded-3xl`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="rounded-2xl w-full aspect-square mb-6 flex items-center justify-center bg-transparent">
          <img src={imageSrc} alt={title} className="w-[90%] h-[90%] object-contain" />
        </div>
        <h3 className={`text-xl font-semibold ${textColor} mb-2 whitespace-normal break-words`}>{title}</h3>
        <p className="text-[#4A4A4A] text-sm pb-4 whitespace-normal break-words">{description}</p>
      </CardContent>
    </Card>
  );
};

const UseCasesSection: React.FC = () => {
  const useCases: UseCaseCardProps[] = [
    {
      title: "E-Commerce",
      description: "Accept crypto payments for any product or digital assets. Instant settlement to your account from any chain.",
      imageSrc: "/lovable-uploads/09d92c44-0c0f-420a-ada8-98dc2e90279b.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the e-commerce image
    },
    {
      title: "Event Ticketing",
      description: "Sell tickets for events with instant crypto payments and the option to issue NFTs as tickets.",
      imageSrc: "/lovable-uploads/02221691-f97d-47be-9365-e7afe8fdc1c6.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the event ticketing image
    },
    {
      title: "AI-Commerce",
      description: "Facilitate payments for AI-generated content and services with seamless crypto transactions.",
      imageSrc: "/lovable-uploads/efc9a025-def3-4f5e-934a-c696de8a7f26.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the AI-commerce image
    },
    {
      title: "Enterprise Payments",
      description: "Streamlined cross-border payments for businesses with reduced fees and transparent tracking.",
      imageSrc: "/lovable-uploads/747eded5-8780-48f1-91df-a0e7a66058d3.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the enterprise payments image
    },
    {
      title: "Digital Services",
      description: "Secure payment solutions for freelancers and digital service providers with global reach.",
      imageSrc: "/lovable-uploads/75531257-3124-4ed2-bbfa-d8ecece7b30a.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the digital services image
    },
    {
      title: "Subscriptions",
      description: "Enable recurring crypto payments from any chain for subscriptions to your products or services.",
      imageSrc: "/lovable-uploads/caf4473a-ce87-466c-b031-f724bf54199c.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the subscriptions image
    },
    {
      title: "In Person Payments",
      description: "Enable real-world crypto payments with quick point-of-sale solutions for physical businesses.",
      imageSrc: "/lovable-uploads/cabfa6c9-dd1b-495f-9622-b5b81477d03e.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the in-person payments image
    },
    {
      title: "Bill Splitting",
      description: "Create and manage invoices with built-in bill splitting features for group expenses.",
      imageSrc: "/lovable-uploads/db5378b9-bcfa-418b-ac28-91443b335ee9.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the bill splitting image
    }
  ];

  return (
    <section 
      id="use-cases"
      className="w-full flex flex-col items-center pt-12 md:pt-28 pb-12 md:pb-20 px-4 md:px-10 relative z-10 overflow-hidden"
      style={{
        minHeight: "auto",
        maxHeight: "840px",
        backgroundColor: "#100713"
      }}
    >
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#AB9FF2] text-2xl md:text-4xl font-bold leading-relaxed text-center max-w-full">
            Payments for All Use Cases
          </h2>
        </div>
        
        <div className="px-4 md:px-10 w-full max-w-[1000px] mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-full">
                    <UseCaseCard
                      title={useCase.title}
                      description={useCase.description}
                      imageSrc={useCase.imageSrc}
                      bgColor={useCase.bgColor}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
