
import React, { useState } from "react";
import { motion } from "framer-motion";

type TabType = "supply" | "borrow";

const SupplyBorrowTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("supply");

  return (
    <div className="bg-[#100713] flex w-full max-w-[665px] flex-col items-stretch mt-8 md:mt-[66px] py-[5px] rounded-lg px-4 md:px-0">
      <div className="self-center flex w-full max-w-[392px] items-stretch justify-between gap-5 text-base md:text-lg font-semibold whitespace-nowrap">
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setActiveTab("supply")}
            className={`text-center leading-loose cursor-pointer transition-colors ${
              activeTab === "supply" ? "text-[#AB9FF2]" : "text-[#2A2A37]"
            }`}
          >
            Receiving Payments
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setActiveTab("borrow")}
            className={`text-center leading-loose cursor-pointer transition-colors ${
              activeTab === "borrow" ? "text-[#AB9FF2]" : "text-[#2A2A37]"
            }`}
          >
            Making Payments
          </button>
        </div>
      </div>
      <div className="bg-[#2A2A37] flex flex-col mt-3.5 w-full relative h-0.5">
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

      <div className="w-full flex mt-[25px]">
        {activeTab === "supply" && (
          <div className="text-[#AB9FF2] text-sm md:text-base font-medium leading-6 text-left w-full md:w-1/2 pl-0">
            Deposit your crypto assets to provide
            <br className="hidden md:block" /> liquidity and earn interest.
          </div>
        )}
        {activeTab === "borrow" && (
          <div className="text-[#AB9FF2] text-sm md:text-base font-medium leading-6 text-right w-full md:w-1/2 ml-auto pr-0">
            Borrow assets against your supplied collateral
            <br className="hidden md:block" /> with competitive interest rates.
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplyBorrowTabs;
