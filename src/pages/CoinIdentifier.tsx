
import React from "react";
import { allTokens } from "@/data/tokenData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CoinIdentifier: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="outline" size="sm" asChild className="mr-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Coin Identifier</h1>
        </div>
        
        <p className="mb-8 text-gray-700">
          This page displays all coins with their IDs to help identify which ones need to be removed from the carousel.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {allTokens.map((token) => (
            <div 
              key={token.id}
              className="border rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="w-32 h-32 flex items-center justify-center mb-3 bg-gray-50 rounded-full overflow-hidden">
                <img 
                  src={token.imagePath} 
                  alt={token.id} 
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg text-purple-700">{token.id}</p>
                <p className="text-xs text-gray-500 break-all mt-1">{token.imagePath}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinIdentifier;
