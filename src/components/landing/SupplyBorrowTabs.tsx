
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
          {/* Left tab - Receiving Payments */}
          <div className="w-1/2 text-center">
            <button
              onClick={() => setActiveTab("supply")}
              className={`leading-loose cursor-pointer transition-colors text-base md:text-lg font-semibold whitespace-nowrap ${
                activeTab === "supply" ? "text-[#AB9FF2]" : "text-[#2A2A37]"
              }`}
            >
              Receiving Payments
            </button>
          </div>
          
          {/* Right tab - Making Payments */}
          <div className="w-1/2 text-center">
            <button
              onClick={() => setActiveTab("borrow")}
              className={`leading-loose cursor-pointer transition-colors text-base md:text-lg font-semibold whitespace-nowrap ${
                activeTab === "borrow" ? "text-[#AB9FF2]" : "text-[#2A2A37]"
              }`}
            >
              Making Payments
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
          <div className="text-[#AB9FF2] text-sm md:text-base font-medium leading-6 text-left w-full md:w-1/2 pl-0">
            Always receive your preferred asset, while offering
            <br className="hidden md:block" /> universal payment options. Without high gas fees, 
            <br className="hidden md:block" /> slow settlement times or chargeback fraud.
          </div>
        )}
        {activeTab === "borrow" && (
          <div className="text-[#AB9FF2] text-sm md:text-base font-medium leading-6 text-right w-full md:w-1/2 ml-auto pr-0">
            Pay Your Way. No friction of different currencies, 
            <br className="hidden md:block" /> blockchains or wallets. Global payments made simple.
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplyBorrowTabs;
