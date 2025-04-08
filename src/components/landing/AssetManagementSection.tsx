import React from "react";
import { LinkIcon, Code2, Repeat, CreditCard, Wallet, MessagesSquare, RefreshCw, ArrowUpDown } from "lucide-react";

const AssetManagementSection: React.FC = () => {
  const features = [
    {
      icon: <LinkIcon className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Links",
      description: "Launch a hosted checkout page for digital/physical products from a Ping Link, in a few clicks. Accept crypto payments online or in person from all chains. Links are fully customisable for many use cases."
    },
    {
      icon: <Code2 className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Checkout & Product Widgets",
      description: "Embed crypto payments for any use case, into any app with Ping's user-friendly, checkout and product widgets with minimal code required."
    },
    {
      icon: <Repeat className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Automated Subscriptions",
      description: "Offer automated subscriptions/recurring payments without requiring users to pre-fund accounts or approve unlimited spending. Ping's Shade Agent will handle payments automatically."
    },
    {
      icon: <Code2 className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Intuitive, Robust, and User-friendly APIs",
      description: "We package our payment solutions into easy to use APIs, to integrate into your platform. We empower teams to focus on their use cases, rather than the complexities of web3 payment infrastructure."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Pay With Card",
      description: "Accept traditional payments from non-crypto users with Ping, while still receiving the crypto you want to receive - powered by NEAR Intents."
    },
    {
      icon: <Wallet className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Account",
      description: "Removing the complexities of crypto payments through chain signatures and NEARs account model. Sign up with email and accept crypto payments from any chain to your ping account."
    },
    {
      icon: <MessagesSquare className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping AI Payment Assistant",
      description: "The personal payment assisstant to seamlessly make and manage all of your crypto payments across web2 and web3; from Amazon to Uber to Crypto trading."
    },
    {
      icon: <ArrowUpDown className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Ping Onramp",
      description: "Seamlessly Onramp fiat to crypto on any NEAR Intents supported currency such as USDC, Bitcoin, Near, Solana, Ethereum, XRP, Doge, Bera, Cash, Gnosis and Blackdragon."
    }
  ];

  return (
    <section id="asset-management" className="w-full py-16 md:py-24 px-4" style={{
      background: `linear-gradient(45deg, 
                #AB9FF2 0%, #C4B5FD 25%, #DDD6FE 50%, #EDE9FE 75%, #F5F2FF 100%)`,
      backgroundSize: '400% 400%',
      animation: 'flowing-gradient 15s ease infinite'
    }}>
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#000000] mb-4">Ping Payment Solutions</h2>
          <p className="text-base md:text-xl text-[#4A4A4A] max-w-[700px] mx-auto">
            Comprehensive tools for managing crypto payments with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-8 md:pb-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#000000]">{feature.title}</h3>
                  <p className="text-[#4A4A4A]">{feature.description}</p>
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
