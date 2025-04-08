
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
  textColor = "text-[#1F2937]" 
}) => {
  return (
    <Card className={`h-full border-0 shadow-none ${bgColor} overflow-hidden rounded-3xl`}>
      <CardContent className="p-0">
        <div className="flex flex-col items-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl w-full aspect-square flex items-center justify-center p-9 pt-9">
            {icon}
          </div>
          <div className="px-9 pb-9 pt-6 text-center">
            <h3 className={`text-2xl font-semibold ${textColor} mb-4`}>{title}</h3>
            <p className={`${textColor} text-base leading-relaxed`}>{description}</p>
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
      description: "Accept crypto payments for any product or digital assets. Instant settlement to your account from any chain.",
      icon: <ShoppingCart className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Event Ticketing",
      description: "Accept crypto payments for tickets to your events. Instant settlement to your account from any chain with low fees.",
      icon: <Ticket className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "AI-Commerce",
      description: "Accept crypto payments for AI services. Instant settlement to your account from any chain for AI-powered products.",
      icon: <Laptop className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Payments for Enterprise",
      description: "Accept crypto payments at enterprise scale. Secure, reliable settlement to your account from any blockchain.",
      icon: <Building2 className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Digital Services + Freelancing",
      description: "Accept crypto payments for digital services. Instant settlement to your account for freelance work from any chain.",
      icon: <Laptop className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Subscriptions + Memberships",
      description: "Accept recurring crypto payments for subscriptions. Reliable settlement to your account for membership fees.",
      icon: <Repeat className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "In-App Purchases",
      description: "Accept crypto payments within your application. Instant settlement to your account for in-app purchases.",
      icon: <ShoppingBag className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Invoicing + Bill Splitting",
      description: "Accept crypto payments for invoices. Easily split bills and receive instant settlement to your account.",
      icon: <FileText className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "IRL Payments",
      description: "Accept crypto payments in real-life scenarios. Instant settlement to your account for in-person transactions.",
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
