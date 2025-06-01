
import React from "react";
import { CheckCircle } from "lucide-react";

const WaitlistSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="rounded-full bg-[#E5DEFF] p-3 mb-4">
        <CheckCircle className="h-8 w-8 text-[#9B87F5]" />
      </div>
      <h3 className="text-xl font-medium mb-2">You're on the list!</h3>
      <p className="text-gray-300">
        Thanks! Your email was added.
      </p>
      <p className="text-gray-300 mt-2">
        We'll let you know as soon as we're live.
      </p>
    </div>
  );
};

export default WaitlistSuccess;
