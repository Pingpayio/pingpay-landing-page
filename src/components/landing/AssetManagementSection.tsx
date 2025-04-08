
import React from "react";
import { ArrowDown, ArrowUp, Building, RefreshCw, Shield, Wallet } from "lucide-react";

const AssetManagementSection: React.FC = () => {
  const features = [
    {
      icon: <Building className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Lend & Borrow",
      description: "Provide liquidity or access capital while earning competitive interest."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Liquid Vaults",
      description: "Automated yield strategies for steady, predictable growth and easy withdrawals."
    },
    {
      icon: <ArrowUp className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Leveraged Positions",
      description: "Maximize potential returns by continuously reinvesting borrowed assets into new assets."
    },
    {
      icon: <Shield className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Isolated Markets",
      description: "Manage risk by using isolated markets and limit your exposure to only certain assets."
    },
    {
      icon: <Wallet className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Smart Vaults",
      description: "Customizable automation for complex strategies with secure on-chain execution."
    },
    {
      icon: <ArrowDown className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Risk Management",
      description: "Advanced tools to monitor your positions and automatically adjust based on market conditions."
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
          <h2 className="text-2xl md:text-4xl font-bold text-[#000000] mb-4">On-Chain Asset Management.</h2>
          <p className="text-base md:text-xl text-[#4A4A4A] max-w-[700px] mx-auto">
            Comprehensive tools for managing your digital assets with confidence
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
