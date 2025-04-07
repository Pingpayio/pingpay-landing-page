
import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DiscoverSection from "@/components/landing/DiscoverSection";
import { MouseProvider } from "../context/MouseContext";

const Index: React.FC = () => {
  return (
    <MouseProvider>
      <div className="rounded-[0px_0px_0px_0px]">
        <Navbar />
        <main className="flex w-full flex-col items-center pt-[100px] max-md:max-w-full min-h-screen transition-all duration-300 ease-in-out bg-[#F5F2FF]">
          <div className="max-w-[1080px] w-full flex flex-col items-center">
            <Hero />
          </div>
          <DiscoverSection />
        </main>
      </div>
    </MouseProvider>
  );
};

export default Index;
