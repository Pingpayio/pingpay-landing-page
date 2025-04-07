
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, ShieldCheck, Wallet } from "lucide-react";

const AssetManagementSection: React.FC = () => {
  const features = [
    {
      icon: <Wallet className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Simplified Portfolio",
      description: "Easily manage your assets with an intuitive interface designed for both novice and experienced users."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Performance Tracking",
      description: "Monitor your investments with real-time analytics and comprehensive reporting tools."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#AB9FF2]" />,
      title: "Secure Infrastructure",
      description: "Built on robust blockchain technology to ensure the highest level of security for your assets."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#000000] mb-4">On-Chain Asset Management</h2>
          <p className="text-base md:text-xl text-[#4A4A4A] max-w-[700px] mx-auto">
            Comprehensive tools for managing your digital assets with confidence and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-[#EFEFEF] shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#000000]">{feature.title}</h3>
                <p className="text-[#4A4A4A] mb-4">{feature.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#AB9FF2] hover:text-[#9B87F5] font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button className="bg-[#AB9FF2] border border-[#AB9FF2] text-[#3D315E] font-medium px-6 py-3 rounded-[30px] hover:bg-[#9B87F5] hover:scale-105 transition-all duration-300">
            Explore Asset Management
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssetManagementSection;
