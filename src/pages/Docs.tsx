
import React from "react";
import Navbar from "@/components/landing/Navbar";

const Docs: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="flex w-full flex-col items-center pt-[100px] px-4 md:px-6 max-w-[1080px] mx-auto min-h-screen">
        <h1 className="text-[#AB9FF2] text-3xl md:text-4xl font-bold mb-8">Documentation</h1>
        <div className="prose prose-lg text-[#AB9FF2] max-w-full">
          <p>Documentation and guides will go here.</p>
        </div>
      </main>
    </div>
  );
};

export default Docs;
