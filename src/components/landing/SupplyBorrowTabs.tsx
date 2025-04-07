import React, { useState } from "react";

type TabType = "supply" | "borrow";

const SupplyBorrowTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("supply");

  return (
    <div className="bg-[rgba(7,19,17,1)] flex w-[665px] max-w-full flex-col items-stretch mt-[66px] py-[5px] rounded-lg max-md:mt-10">
      <div className="self-center flex w-[392px] max-w-full items-stretch gap-5 text-lg font-semibold whitespace-nowrap text-center justify-between">
        <button
          onClick={() => setActiveTab("supply")}
          className={`leading-loose cursor-pointer ${
            activeTab === "supply"
              ? "text-[rgba(202,234,229,1)]"
              : "text-[rgba(108,117,125,1)]"
          }`}
        >
          Supply
        </button>
        <button
          onClick={() => setActiveTab("borrow")}
          className={`leading-loose cursor-pointer ${
            activeTab === "borrow"
              ? "text-[rgba(202,234,229,1)]"
              : "text-[rgba(108,117,125,1)]"
          }`}
        >
          Borrow
        </button>
      </div>
      <div className="bg-[rgba(42,47,55,1)] flex flex-col mt-3.5 max-md:max-w-full max-md:pr-5">
        <div
          className={`bg-[rgba(202,234,229,1)] flex h-0.5 transition-all duration-300 ${
            activeTab === "supply" ? "w-[332px] ml-0" : "w-[332px] ml-[333px]"
          } shrink-0 max-w-full`}
        />
      </div>
      {activeTab === "supply" && (
        <div className="text-[rgba(202,234,229,1)] text-base font-medium leading-6 mt-[25px] text-center">
          Deposit your crypto assets to provide
          <br />
          liquidity and earn interest.
        </div>
      )}
      {activeTab === "borrow" && (
        <div className="text-[rgba(202,234,229,1)] text-base font-medium leading-6 mt-[25px] text-center">
          Borrow assets against your supplied collateral
          <br />
          with competitive interest rates.
        </div>
      )}
    </div>
  );
};

export default SupplyBorrowTabs;
