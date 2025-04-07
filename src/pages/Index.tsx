import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DiscoverSection from "@/components/landing/DiscoverSection";

const Index: React.FC = () => {
  return (
    <div className="rounded-[0px_0px_0px_0px]">
      <main className="bg-[rgba(202,234,229,1)] flex w-full flex-col items-center pt-[37px] max-md:max-w-full">
        <Navbar />
        <Hero />
        <DiscoverSection />
      </main>
    </div>
  );
};

export default Index;
