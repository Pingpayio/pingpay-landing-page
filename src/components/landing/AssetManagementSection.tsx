
import React from "react";
import { LinkIcon, Code2, Repeat, CreditCard, Wallet, MessagesSquare, RefreshCw, ArrowUpDown } from "lucide-react";

const AssetManagementSection: React.FC = () => {
  const features = [
    {
      icon: <LinkIcon className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Links",
      description: "Launch a hosted checkout page for payments from a Ping Link, in a few clicks. Receive crypto payments online or in person from all chains; curated for your use cases."
    },
    {
      icon: <Code2 className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Checkout & Product Widgets",
      description: "Embed crypto payments for any use case, into any app or website with Ping's user-friendly, checkout and product widgets with minimal code required."
    },
    {
      icon: <Repeat className="h-10 w-10 text-[#AB9FF2]" />,
      title: "AI Automated Subscriptions",
      description: "Offer automated subscriptions/recurring payments without requiring users to pre-fund accounts or approve unlimited spending. Our AI agent will handle payments automatically."
    },
    {
      icon: <Code2 className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Intuitive APIs & SDKs",
      description: "We package our payment solutions into easy to use APIs and SDKs. Focus on your payment use cases, rather than the complexities of the infrastructure."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Pay With Card",
      description: "Accept traditional payments from non-crypto users with Ping. Receive the crypto you want to receive, while they pay with fiat. Powered by NEAR Intents."
    },
    {
      icon: <Wallet className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Account",
      description: "Removing the complexities of crypto payments through chain signatures and NEARs account model. Sign up with email and accept payments from any chain to your account."
    },
    {
      icon: <MessagesSquare className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping AI Payment Assistant",
      description: "The personal payment assisstant to seamlessly make and manage all of your crypto payments across web2 and web3; from Amazon to Uber to Crypto trading."
    },
    {
      icon: <ArrowUpDown className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Onramp",
      description: "Seamlessly Onramp fiat into any NEAR Intents supported currency such as USDC, Bitcoin, Near, Solana, Ethereum, XRP, Doge, Bera, Cash, Gnosis and Blackdragon."
    }
  ];

  return (
    <section id="asset-management" className="w-full py-16 md:py-24 px-4 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(45deg, 
                #AB9FF2 0%, #C4B5FD 25%, #DDD6FE 50%, #EDE9FE 75%, #F5F2FF 100%)`,
      backgroundSize: '400% 400%',
      animation: 'flowing-gradient 15s ease infinite'
    }}>
      <div className="max-w-[1080px] mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#000000]">The Easiest Tools for Crypto Payments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:bg-white/30 transition-all duration-300 border border-white/30 h-full flex flex-col"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-[#000000]">{feature.title}</h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetManagementSection;
