
import React from "react";
import { ShoppingCart, Ticket, Repeat, Rocket, Building2, Laptop, ShoppingBag, FileText, CreditCard, Link, CreditCard as CardIcon, User, Bot, ArrowUpRight } from "lucide-react";
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
        <h3 className={`text-xl font-semibold ${textColor} mb-2 whitespace-normal break-words`}>{title}</h3>
        <p className="text-[#4A4A4A] text-sm pb-4 whitespace-normal break-words">{description}</p>
      </CardContent>
    </Card>
  );
};

const UseCasesSection: React.FC = () => {
  const useCases: UseCaseCardProps[] = [
    {
      title: "Ping Links",
      description: "Launch a hosted checkout page for digital/physical products from a Ping Link, in a few clicks. Accept crypto payments online or in person from all chains. Ping Links can be fully customised for specific community activations and rewarding your community.",
      icon: <Link className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Checkout & Product Widgets",
      description: "Embed crypto payments for any use case, into any app with Ping's user-friendly, checkout and product widgets with minimal code required.",
      icon: <ShoppingBag className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Automated Subscriptions",
      description: "Offer automated subscriptions/recurring payments without requiring users to pre-fund accounts or approve unlimited spending. Ping's Shade Agent will handle renewal payments automatically on the user's behalf.",
      icon: <Repeat className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Intuitive, Robust, and User-friendly APIs",
      description: "We package our payment solutions into easy to use APIs, to integrate into your platform. We empower teams to focus on their use cases, rather than the complexities of web3 payment infrastructure.",
      icon: <Rocket className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-indigo-50"
    },
    {
      title: "Pay With Card",
      description: "Accept traditional payments from non-crypto users with Ping, while still receiving the crypto you want to receive - powered by NEAR Intents.",
      icon: <CardIcon className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Ping Account",
      description: "Removing the complexities of crypto payments through chain signatures and NEARs account model. Sign up with email and accept crypto payments from any chain to your ping account.",
      icon: <User className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Ping AI Payment Assistant",
      description: "The personal payment assisstant to seamlessly make and manage all of your crypto payments across web2 and web3; from Amazon to Uber to Crypto trading.",
      icon: <Bot className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Ping Onramp",
      description: "Seamlessly Onramp fiat to crypto on any NEAR Intents supported currency such as USDC, Bitcoin, Near, Solana, Ethereum, XRP, Doge, Bera, Cash, Gnosis and Blackdragon.",
      icon: <ArrowUpRight className="w-16 h-16 text-[#AB9FF2]" />,
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section 
      id="use-cases"
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
    </section>
  );
};

export default UseCasesSection;
