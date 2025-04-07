
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TabType = "supply" | "borrow";

const SupplyBorrowTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("supply");

  return (
    <div className="bg-[rgba(7,19,17,1)] flex w-full max-w-[665px] flex-col items-stretch mt-10 md:mt-[66px] py-[5px] rounded-lg px-4 md:px-0">
      <div className="self-center flex w-full max-w-[392px] items-stretch gap-5 text-base md:text-lg font-semibold whitespace-nowrap text-center justify-between">
        <button
          onClick={() => setActiveTab("supply")}
          className={`leading-loose cursor-pointer transition-colors ${
            activeTab === "supply"
              ? "text-[rgba(202,234,229,1)]"
              : "text-[rgba(108,117,125,1)]"
          }`}
        >
          Supply
        </button>
        <button
          onClick={() => setActiveTab("borrow")}
          className={`leading-loose cursor-pointer transition-colors ${
            activeTab === "borrow"
              ? "text-[rgba(202,234,229,1)]"
              : "text-[rgba(108,117,125,1)]"
          }`}
        >
          Borrow
        </button>
      </div>
      <div className="bg-[rgba(42,47,55,1)] flex flex-col mt-3.5 w-full relative h-0.5">
        <motion.div
          className="bg-[rgba(202,234,229,1)] absolute h-full"
          initial={{ width: "50%", left: activeTab === "supply" ? "0%" : "50%" }}
          animate={{ 
            width: "50%", 
            left: activeTab === "supply" ? "0%" : "50%" 
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {activeTab === "supply" && (
        <div className="text-[rgba(202,234,229,1)] text-sm md:text-base font-medium leading-6 mt-[25px] text-left px-8 md:px-12">
          Deposit your crypto assets to provide
          <br />
          liquidity and earn interest.
        </div>
      )}
      {activeTab === "borrow" && (
        <div className="text-[rgba(202,234,229,1)] text-sm md:text-base font-medium leading-6 mt-[25px] text-right px-8 md:px-12">
          Borrow assets against your supplied collateral
          <br />
          with competitive interest rates.
        </div>
      )}
    </div>
  );
};

export default SupplyBorrowTabs;
