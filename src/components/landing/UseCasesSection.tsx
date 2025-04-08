
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
      bgColor: "bg-green-50"
    },
    {
      title: "Event Ticketing",
      description: "Sell tickets for events with instant crypto payments and the option to issue NFTs as tickets.",
      imageSrc: "/lovable-uploads/02221691-f97d-47be-9365-e7afe8fdc1c6.png",
      bgColor: "bg-purple-50"
    },
    {
      title: "AI-Commerce",
      description: "Facilitate payments for AI-generated content and services with seamless crypto transactions.",
      imageSrc: "/lovable-uploads/af84ea2a-7d32-49a8-9ec3-a2bf5653e48a.png",
      bgColor: "bg-blue-50"
    },
    {
      title: "Enterprise Payments",
      description: "Streamlined cross-border payments for businesses with reduced fees and transparent tracking.",
      imageSrc: "/lovable-uploads/f57eb7ec-40da-4869-84f1-3ed50f142b58.png",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Digital Services",
      description: "Secure payment solutions for freelancers and digital service providers with global reach.",
      imageSrc: "/lovable-uploads/880451e0-3bdf-4a06-b88f-92f7eb20a3a3.png",
      bgColor: "bg-green-50"
    },
    {
      title: "Subscriptions",
      description: "Enable recurring crypto payments from any chain for subscriptions to your products or services.",
      imageSrc: "/lovable-uploads/a7a2a7e6-e805-49c1-b1c2-ea9b31dfe576.png",
      bgColor: "bg-purple-50"
    },
    {
      title: "In Person Payments",
      description: "Enable real-world crypto payments with quick point-of-sale solutions for physical businesses.",
      imageSrc: "/lovable-uploads/98ff864b-1432-4439-8543-105ddfd0378a.png",
      bgColor: "bg-blue-50"
    },
    {
      title: "Bill Splitting",
      description: "Create and manage invoices with built-in bill splitting features for group expenses.",
      imageSrc: "/lovable-uploads/e4825f9e-413c-48c6-b966-50bcee348e04.png",
      bgColor: "bg-indigo-50"
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
        
        <div className="px-4 md:px-10 w-full max-w-[1000px] mx-auto overflow-hidden">
          <div className="relative overflow-hidden">
            {/* Using the same animation style as CryptoCarousel */}
            <div className="flex whitespace-nowrap">
              {/* First set of use cases */}
              <div className="flex continuous-scroll">
                {useCases.map((useCase, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="shrink-0 pl-4 inline-flex flex-col items-center"
                    style={{ width: "280px", height: "400px" }}
                  >
                    <div className="h-full w-full">
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
                    style={{ width: "280px", height: "400px" }}
                  >
                    <div className="h-full w-full">
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
