
import React, { useState } from "react";
import { motion } from "framer-motion";

type TabType = "supply" | "borrow";

const SupplyBorrowTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("supply");

  return (
    <div className="bg-[#100713] flex w-full max-w-[665px] flex-col items-stretch mt-8 md:mt-[66px] py-[5px] rounded-lg px-4 md:px-0">
      <div className="relative w-full">
        {/* Tab buttons container */}
        <div className="flex w-full">
          {/* Left tab - Ping Receiving */}
          <div className="w-1/2 text-center">
            <button
              onClick={() => setActiveTab("supply")}
              className={`leading-loose cursor-pointer transition-colors text-base md:text-lg font-semibold whitespace-nowrap ${
                activeTab === "supply" ? "text-[#AB9FF2]" : "text-[#2A2A37]"
              }`}
            >
              Ping Receiving
            </button>
          </div>
          
          {/* Right tab - Ping Payments */}
          <div className="w-1/2 text-center">
            <button
              onClick={() => setActiveTab("borrow")}
              className={`leading-loose cursor-pointer transition-colors text-base md:text-lg font-semibold whitespace-nowrap ${
                activeTab === "borrow" ? "text-[#AB9FF2]" : "text-[#2A2A37]"
              }`}
            >
              Ping Payments
            </button>
          </div>
        </div>
        
        {/* Indicator bar */}
        <div className="bg-[#2A2A37] mt-3.5 w-full h-0.5 relative">
          <motion.div
            className="bg-[#AB9FF2] absolute h-full"
            initial={{ width: "50%", left: activeTab === "supply" ? "0%" : "50%" }}
            animate={{ 
              width: "50%", 
              left: activeTab === "supply" ? "0%" : "50%" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      <div className="w-full flex mt-[25px]">
        {activeTab === "supply" && (
          <div className="text-[#AB9FF2] text-sm md:text-base font-medium leading-6 text-left w-full md:w-1/2 pl-0 whitespace-normal">
            Always receive your preferred asset. Accept universal crypto payments with zero custody, instant peer-to-peer Ping transfers, and drastically lower fees.
          </div>
        )}
        {activeTab === "borrow" && (
          <div className="text-[#AB9FF2] text-sm md:text-base font-medium leading-6 text-right w-full md:w-1/2 ml-auto pr-0 whitespace-normal">
            Ping Your Way. Removing the complexity and friction of different currencies, blockchains or wallets. Global payments made simple with the power of Ping.
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplyBorrowTabs;
