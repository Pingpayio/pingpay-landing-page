import React from "react";
import { ShoppingCart, Ticket, Repeat, Rocket, Building2, Laptop, ShoppingBag, FileText, CreditCard } from "lucide-react";
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
      <CardContent className="p-0">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl w-full aspect-square mb-6 flex items-center justify-center p-6 pt-9">
            {icon}
          </div>
          <div className="px-6 pb-9">
            <h3 className={`text-xl font-semibold ${textColor} mb-2`}>{title}</h3>
            <p className="text-[#4A4A4A] text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const UseCasesSection: React.FC = () => {
  const useCases: UseCaseCardProps[] = [
    {
      title: "E-Commerce",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <ShoppingCart className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Event Ticketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <Ticket className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "AI-Commerce",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <Laptop className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Payments for Enterprise",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <Building2 className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-indigo-50"
    },
    {
      title: "Digital Services + Freelancing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <Laptop className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Subscriptions + Memberships",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <Repeat className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "In-App Purchases",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <ShoppingBag className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Invoicing + Bill Splitting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <FileText className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-indigo-50"
    },
    {
      title: "IRL Payments",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nunc est dignissim nunc, in blandit magna nisi vel magna.",
      icon: <CreditCard className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section 
      className="bg-[#100713] self-stretch flex w-full flex-col items-center pt-12 md:pt-28 pb-12 md:pb-20 px-4 md:px-10 max-w-full"
      style={{
        minHeight: "auto",
        maxHeight: "840px"
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
                        icon={useCase.icon}
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
                        icon={useCase.icon}
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

      {/* No need for the local style tag since we're using the global CSS animation */}
    </section>
  );
};

export default UseCasesSection;
