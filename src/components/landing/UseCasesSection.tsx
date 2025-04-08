
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
      <CardContent className="py-5 px-4 flex flex-col items-center text-center">
        <div className="rounded-2xl w-full aspect-square mb-4 flex items-center justify-center bg-transparent">
          <img src={imageSrc} alt={title} className="w-[85%] h-[85%] object-contain" />
        </div>
        <h3 className={`text-xl font-semibold ${textColor} mb-1 whitespace-normal break-words`}>{title}</h3>
        <p className="text-[#4A4A4A] text-sm whitespace-normal break-words max-h-[4.5em] line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

const UseCasesSection: React.FC = () => {
  const useCases: UseCaseCardProps[] = [
    {
      title: "E-Commerce",
      description: "Accept crypto payments for digital and physical products. Quick settlement from any blockchain network.",
      imageSrc: "/lovable-uploads/09d92c44-0c0f-420a-ada8-98dc2e90279b.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the e-commerce image
    },
    {
      title: "Event Ticketing",
      description: "Sell event tickets with instant crypto payments. Optional NFT tickets for enhanced security and collectibility.",
      imageSrc: "/lovable-uploads/02221691-f97d-47be-9365-e7afe8fdc1c6.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the event ticketing image
    },
    {
      title: "AI-Commerce",
      description: "Enable payments for AI services and content. Seamless transactions for next-gen digital offerings.",
      imageSrc: "/lovable-uploads/efc9a025-def3-4f5e-934a-c696de8a7f26.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the AI-commerce image
    },
    {
      title: "Enterprise",
      description: "Streamlined cross-border B2B payments. Reduce fees and gain full transaction transparency.",
      imageSrc: "/lovable-uploads/747eded5-8780-48f1-91df-a0e7a66058d3.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the enterprise payments image
    },
    {
      title: "Digital Services",
      description: "Secure payment solutions for freelancers. Reach clients globally with instant settlements.",
      imageSrc: "/lovable-uploads/75531257-3124-4ed2-bbfa-d8ecece7b30a.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the digital services image
    },
    {
      title: "Subscriptions",
      description: "Enable recurring crypto payments. Support multiple chains for subscription-based offerings.",
      imageSrc: "/lovable-uploads/caf4473a-ce87-466c-b031-f724bf54199c.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the subscriptions image
    },
    {
      title: "IRL Payments",
      description: "Quick point-of-sale crypto payments. Bring blockchain to physical retail environments.",
      imageSrc: "/lovable-uploads/cabfa6c9-dd1b-495f-9622-b5b81477d03e.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the in-person payments image
    },
    {
      title: "Bill Splitting",
      description: "Create and manage group expenses. Split bills efficiently with integrated payment tracking.",
      imageSrc: "/lovable-uploads/db5378b9-bcfa-418b-ac28-91443b335ee9.png",
      bgColor: "bg-[#f3eaff]" // Light purple that matches the bill splitting image
    }
  ];

  // Duplicate the use cases to create a continuous scrolling effect
  const duplicatedUseCases = [...useCases, ...useCases];

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
        
        <div className="px-4 md:px-10 w-full max-w-[1000px] mx-auto overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="flex whitespace-nowrap">
              {/* First set of use cases */}
              <div className="flex continuous-scroll">
                {useCases.map((useCase, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="shrink-0 pl-4 inline-flex flex-col items-center"
                    style={{ minWidth: "240px", maxWidth: "240px" }}
                  >
                    <div className="h-full">
                      <UseCaseCard
                        title={useCase.title}
                        description={useCase.description}
                        imageSrc={useCase.imageSrc}
                        bgColor={useCase.bgColor}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Second set of use cases - creates the continuous effect */}
              <div className="flex continuous-scroll">
                {useCases.map((useCase, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="shrink-0 pl-4 inline-flex flex-col items-center"
                    style={{ minWidth: "240px", maxWidth: "240px" }}
                  >
                    <div className="h-full">
                      <UseCaseCard
                        title={useCase.title}
                        description={useCase.description}
                        imageSrc={useCase.imageSrc}
                        bgColor={useCase.bgColor}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
