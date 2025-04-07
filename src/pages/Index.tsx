
import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DiscoverSection from "@/components/landing/DiscoverSection";

const Index: React.FC = () => {
  return (
    <div className="rounded-[0px_0px_0px_0px]">
      <Navbar />
      <main className="bg-[#F5F2FF] flex w-full flex-col items-center pt-[120px] max-md:max-w-full">
        <div className="max-w-[1080px] w-full flex flex-col items-center">
          <Hero />
        </div>
        <DiscoverSection />
      </main>
    </div>
  );
};

export default Index;
