
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface UseCaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor?: string; // Make this optional since we'll use a consistent one
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
  
  return (
    <Card className={`h-full border-0 shadow-none ${bgColor} overflow-hidden rounded-3xl`}>
      <CardContent className="py-5 px-4 flex flex-col items-center text-center">
        <div className="rounded-2xl w-full aspect-square mb-4 flex items-center justify-center bg-transparent">
          <img src={imageSrc} alt={title} className="w-[95%] h-[95%] object-contain" />
        </div>
        <h3 className={`text-lg sm:text-xl font-semibold ${textColor} mb-1`}>{title}</h3>
        <p className="text-[#4A4A4A] text-xs sm:text-sm whitespace-normal break-words max-h-[4.5em] line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

const UseCasesSection: React.FC = () => {
  const isMobile = useIsMobile();
  // All use cases with consistent background color
  const allUseCases: UseCaseCardProps[] = [
    {
      title: "AI-commerce",
      description: "Enable payments for AI services and content. Seamless transactions for next-gen digital offerings.",
      imageSrc: "/lovable-uploads/051f5c43-8963-4df7-b8e0-00f5da2d23b5.png", // AI-commerce image
    },
    {
      title: "Enterprise",
      description: "Streamlined cross-border B2B payments. Reduce fees and gain full transaction transparency.",
      imageSrc: "/lovable-uploads/bbd8fd07-bc11-4018-b211-42785e570fb4.png", // Enterprise image
    },
    {
      title: "Digital Services",
      description: "Secure payment solutions for freelancers. Reach clients globally with instant settlements.",
      imageSrc: "/lovable-uploads/723d566c-634a-449e-acdd-467d35704424.png", // Digital Services image
    },
    {
      title: "Subscriptions",
      description: "Enable recurring crypto payments. Support multiple chains for subscription-based offerings.",
      imageSrc: "/lovable-uploads/adecacb6-2b8d-42b8-83b7-e96ffd927ecc.png", // Subscriptions image
    },
    {
      title: "IRL Payments",
      description: "Quick point-of-sale crypto payments. Bring blockchain to physical retail environments.",
      imageSrc: "/lovable-uploads/bf2c7584-3ae7-4197-a814-36fed986bd64.png", // IRL Payments image
    },
    {
      title: "Bill Splitting",
      description: "Create and manage group expenses. Split bills efficiently with integrated payment tracking.",
      imageSrc: "/lovable-uploads/9fc4b611-658a-4925-b1fa-31640038cc6e.png", // Bill Splitting image
    },
    {
      title: "E-Commerce",
      description: "Accept crypto payments for digital and physical products. Quick settlement from any blockchain network.",
      imageSrc: "/lovable-uploads/dc224d9f-ab71-4d25-bbdf-2a8d39dfb720.png", // E-commerce image
    },
    {
      title: "Event Ticketing",
      description: "Sell event tickets with instant crypto payments. Optional NFT tickets for enhanced security and collectibility.",
      imageSrc: "/lovable-uploads/63efbc89-1e9e-442d-a1ae-c65a3fbc6846.png", // Event Ticketing image
    },
    {
      title: "Invoicing",
      description: "Generate and send professional crypto invoices. Automated payment tracking and reconciliation.",
      imageSrc: "/lovable-uploads/f3ae69a7-9b8c-44d4-a32d-76c482fe4f70.png", // Invoicing image
    },
    {
      title: "Savings Pots",
      description: "Create dedicated crypto savings funds. Set goals and track progress with automated allocations.",
      imageSrc: "/lovable-uploads/0943ab13-2c96-4b77-8de0-cb1b123d7c5d.png", // Savings Pots image
    },
    {
      title: "In-app Purchases",
      description: "Integrate seamless in-app crypto payments. Enhance user experience with quick transaction flows.",
      imageSrc: "/lovable-uploads/c1a66de4-1adf-438b-a944-54d5fc1c0a16.png", // In-app Purchases image
    }
  ];

  // State to store randomized use cases
  const [useCases, setUseCases] = useState<UseCaseCardProps[]>([]);

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

    setUseCases(shuffleUseCases(allUseCases));
  }, []);

  return (
    <section 
      id="use-cases"
      className="w-full flex flex-col items-center pt-12 md:pt-28 pb-12 md:pb-20 px-4 md:px-10 relative z-10 overflow-hidden"
      style={{
        minHeight: isMobile ? "auto" : "900px",
        backgroundColor: "#100713"
      }}
    >
      <div className="max-w-[1080px] mx-auto w-full h-full flex flex-col">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[#AB9FF2] text-2xl md:text-4xl font-bold leading-relaxed text-center max-w-full">
            Payments for All Use Cases
          </h2>
        </div>
        
        <div className="px-4 md:px-10 w-full max-w-[1000px] mx-auto overflow-hidden flex-grow flex items-center">
          <div className="relative overflow-hidden w-full">
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
